import React, { Component } from 'react';
import './App.css';
import TextBox from './TextBox.js'
import Tab from './Tab.js'
import { connect } from 'react-redux'
import { addItem } from './actions/index.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      items:[]
    }
  }

  onInputChange(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  onEnter(event) {
     const {items} = this.state;
     const inputValue = this.state.inputValue.trim();

      if(inputValue.length && event.nativeEvent.keyCode == 13){
        items.push(inputValue);
        this.setState({
          items
        })
      }
    }


  render() {
    console.log('items', this.state.items);
    const listValues= this.state.items;
    var listOfItems= listValues.map((data, index)=>{
      return <li key={index} >{data}</li>
    })
    return (
      <div className="App">
          <h1 className="App-title">React Redux TODO</h1>
            <TextBox inputValue={this.state.inputValue} onInputChange={(event)=>{this.onInputChange(event)}} onEnter={(event)=>{this.onEnter(event)}}/>
          <Tab />
            <div className="task-list">
            <div className="task-item">
              {listOfItems}
            </div>

            </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

function mapStateToProps(state){
return
    inputValue: state.items
}
