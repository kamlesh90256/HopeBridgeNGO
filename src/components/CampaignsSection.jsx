import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { campaignCards } from '../data/content';

export default function CampaignsSection() {
  return (
    <section id="campaigns" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Campaigns"
          title="Focused campaigns with visible progress and clear categories"
          description="Each campaign card balances emotional storytelling with accountability so supporters can understand the purpose, progress, and current need at a glance."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {campaignCards.map((campaign, index) => {
            const Icon = campaign.icon;

            return (
              <motion.article
                key={campaign.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group glass-card p-5 transition-transform duration-200"
              >
                <div className={`rounded-[1.5rem] bg-gradient-to-br ${campaign.accent} p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]`}>
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] opacity-90">
                    <span>{campaign.category}</span>
                    <span>Live</span>
                  </div>
                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-2xl font-black">{campaign.impact}</p>
                      <p className="mt-1 text-sm/6 text-white/85">{campaign.summary}</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl backdrop-blur-sm">
                      <Icon />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-[var(--text)]">{campaign.title}</h3>
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                      {campaign.progress}%
                    </span>
                  </div>
                  <div className="mt-3 progress-track">
                    <div className="progress-fill" style={{ width: `${campaign.progress}%` }} />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{campaign.summary}</p>
                  <button type="button" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-600 dark:text-sky-200">
                    Read More
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}