"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown } from "lucide-react";

export default function SavingsCalculator() {
  const [months, setMonths] = useState(12);
  const regularPrice = 419;
  const vipPrice = 249;
  const monthlySaving = regularPrice - vipPrice; // 170
  const totalSaving = monthlySaving * months;
  // First month at 1 NIS instead of regular price
  const extraSaving = regularPrice - 1; // 418
  const grandTotal = totalSaving + extraSaving;

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#E60000] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            חשבו בעצמכם
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            מחשבון <span className="text-gradient-red">החיסכון</span> שלכם
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1A1A1A] to-[#111] border border-white/10 rounded-[32px] p-8 sm:p-10"
        >
          {/* Slider */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-gray-400 font-[family-name:var(--font-heebo)]">
                כמה חודשים אתם מתכננים להתאמן?
              </label>
              <span className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white">
                {months}
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="60"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#E60000] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#E60000]/30"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2 font-[family-name:var(--font-heebo)]">
              <span>3 חודשים</span>
              <span>שנה</span>
              <span>שנתיים</span>
              <span>5 שנים</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-2xl p-5 text-center">
              <TrendingDown className="w-6 h-6 text-[#E60000] mx-auto mb-2" />
              <p className="text-gray-500 text-sm mb-1 font-[family-name:var(--font-heebo)]">
                חיסכון חודשי
              </p>
              <p className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white">
                {monthlySaving} ש״ח
              </p>
            </div>
            <div className="bg-[#E60000]/10 border border-[#E60000]/20 rounded-2xl p-5 text-center">
              <Calculator className="w-6 h-6 text-[#E60000] mx-auto mb-2" />
              <p className="text-gray-400 text-sm mb-1 font-[family-name:var(--font-heebo)]">
                סה״כ חיסכון
              </p>
              <motion.p
                key={grandTotal}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="font-[family-name:var(--font-heebo)] font-black text-3xl text-[#E60000]"
              >
                {grandTotal.toLocaleString()} ש״ח
              </motion.p>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToCheckout}
            className="w-full cta-glow bg-[#E60000] hover:bg-[#FF1A1A] text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 cursor-pointer"
          >
            אני רוצה לחסוך {grandTotal.toLocaleString()} ש״ח →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
