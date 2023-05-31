import React from 'react'
import Column from './Column/Column';
import css from './Board.module.scss';
import { useTasks } from '../../hooks/tasks/useTasks';

export default function Board() {
  const { states } = useTasks();

  return (
    <div className={css.board}>
      {states.map((state) => <Column key={state.id} name={state.name} state={state.state} />)}
    </div>
  )
};
