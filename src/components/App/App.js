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
    term: '',
    filter: 'all',
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

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <div className='app'>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className='search-panel d-flex'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
