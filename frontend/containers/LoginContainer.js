import React from 'react';
import {connect }from 'react-redux';
import Login from '../components/Login';

const mapStateToProps = (state) => {
  return { loginMsg: state.login.loginMsg }
}

export default connect(mapStateToProps)(Login);
