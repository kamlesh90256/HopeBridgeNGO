import { useState } from 'react';
import { footerQuickLinks, footerSocials, contactDetails } from '../data/content';

export default function Footer() {
  const [newsletter, setNewsletter] = useState('');

  function handleSubscribe(event) {
    event.preventDefault();

    const subject = encodeURIComponent('Newsletter subscription request');
    const body = encodeURIComponent(`Please subscribe this email address to the InAmigos newsletter:\n\n${newsletter}`);
    window.location.href = `mailto:hello@inamigos.org?subject=${subject}&body=${body}`;
  }

  return (
    <footer className="mt-8 border-t border-[var(--border)] bg-[color:var(--surface-strong)]">
      <div className="container-shell py-12 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <p className="text-2xl font-black tracking-tight text-[var(--text)]">InAmigos Foundation</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
              A transparent nonprofit organization focused on social impact, volunteer participation, and measurable community outcomes.
            </p>
            <div className="mt-6 space-y-3">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <span className="text-sky-600 dark:text-sky-200">{detail.label}:</span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-200">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              {footerQuickLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-200">Newsletter</p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
              <input
                type="email"
                required
                value={newsletter}
                onChange={(event) => setNewsletter(event.target.value)}
                placeholder="Your email address"
                className="soft-input"
              />
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {footerSocials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] text-[var(--muted)] transition hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-[var(--text)]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 InAmigos Foundation. All rights reserved.</p>
          <p>Designed for a responsive, mission-driven nonprofit experience.</p>
        </div>
      </div>
    </footer>
  );
}
