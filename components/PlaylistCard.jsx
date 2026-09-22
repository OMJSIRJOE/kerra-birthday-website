"use client";

import Image from "next/image";
import { ExternalLink, Music2 } from "lucide-react";
import Button from "@/components/Button";
import { getSpotifyEmbedUrl } from "@/lib/spotify";

export default function PlaylistCard({ playlist }) {
  const hasUrl = Boolean(playlist.url);
  const embedUrl = hasUrl ? getSpotifyEmbedUrl(playlist.url) : null;

  return (
    <div className="paper-card mx-auto max-w-lg overflow-hidden">
      <div className="relative aspect-square bg-gradient-to-br from-blush/40 via-cream to-ivory">
        {playlist.artwork ? (
          <Image
            src={playlist.artwork}
            alt=""
            fill
            className="object-cover"
            sizes="512px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gold/70">
            <Music2 size={64} strokeWidth={1.2} aria-hidden />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/50 to-transparent" />
        <div className="absolute bottom-0 p-6 text-ivory">
          <p className="text-xs tracking-[0.25em] uppercase opacity-80">
            Playlist
          </p>
          <h2 className="mt-1 font-script text-3xl">{playlist.name}</h2>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-base leading-relaxed text-warm-brown">
          {playlist.description}
        </p>
        {hasUrl ? (
          <>
            {embedUrl && (
              <div className="overflow-hidden rounded-xl border border-warm-brown/10">
                <iframe
                  title="Spotify playlist"
                  src={embedUrl}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            )}
            <Button
              href={playlist.url}
              external
              variant="primary"
              className="w-full gap-2 normal-case tracking-normal"
              ariaLabel="Open playlist in music app"
            >
              <span className="inline-flex items-center gap-2">
                {playlist.playButton || "Press Play 🎵"}
                <ExternalLink size={16} />
              </span>
            </Button>
          </>
        ) : (
          <p className="rounded-lg border border-dashed border-warm-brown/25 bg-cream/50 px-4 py-3 text-sm text-warm-brown/80">
            Add your Spotify or Apple Music link in{" "}
            <code className="text-xs">data/birthdayContent.js</code>.
          </p>
        )}
      </div>
    </div>
  );
}
