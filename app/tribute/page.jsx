import Button from "@/components/Button";
import PageShell from "@/components/PageShell";
import TributeSection from "@/components/TributeSection";
import { birthdayContent } from "@/data/birthdayContent";

export default function TributePage() {
  return (
    <PageShell background="calm" className="text-deep-brown">
      <div className="section-padding mx-auto max-w-4xl">
        <TributeSection tribute={birthdayContent.tribute} />
        <div className="mt-12 flex justify-center">
          <Button href="/prayer" variant="secondary">
            Continue
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
