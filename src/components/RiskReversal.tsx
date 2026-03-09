"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Clock } from "lucide-react";

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
          <div className="relative bg-[#BD8C84] rounded-[32px] p-10 sm:p-14 overflow-hidden">
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

              <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl text-white mb-8 leading-tight">
                אפס סיכון.
                <br />
                אפס התחייבות.
                <br />
                רק ייעוץ.
              </h2>

              <div className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8 space-y-5">
                <p>
                  פגישת האבחון חינם לחלוטין — בלי לחץ, בלי התחייבות.
                  את באה, נבדוק יחד מה יתאים לך, ורק אם את מרגישה בנוח — נתחיל.
                </p>

                <p className="text-white font-bold text-xl sm:text-2xl pt-2">
                  28 שנות ניסיון ואלפי לקוחות מרוצות מדברות בעד עצמן.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
                  <Heart className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold font-[family-name:var(--font-heebo)]">
                    ייעוץ חינם
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold font-[family-name:var(--font-heebo)]">
                    ללא התחייבות
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold font-[family-name:var(--font-heebo)]">
                    28 שנות ניסיון
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
