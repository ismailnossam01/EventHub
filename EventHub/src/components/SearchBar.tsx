import { Search } from 'lucide-react';

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
  category: string;
  setCategory: (category: string) => void;
}

export default function SearchBar({ search, setSearch, category, setCategory }: SearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="music">Music</option>
        <option value="business">Business</option>
        <option value="food">Food & Dining</option>
        <option value="health">Health & Wellness</option>
        <option value="entertainment">Entertainment</option>
        <option value="arts">Arts & Culture</option>
        <option value="sports">Sports</option>
        <option value="education">Education</option>
        <option value="lifestyle">Lifestyle</option>
      </select>
    </div>
  );
}