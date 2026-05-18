import { motion } from 'framer-motion';
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-emerald-200 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
            Empowering communities through action and care
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Building Hope with <span className="bg-gradient-to-r from-emerald-300 via-white to-sky-300 bg-clip-text text-transparent">Purpose</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            InAmigos Foundation supports communities through food drives, social work, charity campaigns, cleanliness initiatives, and transparent grassroots action.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#donation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02] hover:shadow-blue-500/30"
            >
              Donate Now
              <FaArrowRight />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-sky-400/30 hover:bg-sky-500/10"
            >
              <FaPlayCircle />
              Explore Programs
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center sm:gap-4"
          >
            {[
              ['Local', 'Action'],
              ['Impact', 'First'],
              ['Volunteer', 'Powered'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl">
                <p className="text-lg font-semibold text-white sm:text-xl">{title}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{subtitle}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
              {/* Placeholder illustration card: replace with branded artwork if available later. */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/20 via-transparent to-white/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-2xl sm:p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(15,23,42,0.65))] p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Community Impact Hub</span>
                <span>Live Outreach</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-sky-400/20 bg-sky-500/10 p-5">
                  <p className="text-sm font-medium text-emerald-200">Neighborhood Support Network</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Coordination, relief, and measurable impact for every project.</p>
                  <div className="mt-6 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[74%] rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.65)]" />
                  </div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Impact reach</p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Programs</p>
                    <p className="mt-2 text-lg font-semibold text-white">Education, health, relief</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Outcome</p>
                    <p className="mt-2 text-lg font-semibold text-white">Stronger communities</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {['Donate', 'Volunteer', 'Partner'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-200">
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
