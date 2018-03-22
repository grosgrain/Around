import React, {Component} from "react"
import {Register} from "./register";
import {Login} from "./login";

export class Main extends Component{
    render() {
        return(
            <div className="main">
                <Login/>
            </div>
        );
    };
}