import { TicketType } from '@/interfaces/ticketType';
import { ReactNode } from 'react';

export type TicketProviderProps = {
  children: ReactNode;
};

export type TicketContextProps = {
  ticketType: TicketType | null;
  setTicketType: (value: TicketType | null) => void;

  amount: number;
  setAmount: (amount: number) => void;

  amountInstallments: number;
  setAmountInstallments: (amount: number) => void;

  handleCalculateAmount: (action: 'remove' | 'add', value: number) => void;

  quantity: number;
  setQuantity: (quantity: number) => void;
};
