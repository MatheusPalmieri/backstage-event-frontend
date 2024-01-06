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
    className={`rounded-lg font-bold ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
