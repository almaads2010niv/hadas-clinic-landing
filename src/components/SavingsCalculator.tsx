"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown } from "lucide-react";

export default function TreatmentCalculator() {
  const [count, setCount] = useState(3);
  const dermPrice = 600;
  const hadasPrice = 70;
  const dermTotal = dermPrice * count;
  const hadasTotal = hadasPrice * count;
  const savings = dermTotal - hadasTotal;

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0D0D0D] to-[#0F0F0F]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#BD8C84] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            חשבי בעצמך
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            כמה יעלה לך <span className="text-gradient-rose">הטיפול?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1E1E1E] to-[#111] border border-white/10 rounded-[32px] p-8 sm:p-10"
        >
          {/* Slider */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-gray-400 font-[family-name:var(--font-heebo)]">
                כמה נגעים יש לך?
              </label>
              <span className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white">
                {count}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#BD8C84] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#BD8C84]/30"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2 font-[family-name:var(--font-heebo)]">
              <span>1 נגע</span>
              <span>5</span>
              <span>10 נגעים</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-2xl p-5 text-center">
              <TrendingDown className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm mb-1 font-[family-name:var(--font-heebo)]">
                אצל רופא עור
              </p>
              <p className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white">
                {dermTotal.toLocaleString()} ש״ח
              </p>
            </div>
            <div className="bg-[#BD8C84]/10 border border-[#BD8C84]/20 rounded-2xl p-5 text-center">
              <Calculator className="w-6 h-6 text-[#BD8C84] mx-auto mb-2" />
              <p className="text-gray-400 text-sm mb-1 font-[family-name:var(--font-heebo)]">
                אצל הדס
              </p>
              <motion.p
                key={hadasTotal}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="font-[family-name:var(--font-heebo)] font-black text-3xl text-[#BD8C84]"
              >
                {hadasTotal.toLocaleString()} ש״ח
              </motion.p>
              <motion.p
                key={savings}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-emerald-400 text-sm font-bold mt-1 font-[family-name:var(--font-heebo)]"
              >
                חוסכת {savings.toLocaleString()} ש״ח!
              </motion.p>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToCheckout}
            className="w-full cta-glow bg-[#BD8C84] hover:bg-[#D1B09D] text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 cursor-pointer"
          >
            אני רוצה ייעוץ חינם ל-{count} נגעים →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
