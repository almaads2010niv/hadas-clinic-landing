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
- Supabase for lead storage + status tracking
- @vercel/analytics for web analytics
- YouTube embed for video (replaced local 36.5MB file)

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
- Table: `leads` (id, name, phone, email, source, status, created_at)
- Status values: `pending_payment` → `redirected_to_checkout` → `payment_completed`
- RLS enabled: anonymous insert + select + update
- API routes: /api/checkout (insert lead, returns leadId), /api/checkout/status (PATCH status), /api/spots (count), /api/leads/recent (last 10)

## Deployment
- Vercel auto-deploys on push to `main`
- Environment variables set on Vercel: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- FTP access to space-cn.co.il available (port 2200) — domain connection pending

## Design Lessons
- ComparisonTable: mobile users couldn't see competitor columns (only Great Shape visible)
- Solution: auto-peek animation + floating red arrow with "המתחרים" label + subtitle hint
- Rule: always ensure comparison/table sections show at least a visual hint of hidden content on mobile

## Architecture
- 22 components total in src/components/
- 4 API routes in src/app/api/ (checkout, checkout/status, spots, leads/recent)
- Single-page funnel: Hero → Video → SocialProof → VossBlock → Gallery → Comparison → Testimonials → GuiltRelease → Pricing → Calculator → RiskReversal → HowItWorks → Checkout → Footer
- Overlay components: StickyBar, FomoNotifications, ExitIntent, AccessibilityWidget, CookieConsent

## Current State (Session 6)
- ✅ Landing page fully built, deployed, and conversion-optimized
- ✅ Supabase leads table with status tracking (pending_payment → redirected_to_checkout)
- ✅ Payment link integrated (Attractinet external checkout)
- ✅ Vercel Web Analytics installed and active
- ✅ YouTube embed for video (replaced local file for CDN performance)
- ✅ CRO optimizations: unified CTA text, HowItWorks block, transparency micro-copy
- ✅ Mobile UX: VIP card badges in flow, responsive layouts
- ✅ New components: GuiltRelease, HowItWorks
- ✅ Extensive Hebrew copy overhaul (VossBlock, Gallery, RiskReversal, Hero)
- ⏳ Custom domain connection (space-cn.co.il) — DNS setup needed
- ⏳ Facebook Pixel tracking
- Last updated: Session 6
