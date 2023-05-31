import React from 'react';
import css from './Button.module.scss';

interface IButtonProps {
  className: string
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export default function Button({ className, children, onClick }: IButtonProps) {
  return (
    <button className={`${className ?? ''} ${css.button}`} onClick={onClick}>
      {children}
    </button>
  )
};
