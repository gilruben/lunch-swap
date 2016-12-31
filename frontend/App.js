import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import store from './store/store.js';
import LoginContainer from './containers/LoginContainer';
import LoggedIn from './components/LoggedIn';
import NavSectionContainer from './containers/NavSectionContainer';
import FindFoodContainer from './containers/FindFoodContainer';
import { verify, verifySignedIn } from './route-utils';


const App = (props) => {
  return (
    <div>
      <NavSectionContainer/>
      {props.children}
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/signin" component={LoginContainer} onEnter={verifySignedIn} />
      <Route path="/" component={App} onEnter={verify} >
        <Route path="findfood" component={FindFoodContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
