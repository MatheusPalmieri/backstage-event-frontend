import { BadgesNumber } from '@/components/Badges/BadgesNumber';
import { Flex } from '@/components/Flex/Flex';
import { FlexCenter } from '@/components/Flex/FlexCenter';
import { formatCurrency } from '@/helpers/format';

interface TicketProps {
  quantity: number;
  ticket: string;
  price: number;
}

export const Ticket = ({ quantity, ticket, price }: TicketProps) => (
  <Flex className='text-secondary-700 items-center justify-between'>
    <FlexCenter className='gap-[10px]'>
      <BadgesNumber className='w-[20px] justify-end'>
        {String(quantity).padStart(2, '0')}
      </BadgesNumber>

      <p className='font-semibold tracking-wide'>{ticket}</p>
    </FlexCenter>

    <p className='font-bold tracking-wide'>{formatCurrency(price)}</p>
  </Flex>
);
