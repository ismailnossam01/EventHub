import { useState } from 'react';
import { X } from 'lucide-react';
import { Event } from '../types/event';

interface RegisterModalProps {
  event: Event;
  onClose: () => void;
  onRegister: (eventId: string) => void;
}

export default function RegisterModal({ event, onClose, onRegister }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(event.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text mb-4">
  Register for {event.title}
</h2>

<form 
  onSubmit={handleSubmit} 
  className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg shadow-md space-y-4 max-w-sm mx-auto border border-gray-200 dark:border-gray-700"
>
  <div className="relative">
    <label 
      htmlFor="name" 
      className="block text-xs font-medium text-gray-600 dark:text-gray-300"
    >
      Full Name
    </label>
    <input
      type="text"
      id="name"
      required
      className="mt-2 block w-full px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
      hover:border-blue-500 hover:ring-2 hover:ring-blue-300 
      transform hover:scale-105 transition-all duration-300 ease-in-out"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      placeholder="Enter your full name"
    />
  </div>

  <div className="relative">
    <label 
      htmlFor="email" 
      className="block text-xs font-medium text-gray-600 dark:text-gray-300"
    >
      Email
    </label>
    <input
      type="email"
      id="email"
      required
      className="mt-2 block w-full px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
      hover:border-blue-500 hover:ring-2 hover:ring-blue-300 
      transform hover:scale-105 transition-all duration-300 ease-in-out"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      placeholder="Enter your email address"
    />
  </div>

  <div className="relative">
    <label 
      htmlFor="phone" 
      className="block text-xs font-medium text-gray-600 dark:text-gray-300"
    >
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      required
      className="mt-2 block w-full px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
      hover:border-blue-500 hover:ring-2 hover:ring-blue-300 
      transform hover:scale-105 transition-all duration-300 ease-in-out"
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      placeholder="Enter your phone number"
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-sm hover:shadow-md hover:from-blue-600 hover:to-cyan-600 transition-all"
  >
    Complete Registration
  </button>
</form>


      </div>
    </div>
  );
}