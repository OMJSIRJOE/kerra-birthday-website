import PageShell from "@/components/PageShell";
import SurpriseReveal from "@/components/SurpriseReveal";
import { birthdayContent } from "@/data/birthdayContent";

export default function SurprisePage() {
  return (
    <PageShell background="romantic" className="text-deep-brown">
      <div className="section-padding mx-auto max-w-4xl">
        <SurpriseReveal
          surprise={birthdayContent.surprise}
          finalMessage={birthdayContent.finalMessage}
        />
      </div>
    </PageShell>
  );
}
