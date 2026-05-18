import { footerQuickLinks, footerSocials } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xl font-semibold text-white">InAmigos Foundation</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              A transparent nonprofit organization focused on social impact, volunteer participation, and measurable community outcomes.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              {footerQuickLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Social</p>
            <div className="mt-4 flex items-center gap-3">
              {footerSocials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 InAmigos Foundation. All rights reserved.</p>
          <p>Designed for a responsive, mission-driven nonprofit experience.</p>
        </div>
      </div>
    </footer>
  );
}
