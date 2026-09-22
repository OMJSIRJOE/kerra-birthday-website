import Button from "@/components/Button";
import MemoryGallery from "@/components/MemoryGallery";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import { birthdayContent } from "@/data/birthdayContent";

export default function MemoriesPage() {
  const { memories } = birthdayContent;
  const bodyParagraphs = memories.body.split(/\n\n+/).filter(Boolean);

  return (
    <PageShell background="scrapbook" className="text-deep-brown">
      <div className="section-padding mx-auto max-w-6xl">
        <PageHeader scriptLine={memories.title} subtitle={memories.intro} />
        <MemoryGallery items={memories.items} />
        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-center text-base leading-relaxed text-warm-brown sm:text-lg">
          {bodyParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/playlist">Continue to Playlist</Button>
        </div>
      </div>
    </PageShell>
  );
}
