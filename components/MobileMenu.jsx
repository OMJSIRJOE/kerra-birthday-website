"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/data/birthdayContent";

export default function MobileMenu({ open, onClose, pathname }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-deep-brown/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col bg-ivory text-deep-brown shadow-polaroid"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            <div className="flex items-center justify-between border-b border-warm-brown/10 px-5 py-4">
              <span className="font-script text-2xl text-deep-brown">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-deep-brown focus-ring"
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
              {[...navLinks.primary, ...navLinks.more].map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block rounded-lg px-4 py-3 text-base transition-colors focus-ring ${
                        active
                          ? "bg-blush/30 text-deep-brown"
                          : "text-deep-brown hover:bg-cream"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
