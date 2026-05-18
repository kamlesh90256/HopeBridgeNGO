import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import ImpactSection from './components/ImpactSection';
import FeaturesSection from './components/FeaturesSection';
import StatisticsSection from './components/StatisticsSection';
import TestimonialsSection from './components/TestimonialsSection';
import DonationSection from './components/DonationSection';
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
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Decorative background layers create the calm nonprofit atmosphere. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <ImpactSection />
        <FeaturesSection />
        <StatisticsSection />
        <TestimonialsSection />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
}
