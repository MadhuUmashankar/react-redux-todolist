import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    listItems:[]
  }

  handleCheckMarkChange=(indexCheck, event) => {
      const checkedValue = event.target.checked;

      const newValue = list.map((data, index) =>{
        if(indexCheck !== index) {
        lineValue = checkedValue ? 'line' : '';
        this.setState({line: lineValue})
      }
      });

      console.log('checkedValue, index, lineValue', checkedValue, indexCheck, lineValue);

  }

  render() {
      const list= this.state.listItems;
    return (
      <div>
        <input type="checkbox" onClick={(event)=>{this.handleCheckMarkChange(index, event)}} />
      </div>
    );
  }
}

export default App;
