import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import CtaBand from '../components/sections/CtaBand';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Counter from '../components/ui/Counter';
import ParallaxImage from '../components/ui/ParallaxImage';
import { sustainabilityImpact, sustainabilityPillars, infrastructure } from '../data/site';
import { media } from '../data/media';

export default function Operations() {
  return (
    <PageWrapper>
      <PageHero
        index="06"
        eyebrow="Operations"
        title={['Facility strength,', 'responsible recovery.']}
        intro="A dedicated Bhiwandi operation built to move industrial volume reliably, with recycling at the centre of how we source, process and supply non-ferrous metal."
        image={media.infrastructure.hero}
      />

      {/* Sustainability statement */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <p className="max-w-4xl font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Non-ferrous metals can be recycled again and again with no loss of properties. By recovering, sorting and
              re-supplying them, we keep their value in circulation and out of landfill.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-ink py-20 text-white lg:py-24">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {sustainabilityImpact.map((s) => (
              <Reveal key={s.label} className="bg-ink p-8 lg:p-12">
                <p className="font-display text-4xl font-extrabold sm:text-5xl lg:text-7xl">
                  {s.display ? s.display : <Counter to={s.value} suffix={s.suffix} prefix={s.prefix || ''} />}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-200">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability pillars */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Our responsibility" title={['A circular', 'metals economy.']} />
              <Reveal custom={2} className="mt-8">
                <ParallaxImage
                  src={media.sustainability.recovery}
                  alt="Recycling and recovery"
                  className="aspect-[4/3] w-full"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden border border-steel-100 bg-steel-100 sm:grid-cols-2">
                {sustainabilityPillars.map((p, i) => (
                  <Reveal key={p.title} custom={i} className="bg-white p-8 lg:p-10">
                    <span className="font-display text-sm font-bold text-red">{`0${i + 1}`}</span>
                    <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-steel-600">{p.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our facility"
            title={['Five capabilities,', 'one disciplined flow.']}
            intro="Each stage of the operation is built around a single goal: ensuring what leaves the warehouse matches exactly what was ordered."
          />

          <div className="mt-16 space-y-px">
            {infrastructure.map((item, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={item.no}
                  className="grid items-center gap-8 border-t border-steel-200 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16"
                >
                  <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
                    <ParallaxImage src={item.image} alt={item.title} className="aspect-[16/10] w-full" amount={36} />
                  </div>
                  <div className={`lg:col-span-5 ${reverse ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8'}`}>
                    <Reveal>
                      <span className="font-display text-2xl font-extrabold text-red">{item.no}</span>
                      <h3 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-ink lg:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-6 max-w-lg text-base leading-relaxed text-steel-600">{item.body}</p>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spec strip */}
      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Covered storage', 'Buffer stock held for large, recurring orders.'],
              ['Calibrated weighing', 'Accurate, verifiable consignment weights.'],
              ['Grade segregation', 'Material sorted by alloy and form.'],
              ['Loading & dispatch', 'Truck and container loading on schedule.'],
            ].map(([title, body], i) => (
              <Reveal key={title} custom={i % 4} className="bg-ink p-8 lg:p-10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-200">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Partner on volume and recovery."
        body="Whether you need reliable supply from our Bhiwandi facility or have recoverable material to process, tell us your requirement."
      />
    </PageWrapper>
  );
}
