import { formatCurrency } from '@/helpers/format';

interface TicketProps {
  name: string;
  lot: string;
  price: number;
  tax: number;
  installments: number;
}

export const Ticket = ({
  name,
  lot,
  price,
  tax,
  installments,
}: TicketProps) => (
  <div className='p-4'>
    <h2>
      {lot} - {name}
    </h2>

    <p className='text-secondary-50'>
      {formatCurrency(price)} (+ {formatCurrency(tax)} taxa)
    </p>

    <p className='text-primary-500'>
      em até 12x {formatCurrency(installments)}
    </p>
  </div>
);
