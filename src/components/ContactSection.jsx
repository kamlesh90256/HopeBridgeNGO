import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const fileRef = useRef(null);

  function validate() {
    if (!name.trim()) return 'Please enter your name.';
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'Please enter a valid email.';
    if (!message.trim()) return 'Please enter a message.';
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus(err);
      return;
    }

    setStatus('sending');

    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const user = import.meta.env.VITE_EMAILJS_USER_ID;

    // If EmailJS env vars are present, try to send via their REST API.
    if (service && template && user) {
      try {
        const formData = {
          service_id: service,
          template_id: template,
          user_id: user,
          template_params: {
            from_name: name,
            from_email: email,
            message,
          },
        };

        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error('EmailJS send failed');
        setStatus('sent');
        return;
      } catch (err) {
        // fall through to mailto fallback
      }
    }

    // Mailto fallback so the form works without backend.
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nName: ${name}\nEmail: ${email}`);
    const mailto = `mailto:hello@inamigos.org?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setStatus('sent');
  }

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
            onSubmit={handleSubmit}
            aria-describedby="contact-status"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  aria-required="true"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus-visible:ring-2 focus-visible:ring-sky-400/40"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  id="contact-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  aria-required="true"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus-visible:ring-2 focus-visible:ring-sky-400/40"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-required="true"
                placeholder="Tell us about your partnership, donation, or volunteering interest"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus-visible:ring-2 focus-visible:ring-sky-400/40"
              />
            </label>

            <label className="mt-4 block space-y-2 text-sm text-slate-300">
              <span>Donation Screenshot (optional)</span>
              <input
                ref={fileRef}
                id="contact-file"
                name="donation_screenshot"
                type="file"
                accept="image/*"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-sky-500/20 file:px-4 file:py-2 file:text-sm file:font-medium file:text-sky-200 focus-visible:ring-2 focus-visible:ring-sky-400/40"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.01]"
            >
              Submit
            </button>

            <p id="contact-status" className="mt-3 text-sm text-slate-300" role="status">
              {status === 'idle' && 'We will reply as soon as possible.'}
              {status === 'sending' && 'Opening email client...'}
              {status === 'sent' && 'Email client opened. If it did not, please contact hello@inamigos.org.'}
              {status && status !== 'idle' && status !== 'sending' && status !== 'sent' && status}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
