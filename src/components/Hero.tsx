"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Countdown from "./Countdown";
import Image from "next/image";
import { useEndOfMonthTarget } from "@/hooks/useNightMode";

export default function Hero() {
  const target = useEndOfMonthTarget();
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]">
        {/* Dusty rose diagonal accent */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#BD8C84]/10 to-transparent skew-x-[-12deg] origin-top-left" />
      </div>

      {/* Hero image with fade effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute inset-0 z-[1] pointer-events-none"
      >
        <Image
          src="/images/hero-hadas.png"
          alt="הדס שמריהו — קוסמטיקאית פרא-רפואית"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Fade overlays — blends image into dark background on all edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/60 via-transparent to-[#0F0F0F]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="הדס שמריהו"
            width={180}
            height={180}
            className="mx-auto drop-shadow-2xl invert brightness-200"
          />
        </motion.div>

        {/* Price highlight badge — glowing & animated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
          className="mb-6 perspective-[1000px]"
        >
          <div className="inline-block relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BD8C84] via-[#D1B09D] to-[#BD8C84] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Main badge */}
            <div className="relative march-badge-glow bg-gradient-to-br from-[#BD8C84] via-[#A87D75] to-[#A1796F] rounded-2xl px-8 sm:px-10 py-5 border border-white/20 overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                />
              </div>

              {/* Sparkles */}
              <motion.span
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-2 right-4 text-yellow-300 text-lg"
              >✦</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, -180, -360] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                className="absolute bottom-2 left-6 text-yellow-300 text-sm"
              >✦</motion.span>

              {/* Text */}
              <div className="relative z-10">
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block font-[family-name:var(--font-heebo)] font-black text-4xl sm:text-5xl text-white drop-shadow-lg"
                >
                  70 ש״ח
                </motion.span>
                <span className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl text-white drop-shadow-lg">
                  {" "}לנגע!
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#BD8C84]/20 border border-[#BD8C84]/40 rounded-full px-5 py-2 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#BD8C84] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#BD8C84] tracking-wide font-[family-name:var(--font-heebo)]">
              ללא כאב וללא צלקות
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-emerald-400 font-[family-name:var(--font-heebo)]">
              ✓ ייעוץ חינם
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white/80 font-[family-name:var(--font-heebo)]">
              ✓ 28 שנות ניסיון
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-[family-name:var(--font-heebo)] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          <span className="block text-white">יום חדש לעור שלך</span>
          <span className="block text-gradient-rose">ללא כאב, ללא צלקות</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          הסרת שומות, סרחי עור, פלולות ונגעים בשיטה חדשנית ומהפכנית — החל מ-
          <span className="text-white font-bold">70 ש״ח לנגע</span>.
          {" "}תהליך מהיר, תוצאות מיידיות, ו-28 שנות ניסיון של הדס שמריהו.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-10"
        >
          <Countdown targetDate={target} />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={scrollToCheckout}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="cta-glow relative bg-[#BD8C84] hover:bg-[#D1B09D] text-white font-[family-name:var(--font-heebo)] font-bold text-lg sm:text-xl px-10 py-5 rounded-2xl transition-all duration-300 cursor-pointer group"
        >
          <span className="relative z-10">
            קבעי פגישת ייעוץ חינם →
          </span>
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
