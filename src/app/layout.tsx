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
  title: "יום פתוח VIP | קאנטרי גרייט שייפ נשר",
  description:
    "שריינו את מקומכם ליום הפתוח VIP בקאנטרי גרייט שייפ נשר. חודש מרץ ב-1 ש״ח בלבד + מנוי VIP במחיר מיוחד.",
  openGraph: {
    title: "יום פתוח VIP | קאנטרי גרייט שייפ נשר",
    description:
      "חודש מרץ ב-1 ש״ח בלבד + מנוי VIP במחיר מיוחד. 50 מקומות בלבד!",
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
