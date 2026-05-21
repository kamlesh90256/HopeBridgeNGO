import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navigationLinks } from '../data/content';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
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
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-[var(--border)] bg-[color:var(--surface-strong)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-2xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/25 bg-gradient-to-br from-sky-500/15 to-emerald-500/15 text-lg font-black text-sky-700 shadow-[0_10px_30px_rgba(59,130,246,0.14)] dark:text-sky-200">
            I
          </span>
          <div>
            <p className="text-base font-semibold tracking-tight text-[var(--text)] sm:text-lg">InAmigos Foundation</p>
            <p className="text-xs text-[var(--muted)]">Uniting minds for change</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[color:var(--surface)] text-[var(--text)] transition hover:border-sky-400/30 hover:bg-sky-500/10 lg:mr-2"
          >
            {dark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>

          <a
            href="#donation"
            className="btn-primary hidden lg:inline-flex"
          >
            Donate Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] text-[var(--text)] transition hover:border-sky-400/30 hover:bg-sky-500/10 lg:hidden"
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
            className="border-t border-[var(--border)] bg-[color:var(--surface-strong)] px-4 py-4 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-shell flex flex-col gap-2 sm:px-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-sky-500/10 hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donation"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2"
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
