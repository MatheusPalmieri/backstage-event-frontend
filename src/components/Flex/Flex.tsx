import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Flex = ({ children, className }: Props) => (
  <div className={`flex ${className}`}>{children}</div>
);
