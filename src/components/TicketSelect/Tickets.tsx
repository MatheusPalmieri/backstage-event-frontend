import { TicketType } from '@/interfaces/ticketType';
import { Ticket } from './Ticket';
import { Counter } from './Counter';
import { Divider } from '../Divider';

interface Props {
  ticketTypes: TicketType[];
}

export const Tickets = ({ ticketTypes }: Props) => (
  <div>
    {ticketTypes.map((ticket) => {
      const { name, lots } = ticket;

      return lots.map((lot) => {
        const { name: batch, price, tax, installments, quantity } = lot;
        const { maxPerOrder } = quantity;

        return (
          <div key={lot._id}>
            <div className='flex items-center justify-between'>
              <Ticket
                name={name}
                lot={batch}
                price={price}
                tax={tax}
                installments={installments}
              />

              <Counter price={price + tax} maxPerOrder={maxPerOrder} />
            </div>

            <Divider margin='0px' opacity={0.6} />
          </div>
        );
      });
    })}
  </div>
);
