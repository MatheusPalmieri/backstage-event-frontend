'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import Confetti from 'react-confetti';

export default function Page() {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 100,
    height: 100,
  });
  const [confetti, setConfetti] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />

      <div className='flex flex-col items-center gap-10 p-4'>
        <h1 className='text-2xl font-bold tracking-wider'>Comprovante</h1>

        <div className='w-full'>
          <Confetti
            width={windowSize.width ?? 200}
            height={windowSize.height ?? 200}
            numberOfPieces={100}
            tweenDuration={2000}
            recycle={confetti}
          />
        </div>
      </div>
    </div>
  );
}
