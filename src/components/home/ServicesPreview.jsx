import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { services } from '../../data/services';

export default function ServicesPreview() {
  return (
    <section className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            light
            eyebrow="What we do"
            title={['End-to-end metal', 'trade & supply.']}
            intro="From sourcing to dispatch, we handle the full chain so your material arrives graded, documented and on time."
          />
          <div className="hidden lg:block">
            <Button variant="ghost" to="/services">
              All Services
            </Button>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10">
          {services.slice(0, 6).map((service, i) => (
            <Link key={service.slug} to="/services" className="group block border-b border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
                className="grid grid-cols-[2.5rem_1fr_1.5rem] items-center gap-x-5 py-7 transition-colors duration-300 group-hover:bg-white/[0.03] md:grid-cols-[3rem_220px_minmax(0,1fr)_1.5rem] md:gap-x-8 lg:grid-cols-[3rem_280px_minmax(0,1fr)_1.5rem] lg:py-8 xl:grid-cols-[3rem_320px_minmax(0,1fr)_1.5rem]"
              >
                <span className="font-display text-sm font-bold text-red">{service.no}</span>
                <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl lg:text-4xl">
                  {service.title}
                </h3>
                <p className="hidden text-sm leading-relaxed text-white/55 md:block md:pr-4">
                  {service.short}
                </p>
                <span className="justify-self-end text-xl text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red">
                  &rarr;
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Button variant="ghost" to="/services">
            All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
