import React, { Component } from 'react';
import './App.css';
import TextBox from './TextBox.js'
import Tab from './Tab.js'
import { connect } from 'react-redux'
import { addItem } from './actions/index.js'
import editIcon from './edit-icon.svg'
import clear from './clear-icon.svg'
import trash from './trashIcon.svg'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      items:[],
      editedValue:false
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

      if(inputValue.length && event.nativeEvent.keyCode === 13){
        // event.preventDefault();
        items.push(inputValue);
        this.setState({items, inputValue:''})
      }
    }



  render() {

    const listValues= this.state.items;
    const edit = !this.state.editedValue;
    let dataValue= '';
    let line = '';

  const handleCheckMarkChange=(indexCheck, event) => {
    const checkedValue = event.target.checked;
    // const checkVal = !this.state.checkedIndexValue;
    // this.setState({checkedIndexValue:checkVal})
    const newValue = listValues.map((data, index) =>{
      if(indexCheck === index) {
      line = checkedValue ? 'line-through' : '';
    }
    });
    this.setState({ listValues: newValue });
    console.log('checkedValue, index', checkedValue, indexCheck);

}

const handleEditChange=(indexEdit)=>{

  this.setState({editedValue:edit})
  dataValue = listValues.map((data, index) =>{
    if(indexEdit === index) {
      edit ? <input type="text" /> : {data}
  }
  });
  this.setState({ listValues: dataValue });

  console.log('Hello', indexEdit, edit)
}


    var listOfItems = listValues.map((data, index) => {
      console.log('line', line);
            return  <div>
                <div className="task-item" tabIndex="0">

                  <div className="cell">
                  <input type="checkbox" onClick={(event)=>{handleCheckMarkChange(index, event)}} />

                  </div>

                  <div className="cell">
                    <div className={`task-item__title ${line}`} tabIndex="0">
                       {dataValue}
                    </div>
                  </div>

                  <div className="cell margin">
                    <img id = "editID" src={editIcon} alt="edit-icon" className="task-item__button" onClick={()=>{handleEditChange(index)}}/>
                    <img id = "clearID" src={clear} alt="clear" className="task-item__button clear" />
                    <img id = "deleteID" src={trash} alt="delete-icon" className="task-item__button" />
                  </div>

                </div>
</div>



    })
    return (
      <div className="App">
          <h1 className="App-title">React Redux TODO</h1>
            <TextBox inputValue={this.state.inputValue} onInputChange={(event)=>{this.onInputChange(event)}} onEnter={(event)=>{this.onEnter(event)}}/>
          <Tab />
            <div className="task-list">
                {listOfItems}
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
