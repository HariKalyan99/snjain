import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

/**
 * Scroll-triggered reveal. Wraps children and animates them into view once.
 */
export default function Reveal({
  children,
  as = 'div',
  variants = fadeUp,
  custom = 0,
  amount = 0.3,
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={custom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
