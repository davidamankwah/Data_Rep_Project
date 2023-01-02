//imports
import React from "react";
import Card from 'react-bootstrap/Card'; //import bootstrap card 
import axios from "axios"; //import to use axio
import {Link}  from "react-router-dom"; //import link from react router dom
import Button from 'react-bootstrap/Button' //import buttom for styling
import { BsFillTrashFill,BsPencil } from "react-icons/bs"; //import react bootstrap icons

export class PlanItem extends React.Component {
 // constructor
 constructor() {
    super();

    //binding delete event
    this.DeletePlan = this.DeletePlan.bind(this);
}

// delete plan function
//invoked when delete button clicked
DeletePlan(e) {
    e.preventDefault();

    //make a HTTP Request with Delete method and pass as part of the
    //url
    axios.delete('http://localhost:4000/api/plan/' + this.props.plan._id)
        .then((res) => {
            this.props.ReloadData(); //invoke methode to refresh 
        })
        .catch()
}

    render() {
        return (
            <div>
                {/* Card format */}
                <Card>

            {/* display todo plans */}
            <strong>  <Card.Header>{this.props.plan.task}</Card.Header>  </strong> 
                    <Card.Body>
            <p>{this.props.plan.description}</p>
            <p>{this.props.plan.priorty}</p>
            <p>{this.props.plan.day}</p>
            <p>{this.props.plan.time}</p>
            <Card.Footer>
           
            <Link to={'/editPlan/'+this.props.plan._id} className="btn btn primary"><BsPencil/> Edit</Link>  {/* link to edit a plan */}
            <Button variant="danger" onClick={this.DeletePlan}><BsFillTrashFill/> Delete</Button>  {/* button delete a plan */}
            </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}