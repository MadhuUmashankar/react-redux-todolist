import { combineReducers } from 'redux'


const tasksReducer = (state=[], action)=> {

  switch(action.type) {
    case 1: ADD_TASK:
    state=state.concat(action.payload);
    break;
    case 2: DELETE_TASK:
    state=state.slice();
    state.splice(action.payload,1);
    break;
    default: state;

  }
    return state;
},


reducers = combineReducers({
  tasks:tasksReducer
});

export default reducers;
