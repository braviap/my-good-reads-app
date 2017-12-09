import React, { Component } from 'react';
import './nav-bar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar-content">
        <a className="navbar-brand" href="#">
          MyGoodReads
        </a>
        <ul className="nav">
          <li className="nav-item">
            Read
            <span className="badge badge-primary badge-pill">4</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
