import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import CtaBand from '../components/sections/CtaBand';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Counter from '../components/ui/Counter';
import TradeMap from '../components/global/TradeMap';
import { regions, globalStats } from '../data/site';
import { EASE } from '../lib/motion';

export default function GlobalPresence() {
  const [active, setActive] = useState(0);

  return (
    <PageWrapper>
      <PageHero
        index="05"
        eyebrow="Global Presence"
        title={['Rooted in India.', 'Trading worldwide.']}
        intro="A Bhiwandi hub connected to international trade corridors — moving non-ferrous metal across borders with clean documentation and predictable logistics."
        image="/img/hero/mainbg4.jpg"
      />

      {/* Stats */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden border border-steel-100 bg-steel-100 sm:grid-cols-3">
            {globalStats.map((s) => (
              <Reveal key={s.label} className="bg-white p-8 lg:p-10">
                <p className="font-display text-5xl font-extrabold text-ink lg:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-steel-400">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive map */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <SectionHeading light eyebrow="Our network" title={['Where we trade.']} />

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <TradeMap active={active} onSelect={setActive} />
              <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.14em] text-white/45">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red" />
                  Bhiwandi hub
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-px w-6 border-t border-dashed border-white/35" />
                  Trade corridor
                </span>
                <span>Click a marker or region to explore</span>
              </p>
            </div>

            {/* Region detail */}
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-px border-t border-white/10">
                {regions.map((r, i) => (
                  <button
                    key={r.name}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`border-b border-white/10 py-5 text-left transition-colors duration-300 ${
                      active === i ? 'border-l-2 border-l-red pl-4' : 'pl-0'
                    }`}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span
                        className={`font-display text-lg font-bold uppercase tracking-tight transition-colors ${
                          active === i ? 'text-red' : 'text-white'
                        }`}
                      >
                        {r.name}
                      </span>
                      <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-white/40">
                        {r.mapLabel}
                      </span>
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-white/35">{r.role}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="mt-8"
                >
                  <p className="text-base leading-relaxed text-steel-200">{regions[active].body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {regions[active].points.map((p) => (
                      <li key={p} className="border border-white/15 px-3 py-2 text-xs text-white/70">
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden border border-steel-100 bg-steel-100 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Import', 'Inbound sourcing of grades and alloys from international suppliers.'],
              ['Export', 'Consolidated, documented consignments shipped to overseas buyers.'],
              ['Supply network', 'A vetted network of suppliers and partners across markets.'],
              ['Logistics coverage', 'Coordinated road, port and container movement, end to end.'],
            ].map(([title, body], i) => (
              <Reveal key={title} custom={i % 4} className="bg-white p-8 lg:p-10">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-600">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Trading across borders?"
        body="Whether you are sourcing into India or buying for export, our trade desk handles documentation and logistics end to end."
      />
    </PageWrapper>
  );
}
