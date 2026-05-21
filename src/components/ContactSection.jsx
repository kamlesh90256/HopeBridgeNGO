import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { contactDetails } from '../data/content';

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
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation with InAmigos Foundation"
          description="Use the form below to ask about partnerships, volunteering, sponsorships, media support, or community collaboration."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold text-[var(--text)]">Help build stronger communities</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Share your goals and we will help connect you with the most relevant outreach, partnership, and volunteer opportunities.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-[var(--muted)]">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div key={detail.label} className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[color:var(--surface-strong)] p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:text-sky-200">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{detail.label}</p>
                      <p className="text-sm font-semibold text-[var(--text)]">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card-strong p-6"
            onSubmit={handleSubmit}
            aria-describedby="contact-status"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--muted)]">
                <span>Name</span>
                <input
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  aria-required="true"
                  placeholder="Your name"
                  className="soft-input"
                />
              </label>
              <label className="space-y-2 text-sm text-[var(--muted)]">
                <span>Email</span>
                <input
                  id="contact-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  aria-required="true"
                  placeholder="you@example.com"
                  className="soft-input"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm text-[var(--muted)]">
              <span>Message</span>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-required="true"
                placeholder="Tell us about your partnership, donation, or volunteering interest"
                className="soft-input min-h-40"
              />
            </label>

            <label className="mt-4 block space-y-2 text-sm text-[var(--muted)]">
              <span>Donation screenshot (optional)</span>
              <input
                ref={fileRef}
                id="contact-file"
                name="donation_screenshot"
                type="file"
                accept="image/*"
                className="soft-input text-sm file:mr-4 file:rounded-full file:border-0 file:bg-sky-500/15 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-sky-700 dark:file:text-sky-100"
              />
            </label>

            <button
              type="submit"
              className="btn-primary mt-5 w-full"
            >
              Submit
            </button>

            <p id="contact-status" className="mt-3 text-sm text-[var(--muted)]" role="status">
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
