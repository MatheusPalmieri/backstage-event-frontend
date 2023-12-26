import { TicketType } from '@/interfaces/ticketType';
import { Ticket } from './Ticket';

interface TicketsProps {
  ticketTypes: TicketType[];
}

export const Tickets = ({ ticketTypes }: TicketsProps) => (
  <div>
    {ticketTypes.map((ticket, index) => {
      const { name, lots } = ticket;

      return lots.map((lot) => {
        const { name: batch, price, tax, installments } = lot;
        return (
          <div key={index}>
            <Ticket
              name={name}
              lot={batch}
              price={price}
              tax={tax}
              installments={installments}
            />
          </div>
        );
      });
    })}
  </div>
);
