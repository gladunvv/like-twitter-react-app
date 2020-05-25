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
      { label: 'Going to learn React', like: false, important: false, id: 1 },
      { label: 'Hello world!', like: false, important: false, id: 2 },
      { label: 'My new application', like: false, important: false, id: 3 },
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

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, newItem, ...after];

      return {
        data: newArr,
      };
    });
  };

  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, newItem, ...after];

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
    const { data } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;
    return (
      <div className='app'>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className='search-panel d-flex'>
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
