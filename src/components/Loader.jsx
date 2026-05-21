import { motion } from 'framer-motion';
import { FaHandsHelping } from 'react-icons/fa';

export default function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-card-strong px-8 py-10 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/25 bg-gradient-to-br from-sky-500/15 to-emerald-500/15 text-sky-600 dark:text-sky-200"
        >
          <FaHandsHelping className="text-2xl" />
        </motion.div>
        <p className="mt-5 text-lg font-semibold text-[var(--text)]">Loading InAmigos Foundation</p>
        <p className="mt-2 text-sm text-[var(--muted)]">Preparing the community impact experience...</p>
      </div>
    </div>
  );
}
