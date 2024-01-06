'use client';

import { FlexCenter } from '@/components/Flex/FlexCenter';
import { Icon, IconChevronUp } from '@tabler/icons-react';

interface HeaderProps {
  Icon: Icon;
  text: string;
  show: boolean;
  setShow: (show: boolean) => void;
}

export const Header = ({ Icon, text, show, setShow }: HeaderProps) => {
  return (
    <div className='bg-primary-500 w-[100%] max-w-[800px] h-[50px] flex items-center justify-between p-4 rounded-[20px] shadow-lg z-10'>
      <FlexCenter className='gap-[5px]'>
        <Icon />
        <p className='font-bold tracking-wide'>{text}</p>
      </FlexCenter>

      <div
        className={`cursor-pointer ${show ? 'rotate-0' : 'rotate-180'}`}
        style={{ transition: 'transform 0.4s' }}
        onClick={() => setShow(!show)}
      >
        <IconChevronUp size='30px' />
      </div>
    </div>
  );
};
