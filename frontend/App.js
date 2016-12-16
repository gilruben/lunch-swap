import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import store from './store/store.js';
import Login from './components/Login.jsx'
import LoggedIn from './components/LoggedIn.jsx';
import NavSection from './components/NavSection.jsx'
import FindFood from './components/FindFood.jsx'


const App = (props) => {
  return (
    <div>
      <NavSection/>
      {props.children}
    </div>
  )
}

// const verify = (nextState,replace) => {
//   let info = {user: 'gilruben', password: 'nope'}
//   if(){
//
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/signin" component={Login} />
      <Route  path="/" component={App}>
        <Route path="findfood" component={FindFood} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
