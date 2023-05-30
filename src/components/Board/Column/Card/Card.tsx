import React from 'react';
import Button from '../../../Shared/buttons/Button';
import { GlobalSvgSelector } from '../../../Shared/icons/GlobalSvgSelector';
import css from './Card.module.scss';

interface ICardProps {
  name: string
};

export default function Card({ name }: ICardProps) {
  return (
    <div className={css.card}>
      <span>{name}</span>
      <Button className={css['button-remove']} onClick={() => console.log('button')}>
        <GlobalSvgSelector id='close' />
      </Button>
    </div>
  )
};
