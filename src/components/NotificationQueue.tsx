"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserCheck, Eye } from "lucide-react";

// ── Fallback names when no real leads exist ──
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

// ── Types ──
type NotificationType = "fomo" | "viewers";

interface FomoData {
  name: string;
  time: string;
}

// ── Timing config (ms) ──
const INITIAL_DELAY = 6000;
const DISPLAY_DURATION = 5000;
const GAP_BETWEEN = 1500;

export default function NotificationQueue() {
  const [activeType, setActiveType] = useState<NotificationType | null>(null);
  const [visible, setVisible] = useState(false);

  // FOMO state
  const [realLeads, setRealLeads] = useState<{ name: string; created_at: string }[]>([]);
  const leadIndexRef = useRef(0);
  const [fomoData, setFomoData] = useState<FomoData | null>(null);

  // Active Viewers state
  const [viewerCount, setViewerCount] = useState(0);

  // Queue tracking
  const nextTypeRef = useRef<NotificationType>("viewers");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ── Fetch real leads once ──
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

  // ── Init viewer count ──
  useEffect(() => {
    const base = Math.floor(Math.random() * 8) + 9; // 9-16
    setViewerCount(base);
  }, []);

  // ── Fluctuate viewer count in background ──
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        if (next < 6) return prev + 1;
        if (next > 24) return prev - 1;
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ── Get next FOMO data ──
  const getNextFomo = useCallback((): FomoData => {
    if (realLeads.length > 0) {
      const lead = realLeads[leadIndexRef.current % realLeads.length];
      leadIndexRef.current += 1;
      return { name: lead.name, time: realTimeAgo(lead.created_at) };
    }
    const randomName = fallbackNames[Math.floor(Math.random() * fallbackNames.length)];
    return { name: randomName, time: fakeTimeAgo() };
  }, [realLeads]);

  // ── Show next notification in queue ──
  const showNext = useCallback(() => {
    const type = nextTypeRef.current;

    if (type === "fomo") {
      setFomoData(getNextFomo());
    }

    setActiveType(type);
    setVisible(true);

    // Toggle next type
    nextTypeRef.current = type === "fomo" ? "viewers" : "fomo";

    // Auto-hide after DISPLAY_DURATION
    timerRef.current = setTimeout(() => {
      setVisible(false);

      // Schedule next after gap
      timerRef.current = setTimeout(() => {
        showNext();
      }, GAP_BETWEEN);
    }, DISPLAY_DURATION);
  }, [getNextFomo]);

  // ── Start the cycle ──
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      showNext();
    }, INITIAL_DELAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Dismiss on click ──
  const handleDismiss = () => {
    setVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    // Resume cycle after gap
    timerRef.current = setTimeout(() => {
      showNext();
    }, GAP_BETWEEN);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-[calc(100vw-3rem)]" dir="rtl">
      <AnimatePresence mode="wait">
        {/* ── FOMO Purchase Notification ── */}
        {visible && activeType === "fomo" && fomoData && (
          <motion.div
            key="fomo"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/50 flex items-center gap-3 cursor-pointer"
            onClick={handleDismiss}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E60000]/20 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-[#E60000]" />
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-[family-name:var(--font-heebo)] font-bold truncate">
                {fomoData.name}
              </p>
              <p className="text-gray-400 text-xs">
                שריין/ה את עסקת ה-VIP {fomoData.time}
              </p>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
          </motion.div>
        )}

        {/* ── Active Viewers Notification ── */}
        {visible && activeType === "viewers" && (
          <motion.div
            key="viewers"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-2xl px-4 py-3 shadow-2xl shadow-black/50 flex items-center gap-2.5 cursor-pointer"
            onClick={handleDismiss}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Eye className="w-4 h-4 text-orange-400" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400 text-sm font-[family-name:var(--font-heebo)] font-bold tabular-nums">
                {viewerCount}
              </span>
              <span className="text-gray-400 text-xs font-[family-name:var(--font-heebo)]">
                צופים בהטבה עכשיו
              </span>
            </div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
