"use client";

import {
  Crown,
  Flower2,
  Heart,
  HeartHandshake,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const iconMap = {
  sparkles: Sparkles,
  crown: Crown,
  heart: Heart,
  butterfly: Flower2,
  "heart-handshake": HeartHandshake,
  ellipsis: MoreHorizontal,
};

export default function AdoreCard({ item, index }) {
  const reduceMotion = useReducedMotion();
  const Icon = iconMap[item.icon] || Heart;

  return (
    <motion.article
      className="flex h-full flex-col gap-4 rounded-2xl border border-blush/40 bg-[#f0e4df] p-6 shadow-glow-blush transition-shadow hover:shadow-glow"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blush/60 bg-cream text-dusty-rose">
        <Icon size={18} aria-hidden />
      </div>
      <h2 className="font-script text-2xl text-deep-brown">{item.title}</h2>
      <p className="text-base leading-relaxed text-warm-brown">
        {item.description}
      </p>
    </motion.article>
  );
}
