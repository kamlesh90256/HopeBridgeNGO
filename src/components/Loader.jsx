import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';

export default function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-10 text-center shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-300"
        >
          <FaBrain className="text-2xl" />
        </motion.div>
        <p className="mt-5 text-lg font-medium text-white">Loading InAmigos Foundation</p>
        <p className="mt-2 text-sm text-slate-400">Preparing your community impact experience...</p>
      </div>
    </div>
  );
}
