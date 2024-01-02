'use client';

import { ButtonCounter } from '@/components/Buttons/Counter';
import { IconCircleMinus, IconCirclePlus } from '@tabler/icons-react';
import { useState } from 'react';

interface CounterProps {
  maxPerOrder: number;
}

export const Counter = ({ maxPerOrder }: CounterProps) => {
  const [total, setTotal] = useState<number>(0);

  const someQuantity = (action: 'remove' | 'add') => {
    if (action === 'remove') {
      if (total <= 0) {
        return null;
      } else if (total > 0) {
        setTotal((total) => --total);
      }
    } else if (action === 'add') {
      if (total >= maxPerOrder) {
        return null;
      } else {
        setTotal((total) => ++total);
      }
    }
  };

  return (
    <div className='p-4 flex items-center gap-[10px]'>
      <ButtonCounter
        Icon={IconCircleMinus}
        color={total <= 0 ? '#888' : '#fff'}
        action={() => someQuantity('remove')}
        disabled={total <= 0}
      />

      <p className='font-semibold text-lg'>{total}</p>

      <ButtonCounter
        Icon={IconCirclePlus}
        color={total >= maxPerOrder ? '#6519b0' : '#8b39df'}
        action={() => someQuantity('add')}
        disabled={total >= maxPerOrder}
      />
    </div>
  );
};
