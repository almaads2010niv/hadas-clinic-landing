# Niv's Prompts & Ideas

## Future Enhancements
- [ ] A/B testing for headline variations
- [ ] WhatsApp integration for quick contact
- [ ] Google Analytics / Facebook Pixel tracking
- [ ] SMS automation after lead submission
- [ ] Admin dashboard to view leads
- [ ] Real-time spots counter with WebSocket
- [ ] Mobile app deep link for returning members
- [ ] Referral system ("bring a friend" discount)
- [ ] Countdown that changes to "happening now" on event day

## Marketing Ideas
- Facebook/Instagram ad campaigns targeting Nesher/Haifa area
- SMS blast to former members database
- Google Ads for "חדר כושר נשר" / "קאנטרי נשר"
- Retargeting pixel for visitors who didn't convert
- Email sequence for leads who paid but haven't confirmed

## Design Notes
- The Israeli audience responds to bold, confident messaging
- FOMO elements (spots counter, notifications) work well
- Risk reversal is key — remove all objections
- Video autoplay grabs attention immediately
- Mobile-first design is critical (70%+ mobile traffic expected)

## Session 3 — Deployment

### What Niv Asked:
- Deploy to Vercel with environment variables
- Set up Supabase tables via browser
- Push to GitHub (alma.ads2010@gmail.com)
- Asked about connecting custom domain via FTP (space-cn.co.il)

### What Claude Did:
- Ran SQL in Supabase SQL Editor (leads table, RLS, policies, index)
- Created GitHub repo and pushed all 41 files
- Deployed to Vercel with Supabase env vars
- Site live at: https://great-shape-openday.vercel.app
- Explained domain connection: need DNS (CNAME), not FTP
- Recommended subdomain: openday.space-cn.co.il

## Session 4 — ComparisonTable Mobile Fix

### What Niv Asked:
- ComparisonTable במובייל — המשתמשים לא מבינים שיש מתחרים לגלול אליהם
- ביקש שהמתחרים "יציצו" מהצד עם חץ/משולש אלגנטי

### What Claude Did:
- שכתב ComparisonTable.tsx עם 3 שיפורים:
  1. Auto-peek — גלילה אוטומטית 60px וחזרה
  2. עיגול אדום עם חץ + "המתחרים" בצד שמאל
  3. כיתוב "גלול לצד לראות את ההשוואה" במובייל
- Push + auto-deploy ל-Vercel (commit fd30183)

---

## Prompt Templates Used
- Gemini prompt with frontend-design skill integration
- Conversion-optimized landing page structure
- Voss negotiation psychology (no-oriented questions)
- Pricing anchoring (regular vs VIP side by side)
