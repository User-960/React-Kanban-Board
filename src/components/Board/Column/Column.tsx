import React from 'react';
import Card from './Card/Card';
import css from './Column.module.scss';

export default function Column() {
  return (
    <div className={css.column}>
      <Card />
    </div>
  )
};
