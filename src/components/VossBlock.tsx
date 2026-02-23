"use client";

import { motion } from "framer-motion";
import { Wallet, Flame, Crown } from "lucide-react";

const questions = [
  {
    icon: <Wallet className="w-8 h-8" />,
    text: "האם זה רעיון רע לחסוך כמעט 1,000 שקלים השנה על הבריאות שלך?",
    accent: "from-[#E60000]/20 to-transparent",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    text: "האם ויתרת לחלוטין על התחושה של לסיים אימון טוב עם אנרגיות שיא?",
    accent: "from-[#D4A853]/20 to-transparent",
  },
  {
    icon: <Crown className="w-8 h-8" />,
    text: "האם תהיה נגד לקבל מנוי לקאנטרי המוביל, בתעריף פרימיום ששמור בדרך כלל רק למבצעים סגורים?",
    accent: "from-[#E60000]/20 to-transparent",
  },
];

export default function VossBlock() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Diagonal red line accent */}
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#E60000]/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#E60000] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            שאלה אחת קטנה
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            תהיו כנים עם עצמכם
          </h2>
        </motion.div>

        <div className="space-y-6">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div
                className={`relative bg-gradient-to-br ${q.accent} border border-white/5 rounded-3xl p-8 sm:p-10 overflow-hidden backdrop-blur-sm hover:border-[#E60000]/20 transition-all duration-500`}
              >
                {/* Overlapping offset effect */}
                <div
                  className="absolute -top-2 -right-2 w-full h-full border border-[#E60000]/10 rounded-3xl -z-10 group-hover:top-0 group-hover:right-0 transition-all duration-500"
                />

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#E60000]/10 flex items-center justify-center text-[#E60000] group-hover:bg-[#E60000] group-hover:text-white transition-all duration-500">
                    {q.icon}
                  </div>

                  {/* Text */}
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed pt-2">
                    {q.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
