"use client";

import { useReducedMotion } from "framer-motion";

const hearts = [
  { top: "8%", left: "6%", size: 28, rotate: -12, opacity: 0.22 },
  { top: "18%", right: "10%", size: 36, rotate: 8, opacity: 0.18 },
  { top: "42%", left: "4%", size: 22, rotate: 15, opacity: 0.15 },
  { top: "55%", right: "6%", size: 32, rotate: -8, opacity: 0.2 },
  { top: "72%", left: "12%", size: 26, rotate: 6, opacity: 0.17 },
  { top: "85%", right: "14%", size: 24, rotate: -14, opacity: 0.16 },
  { top: "30%", left: "45%", size: 120, rotate: 0, opacity: 0.06 },
];

function HeartSvg({ size, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}

export default function WatercolorHearts({ largeWatermark = false }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {largeWatermark && (
        <div className="absolute left-1/2 top-[28%] -translate-x-1/2 text-blush/25">
          <HeartSvg size={200} />
        </div>
      )}
      {hearts.map((h, i) => (
        <div
          key={i}
          className="absolute text-blush"
          style={{
            top: h.top,
            left: h.left,
            right: h.right,
            opacity: h.opacity,
            transform: `rotate(${h.rotate}deg)`,
          }}
        >
          <HeartSvg size={h.size} className="blur-[0.3px]" />
        </div>
      ))}
    </div>
  );
}
