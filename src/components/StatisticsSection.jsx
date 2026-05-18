import { motion } from 'framer-motion';
import { statistics } from '../data/content';

export default function StatisticsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-10">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statistics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 px-6 py-7 text-center"
              >
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
