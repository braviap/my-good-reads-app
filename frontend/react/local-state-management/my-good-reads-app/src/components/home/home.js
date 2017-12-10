// @flow

import React from 'react';
import { GoodRead } from '../../models/good-read';
import Card from '../card/card';
import './home.css';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="container">
      <div className="create">
        <Link to="/new" className="btn btn-success">+New</Link>
      </div>
      <div className="row">
        {props.reads.map(renderEachRead.bind(null, props))}
      </div>
    </div>
  );
}
function renderEachRead(props, read: GoodRead) {
  return (
    <div className="col-sm-4" key={read.id}>
      <Card
        readItem={read}
        onRead={props.onRead}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
      />
    </div>
  );
}

export default Home;
