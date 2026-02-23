-- Run this SQL in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- Leads table
create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  name text,
  phone text not null,
  email text,
  source text default 'checkout_form',
  created_at timestamptz default now()
);

-- Enable RLS (Row Level Security)
alter table leads enable row level security;

-- Allow anonymous inserts (for the landing page form)
create policy "Allow anonymous inserts" on leads
  for insert with check (true);

-- Allow anonymous select (for spots counter and FOMO notifications)
create policy "Allow anonymous select" on leads
  for select using (true);

-- Index for faster recent leads queries
create index if not exists leads_created_at_idx on leads (created_at desc);
