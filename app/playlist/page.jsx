import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import PlaylistCard from "@/components/PlaylistCard";
import { birthdayContent } from "@/data/birthdayContent";

export default function PlaylistPage() {
  const { playlist } = birthdayContent;

  return (
    <PageShell background="velvet" className="text-ivory">
      <div className="section-padding mx-auto max-w-4xl">
        <PageHeader
          lines={[playlist.titleLines[0]]}
          scriptLine={playlist.titleLines[1]}
          light
        />
        <PlaylistCard playlist={playlist} />
        <p className="mt-12 text-center text-xs tracking-[0.35em] text-ivory/70 uppercase">
          {playlist.tagline}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/future" variant="light">
            More About You
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
