'use client';

import { IconTicket } from '@tabler/icons-react';
import { PurchaseTicketsInformation } from './Ticket';
import { Divider } from '@/components/Divider';
import { motion } from 'framer-motion';
import { Accordion } from '@/components/Accordion';

export const PurchaseTickets = () => (
  <Accordion header={{ Icon: IconTicket, text: 'Ingressos Selecionados' }}>
    {[1, 2, 3].map((_, i) => (
      <motion.div
        key={i + _}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className='p-4 flex flex-col gap-[10px]'
      >
        <PurchaseTicketsInformation
          quantity={i + 1}
          ticket={`Full Lote ${_}°`}
          price={(i + 15) * 10}
        />
        <Divider margin='0px' opacity={0.3} />
      </motion.div>
    ))}
  </Accordion>
);
