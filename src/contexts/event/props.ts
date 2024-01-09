import { Event } from '@/interfaces/event';
import { ReactNode } from 'react';

export type EventProviderProps = {
  children: ReactNode;
};

export type EventContextProps = {
  event: Event | null;
  setEvent: (event: Event | null) => void;

  redirectByExpiration: (slug?: string) => void;
};
