import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Image with a subtle vertical parallax tied to scroll progress.
 */
export default function ParallaxImage({ src, alt = '', className = '', amount = 60, overlay = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full -translate-y-[10%] object-cover"
      />
      {overlay && <div className="absolute inset-0 bg-ink/30" />}
    </div>
  );
}
