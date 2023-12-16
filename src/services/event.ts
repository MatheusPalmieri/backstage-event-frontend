import { Event } from '@/interfaces/event';

const events: Event[] = [
  {
    name: 'Event 1',
    slug: 'event-1',
    description: 'This is event 1',
    date: '2020-01-01',
    image: 'https://picsum.photos/200/300',
    location: 'Location 1',
  },
  {
    name: 'Event 2',
    slug: 'event-2',
    description: 'This is event 2',
    date: '2020-02-02',
    image: 'https://picsum.photos/200/300',
    location: 'Location 2',
  },
  {
    name: 'Event 3',
    slug: 'event-3',
    description: 'This is event 3',
    date: '2020-03-03',
    image: 'https://picsum.photos/200/300',
    location: 'Location 3',
  },
  {
    name: 'Event 4',
    slug: 'event-4',
    description: 'This is event 4',
    date: '2020-04-04',
    image: 'https://picsum.photos/200/300',
    location: 'Location 4',
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
