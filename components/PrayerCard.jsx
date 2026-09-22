import { Cross } from "lucide-react";

export default function PrayerCard({ prayer }) {
  const bodyParagraphs = prayer.body.split(/\n\n+/).filter(Boolean);
  const scriptureParagraphs = prayer.scripture.split(/\n\n+/).filter(Boolean);

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <article className="rounded-sm border border-white/10 bg-deep-brown/40 p-6 backdrop-blur-sm sm:p-10">
        <Cross
          className="mx-auto mb-6 text-gold/70"
          size={22}
          strokeWidth={1.5}
          aria-hidden
        />
        <div className="space-y-5 text-base leading-relaxed text-ivory/95 sm:text-lg">
          {bodyParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <article className="paper-card border-gold/20 p-6 sm:p-8">
        <p className="text-center text-xs tracking-[0.3em] text-gold uppercase">
          {prayer.scriptureTitle}
        </p>
        <div className="mt-5 space-y-4 text-center text-base leading-relaxed text-warm-brown sm:text-lg">
          {scriptureParagraphs.map((p, i) => (
            <p key={i} className={i > 0 ? "italic" : ""}>
              {p}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
