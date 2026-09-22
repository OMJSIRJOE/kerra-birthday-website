"use client";

import { cn } from "@/lib/cn";
import WatercolorHearts from "@/components/WatercolorHearts";

/** Reference mockup palette — color only, no photo backgrounds */
const C = {
  ivory: "#FFFDF9",
  cream: "#F7F0E8",
  sand: "#EFE6DC",
  blush: "#E8C7C3",
  blushDeep: "#D4A5A0",
  rose: "#C98A84",
  gold: "#B99A65",
  goldLight: "#D4B896",
  brown: "#6B5148",
  deep: "#211A18",
  charcoal: "#2C2624",
  wine: "#5C2E2A",
  sunset: "#D97850",
  sunsetDeep: "#8B4518",
  duskPink: "#E8C4C0",
  duskBlue: "#B8C9D9",
  duskLavender: "#C9B8D4",
};

const GRAIN =
  "bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.45%22/%3E%3C/svg%3E')]";

function Glow({
  className,
  style,
}) {
  return (
    <div
      className={cn("absolute rounded-full blur-3xl", className)}
      style={style}
      aria-hidden
    />
  );
}

function PaperLayers({ muted = false, watermark = false }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${C.ivory} 0%, ${C.cream} 45%, ${C.sand} 100%)`,
        }}
      />
      <Glow
        className="-right-[15%] -top-[10%] h-[65vmin] w-[75vmin] opacity-90"
        style={{
          background: `radial-gradient(circle, ${C.blush}99 0%, ${C.blush}33 40%, transparent 70%)`,
        }}
      />
      <Glow
        className="-left-[20%] top-[30%] h-[50vmin] w-[60vmin] opacity-80"
        style={{
          background: `radial-gradient(circle, ${C.blush}55 0%, transparent 65%)`,
        }}
      />
      <Glow
        className="bottom-0 right-[5%] h-[40vmin] w-[50vmin] opacity-70"
        style={{
          background: `radial-gradient(circle, ${C.goldLight}44 0%, transparent 68%)`,
        }}
      />
      {muted && (
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: C.sand }}
        />
      )}
      <WatercolorHearts largeWatermark={watermark} />
    </>
  );
}

const colorScenes = {
  letter: () => <PaperLayers watermark />,
  adore: () => <PaperLayers />,
  scrapbook: () => (
    <>
      <PaperLayers />
      <Glow
        className="left-[20%] top-[50%] h-[35vmin] w-[45vmin]"
        style={{
          background: `radial-gradient(circle, ${C.rose}33 0%, transparent 70%)`,
        }}
      />
    </>
  ),
  calm: () => <PaperLayers muted />,
  romantic: () => <PaperLayers />,

  /** Home — moody rose + candle warmth (reference hero) */
  hero: () => (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(165deg, ${C.deep} 0%, #3a2520 40%, ${C.charcoal} 100%)`,
        }}
      />
      <Glow
        className="left-[15%] top-[20%] h-[55vmin] w-[60vmin]"
        style={{
          background: `radial-gradient(circle, ${C.wine}bb 0%, ${C.wine}44 35%, transparent 65%)`,
        }}
      />
      <Glow
        className="left-[35%] top-[45%] h-[35vmin] w-[40vmin]"
        style={{
          background: `radial-gradient(circle, ${C.goldLight}66 0%, ${C.gold}33 40%, transparent 70%)`,
        }}
      />
      <Glow
        className="-right-[10%] bottom-[15%] h-[45vmin] w-[50vmin]"
        style={{
          background: `radial-gradient(circle, ${C.blushDeep}44 0%, transparent 65%)`,
        }}
      />
    </>
  ),

  /** Playlist — dark fabric tone + soft device glow */
  velvet: () => (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #3d3532 0%, ${C.deep} 55%, #141010 100%)`,
        }}
      />
      <Glow
        className="left-1/2 top-[25%] h-[45vmin] w-[70vmin] -translate-x-1/2"
        style={{
          background: `radial-gradient(circle, ${C.gold}33 0%, transparent 60%)`,
        }}
      />
      <Glow
        className="right-[10%] top-[40%] h-[30vmin] w-[35vmin]"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)`,
        }}
      />
    </>
  ),

  /** Prayer — sunset sky colors */
  sunset: () => (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(175deg, ${C.sunset} 0%, ${C.sunsetDeep} 28%, ${C.deep} 55%, #1a1218 100%)`,
        }}
      />
      <Glow
        className="left-1/2 top-[-8%] h-[75vmin] w-[110vmin] -translate-x-1/2"
        style={{
          background: `radial-gradient(circle, #ffb08888 0%, ${C.sunset}55 30%, transparent 62%)`,
        }}
      />
      <Glow
        className="bottom-[10%] left-[10%] h-[40vmin] w-[50vmin]"
        style={{
          background: `radial-gradient(circle, ${C.duskLavender}44 0%, transparent 70%)`,
        }}
      />
    </>
  ),

  /** Future — cream fading into pastel coastal tones */
  coastal: () => (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${C.ivory} 0%, ${C.cream} 35%, ${C.sand} 55%, ${C.duskPink} 72%, ${C.duskBlue} 88%, ${C.duskLavender}99 100%)`,
        }}
      />
      <Glow
        className="bottom-[5%] left-1/2 h-[50vmin] w-[90vmin] -translate-x-1/2"
        style={{
          background: `radial-gradient(circle, ${C.duskPink}66 0%, ${C.duskBlue}33 45%, transparent 70%)`,
        }}
      />
      <WatercolorHearts />
    </>
  ),
};

export default function PageBackground({ variant = "romantic" }) {
  const Scene = colorScenes[variant] ?? colorScenes.romantic;
  const isDark = variant === "hero" || variant === "velvet" || variant === "sunset";
  const isPaper =
    variant === "letter" ||
    variant === "adore" ||
    variant === "scrapbook" ||
    variant === "calm" ||
    variant === "romantic" ||
    variant === "coastal";

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <Scene />
      {isPaper && (
        <div className={cn("absolute inset-0 opacity-[0.38] mix-blend-multiply", GRAIN)} />
      )}
      {isDark && (
        <div className={cn("absolute inset-0 opacity-[0.12] mix-blend-overlay", GRAIN)} />
      )}
      <div
        className={cn(
          "absolute inset-0",
          isDark
            ? "bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]"
            : "bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(107,81,72,0.06)_100%)]"
        )}
      />
    </div>
  );
}
