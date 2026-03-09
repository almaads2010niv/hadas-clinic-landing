"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserCheck } from "lucide-react";

// Fallback names when no real leads exist
const fallbackNames = [
  "דנה מחיפה",
  "אלון מנשר",
  "רונית מקריית אתא",
  "יוסי מטירת הכרמל",
  "מיכל מנשר",
  "עומר מחיפה",
  "שירה מקריית מוצקין",
  "אבי מנשר",
  "נועה מחיפה",
  "גיל מקריית ביאליק",
];

const fakeTimeAgo = () => {
  const mins = Math.floor(Math.random() * 45) + 2;
  return `לפני ${mins} דקות`;
};

const realTimeAgo = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `לפני ${mins} דקות`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `לפני ${hours} שעות`;
  return `לפני ${Math.floor(hours / 24)} ימים`;
};

export default function FomoNotifications() {
  const [notification, setNotification] = useState<{
    name: string;
    time: string;
  } | null>(null);
  const [visible, setVisible] = useState(false);
  const [realLeads, setRealLeads] = useState<{ name: string; created_at: string }[]>([]);
  const [leadIndex, setLeadIndex] = useState(0);

  // Fetch real leads once
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/leads/recent");
        const data = await res.json();
        if (data.leads && data.leads.length > 0) {
          setRealLeads(data.leads);
        }
      } catch {
        // Use fallback
      }
    };
    fetchLeads();
  }, []);

  const showNotification = useCallback(() => {
    if (realLeads.length > 0) {
      const lead = realLeads[leadIndex % realLeads.length];
      setNotification({
        name: lead.name,
        time: realTimeAgo(lead.created_at),
      });
      setLeadIndex((prev) => prev + 1);
    } else {
      const randomName = fallbackNames[Math.floor(Math.random() * fallbackNames.length)];
      setNotification({ name: randomName, time: fakeTimeAgo() });
    }
    setVisible(true);
  }, [realLeads, leadIndex]);

  useEffect(() => {
    // Show first notification after 8 seconds
    const initialDelay = setTimeout(() => {
      showNotification();
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, [showNotification]);

  useEffect(() => {
    if (!notification) return;

    // Auto-hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    // Show next notification after 15-25 seconds
    const nextTimer = setTimeout(() => {
      showNotification();
    }, Math.random() * 10000 + 15000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [notification, showNotification]);

  return (
    <div className="fixed bottom-6 right-6 z-50" dir="rtl">
      <AnimatePresence>
        {visible && notification && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/50 flex items-center gap-3 max-w-xs cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#BD8C84]/20 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-[#BD8C84]" />
            </div>
            <div>
              <p className="text-white text-sm font-[family-name:var(--font-heebo)] font-bold">
                {notification.name}
              </p>
              <p className="text-gray-400 text-xs">
                שריין/ה את עסקת ה-VIP {notification.time}
              </p>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
