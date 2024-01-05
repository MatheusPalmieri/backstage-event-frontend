import { ReactNode } from 'react';

interface FlexCenterProps {
  children: ReactNode;
  className?: string;
}

export const FlexCenter = ({ children, className }: FlexCenterProps) => (
  <div className={`flex items-center justify-center ${className}`}>
    {children}
  </div>
);
