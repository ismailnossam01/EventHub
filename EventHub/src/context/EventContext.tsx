import { createContext, useContext, useState, ReactNode } from 'react';
import { Event } from '../types/event';
import { events as initialEvents } from '../data/events';

interface EventContextType {
  events: Event[];
  registeredEvents: Event[];
  registerEvent: (eventId: string) => void;
  isEventRegistered: (eventId: string) => boolean;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [registeredEvents, setRegisteredEvents] = useState<Event[]>([]);

  const registerEvent = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event && !registeredEvents.find(e => e.id === eventId)) {
      setRegisteredEvents([...registeredEvents, { ...event, isRegistered: true }]);
      setEvents(events.map(e => 
        e.id === eventId ? { ...e, isRegistered: true } : e
      ));
    }
  };

  const isEventRegistered = (eventId: string) => {
    return registeredEvents.some(event => event.id === eventId);
  };

  return (
    <EventContext.Provider value={{ events, registeredEvents, registerEvent, isEventRegistered }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}