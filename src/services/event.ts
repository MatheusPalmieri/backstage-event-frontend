import { Event } from '@/interfaces/event';

const events: Event[] = [
  {
    _id: '0',
    name: 'The Recaps Band',
    slug: 'the-recap-band',
    description: `
      <p>
        Junte-se a nós na <b>We Are Reino</b> para uma noite de celebração e
        adoração com a <b>Recapson's Band</b>! Este eventos especial promete
        uma atmosfera vibrante de <i>adoração</i> e <i>harmonia</i>, onde cada
        acorde ecoará a alegria e a reverência ao <b>Rei</b>. A <b>Recapson's Band</b> liderará a ministração pela noite.
      </p>
    `,
    sessions: [
      {
        startDate: '2024-01-01',
        endDate: '2024-01-01',
      },
    ],
    resource: {
      url: 'https://placehold.co/1920x1080/CFCFCF/7E23D9?text=RECAP&font=raleway',
    },
    location: {
      code: '88338-200',
      address: 'We Are Reino',
      country: 'Brasil',
      state: 'Santa Catarina',
      city: 'Balneário Camboriú',
      street: 'Rua Marginal Oeste',
      number: '2000',
      coordinates: {
        lat: '0',
        lng: '0',
      },
    },
  },
  {
    _id: '1',
    name: 'Event 1',
    slug: 'event-1',
    description: 'This is event 1',
    sessions: [
      {
        startDate: '2020-01-01',
        endDate: '2020-01-01',
      },
    ],
    resource: {
      url: 'https://picsum.photos/200/300',
    },
    location: {
      code: '0',
      address: 'Rua 0',
      country: 'País 0',
      state: 'Estado 0',
      city: 'Cidade 0',
      street: 'Rua 0',
      number: '0',
      coordinates: {
        lat: '0',
        lng: '0',
      },
    },
  },
  {
    _id: '2',
    name: 'Event 2',
    slug: 'event-2',
    description: 'This is event 2',
    sessions: [
      {
        startDate: '2020-01-01',
        endDate: '2020-01-01',
      },
    ],
    resource: {
      url: 'https://picsum.photos/200/300',
    },
    location: {
      code: '0',
      address: 'Rua 0',
      country: 'País 0',
      state: 'Estado 0',
      city: 'Cidade 0',
      street: 'Rua 0',
      number: '0',
      coordinates: {
        lat: '0',
        lng: '0',
      },
    },
  },
  {
    _id: '3',
    name: 'Event 3',
    slug: 'event-3',
    description: 'This is event 3',
    sessions: [
      {
        startDate: '2020-01-01',
        endDate: '2020-01-01',
      },
    ],
    resource: {
      url: 'https://picsum.photos/200/300',
    },
    location: {
      code: '0',
      address: 'Rua 0',
      country: 'País 0',
      state: 'Estado 0',
      city: 'Cidade 0',
      street: 'Rua 0',
      number: '0',
      coordinates: {
        lat: '0',
        lng: '0',
      },
    },
  },
  {
    _id: '4',
    name: 'Event 4',
    slug: 'event-4',
    description: 'This is event 4',
    sessions: [
      {
        startDate: '2020-01-01',
        endDate: '2020-01-01',
      },
    ],
    resource: {
      url: 'https://picsum.photos/200/300',
    },
    location: {
      code: '0',
      address: 'Rua 0',
      country: 'País 0',
      state: 'Estado 0',
      city: 'Cidade 0',
      street: 'Rua 0',
      number: '0',
      coordinates: {
        lat: '0',
        lng: '0',
      },
    },
  },
];

export function getEvents(): Promise<{
  data: Event[];
  status: number;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: events,
        status: 200,
      });
    }, 2000);
  });
}

export function getEvent(
  slug: string,
): Promise<
  | { data: Event; status: number }
  | { data: { message: string; statusCode: number }; status: number }
> {
  const event = events.find((event) => {
    return event.slug === slug;
  });

  if (!event) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: { message: 'Event not found', statusCode: 404 },
          status: 404,
        });
      }, 2000);
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: event,
        status: 200,
      });
    }, 2000);
  });
}
