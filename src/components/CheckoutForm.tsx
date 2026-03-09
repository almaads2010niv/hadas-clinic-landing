"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, ArrowLeft, Check, Loader2, Heart, MessageCircle } from "lucide-react";
import SpotsCounter from "./SpotsCounter";

export default function CheckoutForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "נא למלא שם מלא";
    if (!formData.phone.trim() || !/^0\d{8,9}$/.test(formData.phone.replace(/[-\s]/g, "")))
      newErrors.phone = "נא למלא מספר טלפון תקין";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Still show success
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="checkout" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0D0D0D] to-[#0F0F0F]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#BD8C84]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#BD8C84] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            הצעד הראשון לעור חלק
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl md:text-4xl mb-4">
            רוצה לגלות אם הטיפול מתאים לך?{" "}
            <span className="text-gradient-rose">ייעוץ חינם!</span>
          </h2>
          <SpotsCounter />
        </motion.div>

        {/* Form card */}
        <motion.div
          layout
          className="bg-gradient-to-br from-[#1E1E1E] to-[#151515] border border-white/10 rounded-[32px] p-8 sm:p-10 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {/* Lead Form */}
            {!submitted && (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div className="relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="שם מלא"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full bg-white/5 border ${
                      errors.name ? "border-[#BD8C84]" : "border-white/10"
                    } rounded-2xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#BD8C84]/50 focus:ring-1 focus:ring-[#BD8C84]/20 transition-all font-[family-name:var(--font-heebo)]`}
                  />
                  {errors.name && (
                    <p className="text-[#BD8C84] text-xs mt-1 pr-4">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    placeholder="טלפון"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full bg-white/5 border ${
                      errors.phone ? "border-[#BD8C84]" : "border-white/10"
                    } rounded-2xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#BD8C84]/50 focus:ring-1 focus:ring-[#BD8C84]/20 transition-all font-[family-name:var(--font-heebo)]`}
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className="text-[#BD8C84] text-xs mt-1 pr-4">{errors.phone}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full cta-glow bg-[#BD8C84] hover:bg-[#D1B09D] disabled:opacity-50 text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>קבעי פגישת ייעוץ חינם</span>
                      <ArrowLeft className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-xs">
                  הפרטים שלך מאובטחים ולא יועברו לצד שלישי
                </p>
              </motion.form>
            )}

            {/* Success */}
            {submitted && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/20 text-emerald-400"
                >
                  <Check className="w-10 h-10" />
                </motion.div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-white">
                  תודה {formData.name}!
                </h3>
                <p className="text-gray-400 text-lg">
                  הדס תתקשר אלייך תוך 24 שעות לתיאום פגישת הייעוץ
                </p>

                {/* WhatsApp shortcut */}
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=972542116179&text=%D7%94%D7%99%D7%99%20%D7%94%D7%93%D7%A1%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%98%D7%99%D7%A4%D7%95%D7%9C"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-[family-name:var(--font-heebo)] font-bold text-base px-8 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>רוצה תשובה מהירה? שלחי בוואטסאפ</span>
                </motion.a>

                <div className="bg-white/5 rounded-2xl p-4 inline-block">
                  <p className="text-gray-300 text-sm flex items-center gap-2 justify-center">
                    <Heart className="w-4 h-4 text-[#BD8C84]" />
                    הדס שמריהו | קרן היסוד 88, קריית ביאליק
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
