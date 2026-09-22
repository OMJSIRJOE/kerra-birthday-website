"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-deep-brown/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -right-1 -top-10 rounded-full p-2 text-ivory focus-ring sm:-right-10 sm:top-0"
              aria-label="Close preview"
            >
              <X size={24} />
            </button>
            <div className="paper-card overflow-hidden p-3">
              <div className="relative aspect-[4/5] w-full bg-cream">
                <Image
                  src={item.image}
                  alt={item.caption || "Memory photo"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 512px"
                />
              </div>
              {item.caption && (
                <p className="mt-3 text-center font-script text-xl text-warm-brown">
                  {item.caption}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
