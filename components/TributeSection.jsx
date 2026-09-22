"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function TributeSection({ tribute }) {
  const reduceMotion = useReducedMotion();
  const paragraphs = tribute.body.split(/\n\n+/).filter(Boolean);
  const [imageError, setImageError] = useState(false);
  const showImage = tribute.image && !imageError;

  return (
    <article className="paper-card mx-auto max-w-5xl border-gold/25 px-5 py-10 sm:px-8 sm:py-12">
      <motion.h1
        className="text-center font-script text-4xl text-dusty-rose sm:text-5xl lg:text-left"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {tribute.title}
      </motion.h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_minmax(240px,320px)] lg:items-start">
        <div>
          <motion.p
            className="text-lg leading-relaxed text-warm-brown"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            {tribute.intro}
          </motion.p>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-warm-brown sm:text-lg">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.p
            className="mt-10 text-sm tracking-[0.2em] text-warm-brown/90 uppercase"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {tribute.memorialName}
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-xs lg:mx-0 lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <div className="absolute inset-0 rounded-sm border border-gold/40 bg-ivory/80 shadow-soft" />
          {showImage ? (
            <div className="relative m-3 aspect-[4/5] overflow-hidden rounded-sm border border-warm-brown/10">
              <Image
                src={tribute.image}
                alt="In loving memory of Eddie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 280px, 320px"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="relative m-3 flex aspect-[4/5] flex-col items-center justify-center rounded-sm border border-dashed border-warm-brown/25 bg-cream/60 px-4 text-center">
              <p className="font-script text-2xl text-dusty-rose">Eddie</p>
              <p className="mt-3 text-sm leading-relaxed text-warm-brown/80">
                {tribute.imagePlaceholder ||
                  "Add Eddie’s photo at public/images/tribute/eddie.jpg"}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </article>
  );
}
