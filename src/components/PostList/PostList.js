import React from 'react';
import { PostListItem } from '../PostListItem';

import './PostList.scss';

export const PostList = () => {
  return (
    <ul className='app-list list-group'>
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  );
};
