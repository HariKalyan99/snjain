import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { materials } from '../../data/materials';
import { EASE } from '../../lib/motion';

export default function MaterialsPreview() {
  return (
    <section className="bg-steel-50 py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Materials & Products"
            title={['Non-ferrous metals,', 'sorted to grade.']}
            intro="Aluminium, copper, brass and refined industrial metals, classified, inspected and ready for re-melting, extrusion and manufacturing."
          />
          <div className="hidden lg:block">
            <Button variant="outline" to="/materials">
              View All Materials
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
            >
              <Link to="/materials" className="group block overflow-hidden bg-ink">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-xs font-bold tracking-[0.2em] text-white/70">
                    {`0${i + 1}`}
                  </span>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">{m.name}</h3>
                    <p className="mt-2 text-sm text-white/55">{m.tagline}</p>
                  </div>
                  <span className="text-lg text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red">
                    &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Button variant="outline" to="/materials">
            View All Materials
          </Button>
        </div>
      </div>
    </section>
  );
}
