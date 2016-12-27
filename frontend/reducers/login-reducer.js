import {LOG_IN} from '../actions/login-actions.js';

const defaultState = {email: '', loginMsg: ''}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case LOG_IN:
      let newState = Object.assign({}, state, action.payload)
      console.log(newState)
      return newState
    default:
      return state;
  }
}

export default reducer;
