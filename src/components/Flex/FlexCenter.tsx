import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const FlexCenter = ({ children, className, ...props }: Props) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>
    {children}
  </div>
);
