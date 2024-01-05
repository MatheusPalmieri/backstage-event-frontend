import { FlexCenter } from '@/components/Flex/FlexCenter';
import { Icon } from '@tabler/icons-react';

interface HeaderProps {
  Icon: Icon;
  text: string;
}

export const Header = ({ Icon, text }: HeaderProps) => (
  <div className='bg-primary-500 w-[100%] max-w-[800px] h-[50px] flex items-center p-4 rounded-[20px] shadow-lg'>
    <FlexCenter className='gap-[5px]'>
      <Icon />
      <p className='font-bold tracking-wide'>{text}</p>
    </FlexCenter>
  </div>
);
