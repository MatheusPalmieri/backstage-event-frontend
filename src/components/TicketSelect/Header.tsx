import { useTicket } from '@/contexts/ticket/useTicket';
import { formatCurrency } from '@/helpers/format';
import { IconShoppingCart, IconTicket } from '@tabler/icons-react';
import { Children } from 'react';
import { FlexCenter } from '../Flex/FlexCenter';

interface HeaderProps {
  tickets: {
    _id: string;
    price: number;
    quantity: number;
  }[];
}

export const Header = ({ tickets }: HeaderProps) => {
  const { amount } = useTicket();

  return (
    <header
      className='bg-primary-500 flex items-center justify-between p-4'
      style={{
        width: '100%',
        maxWidth: '500px',
        height: '60px',
        borderStartStartRadius: '20px',
        borderStartEndRadius: '20px',
      }}
    >
      <FlexCenter className='gap-[5px]'>
        <IconTicket />
        <p className='font-semibold'>Ingresso{tickets.length > 0 && 's'}</p>
      </FlexCenter>

      <FlexCenter className='gap-[5px]'>
        <IconShoppingCart />
        <p className='font-bold tracking-wide'>{formatCurrency(amount)}</p>
      </FlexCenter>
    </header>
  );
};
