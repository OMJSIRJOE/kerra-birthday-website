import { birthdayContent } from "@/data/birthdayContent";

export default function Footer() {
  return (
    <footer className="border-t border-warm-brown/30 bg-warm-brown px-5 py-8 text-center text-sm text-ivory/90">
      <p className="font-script text-2xl text-ivory">
        For {birthdayContent.name} ♡
      </p>
      <p className="mt-2 text-xs tracking-[0.2em] text-ivory/80 uppercase">
        Made with love, just for you
      </p>
    </footer>
  );
}
