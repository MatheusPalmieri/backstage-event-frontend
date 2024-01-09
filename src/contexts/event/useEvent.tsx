'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { EventContextProps, EventProviderProps } from './props';
import { Event } from '@/interfaces/event';
import { getEvent } from '@/services/event';
import { useRouter } from 'next/navigation';

export const EventContext = createContext({} as EventContextProps);

export function EventProvider({ children }: EventProviderProps) {
  const router = useRouter();

  const [event, setEvent] = useState<Event | null>(null);

  const redirectByExpiration = useCallback(
    (slug?: string) => {
      if (event) {
        const { slug } = event;
        router.push(`/evento/${slug}/expired`);
      } else if (slug) {
        router.push(`/evento/${slug}/expired`);
      } else {
        router.push(`/`);
      }
    },
    [event],
  );

  const providerValues = useMemo(
    () => ({
      event,
      setEvent,

      redirectByExpiration,
    }),
    [event, setEvent, redirectByExpiration],
  );

  return (
    <EventContext.Provider value={providerValues}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventContext);

  if (context) {
    return context;
  }

  throw new Error('useEvent must be used within a EventContextProvider');
}
