import { Header } from '@/components/TicketSelect/Header';
import { Tickets } from '@/components/TicketSelect/Tickets';
import { TicketType } from '@/interfaces/ticketType';

interface TicketProps {
  ticketTypes: TicketType[];
}

export const Ticket = ({ ticketTypes }: TicketProps) => {
  return (
    <div className='bg-secondary-500' style={{ borderRadius: '20px' }}>
      <Header tickets={[{ _id: '0001', price: 50, quantity: 1 }]} />

      <Tickets ticketTypes={ticketTypes} />

      <div className='p-4'>
        <button
          className='bg-secondary-50 w-full rounded-lg text-secondary-350 uppercase font-bold'
          style={{ height: '50px' }}
          disabled
        >
          Selecione um ingresso
        </button>
      </div>
    </div>
  );
};
