import React, { Component } from 'react';
import './App.css';
import TextBox from './TextBox.js'
import Tab from './Tab.js'
import { connect } from 'react-redux'
// import {bindActionCreators } from 'redux'
// import { addTask } from './actions/index.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      items:[],
      editedValue:false,
      currentIndex:'',
      line:''
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
        items.push(inputValue);
        this.setState({items, inputValue:''})
        // this.props.addTask(inputValue);
      }
    }

handleEdit = (event) => {
  const items = [...this.state.items] ;
  items[this.state.currentIndex] = event.target.value
  this.setState({
    items
  })
}

edittingValue= (event) => {
  if(event.nativeEvent.keyCode === 13){
    const items = [...this.state.items] ;
    items[this.state.currentIndex] = event.target.value
    this.setState({
      items,
      editedValue : false
    })
  }
}


  render() {

    let lineValue = '';

    const handleCheckMarkChange=(indexCheck, event) => {
      const checkedValue = event.target.checked;
       lineValue = checkedValue ? 'line-strike' : '';
       this.setState({line:lineValue})

      }

    const handleEditChange=(indexEdit)=>{
      this.setState({editedValue:true, currentIndex: indexEdit})
    }

    const handleDelete = (indexDelete)=> {
      const items = [...this.state.items];
      items.splice(indexDelete, 1);
      this.setState({ items});
    }

    const handleClear=()=>{
      this.setState({editedValue:false});
    }

    const {currentIndex, editedValue, line, items} = this.state;

    var listOfItems = items.map((data, index) => {

            return  <div key={index}>
                <div id="task-item" className="task-item" tabIndex="0"  >

                    <div className="cell">
                    {
                      editedValue && (currentIndex === index) ?
                       <input type="text" className="text-item" autoComplete="off" autoFocus value={data} onChange={(event)=>{this.handleEdit(event)}} onKeyUp={(event)=>{this.edittingValue(event)}}/>
                       : <div className={`task-item__title ${line}`} tabIndex="0">
                       <input type="checkbox" onClick={(event)=>{handleCheckMarkChange(index, event)}} />
                         <label>{data}</label>
                      </div>

                    }

                    </div>

                    <div className="cell icon-edit">
                    {editedValue && (currentIndex === index) ?
                    <div>
                    <span onClick={(event)=>{ handleClear(event)}}><i className="material-icons">done</i></span>
                    <span onClick={(event)=>{ handleClear(event)}}><i className="material-icons">clear</i></span> </div>
                    :
                    <div>
                    <span  onClick={()=>{ handleEditChange(index)} }>
                    <i className="material-icons">mode_edit</i></span>

                    <span onClick={()=>{ handleDelete(index)} }><i className="material-icons">delete</i></span>
                    </div>
                  }
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addTask}, dispatch)
// }

function mapStateToProps(state){
return
    items: state.items
}
