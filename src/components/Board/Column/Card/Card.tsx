import React from 'react';
import css from './Card.module.scss';

interface ICardProps {
  name: string
};

export default function Card({ name }: ICardProps) {
  return (
    <div className={css.card}>
      <span>{name}</span>
    </div>
  )
};
