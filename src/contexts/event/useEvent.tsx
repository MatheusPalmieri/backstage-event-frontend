'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { EventContextProps, EventProviderProps } from './props';
import { Event } from '@/interfaces/event';
import { getEvent } from '@/services/event';

export const EventContext = createContext({} as EventContextProps);

export function EventProvider({ children }: EventProviderProps) {
  const [event, setEvent] = useState<Event | null>(null);

  const loadEvent = async (slug: string): Promise<Event | null> => {
    try {
      const { data } = await getEvent(slug);
      setEvent(data as Event);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const providerValues = useMemo(
    () => ({
      event,
      setEvent,

      loadEvent,
    }),
    [event, setEvent, loadEvent],
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
