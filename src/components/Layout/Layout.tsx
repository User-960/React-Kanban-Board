import React from 'react';
import LayoutProvaider from '../../hooks/layout/layoutProvaider';
import { TaskProvaider } from '../../hooks/tasks/taskProvaider';
import css from './Layout.module.scss';

interface ILayoutProps {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
};

export default function Layout({ children }: ILayoutProps) {
  return (
    <TaskProvaider>
      <LayoutProvaider>
        <div className={css.layout}>
          {children}
        </div>
      </LayoutProvaider>
    </TaskProvaider>
  )
}
