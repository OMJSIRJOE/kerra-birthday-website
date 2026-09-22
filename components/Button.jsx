"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-[#c98a84] text-ivory border border-[#b07d75] font-medium shadow-glow-blush hover:bg-[#b07d75] hover:shadow-glow-gold",
  secondary:
    "bg-ivory text-deep-brown border border-warm-brown/50 font-medium hover:border-warm-brown hover:bg-cream",
  light:
    "bg-ivory text-deep-brown border border-ivory font-medium shadow-soft hover:bg-cream",
  dark: "bg-charcoal text-ivory border border-gold/40 font-medium hover:border-gold/70",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
  external,
  ariaLabel,
}) {
  const reduceMotion = useReducedMotion();
  const classes = cn(
    "inline-flex min-h-[48px] items-center justify-center rounded-full px-7 py-3 text-sm tracking-[0.12em] uppercase transition-colors focus-ring",
    variants[variant],
    className
  );

  const motionProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02, y: -1 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring", stiffness: 400, damping: 24 },
      };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
