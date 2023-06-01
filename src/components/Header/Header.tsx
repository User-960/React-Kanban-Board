import React from 'react';
import css from './Header.module.scss';
import Profile from './Profile/Profile';

export default function Header() {
  return (
    <header className={css.header}>
      <h1>Kanban Board</h1>
      <Profile />
    </header>
  )
};
