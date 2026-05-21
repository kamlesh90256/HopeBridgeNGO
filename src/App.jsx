import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CampaignsSection from './components/CampaignsSection';
import ImpactSection from './components/ImpactSection';
import DonationSection from './components/DonationSection';
import VolunteerSection from './components/VolunteerSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');

    const timer = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="page-shell min-h-screen"
    >
      <div className="page-glow" />

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CampaignsSection />
        <ImpactSection />
        <DonationSection />
        <VolunteerSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
}
