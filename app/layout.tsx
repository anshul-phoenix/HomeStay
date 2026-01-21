import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homestay Near Mahakal Temple, Ujjain | Nigam Homestay',
  description: 'Clean, safe, and affordable family stay just minutes walking distance from Mahakaleshwar Jyotirlinga. Book AC/Non-AC rooms directly via WhatsApp.',
  keywords: 'Mahakaleshwar Homestay, Ujjain Accommodation, Hotel Near Mahakal Temple, Family Stay Ujjain, Nigam Homestay',
  openGraph: {
    type: 'website',
    title: 'Homestay Near Mahakal Temple, Ujjain | Nigam Homestay',
    description: 'Clean, safe, and affordable family stay just minutes walking distance from Mahakaleshwar Jyotirlinga. Book AC/Non-AC rooms directly via WhatsApp.',
    images: ['https://picsum.photos/1200/630?random=1'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homestay Near Mahakal Temple, Ujjain | Nigam Homestay',
    description: 'Clean, safe, and affordable family stay just minutes walking distance from Mahakaleshwar Jyotirlinga. Book AC/Non-AC rooms directly via WhatsApp.',
    images: ['https://picsum.photos/1200/630?random=1'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: {
                      50: '#f0f9ff',
                      100: '#e0f2fe',
                      500: '#0ea5e9',
                      600: '#0284c7',
                      900: '#0c4a6e',
                    },
                    earth: {
                      100: '#f5f5f4',
                      200: '#e7e5e4',
                      800: '#44403c',
                      900: '#292524',
                    }
                  },
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                    serif: ['Playfair Display', 'serif'],
                  }
                }
              }
            }
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: 'Inter', sans-serif; }
            h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
          `
        }} />
      </head>
      <body className="bg-earth-100 text-earth-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}