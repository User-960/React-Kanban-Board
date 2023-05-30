import React from 'react'
import Column from './Column/Column';
import css from './Board.module.scss';

export default function Board() {
  return (
    <div className={css.board}>
      <Column />
    </div>
  )
};
