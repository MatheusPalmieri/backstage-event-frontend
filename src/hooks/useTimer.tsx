import { useState, useEffect } from 'react';

interface TimerHookReturnType {
  timer: string;
  start: () => void;
  stop: () => void;
  restart: () => void;
}

export const useTimer = (
  initialTime: number,
  interval = 1000,
): TimerHookReturnType => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const restart = () => {
    setTime(initialTime);
    setIsRunning(true);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isRunning) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, interval);
    }

    return () => clearInterval(timerId);
  }, [isRunning, interval]);

  useEffect(() => {
    if (time <= 0) {
      stop();
    }
  }, [time]);

  const timer = `${Math.floor(time / 60)}:${pad(time % 60)}`;

  return { timer, start, stop, restart };

  function pad(num: number): string {
    return num.toString().padStart(2, '0');
  }
};
