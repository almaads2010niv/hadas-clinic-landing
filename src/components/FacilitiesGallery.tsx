"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facilities = [
  {
    src: "/images/gym1.jpg",
    alt: "חדר כושר מאובזר",
    label: "חדר כושר",
    emotion:
      "הכוח לחזור לעצמכם. בלי לחץ, בקצב שלכם. מתחם כושר שמותאם להחזיר לכם את האנרגיה והחיוניות שכבר כמעט שכחתם שקיימות בכם.",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/pool-indoor.jpg",
    alt: "בריכה מקורה מחוממת",
    label: "בריכה מקורה",
    emotion:
      "השקט של הבוקר. 45 דקות של שחייה בבריכה מחוממת שמנקות את הראש מכל הלחצים, רגע לפני שהטירוף של היום מתחיל. זמן שהוא נטו שלכם.",
    span: "",
  },
  {
    src: "/images/sauna.JPG",
    alt: "סאונה וספא",
    label: "סאונה & ספא",
    emotion:
      "הניתוק המוחלט. לשים את הטלפון בצד, לקחת נשימה עמוקה, ולשחרר את השרירים ואת שגרת היומיום בסאונה המרגיעה שלנו.",
    span: "",
  },
  {
    src: "/images/pool-outdoor.jpg",
    alt: "בריכה חיצונית",
    label: "בריכה חיצונית",
    emotion: "",
    span: "sm:col-span-2",
  },
  {
    src: "/images/studio.jpg",
    alt: "סטודיו חוגים",
    label: "סטודיו & חוגים",
    emotion:
      "האדרנלין של ביחד. אימוני סטודיו שיזכירו לכם כמה כיף זה לדחוף את הגוף קדימה, לסיים בשיא ולצאת עם חיוך שאי אפשר למחוק.",
    span: "",
  },
];

export default function FacilitiesGallery() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#080808] to-[#0A0A0A]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#E60000] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            מתחם ברמה אחרת
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            הציצו <span className="text-gradient-red">פנימה</span>
          </h2>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px] sm:auto-rows-[260px]">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${item.span} ${
                i === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.55] group-hover:brightness-[0.4]"
              />

              {/* Content overlay — always visible */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                {/* Facility label */}
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-lg sm:text-xl text-white mb-1">
                  {item.label}
                </h3>

                {/* Emotional description */}
                {item.emotion && (
                  <p className="font-[family-name:var(--font-assistant)] text-[13px] sm:text-sm text-white/75 leading-relaxed max-w-md">
                    {item.emotion}
                  </p>
                )}
              </div>

              {/* Red accent dot */}
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#E60000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
