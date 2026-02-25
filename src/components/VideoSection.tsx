"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#080808] to-[#0A0A0A]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#E60000] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            תראו בעצמכם
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl">
            הכירו מחדש את <span className="text-gradient-red">קאנטרי גרייט שייפ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
        >
          {/* 16:9 landscape container — same as original design */}
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/spB_PgrKPU8?autoplay=1&mute=1&loop=1&playlist=spB_PgrKPU8&playsinline=1&controls=0&rel=0"
              title="קאנטרי גרייט שייפ — יום פתוח"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Red corner accents */}
          <div className="absolute top-0 right-0 w-24 h-1 bg-[#E60000] z-10" />
          <div className="absolute top-0 right-0 w-1 h-24 bg-[#E60000] z-10" />
          <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#E60000] z-10" />
          <div className="absolute bottom-0 left-0 w-1 h-24 bg-[#E60000] z-10" />
        </motion.div>
      </div>
    </section>
  );
}
