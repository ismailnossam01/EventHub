import { Calendar, MapPin, Check } from 'lucide-react';
import { Event } from '../types/event';
import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const { isEventRegistered } = useEvents();
  const isRegistered = isEventRegistered(event.id);

  return (
    <Link to={`/event/${event.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02] h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium dark:text-white">
            {event.category}
          </div>
          {isRegistered && (
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Check className="w-4 h-4" />
              Registered
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{event.title}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{new Date(event.date).toLocaleDateString()} - {event.time}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.location}</span>
            </div>
          </div>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
