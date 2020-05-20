import React from 'react';

import './SearchPanel.scss';

export const SearchPanel = () => {
  return (
    <input
      className='form-control search-input'
      type='text'
      placeholder='Поиск по записям'
    />
  );
};
