import React from 'react';
import Card from './Card/Card';
import css from './Column.module.scss';

interface IColumnProps {
  name: string
};

export default function Column({ name }: IColumnProps) {
  return (
    <div className={css.column}>
      <div className={css.header}>{name}</div>
      <div className={css.wrapper}>
        <div className={css.body}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
};
