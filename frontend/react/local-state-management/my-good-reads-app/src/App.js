import React, { Component } from 'react';
import './App.css';
import Home from './container/home';
import NavBar from './components/nav-bar/nav-bar';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reads: []
    };
    this.markItem = this.markItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);

    // Backend URL
    this.baseURL = 'http://localhost:3000/api';
  }
  componentDidMount() {
    axios.get(`${this.baseURL}/index`).then(rsp => {
      this.setState({
        reads: rsp.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar readCounter={this.state.reads.filter(read => read.isRead).length}/>
        <Home
          reads={this.state.reads}
          onRead={this.markItem}
          onDelete={this.deleteItem}
          onEdit={this.editItem}
        />
      </div>
    );
  }
  deleteItem(id: number) {
    axios.delete(`${this.baseURL}/delete/${id}`).then(rsp => {
      const itemToDelete = this.state.reads.findIndex(read => read.id === id);
      this.state.reads.splice(itemToDelete, 1);
      this.setState({
        reads: this.state.reads
      });
    });
  }
  markItem(read: GoodRead, isRead: boolean) {
    console.log('Item marked as ', isRead);
  }
  editItem(id: number) {
    console.log('edit Item clicked', id);
  }
}

export default App;
