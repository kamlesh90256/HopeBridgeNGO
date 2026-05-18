import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation with InAmigos Foundation"
          description="Use the form below to ask about partnerships, volunteering, sponsorships, or community support."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-white">Help build stronger communities</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Share your goals and we will help connect you with the most relevant outreach, partnership, and volunteer opportunities.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">Transparent support for donors and partner organizations</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">Structured campaigns for relief, education, and health</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">Professional nonprofit website experience</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm text-slate-300">
                <span>Message</span>
              <textarea
                rows="6"
                placeholder="Tell us about your partnership, donation, or volunteering interest"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40"
              />
            </label>

            <label className="mt-4 block space-y-2 text-sm text-slate-300">
              <span>Donation Screenshot (optional)</span>
              <input
                type="file"
                accept="image/*"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-sky-500/20 file:px-4 file:py-2 file:text-sm file:font-medium file:text-sky-200"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.01]"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
