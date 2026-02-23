"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, X, HelpCircle, ChevronLeft } from "lucide-react";

interface Feature {
  name: string;
  country: boolean;
  gym: boolean | "maybe";
  studio: boolean | "maybe";
  park: boolean | "maybe";
}

const features: Feature[] = [
  { name: "חדר כושר", country: true, gym: true, studio: false, park: false },
  { name: "תוכנית אימונים מותאמת", country: true, gym: true, studio: true, park: true },
  { name: "בריכה פנימית מקורה", country: true, gym: false, studio: false, park: false },
  { name: "מערכת שעות סטודיו עשירה", country: true, gym: false, studio: true, park: false },
  { name: "בריכה חיצונית", country: true, gym: false, studio: false, park: false },
  { name: "בריכת פעוטות", country: true, gym: false, studio: false, park: false },
  { name: "ג׳קוזי", country: true, gym: false, studio: false, park: false },
  { name: "סאונה יבשה", country: true, gym: false, studio: false, park: false },
  { name: "סאונה רטובה", country: true, gym: false, studio: false, park: false },
  { name: "מגלשות מים", country: true, gym: false, studio: false, park: false },
  { name: "מלתחות ללא הפסקת מים", country: true, gym: "maybe", studio: "maybe", park: false },
  { name: "חניה בשפע", country: true, gym: "maybe", studio: "maybe", park: true },
  { name: "בית קפה", country: true, gym: false, studio: "maybe", park: false },
  { name: "מדשאות אינסופיות", country: true, gym: false, studio: false, park: false },
];

const StatusIcon = ({ status }: { status: boolean | "maybe" }) => {
  if (status === true)
    return <Check className="w-5 h-5 text-[#E60000]" />;
  if (status === "maybe")
    return <HelpCircle className="w-4 h-4 text-gray-500" />;
  return <X className="w-4 h-4 text-gray-600/40" />;
};

const competitors = [
  { key: "country", label: "קאנטרי גרייט שייפ", highlight: true },
  { key: "gym", label: "חדר כושר", highlight: false },
  { key: "studio", label: "סטודיו", highlight: false },
  { key: "park", label: "מאמן בפארק", highlight: false },
];

export default function ComparisonTable() {
  const [showHint, setShowHint] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            אז איפה המנוי <span className="text-gradient-red">המשתלם?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-x-auto pb-4"
          onScroll={() => setShowHint(false)}
        >
          {/* Mobile scroll hint */}
          {isMobile && showHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="sticky top-1/2 left-0 z-10 pointer-events-none flex items-center justify-center"
            >
              <div className="absolute left-2 bg-[#E60000]/90 backdrop-blur-sm text-white text-xs font-bold font-[family-name:var(--font-heebo)] px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                <ChevronLeft className="w-4 h-4 animate-scroll-hint" />
                גלול לצד
              </div>
            </motion.div>
          )}
          <table className="w-full border-collapse min-w-[600px]">
            {/* Header */}
            <thead>
              <tr>
                <th className="p-4 text-right" />
                {competitors.map((c) => (
                  <th
                    key={c.key}
                    className={`p-4 text-center font-[family-name:var(--font-heebo)] font-bold text-sm whitespace-nowrap ${
                      c.highlight
                        ? "bg-[#E60000] text-white rounded-t-2xl text-base"
                        : "text-gray-400 bg-white/5 rounded-t-xl"
                    }`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((f, i) => (
                <motion.tr
                  key={f.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="p-3 sm:p-4 text-right font-[family-name:var(--font-heebo)] text-sm text-gray-300 whitespace-nowrap">
                    {f.name}
                  </td>
                  <td className={`p-3 sm:p-4 text-center ${
                    i === features.length - 1 ? "rounded-b-2xl" : ""
                  } bg-[#E60000]/5 border-x border-[#E60000]/10`}>
                    <div className="flex justify-center">
                      <StatusIcon status={f.country} />
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 text-center bg-white/[0.02]">
                    <div className="flex justify-center">
                      <StatusIcon status={f.gym} />
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 text-center">
                    <div className="flex justify-center">
                      <StatusIcon status={f.studio} />
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 text-center bg-white/[0.02]">
                    <div className="flex justify-center">
                      <StatusIcon status={f.park} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-lg mb-2 font-[family-name:var(--font-heebo)]">
            כשהכל כלול
          </p>
          <h3 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl text-white">
            גם הכושר <span className="text-gradient-red">מצליח יותר</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
