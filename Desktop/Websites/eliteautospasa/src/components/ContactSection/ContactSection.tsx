'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    countryCode: '+1',
    services: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      setFormState('error');
      return;
    }
    setFormState('submitting');
    // Server action placeholder — replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 800));
    setFormState('success');
  };

  if (formState === 'success') {
    return (
      <section className={styles.section} id="contact" aria-labelledby="contact-heading">
        <div className={styles.wrapper}>
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className={styles.successTitle}>Thank you!</h2>
            <p className={styles.successText}>
              We'll get back to you within 24 hours. For immediate assistance, call (830) 431-2088.
            </p>
            <button className={styles.resetBtn} onClick={() => setFormState('idle')}>
              Send another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.wrapper}>
        <div className={styles.split}>
          <div className={styles.formSide}>
            <h2 className={styles.heading} id="contact-heading">How can we help?</h2>
            <p className={styles.subheading}>
              Tell us about your vehicle and what you're looking for. We'll follow up within 24 hours.
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName" className={styles.label}>First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="John"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Doe"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="phone" className={styles.label}>Phone</label>
                  <div className={styles.phoneGroup}>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className={styles.select}
                      aria-label="Country code"
                    >
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (AU)</option>
                    </select>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="830-431-2088"
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <span className={styles.checkboxLabel}>I'm interested in:</span>
                <div className={styles.checkboxes} role="group" aria-label="Services">
                  {[
                    { value: 'Tint', label: 'Window Tint' },
                    { value: 'Ceramic Coating', label: 'Ceramic Coating' },
                    { value: 'Paint Protection Film', label: 'Paint Protection Film' },
                    { value: 'Mobile Detailing', label: 'Mobile Detailing' },
                  ].map(({ value, label }) => (
                    <label key={value} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        name="services"
                        checked={formData.services.includes(value)}
                        onChange={() => toggleService(value)}
                        className={styles.checkboxInput}
                      />
                      <span className={styles.checkboxMark} />
                      <span className={styles.checkboxText}>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formState === 'error' && (
                <p className={styles.errorMsg} role="alert">
                  Please fill in all required fields.
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </div>

          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              {/* Placeholder until we grab the car wash image from Wix */}
              <div className={styles.placeholderBg}>
                <div className={styles.carSilhouette}>
                  <div className={styles.carBody} />
                  <div className={styles.carWindow} />
                  <div className={styles.waterDrop} />
                  <div className={styles.waterDrop2} />
                </div>
              </div>
              <div className={styles.overlay} />
            </div>
            <div className={styles.signature}>
              <span className={styles.signatureText}>“Dylan Grady”</span>
              <span className={styles.signatureRole}>Lead Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
