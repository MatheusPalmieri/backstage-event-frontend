'use client';

import { Button } from '@/components/Buttons/Button';
import { Header } from '@/components/Header';
import { Payment } from '@/components/Pages/Purchase/Payment/Payment';
import { Summary } from '@/components/Pages/Purchase/Summary/Summary';
import { Tickets } from '@/components/Pages/Purchase/Tickets/Tickets';
import { useEvent } from '@/contexts/event/useEvent';
import { useRouter } from 'next/navigation';
import { useTicket } from '@/contexts/ticket/useTicket';
import { PaymentResult } from '@/components/Pages/Purchase/Payment/PaymentResult';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BuyerInformation } from '@/schemas/BuyerInformation';

export default function Page() {
  const { event } = useEvent();
  const { paymentMethod } = useTicket();
  const router = useRouter();

  const [showPaymentResult, setShowPaymentResult] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BuyerInformation>();
  const onSubmit: SubmitHandler<BuyerInformation> = (data) => {
    console.log('🚀 ~ BuyerInformation ~ data:', data);
    return;
  };

  const receipt = () => {
    // router.push(`/evento/${event?.slug}/comprovante`);
    // setShowPaymentResult(true);
    handleSubmit(onSubmit);
    console.log('🚀 ~ BuyerInformation ~ errors:', errors);
  };

  return (
    <main>
      <Header />

      <div className='p-4 md:p-0 flex flex-col gap-4'>
        <Tickets />
        <Summary />

        {showPaymentResult ? (
          <PaymentResult paymentMethod={paymentMethod} />
        ) : (
          <>
            <Payment register={register} />

            <Button className='w-full tracking-wide' onClick={receipt}>
              Pagar Agora
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
