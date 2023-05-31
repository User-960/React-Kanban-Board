import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Shared/buttons/Button';
import { GlobalSvgSelector } from '../../../Shared/icons/GlobalSvgSelector';
import css from './Card.module.scss';

interface ICardProps {
  id: number
  name: string
  onRemove: (id: number) => void
};

export default function Card({ id, name, onRemove }: ICardProps) {

  const navigate = useNavigate();

  return (
    <div className={css.card} onClick={() => navigate(`/tasks/${id}`)}>
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
