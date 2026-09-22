import Image from "next/image";
import { Heart } from "lucide-react";

export default function LetterCard({ titleLines, body, image, signature }) {
  const paragraphs = body.split(/\n\n+/).filter(Boolean);

  return (
    <article className="paper-card relative mx-auto max-w-2xl px-6 py-10 sm:px-10 sm:py-12">
      <Heart
        className="absolute right-6 top-6 text-blush/80"
        size={18}
        aria-hidden
      />
      <header className="mb-8 text-center">
        {titleLines?.[0] && (
          <p className="text-xs tracking-[0.35em] text-warm-brown uppercase">
            {titleLines[0]}
          </p>
        )}
        <h1 className="mt-2 font-script text-4xl text-dusty-rose sm:text-5xl">
          {titleLines?.[1] || "Birthday Love"}
        </h1>
      </header>

      {image && (
        <div className="relative mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border border-warm-brown/15 shadow-soft sm:h-44 sm:w-44">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="176px"
          />
        </div>
      )}

      <div className="space-y-5 text-base leading-relaxed text-warm-brown sm:text-lg">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {signature && (
        <p className="mt-10 text-right font-script text-2xl text-deep-brown">
          {signature}
        </p>
      )}
    </article>
  );
}
