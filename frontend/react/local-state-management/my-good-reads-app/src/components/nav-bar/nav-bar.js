import React from 'react';
import './nav-bar.css';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="navbar-content"
    >
      <Link to="/" className="navbar-brand">
        MyGoodReads
      </Link>
      <span>React - Local State Management</span>
      <ul className="nav">
        <li className="nav-item">
          Read
          <span className="badge badge-primary badge-pill">{props.readCounter}</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
