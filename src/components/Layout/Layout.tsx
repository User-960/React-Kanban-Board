import React from 'react';
import { TaskProvaider } from '../../hooks/tasks/taskProvaider';
import css from './Layout.module.scss';

interface ILayoutProps {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
};

export default function Layout({ children }: ILayoutProps) {
  return (
    <TaskProvaider>
      <div className={css.layout}>
        {children}
      </div>
    </TaskProvaider>
  )
}
