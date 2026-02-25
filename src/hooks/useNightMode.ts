"use client";

import { useState, useEffect } from "react";

// Night sale starts: Feb 25, 2026 at 20:00 Israel time (UTC+2)
const NIGHT_START = new Date("2026-02-25T18:00:00Z").getTime();

/**
 * Returns true after 25.02.2026 20:00 Israel time.
 * Uses useEffect to avoid SSR/hydration mismatch.
 */
export function useNightMode(): boolean {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const check = () => setIsNight(Date.now() >= NIGHT_START);
    check();
    // Re-check every 30 seconds (handles the exact transition moment)
    const interval = setInterval(check, 30000);
    return () => clearInterval(interval);
  }, []);

  return isNight;
}

// Server-side helper (for API routes)
export const NIGHT_START_MS = NIGHT_START;
