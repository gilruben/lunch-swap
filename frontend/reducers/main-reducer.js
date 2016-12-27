import {combineReducers} from 'redux';
import loginReducer from './login-reducer';


export const mainReducer = combineReducers({
  login: loginReducer
})
