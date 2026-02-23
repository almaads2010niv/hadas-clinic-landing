"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const facilities = [
  {
    src: "/images/gym1.jpg",
    alt: "חדר כושר מאובזר",
    label: "חדר כושר",
    description: "ציוד מקצועי מהמותגים המובילים",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/pool-indoor.jpg",
    alt: "בריכה מקורה מחוממת",
    label: "בריכה מקורה",
    description: "מחוממת לאורך כל השנה",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/sauna.JPG",
    alt: "סאונה וספא",
    label: "סאונה & ספא",
    description: "סאונה יבשה, ג׳קוזי ופינת רגיעה",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/pool-outdoor.jpg",
    alt: "בריכה חיצונית",
    label: "בריכה חיצונית",
    description: "מתחם שחייה ופנאי מוקף ירוק",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/gym2.jpg",
    alt: "אזור אימון פונקציונלי",
    label: "אימון פונקציונלי",
    description: "ציוד TRX, משקולות חופשיות ועוד",
    span: "col-span-1 row-span-1",
  },
];

export default function FacilitiesGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              } ${i === 3 ? "sm:col-span-2" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredIndex === i ? "scale-110 brightness-50" : "scale-100 brightness-75"
                }`}
              />

              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-white">
                  {item.label}
                </h3>
                <p
                  className={`text-gray-300 text-sm mt-1 transition-all duration-500 ${
                    hoveredIndex === i
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Red accent on hover */}
              <div
                className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-[#E60000] transition-all duration-300 ${
                  hoveredIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
