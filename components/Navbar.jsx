"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { navLinks } from "@/data/birthdayContent";
import MobileMenu from "@/components/MobileMenu";
import { cn } from "@/lib/cn";

export default function Navbar({ transparent = false }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onDocClick(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const shell = transparent
    ? "bg-deep-brown/45 text-ivory backdrop-blur-md border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
    : "bg-warm-brown/95 text-ivory backdrop-blur-md border-warm-brown shadow-soft";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 border-b transition-colors",
          shell
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="font-script text-xl text-ivory focus-ring sm:text-2xl"
          >
            Kerra ♡
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main"
          >
            {navLinks.primary.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-xs tracking-[0.15em] uppercase transition-colors focus-ring lg:px-4",
                  pathname === link.href
                    ? transparent
                      ? "bg-white/20 text-ivory"
                      : "bg-ivory/15 text-ivory"
                    : transparent
                      ? "text-ivory/90 hover:bg-white/15"
                      : "text-ivory/90 hover:bg-ivory/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs tracking-[0.15em] uppercase focus-ring lg:px-4",
                  moreOpen
                    ? transparent
                      ? "bg-white/20 text-ivory"
                      : "bg-ivory/15 text-ivory"
                    : transparent
                      ? "text-ivory/90 hover:bg-white/15"
                      : "text-ivory/90 hover:bg-ivory/10"
                )}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform",
                    moreOpen && "rotate-180"
                  )}
                />
              </button>
              {moreOpen && (
                <ul
                  className="absolute right-0 top-full mt-2 min-w-[240px] rounded-xl border border-warm-brown/20 bg-ivory py-2 shadow-polaroid"
                  role="menu"
                >
                  {navLinks.more.map((link) => (
                    <li key={link.href} role="none">
                      <Link
                        href={link.href}
                        role="menuitem"
                        className={cn(
                          "block px-4 py-2.5 text-sm text-deep-brown hover:bg-cream focus-ring",
                          pathname === link.href && "bg-blush/40 font-medium text-deep-brown"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          <button
            type="button"
            className="rounded-full p-2 text-ivory md:hidden focus-ring"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
