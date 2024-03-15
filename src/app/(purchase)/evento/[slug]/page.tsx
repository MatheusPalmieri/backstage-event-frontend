import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { EventContent } from '@/sections/Event/Content';
import { EventMain } from '@/sections/Event/Main';
import { Event } from '@/interfaces/event';
import { EventSetContext } from '@/contexts/event/provider';
import { getEvent } from '@/services/event';
import { getTicketTypes } from '@/services/ticket';

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data: event } = await getEvent(slug);
  if (!event) return <h1>Evento não encontrado</h1>;

  const { data: ticketTypes } = await getTicketTypes((event as Event)._id);

  const { name, resource, description, location } = event as Event;

  return (
    <main className='w-full flex flex-col'>
      <title>{name.toUpperCase()}</title>
      <EventSetContext event={event} />
      <Header />

      <EventMain
        image={{
          url: resource.url,
          alt: `Imagem referente ao evento ${name}`,
        }}
        name={name}
        ticketTypes={ticketTypes}
      />

      <EventContent description={description} location={location} />

      <Footer />
    </main>
  );
}
