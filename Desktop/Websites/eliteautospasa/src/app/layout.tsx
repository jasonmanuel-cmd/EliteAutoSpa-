import type { Metadata } from 'next';
import '@/styles/globals.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Elite Auto Spa | PPF, Tint, Ceramic Coating in San Antonio & Boerne',
    template: '%s | Elite Auto Spa',
  },
  description:
    'Elite Auto Spa — full-service vehicle restyling and mobile detailing in Boerne and greater San Antonio. PPF, window tint, ceramic coatings, vinyl wraps. 10+ years, 6,421+ vehicles serviced. Fully insured.',
  metadataBase: new URL('https://www.eliteautospasa.com'),
  openGraph: {
    title: 'Elite Auto Spa | PPF, Tint, Ceramic Coating in San Antonio & Boerne',
    description:
      'Full-service vehicle restyling showroom and mobile detailing. PPF, tint, ceramic coatings, vinyl wraps. Serving Boerne and San Antonio.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Auto Spa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Auto Spa | PPF, Tint, Ceramic Coating in San Antonio & Boerne',
    description:
      'Full-service vehicle restyling showroom and mobile detailing. PPF, tint, ceramic coatings, vinyl wraps.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
