import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../data/nav';
import { company } from '../../data/company';
import { useQuote } from '../../context/QuoteContext';
import { useNavMenu } from '../../context/NavMenuContext';
import { EASE } from '../../lib/motion';
import { media } from '../../data/media';
import { PhoneIcon } from '../ui/PhoneLink';

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useNavMenu();
  const [scrolled, setScrolled] = useState(false);
  const { openQuote } = useQuote();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const dark = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[2000] transition-colors duration-500 ${
        dark ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-8xl items-center justify-between px-5 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="flex min-w-0 flex-1 items-center gap-1.5 pr-2 sm:flex-initial sm:gap-3 sm:pr-0"
          aria-label={company.legalName}
          title={company.legalName}
        >
          <img
            src={media.brand.logo}
            alt=""
            className="h-8 w-auto max-h-9 shrink-0 object-contain sm:h-10 sm:max-h-10"
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span
              className={`truncate font-display text-[10px] font-extrabold uppercase tracking-tight min-[380px]:text-[11px] sm:text-sm ${
                dark ? 'text-ink' : 'text-white'
              }`}
            >
              {company.legalName}
            </span>
            <span
              className={`mt-0.5 truncate text-[9px] font-medium uppercase tracking-[0.16em] min-[380px]:text-[10px] min-[380px]:tracking-[0.2em] ${
                dark ? 'text-steel-400' : 'text-white/70'
              }`}
            >
              Est. {company.established}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            to="/contact"
            aria-label="Contact"
            className={`hidden h-11 w-11 items-center justify-center transition-colors md:inline-flex ${
              dark ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            <PhoneIcon className="h-5 w-5" />
          </Link>
          <button
            onClick={openQuote}
            className="hidden bg-red px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-ink sm:inline-block sm:px-5"
          >
            Request Quote
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-[2px] w-6 transition-all duration-300 ${dark ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`h-[2px] w-6 transition-all duration-300 ${dark ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-[2px] w-6 transition-all duration-300 ${dark ? 'bg-ink' : 'bg-white'} ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-steel-100 bg-white lg:hidden"
          >
            <div className="max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain px-5 py-4 pb-24">
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
                className="mt-5 w-full bg-red px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white"
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
