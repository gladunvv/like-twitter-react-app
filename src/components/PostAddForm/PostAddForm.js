import React from 'react';

import './PostAddForm.scss';
export const PostAddForm = ({onAdd}) => {
  return (
    <div className='bottom-panel d-flex'>
      <input
        type='text'
        placeholder='О чём вы думаете?'
        className='form-control new-post-label'
      ></input>
      <button type='submit' className='btn btn-outline-secondary'
      onClick={()=>{
        onAdd('Hello')
      }}>
        Добавить
      </button>
    </div>
  );
};
