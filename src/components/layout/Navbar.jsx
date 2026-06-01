import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../data/nav';
import { company } from '../../data/company';
import { useQuote } from '../../context/QuoteContext';
import { EASE } from '../../lib/motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openQuote } = useQuote();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
        dark ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-8xl items-center justify-between px-5 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label={company.legalName}>
          <img src="/img/brand/logo.svg" alt="" className="h-10 w-10" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className={`font-display text-sm font-extrabold uppercase tracking-tight ${dark ? 'text-ink' : 'text-white'}`}>
              Sha Mulchand
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-[0.2em] ${dark ? 'text-steel-400' : 'text-white/70'}`}>
              Navalram Jain · Est. 1965
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                  dark ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
                } ${isActive ? '!text-red' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors lg:inline ${
              dark ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Contact
          </Link>
          <button
            onClick={openQuote}
            className="hidden bg-red px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-ink sm:inline-block"
          >
            Request Quote
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] xl:hidden"
          >
            <span className={`h-[2px] w-6 transition-all duration-300 ${dark ? 'bg-ink' : 'bg-white'} ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-6 transition-all duration-300 ${dark ? 'bg-ink' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-6 transition-all duration-300 ${dark ? 'bg-ink' : 'bg-white'} ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-steel-100 bg-white xl:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {[...navLinks, { label: 'Contact', to: '/contact' }].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block border-b border-steel-100 py-4 font-display text-lg font-bold uppercase tracking-tight ${
                        isActive ? 'text-red' : 'text-ink'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <button
                onClick={openQuote}
                className="mt-5 bg-red px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              >
                Request Quote
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
