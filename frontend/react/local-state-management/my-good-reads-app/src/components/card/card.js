import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <a target="_blank" href="{{readItem.url}}">
            {props.readItem.title}
          </a>
        </h4>
        <div className="delete">
          <button
            onClick={() => props.onDelete(props.readItem.id)}
            className="btn btn-sm btn-danger"
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </div>
        <p className="card-text">{props.readItem.description}</p>
        <div className="operation">
          <button
            onClick={() => props.onRead(props.readItem, true)}
            className="btn btn-sm"
          >
            <i className={`fa ${(props.readItem.isRead ? 'fa-check-square-o' : 'fa-square-o')}`} aria-hidden="true" />
          </button>
          <button
            onClick={() => props.onEdit(props.readItem.id)}
            className="btn btn-sm"
          >
            <i className="fa fa-pencil-square-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
