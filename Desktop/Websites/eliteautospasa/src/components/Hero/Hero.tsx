import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.background}>
        {/* Truck headlights hero image — placeholder until we grab from Wix */}
        <div className={styles.imageWrapper}>
          <div className={styles.placeholderImage}>
            <div className={styles.truckSilhouette}>
              <div className={styles.headlightGlow} />
              <div className={styles.grille}>
                <div className={styles.gridLines} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <LogoLarge />
        <h1 className={styles.headline}>Revitalize Your Ride</h1>
        <div className={styles.actions}>
          <a href="#contact" className={styles.getStarted}>
            Get Started
          </a>
          <a href="tel:8304312088" className={styles.callNowSm}>
            (830) 431-2088
          </a>
        </div>
      </div>
    </section>
  );
}

function LogoLarge() {
  return (
    <div className={styles.logoLarge}>
      <svg width="140" height="56" viewBox="0 0 120 48" fill="none" aria-hidden="true">
        <circle cx="60" cy="24" r="22" stroke="#c0c0c0" strokeWidth="1.5" fill="none" />
        <path d="M34 24 L24 18 L24 30 Z M86 24 L96 18 L96 30 Z" fill="#c0c0c0" />
        <text x="60" y="28" textAnchor="middle" fill="#c0c0c0" fontSize="18" fontWeight="700" fontFamily="Oswald, sans-serif" letterSpacing="2">EAS</text>
        <text x="60" y="44" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="500" fontFamily="Roboto, sans-serif" letterSpacing="1.5">ELITE AUTO SPA</text>
      </svg>
    </div>
  );
}
