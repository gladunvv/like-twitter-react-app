import React, { Component } from 'react';

import './PostAddForm.scss';
export class PostAddForm extends Component {
  state = {
    text: '',
  };
  onValueChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
        <input
          type='text'
          placeholder='О чём вы думаете?'
          className='form-control new-post-label'
          onChange={this.onValueChange}
          value={this.state.text}
        ></input>
        <button type='submit' className='btn btn-outline-secondary'>
          Добавить
        </button>
      </form>
    );
  }
}
