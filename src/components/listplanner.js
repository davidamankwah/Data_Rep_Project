import React from "react";
import axios from "axios";
import { Plan } from "./plan"; //plan component

export class ListPlanner extends React.Component {

    constructor(){
        super()
        this.ReloadData = this.ReloadData.bind(this); //bind event
    }

    componentDidMount() {
        //read JSON data from the Node/Express server
        axios.get('http://localhost:4000/api/plans')
            .then((response) => {
                this.setState({ plans: response.data }) //set state of plan data
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //a method to refresh data from the server
    ReloadData() {
        axios.get('http://localhost:4000/api/plans')
            .then((response) => {
                this.setState({ plans: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //array with plan details 
    state = {
        plans: []
    }

    render() {
        return (
            <div>
                <h3>View to do list!</h3>

                 {/* display all plan states */}
                <Plan plan={this.state.plans} ReloadData={this.ReloadData}></Plan>
            </div>
        );
    }
}