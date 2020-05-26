import React, { Component } from 'react';

import './PostStatusFilter.scss';

export class PostStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'Все' },
    { name: 'like', label: 'Понравилось' },
  ];
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const classN = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          key={name}
          type='button'
          className={`btn ${classN}`}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });
    return <div className='btn-group'>{buttons}</div>;
  }
}
