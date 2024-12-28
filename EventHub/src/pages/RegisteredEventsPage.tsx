import { useEvents } from '../context/EventContext';
import EventCard from '../components/EventCard';

export default function RegisteredEventsPage() {
  const { registeredEvents } = useEvents();

  if (registeredEvents.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">No Registered Events</h2>
        <p className="text-gray-600 dark:text-gray-400">
          You haven't registered for any events yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Your Registered Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registeredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}