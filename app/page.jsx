"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/Button";
import PageShell from "@/components/PageShell";
import { birthdayContent } from "@/data/birthdayContent";

export default function HomePage() {
  const { hero } = birthdayContent;
  const reduceMotion = useReducedMotion();
  const subtitleLines = hero.subtitle.split("\n");

  return (
    <PageShell transparentNav background="hero" className="text-ivory">
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 pb-16 pt-20 text-center text-ivory">
        {hero.backgroundImage && (
          <>
            <Image
              src={hero.backgroundImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-deep-brown/55" aria-hidden />
          </>
        )}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.35em] uppercase text-ivory/75"
          >
            {hero.title.split(",")[0]},
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="mt-2 font-script text-5xl leading-tight sm:text-6xl md:text-7xl"
          >
            {hero.titleScript} ♡
          </motion.h1>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 space-y-1 text-base leading-relaxed text-ivory/90 sm:text-lg"
          >
            {subtitleLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-10"
          >
            <Button href="/letter" variant="light">
              {hero.cta}
            </Button>
          </motion.div>
        </div>

        {hero.tagline && (
          <p className="absolute bottom-10 left-1/2 z-10 w-full max-w-xs -translate-x-1/2 text-xs tracking-[0.35em] text-ivory/75 uppercase sm:bottom-12">
            {hero.tagline}
          </p>
        )}      </section>
    </PageShell>
  );
}
