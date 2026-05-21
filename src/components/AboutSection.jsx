import { motion } from 'framer-motion';
import { FaCheckCircle, FaHandsHelping, FaLeaf, FaUsers } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { missionPillars, trustPoints } from '../data/content';

export default function AboutSection() {
  return (
    <section id="mission" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Mission"
          title="A nonprofit built around transparency, dignity, and community action"
          description="InAmigos Foundation connects donors, volunteers, and local partners to education, health, animal welfare, and relief programs that create visible outcomes and lasting trust."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {missionPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group glass-card p-6 transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-2xl text-sky-600 transition group-hover:scale-105 dark:text-sky-200">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card-strong p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-200">
                <FaCheckCircle />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Transparency snapshot</p>
                <h3 className="text-2xl font-bold text-[var(--text)]">Trust signals donors can verify</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] px-4 py-4 text-sm leading-7 text-[var(--muted)]">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Community promise</p>
            <p className="mt-4 text-xl leading-8 text-[var(--text)]">
              We do not just publish goals. We show progress, acknowledge supporters, and keep every campaign grounded in measurable human impact.
            </p>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-emerald-500/10 p-4 text-sm leading-7 text-[var(--muted)]">
              The design intentionally blends trust-building content, government-backed certifications, and a calmer emotional tone suited to a real nonprofit brand.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
