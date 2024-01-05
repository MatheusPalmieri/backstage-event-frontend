'use client';

import { useTicket } from '@/contexts/ticket/useTicket';
import { Button } from '../Buttons/Button';
import { formatCurrency } from '@/helpers/format';
import { useRouter } from 'next/navigation';

export const TicketsFooter = () => {
  const router = useRouter();

  const { quantity, amount, amountInstallments } = useTicket();

  const checkAvailability = () => {
    const currentPath = window.location.pathname;
    router.push(`${currentPath}/identificacao/entrar`);
    // router.push(`${slug}/identificacao/entrar`);
  };

  return (
    <div className='p-4'>
      {quantity > 0 ? (
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-xs text-secondary-200 tracking-wide'>Total</p>
            <p className='text-lg font-semibold tracking-wider'>
              {formatCurrency(amount)}
            </p>
            <p className='text-sm text-primary-500'>
              ou 12x {formatCurrency(amountInstallments)}
            </p>
          </div>

          <Button className='min-w-[200px] w-fit ' onClick={checkAvailability}>
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
