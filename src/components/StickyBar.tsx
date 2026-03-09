"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

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
              <Sparkles className="w-5 h-5 text-[#BD8C84] animate-pulse hidden sm:block" />
              <span className="text-white text-sm font-[family-name:var(--font-heebo)] font-bold hidden sm:block">
                הדס שמריהו | הסרת נגעי עור מ-70 ש״ח
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCheckout}
              className="bg-[#BD8C84] hover:bg-[#D1B09D] text-white font-[family-name:var(--font-heebo)] font-bold text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              לפגישת ייעוץ חינם →
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
