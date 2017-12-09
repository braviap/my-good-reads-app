import React, { Component } from 'react';
import './nav-bar.css';

function NavBar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="navbar-content"
    >
      <a className="navbar-brand" href="#">
        MyGoodReads
      </a>
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
