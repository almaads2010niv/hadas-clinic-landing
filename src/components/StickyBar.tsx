"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";

export default function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 80vh)
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5"
          dir="rtl"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Flame className="w-5 h-5 text-[#E60000] animate-pulse hidden sm:block" />
              <span className="text-white text-sm font-[family-name:var(--font-heebo)] font-bold hidden sm:block">
                יום פתוח VIP | 25.2.26
              </span>
              <span className="text-gray-400 text-xs hidden md:block">
                חודש מרץ ב-1 ש״ח + מנוי VIP
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCheckout}
              className="bg-[#E60000] hover:bg-[#FF1A1A] text-white font-[family-name:var(--font-heebo)] font-bold text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              שריון עסקת ה-VIP ב-150 ש״ח
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
