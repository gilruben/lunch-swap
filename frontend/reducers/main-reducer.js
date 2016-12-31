import {combineReducers} from 'redux';
import authReducer from './auth-reducer';
import findFoodReducer from './findfood-reducer';


export const mainReducer = combineReducers({
  login: authReducer,
  findFood: findFoodReducer
})
