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
    <button onClick={() => action()} disabled={disabled}>
      <Icon size='30px' color={color} />
    </button>
  );
};
