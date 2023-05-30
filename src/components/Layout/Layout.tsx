import React from 'react';
import css from './Layout.module.scss';

interface ILayoutProps {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
};

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={css.layout}>
      {children}
    </div>
  )
}
