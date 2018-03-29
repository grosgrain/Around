import React, {Component} from "react"
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import {Icon} from 'antd';
import PropTypes from 'prop-types';

export class Header extends Component{
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        logOutHandler: PropTypes.func.isRequired,
    }
    render() {
        return(
            <header className="App-header">
                <Link to="/login">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Around</h1>
                </Link>
                {
                    this.props.isLoggedIn ?
                    <a onClick={this.props.logOutHandler} className="logout">
                        <Icon type="logout" />{'  '}Log out
                    </a> : null
                }
            </header>
        );
    };
}