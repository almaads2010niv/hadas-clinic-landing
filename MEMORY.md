# Project Memory - Great Shape Open Day Landing Page

## Project Overview
- **Client**: Country Club Great Shape (קאנטרי גרייט שייפ), Nesher
- **Purpose**: Landing page for Open Day event on February 25, 2026
- **Target Audience**: 5,000+ former members, ages 25-55
- **Goal**: Convert visitors to pay 150 NIS reservation fee

## Key Deal Points
- March 2026 at 1 NIS only
- VIP monthly rate: 249 NIS (regular: 419 NIS)
- No commitment required
- Full refund guaranteed (3 scenarios: didn't come, came and decided no, cancelled within 14 days)
- 50 spots only
- 150 NIS = "דמי מקדמה" (advance payment) — in terms it's explained as registration fee

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme inline`)
- Framer Motion animations
- Lucide React icons
- Hebrew RTL layout
- Google Fonts: Heebo (display) + Assistant (body)
- Supabase for lead storage

## Design Rules (from frontend-design skill)
- NEVER use generic AI aesthetics (Inter, Roboto, purple gradients)
- Brand colors: #E60000 (red), #0A0A0A (black)
- Heebo for headlines, Assistant for body text
- Dark theme with red accents
- Noise overlay for texture

## Important Files
- `src/app/page.tsx` — Main page composition
- `src/components/Hero.tsx` — Hero with glowing March badge
- `src/components/PricingTable.tsx` — Regular vs VIP comparison
- `src/components/SavingsCalculator.tsx` — Interactive savings calculator
- `src/components/CheckoutForm.tsx` — 2-step lead capture
- `src/components/RiskReversal.tsx` — Refund guarantee section
- `src/lib/supabase.ts` — Supabase client
- `.env.local` — Supabase credentials (DO NOT COMMIT)

## User Preferences
- Niv (the user) prefers Hebrew interface
- Grandiose tone for Israeli audience
- SMS contact only (no WhatsApp)
- Payment via external link (TBD)
- GitHub user: alma.ads2010@gmail.com
- Vercel deployment planned
