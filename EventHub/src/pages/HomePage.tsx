import { useState } from 'react';
import { events } from '../data/events';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import { Filter } from 'lucide-react';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  const filteredEvents = events
    .filter(event => 
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? event.category === category : true)
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-8 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-center hover-scale">
          Upcoming Events
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />
          
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors hover-scale"
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>

            {showFilters && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <label className="block text-sm font-medium mb-2">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  >
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div className="hover-scale" key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
