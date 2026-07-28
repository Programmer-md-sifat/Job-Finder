import React from 'react';
import AboutHero from '../components/aboutus/AboutHero';
import ValuesGrid from '../components/aboutus/ValuesGrid';
import ContactFormSection from '../components/aboutus/ContactFormSection';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#EFECEC]">
      <AboutHero />
      <ValuesGrid />
      <ContactFormSection />
    </main>
  );
}
