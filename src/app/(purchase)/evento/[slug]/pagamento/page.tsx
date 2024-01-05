'use client';

import { Button } from '@/components/Buttons/Button';
import { Header } from '@/components/Header';
import { Summary } from '@/components/Pages/Purchase/Summary';
import { Tickets } from '@/components/Pages/Purchase/Tickets';
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
      <div className='p-4 md:p-0 flex flex-col gap-8'>
        <Tickets />

        <Summary />

        <Button className='w-full mt-[100px]' onClick={receipt}>
          Comprovante
        </Button>
      </div>
    </div>
  );
}
