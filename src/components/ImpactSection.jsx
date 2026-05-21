import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import AnimatedCounter from './AnimatedCounter';
import { impactCards, trustCertificationNote, trustPoints } from '../data/content';

export default function ImpactSection() {
  return (
    <section id="impact" className="section-shell">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Impact"
          title="Visible results, animated for clarity and trust"
          description="These metrics surface the scale of work in a format that feels immediately understandable to first-time visitors and returning supporters alike."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group glass-card p-6"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]`}>
                  <Icon className="text-2xl" />
                </div>
                <p className="mt-5 text-4xl font-black tracking-tight text-[var(--text)]">
                  <AnimatedCounter end={card.value} suffix="+" />
                </p>
                <h3 className="mt-2 text-xl font-bold text-[var(--text)]">{card.label}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.note}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card-strong p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Trust checklist</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] px-4 py-4 text-sm leading-7 text-[var(--muted)]">
                  {point}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Why this matters</p>
            <p className="mt-4 text-xl leading-8 text-[var(--text)]">
              The platform is designed to show impact in a way that feels warm, measurable, and trustworthy instead of crowded or overly transactional.
            </p>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-sky-500/10 to-emerald-500/10 p-4 text-sm leading-7 text-[var(--muted)]">
              {trustCertificationNote}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
