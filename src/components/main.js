import React, {Component} from "react"
import {Register} from "./register";
import {Login} from "./login";
import { Switch, Route } from 'react-router';

export class Main extends Component{
    render() {
        return(
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        );
    };
}