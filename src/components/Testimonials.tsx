"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "אייל שריג",
    text: "מרכז ספורט עם מחיר סביר לכל מגוון פעילויות הספורט. נקי, מתחדש. כייף.",
    stars: 5,
    color: "from-[#E60000]/20",
    reviews: "230 ביקורות",
  },
  {
    name: "David Fox",
    text: "אחלה קאנטרי, בריכה חיצונית גדולה ומהנה, בריכה פנימית עם הרבה מסלולי שחייה, שתי מגלשות לילדים אחת עם אבובים, בריכת קטנטנים.",
    stars: 5,
    color: "from-[#D4A853]/20",
    reviews: "199 ביקורות",
  },
  {
    name: "מאיר בוזגלו",
    text: "אחלה קאנטרי ברמה הכי גבוהה ולכן עשיתי מנוי לשנה אחרי שבדקתי כמה מקומות גם המחיר סבבה.",
    stars: 5,
    color: "from-[#E60000]/20",
    reviews: "184 ביקורות",
  },
  {
    name: "Moti Saddia",
    text: "קאנטרי מפנק יש את כל האמצעים לביצוע פעילות ספורט, כושר ואורח חיים בריא, חוגים, ספא וג׳קוזי.",
    stars: 5,
    color: "from-[#D4A853]/20",
    reviews: "9 ביקורות",
  },
  {
    name: "Benci Katz",
    text: "מגיע בשמחה למרכז הספורט הזה.",
    stars: 5,
    color: "from-[#E60000]/20",
    reviews: "43 ביקורות",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0C0C0C] to-[#0A0A0A]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#E60000] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            מה אומרים עלינו
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            לקוחות <span className="text-gradient-red">ממליצים</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#FBBC04] fill-[#FBBC04]"
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">מתוך Google Reviews</span>
          </div>
        </motion.div>

        {/* Testimonials grid - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-gradient-to-br ${t.color} to-[#1A1A1A]/50 border border-white/5 rounded-3xl p-7 hover:border-[#E60000]/20 transition-all duration-500 group ${
                i === 1 ? "lg:translate-y-8" : ""
              } ${i === 3 ? "lg:translate-y-[-16px]" : ""}`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#E60000]/20 mb-4 group-hover:text-[#E60000]/40 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-5 text-[15px]">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#E60000]/20 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-heebo)] font-bold text-sm text-[#E60000]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.reviews}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
