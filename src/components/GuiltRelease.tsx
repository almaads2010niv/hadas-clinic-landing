"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function GuiltRelease() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0D0A08] to-[#0F0F0F]" />

      {/* Soft gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4A853]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heart icon */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4A853]/10 border border-[#D4A853]/20 mb-8"
          >
            <Heart className="w-8 h-8 text-[#D4A853]" />
          </motion.div>

          {/* Horizontal rule accent */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-gradient-to-l from-[#D4A853]/40 to-transparent" />
            <span className="text-[#D4A853] text-xs font-bold tracking-[0.3em] font-[family-name:var(--font-heebo)]">
              רגע של כנות
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-[#D4A853]/40 to-transparent" />
          </div>

          {/* Main text */}
          <p className="font-[family-name:var(--font-assistant)] text-xl sm:text-2xl text-gray-300 leading-[1.8] sm:leading-[1.9]">
            <span className="text-white font-semibold">
              כמה פעמים הסתכלת על עצמך במראה ואמרת &quot;אני אטפל בזה מתישהו&quot;?
            </span>
            <br />
            כמה אירועים הלבשת שרוול ארוך כי לא רצית שיראו?
            כמה כסף בזבזת על קרמים שהבטיחו הכל?
            <br />
            <br />
            הגיע הזמן להפסיק לדחות ולהתחיל לחיות —{" "}
            <span className="text-[#D4A853] font-semibold">
              בלי להתנצל על העור שלך.
            </span>
            <br />
            <br />
            <span className="text-white font-medium">
              20 פניות בלבד החודש. ההזדמנות הזו נוצרה בדיוק בשבילך.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
