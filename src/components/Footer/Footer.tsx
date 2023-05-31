import React from 'react';
import { useTasks } from '../../hooks/tasks/useTasks';
import css from './Footer.module.scss';

export default function Footer() {
  const { getActiveTaskCount, getFinishedTaskCount } = useTasks();

  return (
    <footer className={css.footer}>
      <span>{'Active task: ' + getActiveTaskCount()}</span>
      <span>{'Finished task: ' + getFinishedTaskCount()}</span>
    </footer>
  )
}
