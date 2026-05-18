import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { featureCards } from '../data/content';

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Operational tools that help every campaign move"
          description="The platform blends transparency, coordination, and progress visibility into one simple nonprofit workflow designed for trust and momentum."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 backdrop-blur-xl transition hover:border-sky-400/30 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-2xl text-sky-300 transition group-hover:scale-105">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
