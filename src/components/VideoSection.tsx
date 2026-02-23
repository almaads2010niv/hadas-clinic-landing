"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
            הכירו את <span className="text-gradient-red">קאנטרי גרייט שייפ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group cursor-pointer"
          onClick={handleToggleMute}
        >
          {/* Video - autoplay muted loop */}
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            playsInline
            autoPlay
            muted
            loop
            preload="auto"
            poster="/images/pool-outdoor.jpg"
          >
            <source src="/video/OPENDAY.mp4" type="video/mp4" />
          </video>

          {/* Mute/Unmute indicator */}
          <div className="absolute bottom-4 left-4 z-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white"
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              )}
            </motion.div>
          </div>

          {/* Red corner accents */}
          <div className="absolute top-0 right-0 w-24 h-1 bg-[#E60000]" />
          <div className="absolute top-0 right-0 w-1 h-24 bg-[#E60000]" />
          <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#E60000]" />
          <div className="absolute bottom-0 left-0 w-1 h-24 bg-[#E60000]" />
        </motion.div>
      </div>
    </section>
  );
}
