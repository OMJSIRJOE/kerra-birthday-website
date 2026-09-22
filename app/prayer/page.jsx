import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import PrayerCard from "@/components/PrayerCard";
import { birthdayContent } from "@/data/birthdayContent";

export default function PrayerPage() {
  const { prayer } = birthdayContent;

  return (
    <PageShell background="sunset" className="text-ivory">
      <div className="section-padding relative mx-auto max-w-4xl">
        <PageHeader
          lines={[prayer.titleLines[0]]}
          scriptLine={prayer.titleLines[1]}
          light
        />
        <PrayerCard prayer={prayer} />
        <p className="relative mt-12 text-center text-xs tracking-[0.35em] text-ivory/75 uppercase">
          {prayer.tagline}
        </p>
        <div className="relative mt-10 flex justify-center">
          <Button href="/surprise" variant="light">
            One more thing…
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
