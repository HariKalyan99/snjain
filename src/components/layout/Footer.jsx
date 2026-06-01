import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { navLinks } from '../../data/nav';
import { useQuote } from '../../context/QuoteContext';

export default function Footer() {
  const { openQuote } = useQuote();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/img/brand/logo.svg" alt="" className="h-12 w-12" />
              <div className="leading-tight">
                <p className="font-display text-lg font-extrabold uppercase tracking-tight">Sha Mulchand</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Navalram Jain</p>
              </div>
            </div>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/60">
              Trusted non-ferrous metal, scrap and recycling solutions across India and global markets. A family
              enterprise built on integrity since {company.established}.
            </p>
            <button
              onClick={openQuote}
              className="group mt-9 inline-flex items-center gap-3 bg-red px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              Request a Quote
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Explore</p>
            <ul className="mt-6 space-y-3">
              {[{ label: 'Home', to: '/' }, ...navLinks, { label: 'Contact', to: '/contact' }].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Contact</p>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>
                <a href={company.phoneHref} className="transition-colors hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="text-white/60">
                {company.address.facility}
                <br />
                {company.address.city}, {company.address.region}
              </li>
              <li>
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-white transition-colors hover:text-red"
                >
                  View on map &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">Non-Ferrous Metals · Scrap · Recycling</p>
        </div>
      </div>
    </footer>
  );
}
