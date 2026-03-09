"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, HelpCircle, ChevronLeft } from "lucide-react";

interface Feature {
  name: string;
  hadas: boolean;
  derm: boolean | "maybe";
  surgery: boolean | "maybe";
  home: boolean | "maybe";
}

const features: Feature[] = [
  { name: "מחיר נגיש (מ-70 ש״ח)", hadas: true, derm: false, surgery: false, home: true },
  { name: "ללא כאב", hadas: true, derm: false, surgery: false, home: "maybe" },
  { name: "ללא צלקות", hadas: true, derm: "maybe", surgery: false, home: false },
  { name: "תוצאה מיידית", hadas: true, derm: "maybe", surgery: true, home: false },
  { name: "ללא תקופת החלמה", hadas: true, derm: true, surgery: false, home: true },
  { name: "ייעוץ חינם", hadas: true, derm: false, surgery: false, home: false },
  { name: "28 שנות ניסיון", hadas: true, derm: true, surgery: true, home: false },
  { name: "הסמכה פרא-רפואית", hadas: true, derm: true, surgery: true, home: false },
  { name: "אווירה אישית ומזמינה", hadas: true, derm: false, surgery: false, home: true },
];

const StatusIcon = ({ status }: { status: boolean | "maybe" }) => {
  if (status === true)
    return <Check className="w-5 h-5 text-[#BD8C84]" />;
  if (status === "maybe")
    return <HelpCircle className="w-4 h-4 text-gray-500" />;
  return <X className="w-4 h-4 text-gray-600/40" />;
};

const competitors = [
  { key: "hadas", label: "הדס שמריהו", highlight: true },
  { key: "derm", label: "רופא עור", highlight: false },
  { key: "surgery", label: "ניתוח פלסטי", highlight: false },
  { key: "home", label: "טיפול ביתי", highlight: false },
];

export default function ComparisonTable() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollMore, setCanScrollMore] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Check scroll position to show/hide the peek arrow
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft > 10) setHasScrolled(true);
    // Hide arrow when scrolled near the end
    setCanScrollMore(scrollLeft < scrollWidth - clientWidth - 20);
  };

  // Auto-peek: slightly scroll to reveal competitor column peeks
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;
    const el = scrollRef.current;
    // After render, scroll to show a tiny peek of competitors then scroll back
    const timer = setTimeout(() => {
      el.scrollTo({ left: 60, behavior: "smooth" });
      setTimeout(() => {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }, 600);
    }, 1200);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0D0D0D] to-[#0F0F0F]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            למה דווקא <span className="text-gradient-rose">אצל הדס?</span>
          </h2>
        </motion.div>

        {/* Mobile subtitle hint */}
        {isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mb-6 font-[family-name:var(--font-heebo)]"
          >
            הדס מול האלטרנטיבות — גללי לצד לראות את ההשוואה ←
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-4 scroll-smooth"
            onScroll={handleScroll}
          >
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
                          ? "bg-[#BD8C84] text-white rounded-t-2xl text-base"
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
                    } bg-[#BD8C84]/5 border-x border-[#BD8C84]/10`}>
                      <div className="flex justify-center">
                        <StatusIcon status={f.hadas} />
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center bg-white/[0.02]">
                      <div className="flex justify-center">
                        <StatusIcon status={f.derm} />
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={f.surgery} />
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center bg-white/[0.02]">
                      <div className="flex justify-center">
                        <StatusIcon status={f.home} />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: Peek arrow overlay on the left edge */}
          <AnimatePresence>
            {isMobile && !hasScrolled && canScrollMore && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0 bottom-4 w-12 pointer-events-none flex items-center justify-center z-20"
              >
                {/* Gradient fade from left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />

                {/* Arrow indicator */}
                <motion.div
                  animate={{ x: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="relative z-10 flex flex-col items-center gap-1"
                >
                  <div className="w-8 h-8 rounded-full bg-[#BD8C84] flex items-center justify-center shadow-lg shadow-[#BD8C84]/40">
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] text-white/70 font-bold font-[family-name:var(--font-heebo)] whitespace-nowrap">
                    האלטרנטיבות
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left edge gradient fade (always visible on mobile when there's more to scroll) */}
          {isMobile && canScrollMore && (
            <div className="absolute left-0 top-0 bottom-4 w-6 bg-gradient-to-r from-[#0F0F0F]/60 to-transparent pointer-events-none z-10" />
          )}
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
            כשהמחיר, הבטיחות והתוצאה נפגשים
          </p>
          <h3 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl text-white">
            הבחירה <span className="text-gradient-rose">ברורה</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
