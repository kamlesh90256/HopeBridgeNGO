import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${alignmentClass}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-100/90">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}
