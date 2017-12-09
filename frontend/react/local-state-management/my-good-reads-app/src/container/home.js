import React, { Component } from 'react';
import { GoodRead } from '../models/good-read';
import Card from '../components/card/card';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      reads: [
        {
          id: 1,
          title: 'Hello',
          description: 'Wonderful'
        },
        {
          id: 2,
          title: 'World',
          description: 'Super Awesome'
        },
        {
          id: 3,
          title: 'Hello',
          description: 'Wonderful'
        },
        {
          id: 4,
          title: 'World',
          description: 'Super Awesome'
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">{this.state.reads.map(this.renderEachRead)}</div>
      </div>
    );
  }
  renderEachRead(read: GoodRead) {
    return (
      <div className="col-sm-4" key={read.id}>
        <Card readItem={read} />
      </div>
    );
  }
}

export default Home;
