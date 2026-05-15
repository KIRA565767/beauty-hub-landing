import { motion, useReducedMotion } from "framer-motion";

const ease = [0.4, 0, 0.2, 1];

export function Reveal({ children, className = "", delay = 0, amount = 0.25 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduceMotion ? 0.2 : 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
