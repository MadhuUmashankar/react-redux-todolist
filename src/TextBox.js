import React from 'react';
import './TextBox.css';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const TextBox =({dispatch, inputValue, onInputChange, onEnter})=> {
    return (
      <div>
        <input id="box1"
        className="task-form__input"
        type="text"
        onChange ={(event)=>{onInputChange(event)}}
        onKeyPress={(event)=>{onEnter(event)}}
        placeholder="What do you want to do today?"
        autoComplete="off"
        autoFocus />
      </div>
    );

}

export default connect()(TextBox);

TextBox.ProtoTypes = {
    inputValue: PropTypes.string.isRequired,
    onInputChange:PropTypes.func
}
