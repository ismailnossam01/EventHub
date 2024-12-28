import { Event } from '../types/event';

export const events: Event[] = [
  // Technology Events
  {
    id: '1',
    title: 'Tech Innovation Summit 2024',
    date: '2024-04-15',
    time: '09:00 AM',
    location: 'Silicon Valley Convention Center',
    description: 'Join industry leaders for a day of inspiring talks and workshops about the latest technology trends and innovations.',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Tech Forward',
    price: '$299'
  },
  {
    id: '2',
    title: 'AI & Machine Learning Conference',
    date: '2024-05-20',
    time: '10:00 AM',
    location: 'Digital Innovation Hub',
    description: 'Explore the future of AI and machine learning with expert speakers and hands-on workshops.',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2400&q=80',
    organizer: 'AI Society',
    price: '$199'
  },
  {
    id: '3',
    title: 'Cybersecurity Summit',
    date: '2024-06-10',
    time: '09:00 AM',
    location: 'Tech Security Center',
    description: 'Learn about the latest cybersecurity threats and defense strategies from industry experts.',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80',
    organizer: 'CyberSec Pro',
    price: '$249'
  },
  // Music Events
  {
    id: '4',
    title: 'Summer Music Festival',
    date: '2024-06-20',
    time: '04:00 PM',
    location: 'Central Park Amphitheater',
    description: 'Experience an unforgettable evening of live music featuring top artists from around the world.',
    category: 'music',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Music Events Co.',
    price: '$75'
  },
  {
    id: '5',
    title: 'Jazz Night Under the Stars',
    date: '2024-07-15',
    time: '07:00 PM',
    location: 'Riverside Jazz Club',
    description: 'An evening of smooth jazz featuring local and international jazz artists.',
    category: 'music',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Jazz Society',
    price: '$45'
  },
  {
    id: '6',
    title: 'Classical Symphony Night',
    date: '2024-08-01',
    time: '06:30 PM',
    location: 'Grand Concert Hall',
    description: 'Experience the magic of classical music with a full symphony orchestra.',
    category: 'music',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Symphony Society',
    price: '$60'
  },
  // Business Events
  {
    id: '7',
    title: 'Global Business Forum',
    date: '2024-08-10',
    time: '08:00 AM',
    location: 'World Trade Center',
    description: 'Connect with business leaders and explore global market opportunities.',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Global Business Network',
    price: '$399'
  },
  {
    id: '8',
    title: 'Startup Pitch Competition',
    date: '2024-09-05',
    time: '10:00 AM',
    location: 'Innovation Hub',
    description: 'Watch promising startups pitch their ideas to top investors.',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Startup Accelerator',
    price: '$149'
  },
  // Food Events
  {
    id: '9',
    title: 'International Food Festival',
    date: '2024-07-20',
    time: '11:00 AM',
    location: 'City Food Park',
    description: 'Taste cuisines from around the world at this exciting food festival.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Global Flavors',
    price: '$30'
  },
  {
    id: '10',
    title: 'Wine & Cheese Tasting',
    date: '2024-08-25',
    time: '06:00 PM',
    location: 'Vintage Winery',
    description: 'An elegant evening of wine tasting paired with artisanal cheeses.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Wine Enthusiasts',
    price: '$85'
  },
  // Health Events
  {
    id: '11',
    title: 'Wellness & Yoga Retreat',
    date: '2024-09-15',
    time: '07:00 AM',
    location: 'Serenity Resort',
    description: 'A day of wellness activities, yoga sessions, and meditation.',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Wellness Collective',
    price: '$120'
  },
  // Entertainment Events
  {
    id: '12',
    title: 'Comedy Night Spectacular',
    date: '2024-10-01',
    time: '08:00 PM',
    location: 'Laugh Factory',
    description: 'An evening of non-stop laughter with top comedians.',
    category: 'entertainment',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Comedy Club',
    price: '$40'
  },

  {
    id: '30',
    title: 'Digital Art Exhibition',
    date: '2024-12-15',
    time: '10:00 AM',
    location: 'Modern Art Gallery',
    description: 'Experience the future of art with interactive digital installations.',
    category: 'arts',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Digital Arts Collective',
    price: '$25'
  },
  // Additional 20 events
  {
    id: '31',
    title: 'Blockchain Summit 2024',
    date: '2024-06-25',
    time: '09:00 AM',
    location: 'Tech Hub Conference Center',
    description: 'Discover the future of blockchain technology and its applications.',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Blockchain Network',
    price: '$350'
  },
  {
    id: '32',
    title: 'Rock Fest 2024',
    date: '2024-08-10',
    time: '05:00 PM',
    location: 'Open Air Stadium',
    description: 'A night of electrifying performances by top rock bands.',
    category: 'music',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Rock Nation',
    price: '$99'
  },
  {
    id: '33',
    title: 'Startup Founders Meet',
    date: '2024-09-15',
    time: '03:00 PM',
    location: 'Innovation Hub',
    description: 'A networking event for startup founders and investors.',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Startup Circle',
    price: '$150'
  },
  {
    id: '34',
    title: 'Gourmet Food Tasting',
    date: '2024-07-05',
    time: '06:00 PM',
    location: 'Downtown Culinary Center',
    description: 'Taste exquisite dishes by renowned chefs.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Foodie Network',
    price: '$70'
  },
  {
    id: '35',
    title: 'Fitness Bootcamp',
    date: '2024-06-15',
    time: '07:00 AM',
    location: 'City Sports Complex',
    description: 'A day of intensive fitness training with top trainers.',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zml0bmVzcyUyMGJvb3RjYW1wfGVufDB8fDB8fHww',
    organizer: 'Health First',
    price: '$50'
  },
  {
    id: '36',
    title: 'Stand-Up Comedy Night',
    date: '2024-07-15',
    time: '08:00 PM',
    location: 'Comedy Club Downtown',
    description: 'Enjoy a hilarious evening with popular comedians.',
    category: 'entertainment',
    image: 'https://media.istockphoto.com/id/1667997784/photo/young-woman-talking-during-stand-up-comedy-show.webp?a=1&b=1&s=612x612&w=0&k=20&c=efCHp-SAsogrJM5MBRMOkFt0L87Vd4PxRi8DbNmbcSE=',
    organizer: 'Laugh Out Loud',
    price: '$35'
  },
  {
    id: '37',
    title: 'Art & Sculpture Fair',
    date: '2024-09-25',
    time: '10:00 AM',
    location: 'City Art Gallery',
    description: 'A display of stunning art and sculptures by talented artists.',
    category: 'arts',
    image: 'https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwJTI2JTIwc2N1bHB0dXJlfGVufDB8fDB8fHww',
    organizer: 'Artistic Minds',
    price: '$25'
  },
  {
    id: '38',
    title: 'Marathon 2024',
    date: '2024-10-10',
    time: '06:00 AM',
    location: 'City Main Square',
    description: 'Join runners from around the world for a marathon event.',
    category: 'sports',
    image: 'https://media.istockphoto.com/id/1478466587/photo/legs-two-male-runners-running-city-marathon-race-athletes-jogging-on-asphalt-road-summer.webp?a=1&b=1&s=612x612&w=0&k=20&c=OhnRzpzf627CCu1S-Ja7ICV9FMO91HzbkFO7L7m3YPk=',
    organizer: 'Run Club',
    price: '$20'
  },
  {
    id: '39',
    title: 'Educational Workshop: Coding for Beginners',
    date: '2024-08-20',
    time: '09:00 AM',
    location: 'Tech Academy',
    description: 'A hands-on workshop for coding enthusiasts with no prior experience.',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Code Academy',
    price: '$40'
  },
  {
    id: '40',
    title: 'Lifestyle Expo 2024',
    date: '2024-11-15',
    time: '11:00 AM',
    location: 'Expo Center',
    description: 'Explore the latest trends in lifestyle, fashion, and wellness.',
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=2400&q=80',
    organizer: 'Trendy Events',
    price: '$10'
  },
];