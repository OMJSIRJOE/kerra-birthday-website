"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function PageHeader({
  lines = [],
  scriptLine,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <header className={`mb-10 flex flex-col gap-3 ${alignClass} ${className}`}>
      {lines.map((line, i) => (
        <motion.p
          key={line + i}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.45 }}
          className={`text-xs tracking-[0.35em] uppercase ${
            light ? "text-ivory/80" : "text-warm-brown"
          }`}
        >
          {line}
        </motion.p>
      ))}
      {scriptLine && (
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55 }}
          className={`font-script text-4xl leading-tight sm:text-5xl md:text-6xl ${
            light ? "text-ivory" : "text-deep-brown"
          }`}
        >
          {scriptLine}
        </motion.h1>
      )}
      {subtitle && (
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`max-w-xl text-base leading-relaxed sm:text-lg ${
            light ? "text-ivory/90" : "text-warm-brown"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
