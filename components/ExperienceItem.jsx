"use client";

import {
  Coffee,
  Flower2,
  Heart,
  Infinity,
  MessageCircle,
  Camera,
  HeartHandshake,
  Music,
  Plane,
  Smile,
  Sparkles,
  Star,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const iconMap = {
  heart: Heart,
  sparkles: Sparkles,
  smile: Smile,
  star: Star,
  coffee: Coffee,
  message: MessageCircle,
  flower: Flower2,
  infinity: Infinity,
  camera: Camera,
  airplane: Plane,
  music: Music,
  "heart-handshake": HeartHandshake,
};

export default function ExperienceItem({ item, index }) {
  const reduceMotion = useReducedMotion();
  const Icon = iconMap[item.icon] || Heart;

  return (
    <motion.li
      className="relative flex gap-4 pb-10 last:pb-0"
      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.04, duration: 0.45 }}
    >
      <div className="relative flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blush/70 bg-ivory text-dusty-rose shadow-soft">
          <Icon size={18} aria-hidden />
        </div>
        <div
          className="mt-2 w-px flex-1 bg-gradient-to-b from-blush/80 to-transparent"
          aria-hidden
        />
      </div>
      <p className="pt-1.5 text-base leading-relaxed text-warm-brown sm:text-lg">
        {item.text}
      </p>
    </motion.li>
  );
}
