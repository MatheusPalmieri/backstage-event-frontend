'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { TicketType } from '@/interfaces/ticketType';
import { TicketContextProps, TicketProviderProps } from './props';
import { PaymentMethod } from '@/interfaces/payment';

export const TicketContext = createContext({} as TicketContextProps);

export function TicketProvider({ children }: TicketProviderProps) {
  const [ticketType, setTicketType] = useState<TicketType | null>(null);

  const [amount, setAmount] = useState<number>(0);
  const [amountInstallments, setAmountInstallments] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.Pix,
  );

  const handleCalculateAmount = useCallback(
    (action: 'remove' | 'add', value: number) => {
      if (action === 'remove') {
        if (amount > 0 && quantity > 0) {
          setAmount((amount) => amount - value);
          setAmountInstallments((amount) => amount - value / 10);
          setQuantity((quantity) => --quantity);
        }
      } else if (action === 'add') {
        setAmount((amount) => amount + value);
        setAmountInstallments((amount) => amount + value / 10);
        setQuantity((quantity) => ++quantity);
      }
    },
    [amount, quantity],
  );

  const providerValues = useMemo(
    () => ({
      ticketType,
      setTicketType,

      amount,
      setAmount,

      amountInstallments,
      setAmountInstallments,

      handleCalculateAmount,

      quantity,
      setQuantity,

      paymentMethod,
      setPaymentMethod,
    }),
    [
      ticketType,
      setTicketType,

      amount,
      setAmount,

      amountInstallments,
      setAmountInstallments,

      handleCalculateAmount,

      quantity,
      setQuantity,

      paymentMethod,
      setPaymentMethod,
    ],
  );

  return (
    <TicketContext.Provider value={providerValues}>
      {children}
    </TicketContext.Provider>
  );
}

export function useTicket() {
  const context = useContext(TicketContext);

  if (context) {
    return context;
  }

  throw new Error('useTicket must be used within a TicketContextProvider');
}
