import { Header } from '@/components/TicketSelect/Header';
import { Tickets } from '@/components/TicketSelect/Tickets';
import { TicketsFooter } from '@/components/TicketsFooter';
import { TicketType } from '@/interfaces/ticketType';

interface TicketProps {
  ticketTypes: TicketType[];
}

export const Ticket = ({ ticketTypes }: TicketProps) => {
  return (
    <div className='bg-secondary-500' style={{ borderRadius: '20px' }}>
      <Header tickets={[{ _id: '0001', price: 50, quantity: 1 }]} />

      <Tickets ticketTypes={ticketTypes} />

      <TicketsFooter />
    </div>
  );
};
