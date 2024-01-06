'use client';

import { Input } from '@/components/PaymentRadio/Input';
import { Radio } from '@/components/PaymentRadio/Radio';
import {
  IconCreditCard,
  IconFileBarcode,
  IconQrcode,
} from '@tabler/icons-react';
import { useState } from 'react';

export const FormPayment = () => {
  const [method, setMethod] = useState<string>('');

  return (
    <div>
      <Radio className='flex flex-col gap-[10px]'>
        <Input
          group='payment'
          method='Pix'
          Icon={IconQrcode}
          name='Pix'
          checked
          checkedMethod={method}
          setMethod={setMethod}
        />
        <Input
          group='payment'
          method='Boleto'
          Icon={IconFileBarcode}
          name='Boleto'
          checkedMethod={method}
          setMethod={setMethod}
        />
        <Input
          group='payment'
          method='Card Credit'
          Icon={IconCreditCard}
          name='Cartão de Crédito'
          checkedMethod={method}
          setMethod={setMethod}
        />
      </Radio>
    </div>
  );
};
