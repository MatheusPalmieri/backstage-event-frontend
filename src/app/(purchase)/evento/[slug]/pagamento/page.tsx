'use client';

import { Button } from '@/components/Buttons/Button';
import { Header } from '@/components/Header';
import { Payment } from '@/components/Pages/Purchase/Payment/Payment';
import { Summary } from '@/components/Pages/Purchase/Summary/Summary';
import { Tickets } from '@/components/Pages/Purchase/Tickets/Tickets';
import { useEvent } from '@/contexts/event/useEvent';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { event } = useEvent();
  const router = useRouter();

  const receipt = () => {
    router.push(`/evento/${event?.slug}/comprovante`);
  };

  return (
    <div>
      <Header />
      <div className='p-4 md:p-0 flex flex-col gap-4'>
        <Tickets />
        <Summary />
        <Payment />

        <Button className='w-full tracking-wide' onClick={receipt}>
          Pagar Agora
        </Button>
      </div>
    </div>
  );
}
