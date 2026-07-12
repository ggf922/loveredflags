# 🚩 LoveRedFlags.com

**Love Red Flag Detector - Global Matching Test**

A viral, multi-language personality test that reveals your dating "red flags" and matches you with the best partner-nations from the G20.

**Live**: [https://LoveRedFlags.com](https://LoveRedFlags.com) (once deployed)
**Repo**: [https://github.com/ggf922/loveredflags](https://github.com/ggf922/loveredflags)

---

## 🎯 Project Overview

- **Name**: LoveRedFlags.com
- **Goal**: Build a viral, ad-monetized psychological test with global reach and social sharing
- **Target**: Global Gen Z & Millennials
- **Monetization**: Google AdSense + affiliate travel links (Skyscanner, Booking.com)

## ✨ Features

### Currently Implemented
- ✅ **12-question adaptive test** across 4 personality axes (Obsession, Communication, Emotion, Control)
- ✅ **16 unique result types** (from "Green Flag Angel 👼" to "Controlling Vampire 🧛")
- ✅ **G20 20-country matching** — best male, best female, worst match, and travel probability
- ✅ **8 languages** with auto browser-detection: 🇬🇧 English, 🇰🇷 한국어, 🇯🇵 日本語, 🇪🇸 Español, 🇧🇷 Português, 🇸🇦 العربية (RTL), 🇷🇺 Русский, 🇨🇳 中文
- ✅ **SNS share buttons** (X, WhatsApp, Facebook, native share, link copy)
- ✅ **Supabase-backed statistics** — real-time "X% of users have your type"
- ✅ **AdSense-ready** — 6+ ad slots per user journey (banner refreshes every question)
- ✅ **SEO optimized** — sitemap.xml (with all 45+ URLs), robots.txt, per-page metadata, Open Graph, JSON-LD structured data
- ✅ **Legal pages** — Terms of Service, Privacy Policy, About (AdSense-approval ready)

### 🎯 AdSense Approval Package (NEW)
- ✅ **10 original long-form blog articles** (1,500+ chars each, EN + KO) — psychology of dating, red flags, attachment styles, love languages, toxic relationships, communication, healing after breakup, dating apps, cross-cultural dating, healthy relationships
- ✅ **20 G20 country dating culture pages** — overview, courtship, red/green flags, popular apps, cultural notes for each
- ✅ **FAQ page** with 20 questions across 5 categories (general/test/results/privacy/technical) + FAQPage JSON-LD
- ✅ **Contact page** with 6 subjects, Supabase-backed form submission, spam filter
- ✅ **Enhanced About page** — mission, methodology (4 psychology frameworks), values, technology stack, disclaimers
- ✅ **Cookie Consent banner** with granular controls (Necessary/Analytics/Ads), LocalStorage persistence, custom event dispatch
- ✅ **Expanded result pages** — "What Your Type Really Means", growth tips, related articles, deep dive sections
- ✅ **Semantic sitemap** including all 10 blog posts + 20 country pages + FAQ + Contact
- ✅ **Contact API route** (`/api/contact`) → Supabase `contact_messages` table

### Not Yet Implemented
- ⏳ Instagram Story image generation (html2canvas library included, UI pending)
- ⏳ Real affiliate link integration (Skyscanner API / Booking.com)
- ⏳ Blog/FAQ/Contact strings in 8-language locales (currently EN in-page — sufficient for AdSense)
- ⏳ Google Analytics 4 integration

### Recommended Next Steps
1. **Run `supabase/contact_messages.sql`** in Supabase to enable Contact form storage
2. **Apply for Google AdSense** — content package is now well beyond thin-content threshold
3. **Add Google Analytics 4** for traffic tracking
4. **Localize new pages** into 8 languages once AdSense is approved
5. **Marketing** — Blog articles are SEO-ready, share on Reddit r/dating, TikTok

---

## 🌍 URLs

| Route | Description |
|-------|-------------|
| `/` | Landing page with CTA |
| `/quiz` | 12-question quiz (state managed client-side) |
| `/analyzing` | 3-second "analyzing" transition with interstitial ad |
| `/result/[code]` | Expanded result page (16 codes) + deep-dive analysis + growth tips |
| `/blog` | Blog listing page (10 articles) |
| `/blog/[slug]` | Individual blog post (SSG, JSON-LD schema, markdown-rendered) |
| `/countries` | G20 countries listing (20 nations) |
| `/countries/[code]` | Per-country dating culture guide (SSG, 20 pages: kr/us/jp/cn/gb/fr/de/it/ca/au/ru/br/in/mx/id/sa/tr/ar/za/es) |
| `/faq` | FAQ page with 20 questions + FAQPage JSON-LD |
| `/contact` | Contact form with 6 subjects |
| `/api/contact` | Contact API (POST) → Supabase `contact_messages` |
| `/about` | Enhanced About page (mission, methodology, values, tech stack) |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/sitemap.xml` | Auto-generated sitemap (45+ URLs) |
| `/robots.txt` | Auto-generated robots.txt |

---

## 🗄️ Data Architecture

### Data Models

**Result Code (4-character)**
- Position 1: `O`bsessive vs `I`ndependent
- Position 2: Expressive (`C`ommunicative) vs `A`voidant
- Position 3: `V`olatile vs `S`table
- Position 4: `C`ontrolling vs `R`eceptive

### Storage Services

| Service | Purpose |
|---------|---------|
| **Supabase (PostgreSQL)** | Anonymous test result statistics |
| **Vercel** | Hosting + Edge Functions |
| **localStorage** | Language preference persistence |

### Supabase Schema
See `supabase/schema.sql` — one table (`test_results`) with RLS enabled.

### Data Flow
```
User answers 12 questions
  ↓ (client-side scoring)
Calculate 4-axis scores → Determine 4-char result code
  ↓ (async, non-blocking)
Save to Supabase (anonymous)
  ↓
Show result page with G20 matching
```

---

## 🚀 Deployment (Vercel + GitHub)

### 1. Vercel Setup
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import GitHub repo `ggf922/loveredflags`
3. **Framework Preset**: Next.js (auto-detected)
4. **Environment Variables** (add these in Project Settings):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=  (leave empty until AdSense is approved)
   ```
5. Click **Deploy**

### 2. Supabase Setup
1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** → paste the contents of `supabase/schema.sql` → **Run**
3. Copy your URL + anon key into Vercel env vars

### 3. Custom Domain (LoveRedFlags.com)
1. In Vercel → Project → **Domains** → Add `loveredflags.com`
2. Follow Vercel's DNS instructions (add A/CNAME records at your registrar)
3. SSL is auto-provisioned

### 4. Automatic Deployments
Every `git push origin main` → Vercel auto-deploys. ✨

---

## 🧑‍💻 Local Development

```bash
# Install dependencies
npm install

# Setup env vars
cp .env.example .env.local
# Edit .env.local with your Supabase URL/key

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
```

---

## 📊 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom neon glassmorphism
- **State**: React Context (LocaleProvider + QuizProvider)
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel (Edge)
- **Ads**: Google AdSense
- **i18n**: Custom lightweight solution (8 languages, RTL support)

---

## 🎨 Design System

- **Colors**: Neon pink (#FF10F0), purple (#B026FF), cyan (#00F0FF) on dark space bg
- **Font**: Inter / Poppins (Latin), Noto Sans Arabic (RTL)
- **Style**: Glassmorphism + gradient text + subtle animations
- **Mobile-first**: All designs optimized for Instagram/TikTok viewing

---

## 📜 License

© 2025 LoveRedFlags.com. All content is for entertainment purposes only.
