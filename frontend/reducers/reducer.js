import {LOG_IN} from '../actions/actions.js';

const defaultState = {user: 'gilruben', password: 'nope'}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case LOG_IN:
      console.log('Logging in');
      break;
    default:
      return state;
  }
}

export default reducer;
