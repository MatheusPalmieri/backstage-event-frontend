import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { getEvents } from '@/services/event';
import Link from 'next/link';

export default async function Home() {
  const { data: events } = await getEvents();

  return (
    <main className='flex flex-col'>
      <Header />

      <Container>
        <h1 className='text-4xl font-bold tracking-wide uppercase'>
          Back<span className='text-primary-500'>stage</span>
        </h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          fugiat eaque deleniti dolore sequi sapiente distinctio nobis vero
          asperiores enim rerum quisquam laborum, alias maxime eligendi corrupti
          delectus ad doloribus.
        </p>

        <div className='grid grid-cols-2 gap-4'>
          {events.map((event) => (
            <div key={event._id} className='p-6 bg-primary-200 rounded-lg'>
              <h2>{event.name}</h2>

              <Link href={`/evento/${event.slug}`}>
                <p>Comprar Ingressos</p>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
