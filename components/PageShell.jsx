"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";
import { cn } from "@/lib/cn";

/** @typedef {'letter' | 'romantic' | 'scrapbook' | 'calm' | 'velvet' | 'sunset' | 'coastal' | 'hero' | 'none'} PageBackgroundVariant */

export default function PageShell({
  children,
  transparentNav = false,
  className = "",
  background = "none",
}) {
  const showBackground = background && background !== "none";

  return (
    <div className={cn("page-shell", className)}>
      {showBackground && <PageBackground variant={background} />}
      <Navbar transparent={transparentNav} />
      <main className="relative z-[1]">{children}</main>
      <Footer />
    </div>
  );
}
