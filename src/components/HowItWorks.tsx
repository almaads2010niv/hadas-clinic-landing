"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: <Phone className="w-6 h-6" />,
    title: "משאירה פרטים",
    description:
      "ממלאת שם וטלפון — לוקח 10 שניות.",
    accent: "bg-[#BD8C84]",
  },
  {
    number: "2",
    icon: <MessageCircle className="w-6 h-6" />,
    title: "הדס מתקשרת",
    description:
      "שיחה קצרה לתיאום + הסבר על הטיפול המתאים לך.",
    accent: "bg-[#D4A853]",
  },
  {
    number: "3",
    icon: <Sparkles className="w-6 h-6" />,
    title: "עור חדש",
    description:
      "מגיעה לקליניקה, טיפול מהיר, והעור חלק ונקי.",
    accent: "bg-emerald-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0C0C0C] to-[#0F0F0F]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#BD8C84] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            3 צעדים לעור חלק
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            איך זה <span className="text-gradient-rose">עובד?</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -left-4 w-8 h-px bg-white/10" />
              )}

              <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-7 sm:p-8 text-center hover:border-white/10 transition-all duration-300">
                {/* Number + Icon */}
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${step.accent}/10 flex items-center justify-center text-white`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`absolute -top-2 -right-2 w-6 h-6 ${step.accent} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-assistant)] text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
