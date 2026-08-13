'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Amin Lakhani',
    quote: 'Outstanding service and an absolutely stunning wrap on my Cybertruck! A heartfelt thank you to Dylan, an exceptional salesperson and a true gentleman. His expertise and professionalism exceeded my expectations. I highly recommend him for all PPF wraps and ceramic coating services. Thank you to the entire Elite Auto Spa team and especially to Dylan for delivering perfection! And no one can beat their price in San Antonio.',
    role: 'Cybertruck PPF + Ceramic Coating',
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    quote: 'The ceramic coating on my G-Wagon looks incredible. Dylan and the team took their time to make sure every inch was perfect. I drive past their showroom just to admire my own car now. Worth every penny.',
    role: 'Ceramic Coating — G-Wagon',
  },
  {
    id: 3,
    name: 'Sarah Chen',
    quote: 'I was nervous about getting PPF on my new 3 Series, but Elite Auto Spa made the whole process seamless. Mobile service came to my office, did the install, and the result is flawless. No dust, no bubbles, no scratches. Already recommending them to everyone.',
    role: 'PPF — BMW 3 Series',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive(prev => (prev + 1) % testimonials.length);
  const prev = () => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.section} aria-label="Customer testimonials">
      <div className={styles.wrapper}>
        <div className={styles.headingRow}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>What Our Customers Say</h2>
        </div>

        <div className={styles.carousel} role="region" aria-roledescription="testimonial carousel">
          <div
            className={styles.card}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${active + 1} of ${testimonials.length}`}
          >
            <div className={styles.quote}>
              <svg className={styles.quoteIcon} width="32" height="24" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
                <path d="M0 24V14.4C0 6.4 4.8 2.4 14.4 0L16 2.4V12C16 16.8 18 18.4 20.4 18.4C21.6 18.4 22.8 18 23.6 17.2C24.8 18.4 26.4 19.2 28 20.4V24H0Z" />
              </svg>
              <blockquote className={styles.text}>
                {testimonials[active].quote}
              </blockquote>
            </div>
            <div className={styles.attribution}>
              <span className={styles.name}>{testimonials[active].name}</span>
              <span className={styles.role}>{testimonials[active].role}</span>
            </div>
          </div>

          <div className={styles.controls}>
            <button
              className={`${styles.ctrl} ${styles.ctrlPrev}`}
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  role="tab"
                  aria-selected={i === active}
                  aria-controls="testimonial-slide"
                />
              ))}
            </div>

            <button
              className={`${styles.ctrl} ${styles.ctrlNext}`}
              onClick={next}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
