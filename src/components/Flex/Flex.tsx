import { ReactNode } from 'react';

interface FlexProps {
  children: ReactNode;
  className?: string;
}

export const Flex = ({ children, className }: FlexProps) => (
  <div className={`flex ${className}`}>{children}</div>
);
