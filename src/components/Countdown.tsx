"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculate = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;

  const blocks = [
    { value: timeLeft.days, label: "ימים" },
    { value: timeLeft.hours, label: "שעות" },
    { value: timeLeft.minutes, label: "דקות" },
    { value: timeLeft.seconds, label: "שניות" },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-[#E60000] font-semibold tracking-wider font-[family-name:var(--font-heebo)] uppercase">
        היום הפתוח מסתיים בעוד
      </p>
      <div className="flex gap-3 sm:gap-4 direction-ltr" dir="ltr">
        {blocks.map((block, i) => (
          <div key={block.label} className="flex flex-col items-center">
            <motion.div
              key={block.value}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-b from-[#1A1A1A] to-[#111] border border-white/10 rounded-xl flex items-center justify-center"
            >
              {/* Red top accent line */}
              <div className="absolute top-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#E60000] to-transparent" />
              <span className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl text-white counter-number">
                {String(block.value).padStart(2, "0")}
              </span>
            </motion.div>
            <span className="text-xs text-gray-500 mt-2 font-[family-name:var(--font-heebo)]">
              {block.label}
            </span>
            {i < blocks.length - 1 && (
              <span className="hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
