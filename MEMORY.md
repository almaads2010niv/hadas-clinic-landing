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
- Brand colors: #E60000 (red), #0A0A0A (black), #D4A853 (gold accent)
- Heebo for headlines, Assistant for body text
- Dark theme with red accents
- Noise overlay for texture

## Important Files
- `src/app/page.tsx` — Main page composition
- `src/components/Hero.tsx` — Hero with glowing March badge
- `src/components/PricingTable.tsx` — Regular vs VIP comparison
- `src/components/SavingsCalculator.tsx` — Interactive savings calculator
- `src/components/CheckoutForm.tsx` — 2-step lead capture
- `src/components/ComparisonTable.tsx` — Great Shape vs competitors (peek UX)
- `src/components/RiskReversal.tsx` — Refund guarantee section
- `src/components/SpotsCounter.tsx` — Live remaining spots counter
- `src/lib/supabase.ts` — Supabase client
- `.env.local` — Supabase credentials (DO NOT COMMIT)

## User Preferences
- Niv (the user) prefers Hebrew interface
- Grandiose tone for Israeli audience
- SMS contact only (no WhatsApp)
- Payment via external link (TBD)
- GitHub user: alma.ads2010@gmail.com
- Vercel: https://great-shape-openday.vercel.app
- GitHub: https://github.com/almaads2010niv/great-shape-openday

## Supabase
- Project: great-shape-openday
- URL: https://cgnybtwzwbxxqwjwfozx.supabase.co
- Table: `leads` (name, phone, email, source, created_at)
- RLS enabled: anonymous insert + select
- API routes: /api/checkout (insert), /api/spots (count), /api/leads/recent (last 10)

## Deployment
- Vercel auto-deploys on push to `main`
- Environment variables set on Vercel: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- FTP access to space-cn.co.il available (port 2200) — domain connection pending

## Design Lessons
- ComparisonTable: mobile users couldn't see competitor columns (only Great Shape visible)
- Solution: auto-peek animation + floating red arrow with "המתחרים" label + subtitle hint
- Rule: always ensure comparison/table sections show at least a visual hint of hidden content on mobile

## Architecture
- 20 components total in src/components/
- 3 API routes in src/app/api/ (checkout, spots, leads/recent)
- Single-page funnel: Hero → Video → SocialProof → VossBlock → Gallery → Comparison → Testimonials → Pricing → Calculator → RiskReversal → Checkout → Footer

## Current State (Session 4)
- ✅ Landing page fully built and deployed
- ✅ Supabase integrated with leads table + RLS
- ✅ GitHub repo created and pushed
- ✅ Vercel deployed and live
- ✅ ComparisonTable mobile UX fixed (peek arrow + auto-scroll hint)
- ⏳ Payment link still placeholder (#PAYMENT_LINK_PLACEHOLDER in CheckoutForm.tsx)
- ⏳ Custom domain connection (space-cn.co.il) — DNS setup needed
- Last updated: Session 4
