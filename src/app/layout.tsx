import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "הסרת נגעי עור מ-70 ש״ח | הדס שמריהו — קוסמטיקאית פרא-רפואית",
  description:
    "הסרת שומות, סרחי עור, פלולות ונגעים בשיטה חדשנית — ללא כאב וללא צלקות. החל מ-70 ש״ח לנגע. 28 שנות ניסיון. קריית ביאליק.",
  openGraph: {
    title: "הסרת נגעי עור מ-70 ש״ח | הדס שמריהו",
    description:
      "שיטה חדשנית להסרת שומות, סרחי עור ופלולות — ללא כאב, ללא צלקות. פגישת ייעוץ חינם!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${assistant.variable} font-[family-name:var(--font-assistant)] antialiased`}
      >
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
