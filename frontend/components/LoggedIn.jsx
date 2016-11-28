import React from 'react';
import NavSection from './NavSection.jsx';

const LoggedIn = (props) => (
  <div>
    <NavSection/>
    {props.children}
  </div>
)

export default LoggedIn;
