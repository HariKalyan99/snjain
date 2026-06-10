import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import CtaBand from '../components/sections/CtaBand';
import Reveal from '../components/ui/Reveal';
import ParallaxImage from '../components/ui/ParallaxImage';
import Button from '../components/ui/Button';
import { useQuote } from '../context/QuoteContext';
import { materials } from '../data/materials';
import { media } from '../data/media';

export default function Materials() {
  const { openQuote } = useQuote();
  return (
    <PageWrapper>
      <PageHero
        index="03"
        eyebrow="Materials & Products"
        title={['Non-ferrous metals,', 'graded for industry.']}
        intro="Aluminium, copper, brass and refined industrial metals, sorted, inspected and prepared for re-melting, extrusion and manufacturing."
        image={media.materials.copper}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          {materials.map((m, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={m.slug}
                className={`grid items-center gap-10 border-b border-steel-100 py-16 md:grid-cols-2 md:gap-12 lg:gap-16 lg:py-24 ${
                  i === 0 ? 'border-t' : ''
                }`}
              >
                <div className={reverse ? 'lg:order-2' : ''}>
                  <ParallaxImage src={m.image} alt={m.name} className="aspect-[4/3] w-full" amount={40} />
                </div>
                <div className={reverse ? 'lg:order-1' : ''}>
                  <Reveal>
                    <span className="font-display text-sm font-bold text-red">{`0${i + 1}`}</span>
                    <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink lg:text-5xl">
                      {m.name}
                    </h2>
                    <p className="mt-3 text-lg text-steel-400">{m.tagline}</p>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-600">{m.description}</p>
                  </Reveal>

                  <Reveal custom={1} className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">Specifications</p>
                      <ul className="mt-4 space-y-2.5">
                        {m.specs.map((s) => (
                          <li key={s} className="flex items-start gap-3 text-sm text-steel-600">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">Applications</p>
                      <ul className="mt-4 space-y-2.5">
                        {m.applications.map((a) => (
                          <li key={a} className="flex items-start gap-3 text-sm text-steel-600">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-steel-400" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal custom={2} className="mt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">Available grades</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {m.grades.map((g) => (
                        <span
                          key={g.name}
                          className="border border-steel-200 px-3 py-2 text-xs font-medium text-steel-600"
                        >
                          {g.name}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal custom={3} className="mt-9">
                    <Button variant="dark" onClick={openQuote}>
                      Enquire about {m.name}
                    </Button>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Looking for a specific grade?"
        body="If you need a grade or specification not listed here, our sourcing desk can locate it. Tell us your requirement."
      />
    </PageWrapper>
  );
}
