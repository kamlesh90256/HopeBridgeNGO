import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/content';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by volunteers, partners, and supporters"
          description="A polished nonprofit experience is nothing without trust. These testimonials reflect the clarity, accountability, and momentum the platform is designed to create."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card-strong overflow-hidden p-6 sm:p-8"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[color:var(--surface-strong)] p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.12),_transparent_28%)]" />

              <div className="relative flex items-center gap-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${testimonials[activeIndex].accent} text-xl font-black text-slate-950`}>
                  {testimonials[activeIndex].name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Featured testimonial</p>
                  <h3 className="text-2xl font-bold text-[var(--text)]">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-[var(--muted)]">{testimonials[activeIndex].role}</p>
                </div>
              </div>

              <div className="relative mt-6 flex items-center gap-1 text-amber-400">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>

              <p className="relative mt-5 text-lg leading-8 text-[var(--text)] sm:text-xl">“{testimonials[activeIndex].quote}”</p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`glass-card flex items-center gap-4 p-4 text-left transition ${activeIndex === index ? 'border-sky-400/35' : ''}`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-sm font-black text-slate-950`}>
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[var(--text)]">{item.name}</p>
                  <p className="truncate text-sm text-[var(--muted)]">{item.quote}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
