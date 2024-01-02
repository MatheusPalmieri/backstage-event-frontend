'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { EventContextProps, EventProviderProps } from './props';
import { Event } from '@/interfaces/event';

export const EventContext = createContext({} as EventContextProps);

export function EventProvider({ children }: EventProviderProps) {
  const [event, setEvent] = useState<Event | null>(null);

  const providerValues = useMemo(
    () => ({
      event,
      setEvent,
    }),
    [event, setEvent],
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
