import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Content } from '@/components/Pages/Event/Content';
import { Main } from '@/components/Pages/Event/Main';
import { Event } from '@/interfaces/event';
import { getEvent } from '@/services/event';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { data: event } = await getEvent(params.slug);

  if (!event) return <h1>Evento não encontrado</h1>;

  const { name, resource, description, location } = event as Event;

  return (
    <main className='bg-secondary-550 w-full min-h-screen flex flex-col'>
      <title>{name.toUpperCase()}</title>

      <Header />

      <Main
        image={{ url: resource.url, alt: `Imagem referente ao evento ${name}` }}
        name={name}
      />

      <Content description={description} location={location} />

      <Footer />
    </main>
  );
}
