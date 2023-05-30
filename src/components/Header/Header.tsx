import React from 'react';
import css from './Header.module.scss';

export default function Header() {
  return (
    <header className={css.header}>
      <h1>Kanban Board</h1>
    </header>
  )
};
