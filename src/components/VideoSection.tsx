"use client";

import { motion } from "framer-motion";
import { Circle, Scissors, Zap, Shield } from "lucide-react";

const treatments = [
  { icon: <Circle className="w-7 h-7" />, label: "שומות", desc: "הסרה מקצועית ללא צלקות" },
  { icon: <Scissors className="w-7 h-7" />, label: "סרחי עור", desc: "תוצאה מיידית מהטיפול הראשון" },
  { icon: <Zap className="w-7 h-7" />, label: "פלולות", desc: "שיטה חדשנית וללא כאב" },
  { icon: <Shield className="w-7 h-7" />, label: "נגעי עור", desc: "אבחון מקצועי + טיפול מותאם" },
];

export default function VideoSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0D0D0D] to-[#0F0F0F]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#BD8C84] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            הגיע הזמן לטפל בזה
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl mb-6">
            הסוף ל<span className="text-gradient-rose">״פלולות״</span>!
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            ניתן לטפל היום כמעט בכל נגע שמפריע לנו בשיטה חדשנית ומהפכנית — החל מ-
            <span className="text-white font-bold">70 ש״ח לנגע</span>.
            <br />
            <span className="text-white font-semibold">ללא כאב וללא צלקות!</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {treatments.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-[#1E1E1E] border border-white/5 rounded-3xl p-6 sm:p-8 text-center hover:border-[#BD8C84]/30 transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#BD8C84]/10 text-[#BD8C84] mb-4 group-hover:bg-[#BD8C84] group-hover:text-white transition-all duration-500">
                {t.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heebo)] font-bold text-lg text-white mb-2">
                {t.label}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Rose corner accents on the section */}
        <div className="absolute top-0 right-0 w-24 h-1 bg-[#BD8C84]/30" />
        <div className="absolute top-0 right-0 w-1 h-24 bg-[#BD8C84]/30" />
        <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#BD8C84]/30" />
        <div className="absolute bottom-0 left-0 w-1 h-24 bg-[#BD8C84]/30" />
      </div>
    </section>
  );
}
