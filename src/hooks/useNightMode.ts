"use client";

import { useState, useEffect } from "react";

/**
 * Returns end-of-month target date for countdown.
 * Night mode is disabled — always returns false.
 */
export function useNightMode(): boolean {
  const [isNight] = useState(false);
  return isNight;
}

/**
 * Returns end of current month as target date for countdown.
 */
export function useEndOfMonthTarget(): string {
  const [target, setTarget] = useState("");

  useEffect(() => {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    setTarget(endOfMonth.toISOString());
  }, []);

  return target;
}

// Server-side helper — no longer needed but kept for API compat
export const NIGHT_START_MS = Infinity;
