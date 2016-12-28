import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import store from './store/store.js';
import LoginContainer from './containers/LoginContainer';
import LoggedIn from './components/LoggedIn';
import NavSection from './components/NavSection';
import FindFood from './components/FindFood';
import { verify } from './route-utils';


const App = (props) => {
  return (
    <div>
      <NavSection/>
      {props.children}
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/signin" component={LoginContainer} />
      <Route path="/" component={App} onEnter={verify} >
        <Route path="findfood" component={FindFood} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
