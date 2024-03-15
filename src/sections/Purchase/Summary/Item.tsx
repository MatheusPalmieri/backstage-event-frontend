import { formatCurrency } from '@/helpers/format';

interface Props {
  text: string;
  price: number;
  negative?: boolean;
}

export const PurchaseSummaryItem = ({
  text,
  price,
  negative = false,
}: Props) => (
  <div className='text-secondary-650 flex justify-between'>
    <p className='font-semibold'>{text}</p>
    <p className='font-bold tracking-wide'>
      {negative && '-'} {formatCurrency(price)}
    </p>
  </div>
);
