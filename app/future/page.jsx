import Button from "@/components/Button";
import ExperienceItem from "@/components/ExperienceItem";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import { birthdayContent } from "@/data/birthdayContent";

export default function FuturePage() {
  const { future } = birthdayContent;

  return (
    <PageShell background="coastal" className="text-deep-brown">
      <div className="section-padding mx-auto max-w-3xl">
        <PageHeader
          lines={[future.titleLines[0]]}
          scriptLine={future.titleLines[1]}
        />
        <ol className="mt-4 list-none">
          {future.items.map((item, index) => (
            <ExperienceItem key={item.text} item={item} index={index} />
          ))}
        </ol>
        <p className="mt-12 text-center font-script text-2xl text-dusty-rose">
          {future.tagline}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/tribute" variant="secondary">
            There&apos;s something else...
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
