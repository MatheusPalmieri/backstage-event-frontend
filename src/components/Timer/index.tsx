'use client';

import { useTimer } from '@/hooks/useTimer';
import { useEffect, useLayoutEffect, useRef } from 'react';

interface Props {
  time: number; // seconds | example: 120 = 2 minutes
  text?: string;
  className?: string;
  action?: () => void;
}

export const Timer = ({ time, text, className, action }: Props) => {
  const { timer, start } = useTimer(time);
  const isInitialMount = useRef(true);

  useLayoutEffect(() => {
    if (isInitialMount.current) {
      start();
      isInitialMount.current = false;
    }
  }, [start]);

  useEffect(() => {
    if (action) {
      if (timer === '0:00') {
        action();
      }
    }
  }, [timer]);

  return (
    <p
      className={`font-bold tracking-wide text-xl text-secondary-500 ${className}`}
    >
      <span className='text-secondary-400'>
        {text}: {timer}
      </span>
    </p>
  );
};
