import Link from 'next/link';
import Image from 'next/image';
import styles from './PromoCards.module.css';

const promos = [
  {
    id: 'free-wax',
    title: 'Free Wax with Full Interior Detail!',
    image: '/images/promo/mclaren.avif',
    alt: 'McLaren with free wax offer',
    href: '/blog/free-wax-with-interior-detail',
    icon: { type: 'eye', count: '200 views' },
  },
  {
    id: 'ppf-package',
    title: 'Full Front PPF Starting at $1,795',
    image: '/images/promo/truck-tire.avif',
    alt: 'Truck tire with PPF offer',
    href: '/paint-protection-film',
    badge: 'Up to $500 Off',
    icon: { type: 'heart', count: '1.2K saved' },
  },
];

export default function PromoCards() {
  return (
    <section className={styles.section} aria-labelledby="promo-heading">
      <div className={styles.wrapper}>
        <h2 className={styles.heading} id="promo-heading">Latest Offers</h2>
        <div className={styles.grid}>
          {promos.map(promo => (
            <article key={promo.id} className={styles.card}>
              <Link href={promo.href} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={promo.image}
                    alt={promo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.content}>
                  {promo.badge && (
                    <span className={styles.badge}>{promo.badge}</span>
                  )}
                  <h3 className={styles.title}>{promo.title}</h3>
                  <div className={styles.meta}>
                    <span className={styles.icon}>
                      {promo.icon.type === 'eye' ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      )}
                    </span>
                    <span className={styles.count}>{promo.icon.count}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
