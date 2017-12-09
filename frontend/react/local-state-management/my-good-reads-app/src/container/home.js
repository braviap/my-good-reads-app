// @flow

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
    this.markItem = this.markItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.reads.map(this.renderEachRead.bind(this))}
        </div>
      </div>
    );
  }
  renderEachRead(read: GoodRead) {
    return (
      <div className="col-sm-4" key={read.id}>
        <Card
          readItem={read}
          onRead={this.markItem}
          onDelete={this.deleteItem}
          onEdit={this.editItem}
        />
      </div>
    );
  }

  deleteItem(id: number) {
    const itemToDelete = this.state.reads.findIndex(read => read.id === id);
    this.state.reads.splice(itemToDelete, 1);
    this.setState({
      reads: this.state.reads
    });
  }
  markItem(read: GoodRead, isRead: boolean) {
    console.log('Item marked as ', isRead);
  }
  editItem(id: number) {
    console.log('edit Item clicked', id);
  }
}

export default Home;
