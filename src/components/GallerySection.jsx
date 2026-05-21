import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { galleryItems } from '../data/content';

export default function GallerySection() {
  return (
    <section id="gallery" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual story of field work, community action, and shared momentum"
          description="These gallery tiles are intentionally designed as image placeholders so the site can feel complete even before a full photography library is available."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[color:var(--surface)] shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            >
              <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${item.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_40%)]" />
                <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:scale-105 group-hover:bg-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}