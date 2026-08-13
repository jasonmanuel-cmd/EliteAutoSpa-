import type { Metadata } from 'next';
import EntranceClient from './EntranceClient';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import ContactSection from '@/components/ContactSection/ContactSection';
import Testimonials from '@/components/Testimonials/Testimonials';
import StatsBand from '@/components/StatsBand/StatsBand';
import PromoCards from '@/components/PromoCards/PromoCards';
import SeoJSONLD from '@/lib/SeoJSONLD';

export const metadata: Metadata = {
  title: 'Elite Auto Spa | PPF, Tint, Ceramic Coating in San Antonio & Boerne',
  description:
    'Elite Auto Spa — full-service vehicle restyling and mobile detailing in Boerne and greater San Antonio. PPF, window tint, ceramic coatings, vinyl wraps. 10+ years, 6,421+ vehicles serviced. Fully insured.',
};

export default function HomePage() {
  return (
    <>
      <SeoJSONLD />
      <EntranceClient />
      <Header />
      <main id="main-content" style={{ paddingTop: '80px', background: '#000' }}>
        <Hero />
        <ServicesGrid />
        <ContactSection />
        <Testimonials />
        <StatsBand />
        <PromoCards />
      </main>
      <Footer />
    </>
  );
}
