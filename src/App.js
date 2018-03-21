import React, { Component } from 'react';
import {Header} from './header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <p ClassName="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
