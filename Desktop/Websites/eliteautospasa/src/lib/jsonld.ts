const SITE_URL = 'https://www.eliteautospasa.com';

export function LocalBusinessJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Elite Auto Spa',
    legalName: 'Elite Mobile Detail LLC, DBA Elite Auto Spa',
    url: SITE_URL,
    telephone: '+18304312088',
    email: 'contact@eliteautospasa.com',
    image: `${SITE_URL}/favicon.svg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '108 Scheele Rd, Unit 3',
      addressLocality: 'Boerne',
      addressRegion: 'TX',
      postalCode: '78015',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.7046,
      longitude: -98.6455,
    },
    areaServed: ['San Antonio, TX', 'Boerne, TX', 'Kendall County, TX'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
        description: 'By appointment only',
      },
    ],
    sameAs: [
      'https://www.instagram.com/eliteautospasa/',
      'https://www.facebook.com/eliteautospasa/',
    ],
    description: 'Elite Auto Spa is a full-service vehicle restyling and mobile detailing company serving Boerne and the greater San Antonio area. Services include paint protection film (PPF), window tint, ceramic coatings, vinyl wraps, mobile detailing, paint correction, and vehicle restoration. In business for over 10 years with 6,421+ vehicles serviced. Fully insured.',
    founder: {
      '@type': 'Person',
      name: 'Dylan Grady',
      jobTitle: 'Lead Specialist',
    },
  };
}

export function ServiceJSONLD({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'AutoRepair',
      name: 'Elite Auto Spa',
      url: SITE_URL,
      telephone: '+18304312088',
    },
    areaServed: areaServed ?? ['San Antonio, TX', 'Boerne, TX'],
    description,
  };
}

export function FAQPageJSONLD(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function ArticleJSONLD({
  title,
  description,
  author,
  datePublished,
  image,
  url,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  image?: string;
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Elite Auto Spa',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    datePublished,
    image: image ?? `${SITE_URL}/favicon.svg`,
    url: url ?? `${SITE_URL}/blog/${title.toLowerCase().replace(/\s+/g, '-')}`,
  };
}
