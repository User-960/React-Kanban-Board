import React from 'react';
import css from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <span>Active task: 0</span>
      <span>Finished task: 0</span>
    </footer>
  )
}
