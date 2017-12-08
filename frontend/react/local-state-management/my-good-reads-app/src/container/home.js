import React, { Component } from 'react';
import { GoodRead } from '../models/good-read';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      reads: [
        {
          id: 1,
          title: 'Hello'
        },
        {
          id: 2,
          title: 'World'
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">{this.state.reads.map(this.renderEachRead)}</div>
    );
  }
  renderEachRead(read: GoodRead) {
    return (
      <div>
        <h1>{read.id}</h1>
        <p>{read.title}</p>
      </div>
    );
  }
}

export default Home;
