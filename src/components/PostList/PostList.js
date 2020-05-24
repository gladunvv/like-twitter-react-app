import React from 'react';
import { PostListItem } from '../PostListItem';

import './PostList.scss';

export const PostList = ({ posts, onDelete }) => {
  console.log('posts :>> ', posts);
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className='list-group-item'>
        <PostListItem 
        {...itemProps}
        onDelete={() => onDelete(id)}/>
      </li>
    );
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};
