import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import store from './store/store.js';
import Login from './components/Login.jsx'
import LoggedIn from './components/LoggedIn.jsx';
import NavSection from './components/NavSection.jsx'
import FindFood from './components/FindFood.jsx'



const App = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
)

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/logged-in/:user" component={LoggedIn}>
        <Route path="/findfood" component={FindFood} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
