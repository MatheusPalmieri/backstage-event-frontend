import { FlexCenter } from '@/components/Flex/FlexCenter';
import { IconTicket } from '@tabler/icons-react';
import { Ticket } from './Ticket';
import { Divider } from '@/components/Divider';

export const Tickets = () => {
  return (
    <div className='bg-secondary-50 rounded-[20px]'>
      <div className='bg-primary-500 w-[100%] max-w-[800px] h-[50px] flex items-center p-4 rounded-[20px] shadow-lg'>
        <FlexCenter className='gap-[5px]'>
          <IconTicket />
          <p className='font-bold tracking-wide'>Ingressos Selecionados</p>
        </FlexCenter>
      </div>

      <div className='p-4 flex flex-col gap-[10px]'>
        {[1, 2, 3].map((_, i) => (
          <div key={i + _}>
            <Ticket
              quantity={i + 1}
              ticket={`Full Lote ${_}°`}
              price={(i + 15) * 10}
            />

            <Divider margin='0px' opacity={0.3} />
          </div>
        ))}
      </div>
    </div>
  );
};
