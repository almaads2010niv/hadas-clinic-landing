"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, ArrowLeft, CreditCard, Check, Loader2, PartyPopper } from "lucide-react";
import SpotsCounter from "./SpotsCounter";

type Step = "details" | "payment" | "success";

export default function CheckoutForm() {
  const [step, setStep] = useState<Step>("details");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "נא למלא שם מלא";
    if (!formData.phone.trim() || !/^0\d{8,9}$/.test(formData.phone.replace(/[-\s]/g, "")))
      newErrors.phone = "נא למלא מספר טלפון תקין";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "נא למלא אימייל תקין";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStep("payment");
      }
    } catch {
      // Still move to payment step
      setStep("payment");
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    // This will redirect to external payment link
    // For now show success state
    setStep("success");
  };

  return (
    <section id="checkout" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E60000]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#E60000] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            השגרה החדשה שלכם מתחילה בהחלטה אחת קטנה (ובטוחה)
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl md:text-4xl mb-4">
            אני מוכן/ה להתחיל מחדש –{" "}
            <span className="text-gradient-red">שריינו לי את ההטבה</span>
          </h2>
          <SpotsCounter />
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[
            { key: "details", label: "פרטים" },
            { key: "payment", label: "תשלום" },
          ].map((s, i) => (
            <div key={s.key} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step === s.key || (step === "payment" && i === 0) || step === "success"
                    ? "bg-[#E60000] text-white"
                    : "bg-white/5 text-gray-500 border border-white/10"
                }`}
              >
                {(step === "payment" && i === 0) || step === "success" ? (
                  <Check className="w-4 h-4" />
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-sm font-[family-name:var(--font-heebo)] ${
                  step === s.key ? "text-white" : "text-gray-500"
                }`}
              >
                {s.label}
              </span>
              {i < 1 && (
                <div className="w-12 h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <motion.div
          layout
          className="bg-gradient-to-br from-[#1A1A1A] to-[#111] border border-white/10 rounded-[32px] p-8 sm:p-10 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Details */}
            {step === "details" && (
              <motion.form
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmitDetails}
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
                      errors.name ? "border-[#E60000]" : "border-white/10"
                    } rounded-2xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#E60000]/50 focus:ring-1 focus:ring-[#E60000]/20 transition-all font-[family-name:var(--font-heebo)]`}
                  />
                  {errors.name && (
                    <p className="text-[#E60000] text-xs mt-1 pr-4">{errors.name}</p>
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
                      errors.phone ? "border-[#E60000]" : "border-white/10"
                    } rounded-2xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#E60000]/50 focus:ring-1 focus:ring-[#E60000]/20 transition-all font-[family-name:var(--font-heebo)]`}
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className="text-[#E60000] text-xs mt-1 pr-4">{errors.phone}</p>
                  )}
                </div>

                {/* Email (optional) */}
                <div className="relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="אימייל (לא חובה)"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full bg-white/5 border ${
                      errors.email ? "border-[#E60000]" : "border-white/10"
                    } rounded-2xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#E60000]/50 focus:ring-1 focus:ring-[#E60000]/20 transition-all font-[family-name:var(--font-heebo)]`}
                    dir="ltr"
                  />
                  {errors.email && (
                    <p className="text-[#E60000] text-xs mt-1 pr-4">{errors.email}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full cta-glow bg-[#E60000] hover:bg-[#FF1A1A] disabled:opacity-50 text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>שריינו לי מקום</span>
                      <ArrowLeft className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-xs">
                  הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
                </p>
              </motion.form>
            )}

            {/* Step 2: Payment */}
            {step === "payment" && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E60000]/10 text-[#E60000] mb-2">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-white">
                  מעולה, {formData.name}! 🎉
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  אנשי המכירות שלנו סוגרים מנויים ברגע זה גם טלפונית.
                  <br />
                  <span className="text-white font-bold">
                    חסכו לעצמכם זמן והירשמו ישירות כאן
                  </span>{" "}
                  – הלינק הזה לא נשלח לכולם.
                </p>
                <p className="text-[#E60000] text-sm font-semibold font-[family-name:var(--font-heebo)]">
                  150 ש״ח דמי מקדמה בלבד | החזר מלא מובטח
                </p>

                {/* Payment button */}
                <motion.a
                  href="#PAYMENT_LINK_PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePayment}
                  className="inline-flex items-center gap-3 cta-glow bg-[#E60000] hover:bg-[#FF1A1A] text-white font-[family-name:var(--font-heebo)] font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 cursor-pointer"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>לתשלום מאובטח של 150 ש״ח</span>
                </motion.a>

                <p className="text-gray-600 text-xs">
                  תועברו לדף תשלום מאובטח | ניתן לבטל בכל עת
                </p>
              </motion.div>
            )}

            {/* Step 3: Success */}
            {step === "success" && (
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
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-green-500/20 text-green-400"
                >
                  <PartyPopper className="w-10 h-10" />
                </motion.div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-3xl text-white">
                  נתראה ביום הפתוח! 🎉
                </h3>
                <p className="text-gray-400 text-lg">
                  נציג שלנו ייצור איתכם קשר בקרוב לתיאום ההגעה
                </p>
                <div className="bg-white/5 rounded-2xl p-4 inline-block">
                  <p className="text-gray-300 text-sm">
                    📅 יום רביעי, 25 בפברואר 2026
                    <br />
                    📍 קאנטרי גרייט שייפ, נשר
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
