import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import Books from "./books/Books";
import Authors from "./authors/Authors";

export default function Routes(){
    return(
        <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/" component={Books} />
            <Route path = "/" component ={Authors} />
        </Switch>
    );
}