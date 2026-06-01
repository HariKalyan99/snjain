import { motion } from 'framer-motion';
import { EASE } from '../../lib/motion';

/**
 * Wraps each page for enter/exit transitions.
 */
export default function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.main>
  );
}
