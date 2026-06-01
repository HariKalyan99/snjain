import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import CtaBand from '../components/sections/CtaBand';
import Reveal from '../components/ui/Reveal';
import { services } from '../data/services';

export default function Services() {
  return (
    <PageWrapper>
      <PageHero
        index="02"
        eyebrow="Services"
        title={['Full-chain metal', 'trade & supply.']}
        intro="From procurement to final dispatch, every link in the chain is handled in-house — so material arrives graded, documented and on schedule."
        image="/img/hero/mainbg2.jpg"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              className={`grid gap-8 border-b border-steel-100 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20 ${
                i === 0 ? 'border-t' : ''
              }`}
            >
              <div className="lg:col-span-1">
                <span className="font-display text-2xl font-extrabold text-red">{service.no}</span>
              </div>
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-ink lg:text-4xl">
                  {service.title}
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base leading-relaxed text-steel-600">{service.body}</p>
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-3">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Tell us what your line needs."
        body="Whether it is a one-off lot or a recurring programme, our desk will scope availability, grade and logistics with you."
      />
    </PageWrapper>
  );
}
