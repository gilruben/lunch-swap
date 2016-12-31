import {LOG_IN} from '../actions/login-actions';
import {LOG_OUT} from '../actions/logout-actions';

const defaultState = {email: '', loginMsg: ''}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case LOG_IN:
      let logInState = Object.assign({}, state, action.payload)
      console.log(logInState)
      return logInState
    case LOG_OUT:
      let logOutState = {email: '', loginMsg: ''};
      console.log(logOutState)
      return logOutState
    default:
      return state;
  }
}

export default reducer;
