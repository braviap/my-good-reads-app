// @flow

import React from 'react';
import { GoodRead } from '../models/good-read';
import Card from '../components/card/card';

function Home(props) {
  return (
    <div className="container">
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
