/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';

const TABLET_DEVICE_WIDTH = 1400;

export default function useIsTablet() {
  if (typeof window === `undefined`) return (<></>) as unknown as boolean;

  const [hasRan, setHasRan] = useState(false);

  const [width, setWidth] = useState(0);

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!hasRan) {
      setHasRan(true);
      onResize();
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [width]);

  return width <= TABLET_DEVICE_WIDTH;
}
