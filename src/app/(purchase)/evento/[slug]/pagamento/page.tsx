'use client';

import { Button } from '@/components/Buttons/Button';
import { Header } from '@/components/Header';
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
      <div className='flex flex-col items-center gap-10 p-4'>
        <h1 className='text-2xl font-bold tracking-wider'>Pagamento</h1>

        <Button className='w-[200px]' onClick={receipt}>
          Comprovante
        </Button>
      </div>
    </div>
  );
}
