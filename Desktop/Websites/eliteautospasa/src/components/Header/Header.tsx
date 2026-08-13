'use client';

import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/paint-protection-film', label: 'Paint Protection Film' },
  { href: '/ceramic', label: 'Ceramic' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-conditions', label: 'Terms & Conditions' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Elite Auto Spa home">
          <LogoMark />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href="tel:8304312088" className={styles.callNow}>
          CALL NOW
        </a>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="120" height="48" viewBox="0 0 120 48" fill="none" aria-hidden="true">
      <circle cx="60" cy="24" r="22" stroke="#c0c0c0" strokeWidth="1.5" fill="none" />
      <path d="M34 24 L24 18 L24 30 Z M86 24 L96 18 L96 30 Z" fill="#c0c0c0" />
      <text x="60" y="28" textAnchor="middle" fill="#c0c0c0" fontSize="18" fontWeight="700" fontFamily="Oswald, sans-serif" letterSpacing="2">EAS</text>
      <text x="60" y="44" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="500" fontFamily="Roboto, sans-serif" letterSpacing="1.5">ELITE AUTO SPA</text>
    </svg>
  );
}
