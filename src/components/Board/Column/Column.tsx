import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import Card from './Card/Card';
import css from './Column.module.scss';

interface IColumnProps {
  name: string
  state: string
};

export default function Column({ name }: IColumnProps) {
  return (
    <div className={css.column}>
      <div className={css.header}>{name}</div>
      <div className={css.wrapper}>
        <div className={css.body}>
          <Scrollbars autoHeight autoHeightMax={500}>
            <Card name={'name'} />
            <Card name={'name'} />
            <Card name={'name'} />
          </Scrollbars>
        </div>
        <div className={css.footer}>
          <button>+</button>
          Add card
        </div>
      </div>
    </div>
  )
};
