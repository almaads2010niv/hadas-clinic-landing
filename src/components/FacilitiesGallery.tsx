"use client";

import { motion } from "framer-motion";
import { Droplets, Scissors, Zap, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "הסרת שומות",
    description: "הסרה מקצועית של שומות בשיטת פלזמה מתקדמת. ללא צלקות, ללא תקופת החלמה. תוצאות נראות מהטיפול הראשון.",
    accent: "border-[#BD8C84]/20 hover:border-[#BD8C84]/50",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "סרחי עור",
    description: "הסרת סרחי עור מכל חלקי הגוף בטיפול מהיר וללא כאב. התהליך לוקח דקות ספורות בלבד.",
    accent: "border-[#D4A853]/20 hover:border-[#D4A853]/50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "פלולות / פיברומות",
    description: "שיטה חדשנית ומהפכנית להסרת פלולות ופיברומות — ללא ניתוח, ללא כאב, בטיפול בודד.",
    accent: "border-[#BD8C84]/20 hover:border-[#BD8C84]/50",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "נגעי עור נוספים",
    description: "אבחון מקצועי ומותאם אישית לכל סוגי נגעי העור. 28 שנות ניסיון מבטיחות טיפול בטוח ומדויק.",
    accent: "border-[#D4A853]/20 hover:border-[#D4A853]/50",
  },
];

export default function FacilitiesGallery() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0D0D0D] to-[#0F0F0F]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#BD8C84] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            הטיפולים שלנו
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            מה אפשר <span className="text-gradient-rose">לטפל?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-[#1E1E1E]/80 border ${service.accent} rounded-3xl p-8 sm:p-10 transition-all duration-500 group`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#BD8C84]/10 flex items-center justify-center text-[#BD8C84] group-hover:bg-[#BD8C84] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
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
