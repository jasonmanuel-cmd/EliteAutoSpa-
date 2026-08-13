import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <LogoMark />
          <p className={styles.tagline}>
            108 Scheele Rd, Unit 3<br />
            Boerne, TX 78015
          </p>
          <p className={styles.serviceArea}>
            Serving San Antonio &amp; Boerne, TX
          </p>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>Get in touch</h3>
          <a href="tel:8304312088" className={styles.contactLink}>
            (830) 431-2088
          </a>
          <a href="mailto:contact@eliteautospasa.com" className={styles.contactLink}>
            contact@eliteautospasa.com
          </a>
          <p className={styles.hours}>
            Mon–Fri: 9AM–5PM<br />
            Sat: appointment only<br />
            Sun: closed
          </p>
        </div>

        <div className={styles.social}>
          <h3 className={styles.socialTitle}>Follow us</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/eliteautospasa/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Elite Auto Spa on Instagram"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/eliteautospasa/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Elite Auto Spa on Facebook"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>

        <div className={styles.nav}>
          <h3 className={styles.navTitle}>Pages</h3>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/paint-protection-film">Paint Protection Film</Link></li>
            <li><Link href="/ceramic">Ceramic</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.legal}>
          &copy; {new Date().getFullYear()} Elite Auto Spa. All rights reserved.
        </p>
        <p className={styles.legal}>
          Legal entity: Elite Mobile Detail LLC, DBA Elite Auto Spa
        </p>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="100" height="40" viewBox="0 0 120 48" fill="none" aria-hidden="true">
      <circle cx="60" cy="24" r="22" stroke="#c0c0c0" strokeWidth="1.5" fill="none" />
      <path d="M34 24 L24 18 L24 30 Z M86 24 L96 18 L96 30 Z" fill="#c0c0c0" />
      <text x="60" y="28" textAnchor="middle" fill="#c0c0c0" fontSize="18" fontWeight="700" fontFamily="Oswald, sans-serif" letterSpacing="2">EAS</text>
      <text x="60" y="44" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="500" fontFamily="Roboto, sans-serif" letterSpacing="1.5">ELITE AUTO SPA</text>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}
