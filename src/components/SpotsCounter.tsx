"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function SpotsCounter() {
  const [totalSpots] = useState(50);
  const [takenSpots, setTakenSpots] = useState(0);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const res = await fetch("/api/spots");
        const data = await res.json();
        setTakenSpots(data.takenSpots || 0);
      } catch {
        // Fallback: keep at 0
      }
    };

    fetchSpots();
    // Refresh every 120 seconds (reduced to handle high traffic)
    const interval = setInterval(fetchSpots, 120000);
    return () => clearInterval(interval);
  }, []);

  const remainingSpots = totalSpots - takenSpots;
  const percentage = (takenSpots / totalSpots) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex flex-col items-center gap-3 bg-[#1A1A1A]/80 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <Flame className="w-4 h-4 text-[#E60000] animate-pulse" />
        <span className="font-[family-name:var(--font-heebo)] font-bold text-white text-sm">
          נשארו{" "}
          <span className="text-[#E60000] text-lg">{remainingSpots}</span> מקומות
          מתוך {totalSpots}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-l from-[#E60000] to-[#FF4444] rounded-full"
        />
      </div>
    </motion.div>
  );
}
