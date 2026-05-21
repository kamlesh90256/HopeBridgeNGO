import { motion } from 'framer-motion';
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import AnimatedCounter from './AnimatedCounter';
import { heroStats } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section id="home" className="section-shell pt-8 sm:pt-10">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="section-label mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(34,197,94,0.9)]" />
            Empowering communities through action and care
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-4xl font-black tracking-tight text-[var(--text)] sm:text-5xl lg:text-7xl"
          >
            Building hope with{' '}
            <span className="bg-gradient-to-r from-sky-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-white dark:to-emerald-300">
              purpose
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg"
          >
            InAmigos Foundation supports communities through food drives, education support, animal welfare, plantation drives, and transparent grassroots action.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#donation"
              className="btn-primary"
            >
              Donate Now
              <FaArrowRight />
            </a>
            <a
              href="#volunteer"
              className="btn-secondary"
            >
              <FaPlayCircle />
              Become Volunteer
            </a>
            <a href="#campaigns" className="btn-secondary">
              Join Campaign
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {heroStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="glass-card px-4 py-4 text-left">
                  <div className="flex items-center gap-3 text-sky-600 dark:text-sky-200">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-2xl font-black leading-none text-[var(--text)] sm:text-3xl">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-sky-400/20 via-emerald-400/10 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl sm:p-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-gradient-to-br from-sky-500/16 via-white/50 to-emerald-500/12 p-5 dark:from-sky-500/12 dark:via-slate-950/50 dark:to-emerald-500/8 sm:p-7">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                <span>Community impact board</span>
                <span>Live outreach</span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.75rem] border border-sky-400/20 bg-gradient-to-br from-sky-500/15 to-emerald-500/10 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-sky-700 dark:text-sky-100">Neighborhood support network</p>
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-100">
                      2026
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-bold leading-tight text-[var(--text)] sm:text-3xl">
                    Coordination, relief, and measurable impact for every campaign.
                  </p>
                  <div className="mt-6 rounded-2xl bg-white/65 p-3 dark:bg-slate-950/40">
                    <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>Campaign completion</span>
                      <span>74%</span>
                    </div>
                    <div className="progress-track mt-3">
                      <div className="progress-fill w-[74%]" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    ['Food security', 'Meals, ration kits, outreach'],
                    ['Learning support', 'Girls, children, volunteers'],
                    ['Animal care', 'Daily feeding and rescue help'],
                  ].map(([title, text]) => (
                    <div key={title} className="glass-card p-4">
                      <p className="text-sm font-semibold text-[var(--text)]">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {['Donate', 'Volunteer', 'Partner'].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border)] bg-[color:var(--surface-strong)] px-4 py-4 text-center text-sm font-semibold text-[var(--text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
