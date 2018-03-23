import React, {Component} from 'react';
import {Header} from './header';
import {Main} from './main';
import '../styles/App.css';
import {TOKEN_KEY} from '../constants'

class App extends Component {
    state = {
        isLoggedIn: !!localStorage.getItem(TOKEN_KEY)
    }

    logInHandler = (response) => {
        localStorage.setItem(TOKEN_KEY, response);
        this.setState({isLoggedIn: true});
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Main isLoggedIn={this.state.isLoggedIn} logInHandler={this.logInHandler}/>
            </div>
        );
    }
}

export default App;
