"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [linkHighlight, setLinkHighlight] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const applyStyles = () => {
    const html = document.documentElement;
    html.style.fontSize = `${fontSize}%`;

    if (highContrast) {
      html.classList.add("accessibility-high-contrast");
    } else {
      html.classList.remove("accessibility-high-contrast");
    }

    if (linkHighlight) {
      html.classList.add("accessibility-link-highlight");
    } else {
      html.classList.remove("accessibility-link-highlight");
    }

    if (grayscale) {
      html.style.filter = "grayscale(100%)";
    } else {
      html.style.filter = "";
    }
  };

  const resetAll = () => {
    setFontSize(100);
    setHighContrast(false);
    setLinkHighlight(false);
    setGrayscale(false);
    const html = document.documentElement;
    html.style.fontSize = "100%";
    html.style.filter = "";
    html.classList.remove("accessibility-high-contrast", "accessibility-link-highlight");
  };

  const handleFontSize = (dir: "up" | "down") => {
    const next = dir === "up" ? Math.min(fontSize + 10, 150) : Math.max(fontSize - 10, 80);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const toggleHighContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.classList.add("accessibility-high-contrast");
    } else {
      document.documentElement.classList.remove("accessibility-high-contrast");
    }
  };

  const toggleLinkHighlight = () => {
    const next = !linkHighlight;
    setLinkHighlight(next);
    if (next) {
      document.documentElement.classList.add("accessibility-link-highlight");
    } else {
      document.documentElement.classList.remove("accessibility-link-highlight");
    }
  };

  const toggleGrayscale = () => {
    const next = !grayscale;
    setGrayscale(next);
    document.documentElement.style.filter = next ? "grayscale(100%)" : "";
  };

  return (
    <>
      {/* Accessibility icon button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="הגדרות נגישות"
        className="fixed bottom-20 left-4 z-[9990] w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v5m0 0l-4 7m4-7l4 7" />
          <path d="M6 10h12" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999]"
            dir="rtl"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute top-0 right-0 h-full w-80 bg-[#1A1A1A] border-l border-white/10 p-6 overflow-y-auto z-10"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-white">
                  הגדרות נגישות
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Font size */}
                <div>
                  <p className="text-gray-400 text-sm font-[family-name:var(--font-heebo)] mb-3">גודל גופן</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleFontSize("down")}
                      className="w-10 h-10 bg-white/10 rounded-xl text-white font-bold hover:bg-white/20 transition cursor-pointer"
                    >
                      א-
                    </button>
                    <span className="text-white font-bold font-[family-name:var(--font-heebo)] min-w-[50px] text-center">
                      {fontSize}%
                    </span>
                    <button
                      onClick={() => handleFontSize("up")}
                      className="w-10 h-10 bg-white/10 rounded-xl text-white font-bold hover:bg-white/20 transition cursor-pointer"
                    >
                      א+
                    </button>
                  </div>
                </div>

                {/* High contrast */}
                <button
                  onClick={toggleHighContrast}
                  className={`w-full p-4 rounded-xl text-right font-[family-name:var(--font-heebo)] transition cursor-pointer ${
                    highContrast
                      ? "bg-blue-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  ניגודיות גבוהה
                </button>

                {/* Link highlight */}
                <button
                  onClick={toggleLinkHighlight}
                  className={`w-full p-4 rounded-xl text-right font-[family-name:var(--font-heebo)] transition cursor-pointer ${
                    linkHighlight
                      ? "bg-blue-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  הדגשת קישורים
                </button>

                {/* Grayscale */}
                <button
                  onClick={toggleGrayscale}
                  className={`w-full p-4 rounded-xl text-right font-[family-name:var(--font-heebo)] transition cursor-pointer ${
                    grayscale
                      ? "bg-blue-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  גווני אפור
                </button>

                {/* Reset */}
                <button
                  onClick={resetAll}
                  className="w-full p-4 rounded-xl bg-[#E60000]/20 text-[#E60000] font-[family-name:var(--font-heebo)] font-bold hover:bg-[#E60000]/30 transition cursor-pointer"
                >
                  איפוס הגדרות
                </button>
              </div>

              <p className="text-gray-600 text-xs mt-8 font-[family-name:var(--font-heebo)] leading-relaxed">
                אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
