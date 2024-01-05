import { FlexCenter } from '@/components/Flex/FlexCenter';
import { IconTicket } from '@tabler/icons-react';
import { Ticket } from './Ticket';
import { Divider } from '@/components/Divider';
import { Header } from '../Header';

export const Tickets = () => {
  return (
    <div className='bg-secondary-50 rounded-[20px]'>
      <div className='bg-primary-500 w-[100%] max-w-[800px] h-[50px] flex items-center p-4 rounded-[20px] shadow-lg'>
        <Header Icon={IconTicket} text='Ingressos Selecionados' />
      </div>

      {[1, 2, 3].map((_, i) => (
        <div className='p-4 flex flex-col gap-[10px]' key={i + _}>
          <Ticket
            quantity={i + 1}
            ticket={`Full Lote ${_}°`}
            price={(i + 15) * 10}
          />

          <Divider margin='0px' opacity={0.3} />
        </div>
      ))}
    </div>
  );
};
