import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import { birthdayContent } from "@/data/birthdayContent";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: `Happy Birthday, ${birthdayContent.name} ♡`,
  description: `A romantic birthday surprise made for ${birthdayContent.name}`,
  openGraph: {
    title: `Happy Birthday, ${birthdayContent.name} ♡`,
    description: "A little corner of the internet made just for you.",
  },
};

export const viewport = {
  themeColor: "#F7F0E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
