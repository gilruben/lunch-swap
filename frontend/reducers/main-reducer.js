import {combineReducers} from 'redux';
import authReducer from './auth-reducer';


export const mainReducer = combineReducers({
  login: authReducer
})
