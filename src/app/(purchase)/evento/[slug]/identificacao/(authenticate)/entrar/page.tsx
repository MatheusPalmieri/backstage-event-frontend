'use client';

import { Button } from '@/components/Buttons/Button';
import { Header } from '@/components/Header';
import { useEvent } from '@/contexts/event/useEvent';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { event } = useEvent();
  const router = useRouter();

  const signUp = () =>
    router.push(`/evento/${event?.slug}/identificacao/registrar`);

  const signIn = () => router.push(`/evento/${event?.slug}/pagamento`);

  return (
    <div>
      <Header />

      <div className='flex flex-col items-center gap-10 p-4'>
        <h1 className='text-2xl font-bold tracking-wider'>
          Entre na sua conta
        </h1>

        <Button className='w-[200px]' onClick={signIn}>
          Entrar
        </Button>

        <p className='text-secondary-50'>
          Não tem uma conta?{' '}
          <span className='text-primary-500 font-semibold' onClick={signUp}>
            Registre-se agora!
          </span>
        </p>
      </div>
    </div>
  );
}
