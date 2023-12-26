import { formatCurrency } from '@/helpers/format';
import { IconShoppingCart } from '@tabler/icons-react';

interface HeaderProps {
  tickets: {
    _id: string;
    price: number;
    quantity: number;
  }[];
}

export const Header = ({ tickets }: HeaderProps) => {
  const total = tickets.reduce((acc, ticket) => {
    return acc + ticket.price;
  }, 0);

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
      <p className='font-semibold'>Ingresso{tickets.length > 0 && 's'}</p>

      <div className='flex items-center justify-center'>
        <IconShoppingCart />
        <p className='font-semibold ml-2'>{formatCurrency(total)}</p>
      </div>
    </header>
  );
};
