import { formatCurrency } from '@/helpers/format';

interface ItemProps {
  text: string;
  price: number;
  negative?: boolean;
}

export const Item = ({ text, price, negative = false }: ItemProps) => (
  <div className='text-secondary-650 flex justify-between'>
    <p className='font-semibold'>{text}</p>
    <p className='font-bold tracking-wide'>
      {negative && '-'} {formatCurrency(price)}
    </p>
  </div>
);
