'use client';

import { Icon } from '@tabler/icons-react';

interface ButtonCounterProps {
  Icon: Icon;
  color?: string;
  action: () => void;
  disabled: boolean;
}

export const ButtonCounter = ({
  Icon,
  color = 'white',
  action,
  disabled,
}: ButtonCounterProps) => {
  return (
    <button
      onClick={() => action()}
      disabled={disabled}
      className='bg-transparent h-[30px] hover:bg-transparent'
    >
      <Icon size='30px' color={color} style={{ transition: 'all 0.3s' }} />
    </button>
  );
};
