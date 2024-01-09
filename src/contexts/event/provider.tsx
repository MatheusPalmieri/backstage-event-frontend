'use client';

import { useEvent } from '@/contexts/event/useEvent';
import { Event } from '@/interfaces/event';
import { useEffect } from 'react';

export const EventSetContext = ({ event }: { event: Event }): null => {
  const { setEvent } = useEvent();
  useEffect(() => {
    setEvent(event);
  }, []);
  return null;
};
