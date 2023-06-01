import React, { useEffect, useState } from 'react';
import { IWindowSize } from '../../models/models';
import { LayoutContext } from './layoutContext';

interface ILayoutProvaiderProps {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
};

export default function LayoutProvaider({ children }: ILayoutProvaiderProps) {
  const [windowSize, setWindowSize] = useState<IWindowSize>(
    { width: window.innerWidth, height: window.innerHeight }
  );

  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(
        { width: window.innerWidth, height: window.innerHeight }
      );
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setHeaderHeight(document.getElementsByTagName('header')[0].clientHeight)
    setFooterHeight(document.getElementsByTagName('footer')[0].clientHeight)
  }, []);

  const context = {
    mainContentHeight: windowSize
      ? windowSize.height - headerHeight - footerHeight
      // padding-top, padding-bottom, column header height
      - 24 - 24 - 48
      : 0
  };

  return <LayoutContext.Provider value={context}>{children}</LayoutContext.Provider>
}
