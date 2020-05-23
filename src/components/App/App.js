import React from 'react';
import { AppHeader } from '../AppHeader';
import { SearchPanel } from '../SearchPanel';
import { PostStatusFilter } from '../PostStatusFilter';
import { PostList } from '../PostList';
import { PostAddForm } from '../PostAddForm';

import './App.scss';

export const App = () => {
  const data = [
    { label: 'Going to learn React', important: true, id: 'adfa' },
    { label: 'Hello world!', important: false, id: 'afds' },
    { label: 'My new application', important: false, id: 'agff' },
  ];

  return (
    <div className='app'>
      <AppHeader />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};
