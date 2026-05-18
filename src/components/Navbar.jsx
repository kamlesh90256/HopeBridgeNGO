import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { navigationLinks } from '../data/content';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        setDark(saved === 'dark');
        document.documentElement.classList.toggle('dark', saved === 'dark');
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDark(prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {}
    document.documentElement.classList.toggle('dark', next);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-lg font-bold text-sky-300 shadow-glow">
            I
          </span>
          <div>
            <p className="text-base font-semibold tracking-wide text-white">InAmigos Foundation</p>
            <p className="text-xs text-slate-400">Uniting minds for change</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-pressed={dark}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/2 text-white transition hover:border-sky-400/30 lg:mr-2 focus-visible:ring-2 focus-visible:ring-sky-400/40"
          >
            {dark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>

          <a
            href="#donation"
            className="hidden rounded-full bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-95 lg:inline-flex"
          >
            Donate Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-sky-400/30 hover:bg-sky-500/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:px-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donation"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-2xl border border-sky-400/30 bg-sky-500/10 px-4 py-3 text-center text-sm font-semibold text-sky-200"
              >
                Donate Now
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
