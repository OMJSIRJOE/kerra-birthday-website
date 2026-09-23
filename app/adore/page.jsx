import AdoreCard from "@/components/AdoreCard";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import { birthdayContent } from "@/data/birthdayContent";

export default function AdorePage() {
  const { adore } = birthdayContent;

  return (
    <PageShell background="romantic" className="text-deep-brown">
      <div className="section-padding mx-auto max-w-6xl">
        <PageHeader
          lines={[adore.titleLines[0]]}
          scriptLine={adore.titleLines[1]}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adore.items.map((item, index) => (
            <AdoreCard key={item.title} item={item} index={index} />
          ))}
        </div>
        {adore.tagline ? (
          <p className="mt-14 text-center text-xs tracking-[0.35em] text-warm-brown uppercase">
            {adore.tagline}
          </p>
        ) : null}
        <div className={`flex justify-center ${adore.tagline ? "mt-10" : "mt-14"}`}>
          <Button href="/memories">See Our Memories</Button>
        </div>
      </div>
    </PageShell>
  );
}
