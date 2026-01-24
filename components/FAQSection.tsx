'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How far is the hotel from Mahakal Temple and Mahakal Lok?",
      answer: "Hotel Shivnandani Palace is located just 200m (approx. 4-5 minutes walking distance) from the Mahakaleshwar Temple exit and 240m from Mahakal Lok Nandi Dwar. Ideally situated for pilgrims attending the Bhasma Aarti."
    },
    {
      question: "Is there parking available at Hotel Shivnandani Palace?",
      answer: "Yes, we offer secure on-site parking facilities for our guests. You can bring your vehicle without worry, making us a top choice for travelers with cars near the temple."
    },
    {
      question: "How far is the Ujjain Railway Station from the hotel?",
      answer: "The Ujjain Junction Railway Station is approximately 1.5km from our hotel. You can easily reach us by auto-rickshaw in about 10 minutes."
    },
    {
      question: "Is Hotel Shivnandani Palace a good alternative to a Dharmshala in Ujjain?",
      answer: "Yes! While we offer the cleanliness and comfort of a hotel with AC rooms and attached washrooms, our budget-friendly prices and close proximity to the temple make us an excellent, more comfortable alternative to traditional Dharmshalas for families visiting the Palace."
    },
    {
      question: "What is the best time to visit Mahakaleshwar Temple and Ujjain?",
      answer: "The best time to visit is during the cooler months from October to March. However, for religious significance, Sawan (July-August) and Mahashivratri are popular, though very crowded. Ujjain also hosts the Simhastha Kumbh Mela every 12 years."
    },
    {
      question: "How far is Ram Ghat and Shipra River from the hotel?",
      answer: "Ram Ghat and the Shipra River are approximately 600m from our hotel, making it easy to attend the evening Aarti."
    },
    {
      question: "Do you have AC rooms and Free Wi-Fi?",
      answer: "Absolutely. All our rooms are equipped with Air Conditioning, and we provide complimentary high-speed Wi-Fi for all guests."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dynamic FAQ JSON-LD Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        {/* Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Have Questions?</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about your stay at Hotel Shivnandani Palace.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-earth-50/30"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-orange-600' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
