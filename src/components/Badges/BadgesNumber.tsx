import { FlexCenter } from '../Flex/FlexCenter';

interface BadgesNumberProps {
  children: number | string;
  className?: string;
}

export const BadgesNumber = ({ children, className }: BadgesNumberProps) => (
  <FlexCenter
    className={`w-[30px] h-[30px] bg-primary-500 text-secondary-50 rounded-full ${className}`}
  >
    {children}
  </FlexCenter>
);
