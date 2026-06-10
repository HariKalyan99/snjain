import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuote } from '../../context/QuoteContext';
import { company } from '../../data/company';
import { materials } from '../../data/materials';
import { EASE } from '../../lib/motion';

const allGrades = materials.flatMap((m) =>
  m.grades.filter((g) => g.quote !== false).map((g) => g.name),
);
const uniqueGrades = [...new Set(allGrades)];

function istTime() {
  return new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

const field =
  'w-full border border-steel-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-steel-400 outline-none transition-colors focus:border-ink';

export default function QuoteModal() {
  const { open, closeQuote } = useQuote();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeQuote();
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, closeQuote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('Submitted At (IST)', istTime());
    try {
      const res = await fetch(company.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          setStatus('idle');
          closeQuote();
        }, 2200);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2100] flex items-start justify-center overflow-y-auto bg-ink/70 px-4 py-8 backdrop-blur-sm sm:py-16"
          onClick={(e) => e.target === e.currentTarget && closeQuote()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-xl bg-white"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <button
              onClick={closeQuote}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-2xl leading-none text-steel-400 transition-colors hover:text-ink sm:right-5 sm:top-5"
            >
              &times;
            </button>

            <div className="border-b border-steel-100 p-7 sm:p-9">
              <span className="eyebrow">Request a Quote</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
                Tell us what you need
              </h2>
              <p className="mt-3 text-sm text-steel-600">
                Share your material requirement and quantity. Our desk responds with availability and pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-7 sm:p-9">
              <input type="hidden" name="Form Type" value="Quote Request" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input className={field} type="text" name="Name" placeholder="Name *" required />
                <input className={field} type="tel" name="Phone" placeholder="Phone *" required />
              </div>
              <input className={field} type="email" name="Email" placeholder="Email *" required />
              <input className={field} type="text" name="Company" placeholder="Company" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select className={field} name="Material Type" required defaultValue="">
                  <option value="" disabled>
                    Select material *
                  </option>
                  {uniqueGrades.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                  <option value="Other / Mixed">Other / Mixed</option>
                </select>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input className={field} type="number" name="Quantity" placeholder="Quantity *" required min="1" />
                  <select className={`${field} w-full shrink-0 sm:w-28`} name="Unit" required defaultValue="Ton">
                    <option value="Kg">Kg</option>
                    <option value="Ton">Ton</option>
                    <option value="Pieces">Pcs</option>
                  </select>
                </div>
              </div>
              <input className={field} type="text" name="Location" placeholder="City, State / Country *" required />
              <textarea
                className={`${field} h-24 resize-none`}
                name="Additional Details"
                placeholder="Specifications or additional information"
              />

              {status === 'success' && (
                <p className="text-sm font-medium text-green-600">
                  Thank you. Your request has been received. We will be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-medium text-red">Something went wrong. Please try again or call us.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex w-full items-center justify-center gap-3 bg-red px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-ink disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Submit Request'}
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
