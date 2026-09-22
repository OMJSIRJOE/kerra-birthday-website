"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
