import React, { Component } from 'react';
import { AppHeader } from '../AppHeader';
import { SearchPanel } from '../SearchPanel';
import { PostStatusFilter } from '../PostStatusFilter';
import { PostList } from '../PostList';
import { PostAddForm } from '../PostAddForm';

import './App.scss';

export class App extends Component {
  state = {
    data: [
      { label: 'Going to learn React', important: true, id: 1 },
      { label: 'Hello world!', important: false, id: 2 },
      { label: 'My new application', important: false, id: 3 },
    ],
  };

  maxId = 4;

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  };

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className='app'>
        <AppHeader />
        <div className='search-panel d-flex'>
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
