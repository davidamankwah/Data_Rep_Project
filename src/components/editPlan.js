//imports
import React from 'react';
import { useParams } from 'react-router-dom'; //import react router dom
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function EditPlan(props) {
    // The useParams hook returns an object of key/value pairs of
    
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [priorty, setPriorty] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();

    //useEffect Hook is similar componentDidMount
    useEffect( ()=> {
    //axios is a promised based web client
    //make a HTTP Request with GET method and pass as part of the
    //url.
    //reads record to database
    axios.get('http://localhost:4000/api/plan/' + id)
    .then( (response) =>{
        // Assign Response data to the arrays using useState.
        //update variables
        setTask(response.data.task);
        setDescription(response.data.description);
        setPriorty(response.data.priorty);
        setDay(response.data.day);
        setTime(response.data.time);
    } )
    .catch(function(error) {
        console.log(error);
    })
    }, []);

    //execute event when submit
    const handleSubmit = (event) => {
        event.preventDefault();

        //define new plan object 
        const newPlan = {
            id:id,   
            task:task,
            description:description,
            priorty:priorty,
            day:day,
            time:time
        };
        //Sends you to the plan you want edited
        //pass up edited plans
        axios.put('http://localhost:4000/api/plan/' + id, newPlan)
        .then((res) => {
        console.log(res.data); //output plan data to console
        navigate('/listplanner'); //direct listplanner page
        });
    }

    return(
        <div>
            {/* call handleSubmit event when clicking edit plan */}
            <form onSubmit={handleSubmit}>  
              {/* edit task name */}
            <div className="form-group">
                <label>Update Task Name: </label>
                <input type="text" className="form-control"
                   value={task}
                   onChange={(e) => setTask(e.target.value)}
                />
            </div>

            {/* eidt description */}
            <div className="form-group">
                <label>Update Description: </label>
                <input type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>

               {/* eidt priorty */}
               <div className="form-group">
                <label>Update Priorty: </label>
                <input type="text"
                className="form-control"
                value={priorty}
                onChange={(e) => setPriorty(e.target.value)}
                />
            </div>

               {/* eidt day */}
               <div className="form-group">
                <label>Update Day: </label>
                <input type="text"
                className="form-control"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            </div>

            {/* edit time */}
            <div className="form-group">
                <label>Update Time: </label>
                <input type="text"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                />
            </div>

            <div className="form-group">
              {/* submit button to edit plans information   */}
            <input type="submit" value="Edit Plans" className="btn btn-primary"/>
            </div>
            </form>
        </div>
    )
}

