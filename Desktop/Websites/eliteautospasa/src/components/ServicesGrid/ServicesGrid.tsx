'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesGrid.module.css';

interface Service {
  id: string;
  title: string;
  href: string;
  images: { src: string; alt: string }[];
}

const services: Service[] = [
  {
    id: 'ppf',
    title: 'PROTECTION FILM',
    href: '/paint-protection-film',
    images: [
      { src: '/images/services/protectivefilm.avif', alt: 'Paint protection film on BMW front grille' },
      { src: '/images/services/protectivefilm.avif', alt: 'PPF installation detail' },
    ],
  },
  {
    id: 'tint',
    title: 'TINT',
    href: '/tint',
    images: [
      { src: '/images/services/tints.avif', alt: 'Window tint on black sports car' },
      { src: '/images/services/tints.avif', alt: 'Tint installation' },
    ],
  },
  {
    id: 'detailing',
    title: 'MOBILE DETAILING',
    href: '/mobile-detailing',
    images: [
      { src: '/images/services/mobiledetailing.avif', alt: 'Mobile detailing interior' },
      { src: '/images/services/mobiledetailing.avif', alt: 'Mobile detailing detail' },
    ],
  },
  {
    id: 'ceramic',
    title: 'CERAMIC COATINGS',
    href: '/ceramic',
    images: [
      { src: '/images/services/ceramiccoating.avif', alt: 'Ceramic coating on vehicle grille' },
      { src: '/images/services/ceramiccoating.avif', alt: 'Ceramic coating detail' },
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {services.map(service => (
            <article key={service.id} className={styles.card}>
              <Link href={service.href} className={styles.cardLink}>
                <div className={styles.cardImageGroup}>
                  {service.images.map((img, i) => (
                    <div key={i} className={styles.cardImage}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className={styles.image}
                        priority={i === 0}
                      />
                      <div className={styles.imageOverlay} />
                    </div>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href={service.href}>{service.title}</Link>
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
