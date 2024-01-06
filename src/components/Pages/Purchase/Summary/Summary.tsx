import { IconShoppingCart } from '@tabler/icons-react';
import { Item } from './Item';
import { Flex } from '@/components/Flex/Flex';
import { formatCurrency } from '@/helpers/format';
import { Accordion } from '@/components/Accordion';
import { motion } from 'framer-motion';

export const Summary = () => {
  return (
    <Accordion header={{ Icon: IconShoppingCart, text: 'Resumo de Compra' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 * 0.1 }}
      >
        <Flex className='p-4 flex-col gap-[2px]'>
          <Item text='Sub-total' price={50} />
          <Item text='Desconto' price={10} negative />
          <Item text='Taxa de Serviço' price={4} />
        </Flex>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 * 0.1 }}
      >
        <div className='p-4 pt-0'>
          <Flex className='h-[50px] bg-secondary-200 rounded-lg px-4 text-secondary-700 items-center justify-between'>
            <p className='text-lg font-bold'>Total:</p>
            <p className='text-lg font-extrabold tracking-wide'>
              {formatCurrency(44)}
            </p>
          </Flex>
        </div>
      </motion.div>
    </Accordion>
  );
};
