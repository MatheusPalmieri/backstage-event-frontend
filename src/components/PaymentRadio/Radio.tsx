import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Radio = ({ children, className }: Props) => (
  <form className={className}>{children}</form>
);
