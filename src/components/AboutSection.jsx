import { motion } from 'framer-motion';
import { FaHandsHelping, FaLeaf, FaUsers } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: index * 0.08 },
  }),
};

const values = [
  {
    title: 'Mission Driven',
    description: 'Every initiative is aligned to a clear social purpose and long-term community value.',
    icon: FaHandsHelping,
  },
  {
    title: 'Sustainable Change',
    description: 'Programs are designed to create measurable, lasting impact instead of short-term fixes.',
    icon: FaLeaf,
  },
  {
    title: 'Community First',
    description: 'We work with residents, donors, and volunteers to shape support that truly fits local needs.',
    icon: FaUsers,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A nonprofit built around transparency and action"
          description="InAmigos Foundation connects donors, volunteers, and local partners to education, health, and relief programs that strengthen communities."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-2xl text-sky-300 shadow-glow transition group-hover:scale-105">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
