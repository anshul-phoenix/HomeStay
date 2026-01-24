import React from 'react';

const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Hotel Shivnandani Palace',
    description: 'Best heritage-style budget hotel near Mahakaleshwar Temple Ujjain. Just 200m from the temple exit. Secure parking, AC rooms, and top-rated hygiene.',
    image: [
      'https://content.jdmagicbox.com/v2/comp/ujjain/y6/9999px734.x734.240124142418.w9y6/catalogue/shivnandani-harsiddhi-gate-ujjain-hotels-pin33bqxjr-250.jpg'
    ],
    url: 'https://hotelshivnandanipalace.com',
    telephone: '+918109494267',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 116, Choubis Khamba Marg, Harsiddhi Road, Near Mahakaleshwar Mandir',
      addressLocality: 'Ujjain',
      addressRegion: 'Madhya Pradesh',
      postalCode: '456006',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.1849,
      longitude: 75.7700,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
      bestRating: '5',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mahakal Temple Exit/Entry',
        value: 'true',
        unitCode: 'M',
        valueReference: '200m' 
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mahakal Lok Nandi Dwar',
        value: 'true',
        unitCode: 'M',
        valueReference: '240m'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Harsiddhi Mata Mandir',
        value: 'true',
        unitCode: 'M',
        valueReference: '540m'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Ram Ghat (Shipra River)',
        value: 'true',
        unitCode: 'M',
        valueReference: '600m'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Kal Bhairav Temple',
        value: 'true',
        unitCode: 'KMT',
        valueReference: '4.5km'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mangalnath Temple',
        value: 'true',
        unitCode: 'KMT',
        valueReference: '5.2km'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Sandipani Ashram',
        value: 'true',
        unitCode: 'KMT',
        valueReference: '4.8km'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Ujjain Railway Station',
        value: 'true',
        unitCode: 'KMT',
        valueReference: '1.2km'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Secure Parking',
        value: 'true'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '24-hour check-in',
        value: 'true'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'AC Rooms',
        value: 'true'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Luggage Storage',
        value: 'true'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Doctor on Call',
        value: 'true'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pilgrim Guidance',
        value: 'true'
      }
    ],
    starRating: {
      '@type': 'Rating',
      ratingValue: '4'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
