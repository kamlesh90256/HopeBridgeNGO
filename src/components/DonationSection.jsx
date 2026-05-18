import { motion } from 'framer-motion';
import { FaRegCopy, FaWallet } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import SectionHeading from './SectionHeading';

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
    <section id="donation" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Donation"
          title="Support Inamigos Foundation"
          description="Contributions help fund education, health, and community uplift programs. Donate securely using UPI and share your donation screenshot in the contact form if needed."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
              <FaWallet />
              Instant UPI Donation
            </div>

            <p className="mt-5 text-sm uppercase tracking-[0.28em] text-slate-400">UPI ID</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-2xl font-semibold text-white sm:text-3xl">{upiId}</p>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-400/30 hover:text-white"
              >
                <FaRegCopy />
                Copy UPI
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-300">Accepted apps: phonepe, Gpay, Paytm</p>
            <p className="mt-2 text-xs text-slate-500">Reference from your shared donation screenshot has been added.</p>

            <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-center">
              <p className="text-lg font-bold text-red-300">upi- inamigosfoundation@icici</p>
              <p className="text-sm font-semibold text-red-200">( phonepe, Gpay, Paytm )</p>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Donation QR</p>
            <div className="mt-4 flex min-h-[260px] items-center justify-center rounded-[1.5rem] border border-dashed border-white/20 bg-slate-950/60 p-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-white p-4 shadow-xl shadow-emerald-950/30">
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
            <p className="mt-3 text-center text-xs text-slate-500">Scan this QR in PhonePe, GPay, or Paytm to donate.</p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
