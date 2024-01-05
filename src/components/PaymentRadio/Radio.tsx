import { ReactNode } from 'react';

interface RadioProps {
  children: ReactNode;
  className?: string;
}

export const Radio = ({ children, className }: RadioProps) => (
  <form className={className}>{children}</form>
);
