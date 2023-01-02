import React from "react";
import axios from "axios";

export class AddPlanner extends React.Component {

    constructor() {
        super();
        //binding events
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePlanTask = this.onChangePlanTask.bind(this);
        this.onChangePlanDescription = this.onChangePlanDescription.bind(this);
        this.onChangePlanPriorty = this.onChangePlanPriorty.bind(this);
        this.onChangePlanDay = this.onChangePlanDay.bind(this);
        this.onChangePlanTime = this.onChangePlanTime.bind(this);
        //states of plan
        this.state = {
            task: '',
            description: '',
            priorty: '',
            day: '',
            time: ''
        }
    }

    //function execute when button click
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.task},
        ${this.state.description},
        ${this.state.priorty},
        ${this.state.day},
        ${this.state.time}`);

        //define plan object
        const plan = {
            task: this.state.task,
            description: this.state.description,
            priorty: this.state.priorty,
            day: this.state.day,
            time: this.state.time
        }
        //a post request to the server. sending a plan object to the server
        axios.post('http://localhost:4000/api/plans', plan)
            .then()
            .catch();

        //setters
        this.setState({
            task: '',
            description: '',
            priorty: '',
            day: '',
            time: ''
        })
    }

    //add values to states
    onChangePlanTask(e) {
        this.setState({
            task: e.target.value
        })
    }
    onChangePlanDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangePlanPriorty(e) {
        this.setState({
            priorty: e.target.value
        })
    }

    onChangePlanDay(e) {
        this.setState({
            day: e.target.value
        })
    }

    onChangePlanTime(e) {
        this.setState({
            time: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Add all personal task</h3>

                <form onSubmit={this.handleSubmit}>
                    {/* add task name */}
                    <div className="form-group">
                        <label>Add Task Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.task}
                            onChange={this.onChangePlanTask}
                        />
                    </div>
                    {/* add description */}
                    <div className="form-group">
                        <label>Add Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangePlanDescription}
                        />
                    </div>

                    {/* add priorty */}
                    <div className="form-group">
                        <label>Add Priorty: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.priorty}
                            onChange={this.onChangePlanPriorty}
                        />
                    </div>

                    {/* add day */}
                    <div className="form-group">
                        <label>Add Day: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.day}
                            onChange={this.onChangePlanDay}
                        />
                    </div>

                    /{/* add time */}
                    <div className="form-group">
                        <label>Add Time: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.time}
                            onChange={this.onChangePlanTime}
                        />
                    </div>

                     {/* submit button to add plans*/}
                    <input type="submit" value="Add Planner" />
                </form>
            </div>
        );
    }
}