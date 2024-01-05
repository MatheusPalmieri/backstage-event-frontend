import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  className = '',
  disabled = false,
  onClick,
}: ButtonProps) => (
  <button
    className={`bg-primary-500 h-[50px] rounded-lg uppercase font-bold ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
