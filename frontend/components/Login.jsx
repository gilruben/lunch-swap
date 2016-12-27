import React from 'react';
import {loginAsync} from '../actions/login-actions.js';
import store from '../store/store.js';

const Login = React.createClass({
  getInitialState() {
    return {email: '', password: ''};
  },
  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(loginAsync(this.state));
  },
  handleChange(input, event) {
    if(input === 'email'){
      this.setState({email: event.target.value});
    } else if(input === 'pw'){
      this.setState({password: event.target.value});
    }
  },
  render() {
    return (
      <div id="login-background">
        <h1 id="title">Lunch Swap</h1>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input onChange={this.handleChange.bind(this, 'email')} className="login" type="text" placeholder="Email"/>
          </div>

          <div className="form-group">
            <input onChange={this.handleChange.bind(this, 'pw')} className="login" type="password" placeholder="Password"/>
          </div>

          <button id="login-button" type="submit" className="btn btn-primary">Log In</button>
        </form>
      </div>
    )
  }
})

export default Login;
