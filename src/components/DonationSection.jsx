import { motion } from 'framer-motion';
import { FaRegCopy, FaWallet } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import SectionHeading from './SectionHeading';
import { donationTiers, secureBadges } from '../data/content';

export default function DonationSection() {
  const upiId = 'inamigosfoundation@icici';
  const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent('Inamigos Foundation')}&cu=INR`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
    } catch {
      // Clipboard access can fail on insecure origins; the text remains visible for manual copy.
    }
  };

  return (
    <section id="donation" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Donate"
          title="Support a transparent nonprofit with secure, measurable giving"
          description="Choose a donation path that matches the kind of impact you want to create. The section keeps payment details visible, reassuring, and easy to act on."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            {donationTiers.map((tier, index) => {
              const Icon = tier.icon;

              return (
                <motion.article
                  key={tier.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="glass-card p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-100">
                        <Icon />
                        {tier.badge}
                      </div>
                      <h3 className="mt-4 text-2xl font-bold text-[var(--text)]">{tier.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{tier.description}</p>
                    </div>

                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-left sm:text-right">
                      <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">Suggested gift</p>
                      <p className="text-3xl font-black text-[var(--text)]">{tier.amount}</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>Campaign progress</span>
                      <span>{tier.progress}%</span>
                    </div>
                    <div className="progress-track mt-3">
                      <div className="progress-fill" style={{ width: `${tier.progress}%` }} />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tier.perks.map((perk) => (
                      <span key={perk} className="rounded-full border border-[var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                        {perk}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="space-y-5">
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card-strong p-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-100">
                <FaWallet />
                Instant UPI Donation
              </div>

              <p className="mt-5 text-sm uppercase tracking-[0.26em] text-[var(--muted)]">UPI ID</p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-2xl font-black text-[var(--text)] sm:text-3xl">{upiId}</p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn-secondary"
                >
                  <FaRegCopy />
                  Copy UPI
                </button>
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Accepted apps: PhonePe, GPay, Paytm.</p>
              <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-gradient-to-br from-sky-500/10 to-emerald-500/10 p-4 text-sm leading-7 text-[var(--muted)]">
                Secure donor journey, transparent receipts, and the option to share a screenshot in the contact form if you want a manual acknowledgement.
              </div>
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">Donation QR</p>
              <div className="mt-4 flex min-h-[260px] items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[color:var(--surface-strong)] p-4 text-center">
                <div className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                  <QRCodeSVG
                    value={upiUri}
                    size={220}
                    level="H"
                    includeMargin
                    bgColor="#ffffff"
                    fgColor="#111827"
                    title="Inamigos Foundation UPI Donation QR"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-sm text-[var(--muted)]">Scan in any major UPI app to donate securely.</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {secureBadges.map((badge) => {
                  const Icon = badge.icon;

                  return (
                    <span key={badge.label} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:var(--surface)] px-3 py-2 text-xs font-medium text-[var(--muted)]">
                      <Icon className="text-sky-600 dark:text-sky-200" />
                      {badge.label}
                    </span>
                  );
                })}
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
