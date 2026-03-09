"use client";

import { motion } from "framer-motion";
import { X, Check, Star, ArrowDown } from "lucide-react";

export default function PricingTable() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0D0D0D] to-[#0F0F0F]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#BD8C84] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            השוואה שמדברת בעד עצמה
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            תעשי את <span className="text-gradient-rose">החשבון</span>
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
            <div className="h-full bg-[#1E1E1E]/50 border border-white/5 rounded-3xl p-8 sm:p-10 opacity-60">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <X className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-gray-400">
                  הדרך הרגילה
                </h3>
              </div>

              <p className="text-gray-500 text-sm mb-6 font-[family-name:var(--font-heebo)]">
                רופא עור פרטי
              </p>

              <div className="space-y-6">
                <div>
                  <span className="text-gray-500 text-sm">ביקור ראשוני</span>
                  <p className="font-[family-name:var(--font-heebo)] font-black text-4xl text-gray-400 line-through decoration-[#BD8C84]/50 decoration-2">
                    400 ש״ח
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                <div>
                  <span className="text-gray-500 text-sm">הסרת נגע</span>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-gray-400 line-through decoration-[#BD8C84]/50 decoration-2">
                    200 ש״ח
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="text-gray-600 text-sm">סה״כ לנגע</span>
                  <p className="font-[family-name:var(--font-heebo)] font-black text-3xl text-gray-400 line-through decoration-[#BD8C84]/50 decoration-2">
                    600 ש״ח
                  </p>
                </div>

                <div className="text-gray-600 text-sm font-[family-name:var(--font-heebo)] space-y-1 pt-2">
                  <p>+ זמן המתנה ארוך</p>
                  <p>+ ניתוח קטן עם הרדמה</p>
                </div>
              </div>
            </div>

            {/* Diagonal strikethrough */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 bottom-4 right-4 border-2 border-[#BD8C84]/10 rounded-3xl" />
            </div>
          </motion.div>

          {/* Hadas Path - Highlighted */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-[#1E1E1E] to-[#111] border-2 border-[#BD8C84]/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#BD8C84]/20 rounded-full blur-[80px]" />

              <div className="relative z-10">
                {/* Badges — inside the card flow */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-2 bg-[#BD8C84] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg shadow-[#BD8C84]/30 font-[family-name:var(--font-heebo)]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    המסלול המומלץ
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30 font-[family-name:var(--font-heebo)]">
                    ייעוץ חינם!
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div className="w-10 h-10 rounded-xl bg-[#BD8C84]/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#BD8C84]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-white">
                    הדרך של הדס
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-gray-400 text-sm">פגישת אבחון</span>
                    <p className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-emerald-400 mt-1">
                      חינם!
                    </p>
                  </div>

                  <div className="h-px bg-[#BD8C84]/20" />

                  <div className="bg-[#BD8C84]/10 rounded-2xl p-5 -mx-2 border border-[#BD8C84]/20">
                    <span className="text-[#BD8C84] text-base font-bold font-[family-name:var(--font-heebo)]">הסרת נגע</span>
                    <div className="flex items-baseline gap-3 justify-center">
                      <p className="font-[family-name:var(--font-heebo)] font-black text-7xl sm:text-8xl text-white">
                        70
                      </p>
                      <span className="text-3xl text-white font-bold">ש״ח</span>
                    </div>
                    <span className="text-[#BD8C84] text-sm font-semibold">לנגע בלבד!</span>
                  </div>

                  <div className="h-px bg-[#BD8C84]/20" />

                  <div className="flex flex-wrap justify-center gap-3 text-sm font-[family-name:var(--font-heebo)]">
                    <span className="text-gray-300 flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-400" />
                      ללא כאב
                    </span>
                    <span className="text-gray-300 flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-400" />
                      ללא צלקות
                    </span>
                    <span className="text-gray-300 flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-400" />
                      תוצאה מיידית
                    </span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#BD8C84]/20">
                    <div className="bg-[#BD8C84]/10 rounded-2xl p-4 text-center">
                      <span className="text-[#BD8C84] text-sm font-semibold block mb-1">
                        החיסכון שלך
                      </span>
                      <p className="font-[family-name:var(--font-heebo)] font-black text-3xl text-white">
                        חוסכת עד 530 ש״ח
                      </p>
                      <span className="text-gray-400 text-sm">לנגע!</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToCheckout}
                  className="w-full mt-8 cta-glow bg-[#BD8C84] hover:bg-[#D1B09D] text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>קבעי פגישת ייעוץ חינם ⬅️</span>
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
