import React from 'react';

import './AppHeader.scss';

export const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className='app-header d-flex'>
      <h1>Vladislav Gladun</h1>
      <h2>
        {allPosts} записей, из них понравилось {liked}
      </h2>
    </div>
  );
};
