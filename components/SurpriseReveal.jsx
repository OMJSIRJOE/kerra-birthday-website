"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "@/components/Button";
export default function SurpriseReveal({ surprise, finalMessage }) {
  const [stage, setStage] = useState("intro");
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-2xl text-center">
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-6 py-8"
          >
            <p className="font-script text-4xl text-deep-brown sm:text-5xl">
              {surprise.waitText}
            </p>
            <p className="text-lg text-warm-brown">{surprise.teaser}</p>
            <Button onClick={() => setStage("reveal")} className="mt-4">
              {surprise.button}
            </Button>
          </motion.div>
        )}

        {stage === "reveal" && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative overflow-hidden rounded-sm border border-warm-brown/15 bg-deep-brown px-5 py-10 text-ivory shadow-glow sm:px-8 sm:py-12"
          >
            <motion.div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(185,154,101,0.35),transparent_55%)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              aria-hidden
            />

            <motion.p
              className="font-script text-3xl text-gold sm:text-4xl"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              For you…
            </motion.p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {[surprise.perfume, surprise.watch].map((gift, i) => (
                <motion.div
                  key={gift.image}
                  initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.35, duration: 0.65 }}
                  className="paper-card overflow-hidden border-gold/20 bg-ivory p-3 text-left"
                >
                  <div className="relative aspect-[3/4] bg-cream sm:aspect-[4/5]">
                    <Image
                      src={gift.image}
                      alt={gift.label}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 640px) 80vw, 280px"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm text-warm-brown">
                    {gift.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mx-auto mt-10 max-w-md text-base leading-relaxed text-ivory/90"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {surprise.giftMessage}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 }}
              className="mt-12"
            >
              <Button variant="light" onClick={() => setStage("final")}>
                Continue
              </Button>
            </motion.div>
          </motion.div>
        )}

        {stage === "final" && (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative mt-4 overflow-hidden rounded-sm border border-warm-brown/15 shadow-soft"
          >
            <div className="relative min-h-[420px] overflow-hidden px-6 py-12 sm:px-10">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(165deg, #fffdf9 0%, #f7f0e8 25%, #e8c4c0 55%, #b8c9d9 80%, #c9b8d4 100%)",
                }}
                aria-hidden
              />
              <div
                className="absolute bottom-0 left-1/2 h-[60%] w-[120%] -translate-x-1/2 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,196,192,0.55) 0%, rgba(184,201,217,0.25) 50%, transparent 70%)",
                }}
                aria-hidden
              />
              {finalMessage.backgroundImage && (
                <>
                  <Image
                    src={finalMessage.backgroundImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#f7f0e8]/75" aria-hidden />
                </>
              )}
              <div className="relative z-10">
                <h2 className="font-script text-4xl text-deep-brown sm:text-5xl">
                  {finalMessage.title}
                </h2>
                <div className="mx-auto mt-6 max-w-lg space-y-4 text-base leading-relaxed text-warm-brown sm:text-lg">
                  {finalMessage.body.split(/\n\n+/).filter(Boolean).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <p className="mt-10 font-script text-3xl text-deep-brown">
                  {finalMessage.signature}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
