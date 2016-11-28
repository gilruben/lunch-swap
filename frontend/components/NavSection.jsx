import React from 'react';
import {Link} from 'react-router';

var NavSection = () => (
  <div id="nav-section">
      <div id="header">
        <h2 id="header-title">Lunch Swap</h2>
      </div>

      <nav className="navbar navbar-default">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to="findfood">Find Food <i className="fa fa-cutlery" aria-hidden="true"></i></Link></li>
              <li><a href="#">About</a></li>
              <li id="account-tab"><a href="#">Account</a></li>
            </ul>
        </div>
      </nav>
  </div>
)

export default NavSection;
