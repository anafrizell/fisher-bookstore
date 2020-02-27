import React from "react";
import { CardColumns } from "react-bootstrap";
import {AuthorCard} from "./AuthorCard.js";

export function AuthorDisplay(props){
    return(
        <div className="display">
            <h3>Authors</h3>
            <CardColumns>
            {props.authors.map(a=>(
                <AuthorCard authors={a} key={a.id} />
            ))}
            </CardColumns>
        </div>
    );
}