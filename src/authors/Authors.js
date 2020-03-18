import React, {Component} from "react";
import {AuthorDisplay} from "./AuthorDisplay.js";
import "./Authors.css";

export default class Authors extends Component{
    constructor(props){
        super(props);
        this.state = {
           authors: [
               {
                   id: 1,
                   name: "Margaret Miller"
               },
               {
                   id: 2,
                   name: "Eric Evans"
               },
               {
                   id: 3,
                   name: "Nicole Forsgren"
               }
           ]
       };
    }
    render(){
    return(
        <div className="Authors">
            <div className="lander">
            <AuthorDisplay authors={this.state.authors} />
            </div>
        </div>
        );
    }
}

