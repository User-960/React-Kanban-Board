import React from 'react';
import { GlobalSvgSelector } from '../../../Shared/icons/GlobalSvgSelector';
import css from './Card.module.scss';

interface ICardProps {
  name: string
};

export default function Card({ name }: ICardProps) {
  return (
    <div className={css.card}>
      <span>{name}</span>
      <GlobalSvgSelector id='close' />
    </div>
  )
};
