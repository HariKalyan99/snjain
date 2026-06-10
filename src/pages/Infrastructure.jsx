import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import CtaBand from '../components/sections/CtaBand';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import ParallaxImage from '../components/ui/ParallaxImage';
import { infrastructure } from '../data/site';
import { media } from '../data/media';

export default function Infrastructure() {
  return (
    <PageWrapper>
      <PageHero
        index="07"
        eyebrow="Infrastructure"
        title={['The facility', 'behind the supply.']}
        intro="A dedicated Bhiwandi operation with warehousing, sorting, processing, quality control and transport, built to move industrial volume reliably."
        image={media.infrastructure.hero}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our operation"
            title={['Five capabilities,', 'one disciplined flow.']}
            intro="Each stage of the facility is built around a single goal: ensuring what leaves the warehouse matches exactly what was ordered."
          />

          <div className="mt-16 space-y-px">
            {infrastructure.map((item, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={item.no}
                  className="grid items-center gap-8 border-t border-steel-100 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16"
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
        title="Want to discuss volume?"
        body="Our warehousing depth supports large, recurring industrial orders. Tell us your requirement and we will scope it."
      />
    </PageWrapper>
  );
}
