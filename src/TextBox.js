import React, { Component } from 'react';
import './TextBox.css'

class TextBox extends Component {
  render() {
    return (
      <div>
        <input id="box1" className="box-1" type="text" placeholder="Enter the text here to add it to the list" />
      </div>
    );
  }
}

export default TextBox;
