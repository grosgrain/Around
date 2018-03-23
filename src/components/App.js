import React, {Component} from 'react';
import {Header} from './header';
import {Main} from './main';
import '../styles/App.css';

class App extends Component {
    state = {
        isLoggedIn: false
    }

    logInHandler = () => {
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
