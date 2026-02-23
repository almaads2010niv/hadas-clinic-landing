"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Gift } from "lucide-react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
      }
    };

    // Only add listener after 10 seconds
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, source: "exit_intent" }),
      });
    } catch {
      // silent
    }
    setSubmitted(true);
    setTimeout(() => {
      setShow(false);
      setDismissed(true);
    }, 3000);
  };

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          dir="rtl"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-gradient-to-br from-[#1A1A1A] to-[#111] border border-[#E60000]/30 rounded-[32px] p-8 sm:p-10 max-w-md w-full z-10 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Red accent glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E60000]/20 rounded-full blur-[80px]" />

            {!submitted ? (
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E60000]/10 text-[#E60000] mb-6">
                  <Gift className="w-8 h-8" />
                </div>

                <h3 className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl text-white mb-3">
                  רגע, לפני שהולכים!
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  רוצים שנשמור לכם את המחיר המיוחד ונתקשר לתיאום? השאירו טלפון
                  ונחזור אליכם תוך שעה.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      placeholder="מספר טלפון"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#E60000]/50 transition-all font-[family-name:var(--font-heebo)]"
                      dir="ltr"
                      autoFocus
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#E60000] hover:bg-[#FF1A1A] text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all cursor-pointer"
                  >
                    התקשרו אליי
                  </motion.button>
                </form>

                <p className="text-gray-600 text-xs mt-4">
                  בלי ספאם, רק שיחה אחת קצרה
                </p>
              </div>
            ) : (
              <div className="relative z-10 text-center py-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="text-4xl mb-4"
                >
                  ✅
                </motion.div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-white">
                  תודה! נחזור אליכם בקרוב
                </h3>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
