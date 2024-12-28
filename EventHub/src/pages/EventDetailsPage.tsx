import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, User, DollarSign, Check } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import RegisterModal from '../components/RegisterModal';

export default function EventDetailsPage() {
  const { id } = useParams();
  const { events, registerEvent, isEventRegistered } = useEvents();
  const event = events.find(e => e.id === id);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  if (!event) {
    return <div>Event not found</div>;
  }

  const isRegistered = isEventRegistered(event.id);

  const handleRegister = (eventId: string) => {
    registerEvent(eventId);
    setShowRegisterModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
   <Link
  to="/"
  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-6"
>
  
  <button 
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 dark:bg-blue-400 dark:hover:bg-blue-300 transition-all"
  >
    Back to Events
  </button>
</Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        <div className="relative h-96">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
            {event.category}
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">{event.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 mr-3" />
                <span>{new Date(event.date).toLocaleDateString()} - {event.time}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <User className="w-5 h-5 mr-3" />
                <span>{event.organizer}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <DollarSign className="w-5 h-5 mr-3" />
                <span>{event.price}</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3 dark:text-white">About the Event</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
          {isRegistered ? (
            <button 
              disabled
              className="w-full md:w-auto bg-green-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Registered
            </button>
          ) : (
            <button 
              onClick={() => setShowRegisterModal(true)}
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Register Now
            </button>
          )}
        </div>
      </div>

      {showRegisterModal && (
        <RegisterModal
          event={event}
          onClose={() => setShowRegisterModal(false)}
          onRegister={handleRegister}
        />
      )}
    </div>
  );
}