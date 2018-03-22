import React, {Component} from "react"
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export class Header extends Component{
    render() {
        return(
            <header className="App-header">
                <Link to="/login">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Around</h1>
                </Link>
            </header>
        );
    };
}