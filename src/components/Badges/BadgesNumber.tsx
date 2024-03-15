import { FlexCenter } from '../Flex/FlexCenter';

interface Props {
  children: number | string;
  className?: string;
}

export const BadgesNumber = ({ children, className }: Props) => (
  <FlexCenter
    className={`w-[30px] h-[30px] bg-primary-500 text-secondary-50 rounded-full ${className}`}
  >
    {children}
  </FlexCenter>
);
