"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";

export default function RiskReversal() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Main card */}
          <div className="relative bg-[#E60000] rounded-[32px] p-10 sm:p-14 overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
            </div>

            {/* Geometric accent */}
            <div className="absolute -top-20 -left-20 w-60 h-60 border-2 border-white/10 rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-white/10 rounded-full" />

            <div className="relative z-10 text-center">
              {/* Shield icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm mb-8"
              >
                <ShieldCheck className="w-10 h-10 text-white" />
              </motion.div>

              <p className="text-white/70 text-sm font-semibold tracking-wider mb-4 font-[family-name:var(--font-heebo)]">
                אתם מכירים אותנו. אנחנו מכירים אתכם.
              </p>

              <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl text-white mb-8 leading-tight">
                אפס סיכון.
                <br />
                אפס חששות.
                <br />
                רק הזדמנות.
              </h2>

              <div className="space-y-4 text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                <p>
                  לא הגעתם ליום הפתוח? <strong>הכסף חוזר אליכם.</strong>
                </p>
                <p>
                  הגעתם והחלטתם שזה לא מתאים? <strong>הכסף חוזר אליכם.</strong>
                </p>
                <p>
                  החלטתם תוך 14 יום שלא רוצים? <strong>הכסף חוזר אליכם.</strong>
                </p>
                <p className="text-white font-bold text-xl sm:text-2xl pt-2">
                  150 ש״ח — החזר מלא מובטח. בלי שאלות. בלי סיפורים.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
                  <Lock className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold font-[family-name:var(--font-heebo)]">
                    תשלום מאובטח
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold font-[family-name:var(--font-heebo)]">
                    ללא התחייבות
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
