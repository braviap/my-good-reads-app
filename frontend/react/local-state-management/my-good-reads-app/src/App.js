import React, { Component } from 'react';
import './App.css';
import Home from './container/home';
import NavBar from './components/nav-bar/nav-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
