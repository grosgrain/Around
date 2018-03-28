import React, {Component} from "react"
import {Register} from "./register";
import {Login} from "./login";
import { Switch, Route, Redirect } from 'react-router';
import {Home} from './home';


export class Main extends Component{
    getRoot = () => {
        return <Redirect to="/login"/>;
    }
    getLogin = () => {
        return (this.props.isLoggedIn ? <Redirect to="/home"/> : <Login logInHandler={this.props.logInHandler}/>);
    }
    getHome = () => {
        return (this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>);
    }
    render() {
        return(
            <div className="main">
                <Switch>
                    <Route exact path="/" render={this.getRoot}/>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" render={this.getHome}/>
                    <Route render={this.getRoot}/>
                </Switch>
            </div>
        );
    };
}