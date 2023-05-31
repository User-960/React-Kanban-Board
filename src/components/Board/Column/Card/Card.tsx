import React from 'react';
import { useTasks } from '../../../../hooks/tasks/useTasks';
import Button from '../../../Shared/buttons/Button';
import { GlobalSvgSelector } from '../../../Shared/icons/GlobalSvgSelector';
import css from './Card.module.scss';

interface ICardProps {
  id: number
  name: string
  onRemove: (id: number) => void
};

export default function Card({ id, name, onRemove }: ICardProps) {

  return (
    <div className={css.card}>
      <span>{name}</span>
      <Button className={css['button-remove']} onClick={(e) => {
        onRemove(id);
        e.stopPropagation();
      }}>
        <GlobalSvgSelector id='close' />
      </Button>
    </div>
  )
};
