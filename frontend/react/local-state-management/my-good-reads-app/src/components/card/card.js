import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            <a target="_blank" href="{{readItem.url}}">
              {this.props.readItem.title}
            </a>
          </h4>
          <div class="delete">
            <button
              onClick="deleteItem(readItem.id)"
              class="btn btn-sm btn-danger"
            >
              <i class="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
          <p class="card-text">{this.props.readItem.description}</p>
          <div class="operation">
            <button
              onClick="toggleItemRead(readItem.id, !readItem.isRead)"
              class="btn btn-sm"
            >
              <i class="fa fa-square-o" aria-hidden="true" />
            </button>
            <button onClick="editItem(readItem)" class="btn btn-sm">
              <i class="fa fa-pencil-square-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
