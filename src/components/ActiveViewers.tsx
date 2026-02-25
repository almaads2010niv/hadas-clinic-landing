"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function ActiveViewers() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start with a realistic base count
    const base = Math.floor(Math.random() * 8) + 9; // 9-16
    setCount(base);

    // Show after 5 seconds
    const showTimer = setTimeout(() => setVisible(true), 5000);

    // Fluctuate count every 4-8 seconds
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        // Keep between 6 and 24
        if (next < 6) return prev + 1;
        if (next > 24) return prev - 1;
        return next;
      });
    }, Math.random() * 4000 + 4000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  // Hide temporarily every 40-60 seconds, then reshow
  useEffect(() => {
    if (!visible) return;

    const hideInterval = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 3000);
    }, Math.random() * 20000 + 40000);

    return () => clearInterval(hideInterval);
  }, [visible]);

  return (
    <div className="fixed bottom-6 left-6 z-50" dir="rtl">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-2xl px-4 py-3 shadow-2xl shadow-black/50 flex items-center gap-2.5 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Eye className="w-4 h-4 text-orange-400" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400 text-sm font-[family-name:var(--font-heebo)] font-bold tabular-nums">
                {count}
              </span>
              <span className="text-gray-400 text-xs font-[family-name:var(--font-heebo)]">
                צופים בהטבה עכשיו
              </span>
            </div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
