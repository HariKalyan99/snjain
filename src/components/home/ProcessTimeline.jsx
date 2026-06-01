import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processSteps } from '../../data/site';

gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned, horizontally-scrolling industrial process timeline (desktop).
 * Falls back to a vertical stacked layout on smaller screens.
 */
export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const distance = track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance + window.innerHeight * 0.6}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray('.process-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            containerAnimation: tween,
            start: 'left 85%',
          },
        });
      });

      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink text-white">
      {/* Desktop horizontal track */}
      <div ref={trackRef} className="hidden lg:flex lg:h-screen lg:w-max lg:items-center lg:will-change-transform">
        <div className="flex h-full w-screen shrink-0 flex-col justify-center px-10 2xl:px-24">
          <span className="eyebrow">The Process</span>
          <h2 className="mt-6 max-w-xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight xl:text-6xl">
            From source to dispatch.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-steel-200">
            A disciplined flow that turns recovered metal into furnace-ready material — sorted, inspected and
            documented at every stage. Scroll to follow it.
          </p>
          <span className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
            Scroll <span className="text-red">&rarr;</span>
          </span>
        </div>

        {processSteps.map((step) => (
          <div
            key={step.no}
            className="process-card flex h-full w-[34vw] shrink-0 flex-col justify-center border-l border-white/10 px-10 2xl:px-16"
          >
            <span className="font-display text-7xl font-extrabold text-white/10">{step.no}</span>
            <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-tight">{step.title}</h3>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-steel-200">{step.body}</p>
            <div className="mt-8 h-px w-16 bg-red" />
          </div>
        ))}

        <div className="w-[8vw] shrink-0" />
      </div>

      {/* Mobile vertical */}
      <div className="px-5 py-20 sm:px-6 lg:hidden">
        <span className="eyebrow">The Process</span>
        <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl">
          From source to dispatch.
        </h2>
        <div className="mt-12 space-y-px border-t border-white/10">
          {processSteps.map((step) => (
            <div key={step.no} className="border-b border-white/10 py-7">
              <div className="flex items-baseline gap-5">
                <span className="font-display text-sm font-bold text-red">{step.no}</span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{step.title}</h3>
              </div>
              <p className="mt-3 pl-10 text-sm leading-relaxed text-steel-200">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
