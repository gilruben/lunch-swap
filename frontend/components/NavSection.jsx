import React from 'react';
import {Link} from 'react-router';


var NavSection = (props) => (
  <div id="nav-section">
    <div id="header">
      <h2 id="header-title">Lunch Swap</h2>
    </div>

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="findfood">Find Food <i className="fa fa-cutlery" aria-hidden="true"></i></Link></li>
          <li><Link to="/">About</Link></li>
          <li id="account-tab"><Link to="/">Account</Link></li>
          <li id="logout" onClick={props.logout}>Log Out</li>
        </ul>
      </div>
    </nav>
  </div>
)



export default NavSection;
