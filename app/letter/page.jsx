import Button from "@/components/Button";
import LetterCard from "@/components/LetterCard";
import PageShell from "@/components/PageShell";
import { birthdayContent } from "@/data/birthdayContent";

export default function LetterPage() {
  const { letter } = birthdayContent;

  return (
    <PageShell background="letter" className="text-deep-brown">
      <div className="section-padding mx-auto max-w-4xl">
        <LetterCard
          titleLines={letter.titleLines}
          body={letter.body}
          image={letter.image || undefined}
          signature={letter.signature}
        />
        <div className="mt-12 flex justify-center">
          <Button href="/adore">Continue</Button>
        </div>
      </div>
    </PageShell>
  );
}
