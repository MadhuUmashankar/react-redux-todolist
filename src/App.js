import React, { Component } from 'react';
import './App.css';
import TextBox from './TextBox.js'
import Tab from './Tab.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">React Redux TODO</h1>
            <TextBox />
            <Tab />
      </div>
    );
  }
}

export default App;
