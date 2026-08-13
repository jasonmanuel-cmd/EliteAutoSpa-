'use client';

import { useEffect } from 'react';
import { LocalBusinessJSONLD, ServiceJSONLD, FAQPageJSONLD } from '@/lib/jsonld';

export default function SeoJSONLD() {
  useEffect(() => {
    const lb = LocalBusinessJSONLD();
    const s = ServiceJSONLD({
      name: 'Paint Protection Film',
      description: 'Paint Protection Film (PPF) from Elite Auto Spa in Boerne, TX — transparent urethane film applied to vehicle paint to protect against rock chips, scratches, bug stains, and road debris. Serving San Antonio and Boerne.',
      areaServed: ['San Antonio, TX', 'Boerne, TX'],
    });
    const faq = FAQPageJSONLD([
      {
        question: 'Does paint protection film yellow over time?',
        answer: 'High-quality PPF from Elite Auto Spa uses self-healing polyurethane with UV inhibitors that resist yellowing. With proper care, the film stays clear for 5-7 years or more.',
      },
      {
        question: 'How long does paint protection film last?',
        answer: 'A professional PPF installation from Elite Auto Spa typically lasts 5-7 years with proper maintenance. The film is highly durable and designed to protect your vehicle\'s paint long-term.',
      },
      {
        question: 'Is paint protection film removable?',
        answer: 'Yes. PPF is designed to be removable without damaging your vehicle\'s factory paint when removed by a professional. Elite Auto Spa offers removal services in the San Antonio and Boerne area.',
      },
      {
        question: 'Does paint protection film affect insurance?',
        answer: 'PPF does not negatively affect insurance. In fact, some insurers recognize PPF as a protective measure and may offer reduced premiums for vehicles with professional film installed. Check with your insurer.',
      },
      {
        question: 'How much does paint protection film cost in San Antonio?',
        answer: 'Elite Auto Spa offers full front PPF packages starting at $1,795 in the San Antonio and Boerne area. Pricing depends on vehicle size and coverage area. Contact us for a custom quote.',
      },
    ]);

    const scripts = [lb, s, faq].map(data => {
      const json = JSON.stringify(data);
      return document.createElement('script');
    });

    // Use a single script tag with combined JSON-LD
    const combined = {
      '@context': 'https://schema.org',
      '@graph': [lb, s, faq],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(combined);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
