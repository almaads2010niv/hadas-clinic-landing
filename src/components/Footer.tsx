"use client";

import TermsModal from "./TermsModal";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="הדס שמריהו"
          width={100}
          height={100}
          className="mx-auto opacity-50 invert brightness-200"
        />

        {/* Business name */}
        <p className="text-gray-400 text-sm font-[family-name:var(--font-heebo)] font-bold">
          הדס שמריהו — מרכז ליופי ולטיפולי פנים מתקדמים
        </p>

        {/* Contact */}
        <div className="text-gray-500 text-sm space-y-1">
          <p>קרן היסוד 88, קריית ביאליק</p>
          <p dir="ltr" className="inline-block">054-2116179</p>
          <p>א׳, ג׳-ה׳ 9:00-19:00 | ו׳ 8:00-13:00</p>
        </div>

        {/* Terms link */}
        <TermsModal />

        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Hadas Shmaryahu Beauty Center. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
