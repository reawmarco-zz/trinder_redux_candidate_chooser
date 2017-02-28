import React, { Component } from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render() {
    return (
          <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <h1 className="navbar-brand mb-0">Trinder</h1>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link" activeClassName="active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/approved" className="nav-link" activeClassName="active">Approved</Link>
                </li>
                <li className="nav-item">
                  <Link to="/rejected" className="nav-link" activeClassName="active">Rejected</Link>
                </li>
              </ul>
            </div>
          </nav>

    );
  }
}
export default Header;
