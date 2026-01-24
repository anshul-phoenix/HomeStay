import type { Metadata } from 'next';
import './globals.css';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Best Hotel in Ujjain Near Mahakal & Harsiddhi | Hotel Shivnandani Palace',
  description: 'Welcome to Hotel Shivnandani Palace, Ujjain. Just 200m from Mahakaleshwar Temple exit. Secure parking, clean AC rooms, and 24-hour check-in available for pilgrims and families.',
  keywords: [
    // Primary Landmark Entities
    'Mahakaleshwar Jyotirlinga',
    'Mahakal Lok Corridor',
    'Mahakal Lok Nandi Dwar',
    'Shree Mahakaleshwar Temple',
    'Harsiddhi Mata Shaktipeeth',
    'Ram Ghat Aarti',
    'Shipra River',
    'Kshipra River',
    'Bhasma Aarti',
    'Kal Bhairav Temple',
    'Mangalnath Temple',
    'Sandipani Ashram',
    'Ujjain Kumbh Mela',
    'Simhastha',
    
    // Proximity & Location
    'Hotel near Mahakal Temple walking distance',
    'Best hotel near Harsiddhi Temple Ujjain',
    'Hotel near Ram Ghat Ujjain',
    'Hotels near Mahakal Lok Corridor Gate',
    'Stay near Shipra River Ghats',
    'Hotel near Ujjain Railway Station',
    'Hotels on Mahakal Marg',
    
    // Amenities & Intent
    'Hotel in Ujjain with Car Parking',
    'Safe parking near Mahakal Temple',
    'Family hotel in Ujjain',
    'Budget hotel in Ujjain near Temple',
    'Best place to stay for Bhasma Aarti',
    'AC Rooms in Ujjain',
    'Clean washrooms and hygiene',
    '24-hour check-in hotel Ujjain',
    'Dharmshala alternative in Ujjain'
  ].join(', '),
  
  authors: [{ name: 'Hotel Shivnandani Palace' }],
  creator: 'Hotel Shivnandani Palace',
  publisher: 'Hotel Shivnandani Palace',
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hotelshivnandanipalace.com',
    siteName: 'Hotel Shivnandani Palace',
    title: 'Best Hotel in Ujjain Near Mahakal & Harsiddhi | Hotel Shivnandani Palace',
    description: 'Looking for a stay in Ujjain? Experience luxury and heritage at Hotel Shivnandani Palace. Just 200m from Mahakal Temple exit. Secure parking available.',
    images: [
      {
        url: 'https://content.jdmagicbox.com/v2/comp/ujjain/y6/9999px734.x734.240124142418.w9y6/catalogue/shivnandani-harsiddhi-gate-ujjain-hotels-pin33bqxjr-250.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Shivnandani Palace - Guest House Near Mahakal Temple Ujjain',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Shivnandani Palace | Best Hotel Near Mahakal Temple',
    description: '200m walk to Mahakal Temple. Secure parking & AC Rooms.',
    images: ['https://content.jdmagicbox.com/v2/comp/ujjain/y6/9999px734.x734.240124142418.w9y6/catalogue/shivnandani-harsiddhi-gate-ujjain-hotels-pin33bqxjr-250.jpg'],
  },
  
  icons: {
    icon: '/favicon.svg',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  other: {
    'geo.region': 'IN-MP',
    'geo.placename': 'Ujjain',
    'geo.position': '23.1849;75.7700',
    'ICBM': '23.1849, 75.7700',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="bg-earth-100 text-earth-900 antialiased selection:bg-brand-100 selection:text-brand-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}