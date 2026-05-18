import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/content';

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by volunteers, partners, and supporters"
          description="A polished nonprofit experience is nothing without trust. These testimonials reflect the clarity, accountability, and momentum the platform is designed to create."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.avatarColor} text-lg font-bold text-slate-950`}>
                {item.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div className="mt-5 flex items-center gap-1 text-amber-300">
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">“{item.quote}”</p>
              <div className="mt-6 h-px w-full bg-white/10" />
              <p className="mt-4 font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
