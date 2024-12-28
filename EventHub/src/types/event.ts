export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'sports' | 'music' | 'education' | 'technology' | 'arts' | 'food' | 'business' | 'lifestyle' | 'health' | 'entertainment';
  image: string;
  time: string;
  organizer: string;
  price: string;
  isRegistered?: boolean;
}