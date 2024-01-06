import { CSSProperties, ReactNode } from 'react';

interface FlexCenterProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const FlexCenter = ({
  children,
  className,
  ...props
}: FlexCenterProps) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>
    {children}
  </div>
);
