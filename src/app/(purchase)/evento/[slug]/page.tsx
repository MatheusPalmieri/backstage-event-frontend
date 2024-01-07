import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Content } from '@/components/Pages/Event/Content';
import { Main } from '@/components/Pages/Event/Main';
import { Event } from '@/interfaces/event';
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

      <Header slug={event.slug} />

      <Main
        image={{
          url: resource.url,
          alt: `Imagem referente ao evento ${name}`,
        }}
        name={name}
        ticketTypes={ticketTypes}
      />

      <Content description={description} location={location} />

      <Footer />
    </main>
  );
}
