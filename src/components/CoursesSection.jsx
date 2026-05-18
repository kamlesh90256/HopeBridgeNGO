import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { programCards } from '../data/content';

export default function CoursesSection() {
  return (
    <section id="programs" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="Impact programs designed to meet real needs"
          description="Each program card highlights a mission area where support, coordination, and accountability turn intention into results."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programCards.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-950/20 backdrop-blur-xl transition hover:border-sky-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-2xl text-sky-300 transition group-hover:border-sky-400/30 group-hover:bg-sky-500/10">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{program.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{program.description}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/60 via-white/10 to-transparent" />
                <p className="mt-4 text-sm font-medium text-emerald-200">Hover to explore community impact</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
