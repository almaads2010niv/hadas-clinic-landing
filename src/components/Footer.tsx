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
          alt="גרייט שייפ"
          width={100}
          height={100}
          className="mx-auto opacity-50"
        />

        {/* Disclaimer */}
        <p className="text-gray-500 text-sm leading-relaxed">
          הרשמה מראש בלבד | מעל גיל 18 | כפוף לתקנון | על בסיס מקום פנוי
        </p>

        {/* Terms link */}
        <TermsModal />

        {/* Address */}
        <p className="text-gray-600 text-xs">
          קאנטרי גרייט שייפ, נשר
        </p>

        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Great Shape Country Club. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
