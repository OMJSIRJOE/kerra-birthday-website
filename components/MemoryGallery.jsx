"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Lightbox from "@/components/Lightbox";

function MemoryPolaroid({ item, index, onSelect }) {
  const reduceMotion = useReducedMotion();
  const rotation = item.rotation ?? (index % 2 === 0 ? -2 : 3);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      className="group relative mx-auto w-full max-w-[220px] focus-ring sm:max-w-none"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      whileHover={reduceMotion ? undefined : { y: -4, rotate: 0 }}
      style={{ rotate: `${rotation}deg` }}
      aria-label={`Open memory: ${item.caption || "photo"}`}
    >
      <div className="relative bg-ivory p-3 pb-10 shadow-polaroid transition-shadow group-hover:shadow-glow">
        <div
          className="absolute -top-2 left-1/2 h-6 w-16 -translate-x-1/2 bg-blush/50 opacity-70"
          aria-hidden
        />
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src={item.image}
            alt={item.caption || `Memory ${index + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 45vw, 220px"
          />
        </div>
        {item.caption && (
          <p className="absolute bottom-3 left-0 right-0 px-2 text-center font-script text-lg leading-snug text-warm-brown">
            {item.caption}
          </p>
        )}
      </div>
    </motion.button>
  );
}

export default function MemoryGallery({ items }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
        {items.map((item, index) => (
          <MemoryPolaroid
            key={item.image + index}
            item={item}
            index={index}
            onSelect={setActive}
          />
        ))}
      </div>
      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  );
}
