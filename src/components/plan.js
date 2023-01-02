//imports
import React from "react";
import { PlanItem } from "./planItem"; //plan item component

export class Plan extends React.Component {
    render(){
        // get plan 
        //refresh data
        return this.props.plan.map(
            (plan)=>{
                return <PlanItem plan={plan} key={plan._id} ReloadData={this.props.ReloadData}></PlanItem>
            }
        );
    }
   
}