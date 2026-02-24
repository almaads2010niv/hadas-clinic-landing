"use client";

import { motion } from "framer-motion";
import { X, Check, Star, ArrowDown } from "lucide-react";

export default function PricingTable() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#E60000] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            השוואה שמדברת בעד עצמה
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            תעשו את <span className="text-gradient-red">החשבון</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Regular Path - Faded */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full bg-[#1A1A1A]/50 border border-white/5 rounded-3xl p-8 sm:p-10 opacity-60">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <X className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-gray-400">
                  המסלול הרגיל
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-gray-500 text-sm">מחיר חודשי</span>
                  <p className="font-[family-name:var(--font-heebo)] font-black text-4xl text-gray-400 line-through decoration-[#E60000]/50 decoration-2">
                    419 ש״ח
                  </p>
                  <span className="text-gray-600 text-sm">לחודש</span>
                </div>

                <div className="h-px bg-white/5" />

                <div>
                  <span className="text-gray-500 text-sm">דמי רישום</span>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-gray-400 line-through decoration-[#E60000]/50 decoration-2">
                    150 ש״ח
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                <div>
                  <span className="text-gray-500 text-sm">חודש ראשון</span>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-gray-400 line-through decoration-[#E60000]/50 decoration-2">
                    419 ש״ח
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="text-gray-600 text-sm">סה״כ לשנה הראשונה</span>
                  <p className="font-[family-name:var(--font-heebo)] font-black text-3xl text-gray-400 line-through decoration-[#E60000]/50 decoration-2">
                    5,178 ש״ח
                  </p>
                </div>
              </div>
            </div>

            {/* Diagonal strikethrough */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 bottom-4 right-4 border-2 border-[#E60000]/10 rounded-3xl" />
            </div>
          </motion.div>

          {/* VIP Path - Highlighted */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Top badges */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              <div className="flex items-center gap-2 bg-[#E60000] text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg shadow-[#E60000]/30 font-[family-name:var(--font-heebo)]">
                <Star className="w-4 h-4 fill-current" />
                מסלול VIP ליום הפתוח
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-emerald-500/30 font-[family-name:var(--font-heebo)]">
                ללא התחייבות!
              </div>
            </div>

            <div className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#111] border-2 border-[#E60000]/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E60000]/20 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#E60000]/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#E60000]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-white">
                    מסלול ה-VIP
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#E60000]/10 rounded-2xl p-5 -mx-2 border border-[#E60000]/20">
                    <span className="text-[#E60000] text-base font-bold font-[family-name:var(--font-heebo)]">חודש מרץ</span>
                    <div className="flex items-baseline gap-3 justify-center">
                      <p className="font-[family-name:var(--font-heebo)] font-black text-7xl sm:text-8xl text-white">
                        1
                      </p>
                      <span className="text-3xl text-white font-bold">ש״ח</span>
                    </div>
                    <span className="text-[#E60000] text-sm font-semibold">בלבד!</span>
                  </div>

                  <div className="h-px bg-[#E60000]/20" />

                  <div className="text-center">
                    <span className="text-gray-400 text-sm">דמי רישום ושריון:</span>
                    <p className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-white mt-1">
                      150 ש״ח
                    </p>
                    <span className="text-gray-500 text-xs">(מוחזרים במלואם במקרה של ביטול)</span>
                  </div>

                  <div className="h-px bg-[#E60000]/20" />

                  <div>
                    <span className="text-gray-400 text-sm">מחיר חודשי מוזל</span>
                    <div className="flex items-baseline gap-2 justify-center">
                      <p className="font-[family-name:var(--font-heebo)] font-black text-4xl text-white">
                        249
                      </p>
                      <span className="text-xl text-white font-bold">ש״ח</span>
                    </div>
                    <span className="text-[#E60000] text-sm font-semibold">
                      במקום 419 ש״ח מחירון
                    </span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#E60000]/20">
                    <div className="bg-[#E60000]/10 rounded-2xl p-4 text-center">
                      <span className="text-[#E60000] text-sm font-semibold block mb-1">
                        החיסכון שלכם
                      </span>
                      <p className="font-[family-name:var(--font-heebo)] font-black text-3xl text-white">
                        2,458 ש״ח
                      </p>
                      <span className="text-gray-400 text-sm">בשנה הראשונה</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToCheckout}
                  className="w-full mt-8 cta-glow bg-[#E60000] hover:bg-[#FF1A1A] text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>שריינו לי את ההטבה ⬅️</span>
                  <ArrowDown className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
