import { IconShoppingCart } from '@tabler/icons-react';
import { Header } from '../Header';
import { Item } from './Item';
import { Flex } from '@/components/Flex/Flex';
import { formatCurrency } from '@/helpers/format';

export const Summary = () => {
  return (
    <div className='bg-secondary-50 rounded-[20px]'>
      <Header Icon={IconShoppingCart} text='Resumo de Compra' />

      <Flex className='p-4 flex-col gap-[2px]'>
        <Item text='Sub-total' price={50} />
        <Item text='Desconto' price={10} negative />
        <Item text='Taxa de Serviço' price={4} />
      </Flex>

      <div className='p-4 pt-0'>
        <Flex className='h-[50px] bg-secondary-200 rounded-lg px-4 text-secondary-700 items-center justify-between'>
          <p className='text-lg font-bold'>Total:</p>
          <p className='text-lg font-extrabold tracking-wide'>
            {formatCurrency(44)}
          </p>
        </Flex>
      </div>
    </div>
  );
};
