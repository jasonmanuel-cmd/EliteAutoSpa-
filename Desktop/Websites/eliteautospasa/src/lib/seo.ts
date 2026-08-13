import type { Metadata } from 'next';

export function generateMetadata({
  title,
  description,
  image,
  noIndex,
}: {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const baseTitle = 'Elite Auto Spa | PPF, Tint, Ceramic Coating in San Antonio & Boerne';
  const siteName = 'Elite Auto Spa';

  return {
    title: title ? `${title} | ${siteName}` : baseTitle,
    description: description ?? 'Elite Auto Spa — full-service vehicle restyling and mobile detailing in Boerne and greater San Antonio. PPF, window tint, ceramic coatings, vinyl wraps. 10+ years, 6,421+ vehicles serviced. Fully insured.',
    metadataBase: new URL('https://www.eliteautospasa.com'),
    openGraph: {
      title: title ? `${title} | ${siteName}` : baseTitle,
      description: description ?? 'Full-service vehicle restyling showroom and mobile detailing. PPF, tint, ceramic coatings, vinyl wraps. Serving Boerne and San Antonio, TX.',
      type: 'website',
      locale: 'en_US',
      siteName,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${siteName}` : baseTitle,
      description: description ?? 'Full-service vehicle restyling showroom and mobile detailing.',
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
