import { createStore, compose } from 'redux';
import handleTransitions from 'redux-history-transitions';
import reducer from '../reducers/reducer.js';
import {hashHistory} from 'react-router';


const enhancer = handleTransitions(hashHistory);
const store = createStore(reducer, {user: 'gilruben', password: 'nope'},  enhancer);

export default store;
