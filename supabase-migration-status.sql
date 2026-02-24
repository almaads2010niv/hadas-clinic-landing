-- ============================================================
-- MIGRATION: Add status column + update RLS policy
-- Run this in Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. Add status column to existing leads table
ALTER TABLE leads ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending_payment';

-- 2. Allow anonymous updates (for tracking payment redirect status)
CREATE POLICY "Allow anonymous status updates" ON leads
  FOR UPDATE USING (true) WITH CHECK (true);
