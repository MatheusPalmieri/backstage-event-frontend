'use client';

import { Input } from '@/components/PaymentRadio/Input';
import { Radio } from '@/components/PaymentRadio/Radio';
import { useTicket } from '@/contexts/ticket/useTicket';
import { PaymentMethod } from '@/interfaces/payment';
import { IconCreditCard, IconQrcode } from '@tabler/icons-react';

export const PurchasePaymentMethod = () => {
  const { paymentMethod, setPaymentMethod } = useTicket();

  return (
    <div>
      <Radio className='flex flex-col gap-[10px]'>
        <Input
          group='payment'
          method={PaymentMethod.Pix}
          Icon={IconQrcode}
          name='Pix'
          checked
          checkedMethod={paymentMethod}
          setMethod={setPaymentMethod}
        />
        <Input
          group='payment'
          method={PaymentMethod.CreditCard}
          Icon={IconCreditCard}
          name='Cartão de Crédito'
          checkedMethod={paymentMethod}
          setMethod={setPaymentMethod}
        />
      </Radio>
    </div>
  );
};
