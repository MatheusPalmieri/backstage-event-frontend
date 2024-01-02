import { useTicket } from '@/contexts/ticket/useTicket';
import { Button } from '../Buttons/Button';
import { formatCurrency } from '@/helpers/format';

export const TicketsFooter = () => {
  const { quantity, amount, amountInstallments } = useTicket();

  return (
    <div className='p-4'>
      {quantity > 0 ? (
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-sm text-secondary-200'>Total</p>
            <p className='text-lg'>{formatCurrency(amount)}</p>
            <p className='text-primary-500'>
              ou 12x {formatCurrency(amountInstallments)}
            </p>
          </div>

          <Button className='w-fit px-4'>
            Comprar Ingresso{quantity > 1 && 's'}
          </Button>
        </div>
      ) : (
        <Button disabled className='w-full bg-secondary-50 text-secondary-350'>
          Selecione um ingresso
        </Button>
      )}
    </div>
  );
};
