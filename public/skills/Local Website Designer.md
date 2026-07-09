---
name: local-website-designer
description: Build a modern-clean, SEO-optimized local service business website locally (Astro + Cloudflare Pages by default, stack-agnostic). Use when user says "build a local business website", "design a website for my business", "create a site for [plumber/HVAC/roofer/electrician/septic/dentist/contractor/etc]", "local SEO website", or wants to scaffold a service-area business site with homepage + service pages + location pages + about/contact/legal. Walks the user through intake, page generation, audit, and hands off deployment.
version: 1.0.0
---

# Local Website Designer

A reusable playbook for building modern-clean, SEO-optimized local service business websites. Use this skill any time you're building a local service site for a real business — plumber, HVAC, roofer, electrician, landscaper, cleaner, dentist, attorney, contractor, etc.

**Live reference example:** https://desmoinesseptic.com — a working site built using every pattern in this skill (hero overlay, stacked `{Service} in {City}` H2s, service + location page structure, JSON-LD, operator voice). Visit it to see the end result this skill produces.

**How to run this skill:** Works with any AI coding agent that can read/write files and run shell commands — Claude Code, Codex, Cursor, Windsurf, Cline, Aider, etc. Open your agent of choice in a terminal or editor in the folder where you want your site built, paste this entire skill file as context, then paste the Intake Form below. The agent will scaffold the site, generate copy, run the audit, and hand off deployment.

If you're using a chat-only interface (Claude.ai, ChatGPT, etc.) without file/shell access, the agent can still generate all the code and copy — you'll just paste files into your editor manually.

---

## Before You Start (Prerequisites)

Install these once, then you're set for every future build:

1. **Node.js ≥22.12** — https://nodejs.org (pick the LTS download). Verify with `node --version` in your terminal.
2. **Git** — https://git-scm.com/downloads. Verify with `git --version`.
3. **GitHub account** — https://github.com/signup (free). You'll create one repo per site.
4. **Cloudflare account** — https://dash.cloudflare.com/sign-up (free). Used for hosting + DNS.

Optional but recommended:
5. **VS Code** — https://code.visualstudio.com (free editor for reviewing files Claude generates).

If you're stuck on any prerequisite, paste the error into Claude Code and ask for help.

**Who this is for:** local business owners building their own site, or marketers/agencies building sites for local business clients. No coding background required — Claude does the build; you provide the business info.

---

## How To Use This Skill (Start Here)

**If you're the user invoking this skill:** you have two ways to start.

**Option A — Short prompt (easiest, recommended for first-timers):**

Paste something like this:

```
Use the Local Website Designer Skill and the Astro web framework
(https://astro.build/) to build a website for my company.

Company: [your company name]
Industry: [e.g. septic services, HVAC, dental practice, law firm]
Service area: [primary city + state]
Other context: [anything else relevant — years in business,
top services, differentiators, brand colors, etc.]
```

Claude will infer sensible defaults (top services, nearby service-area cities, brand colors, page structure) and ask only for the truly blocking info it can't infer (phone, lead email). You'll see all the inferences at Checkpoint 1 and can correct any of them before the build runs.

**Option B — Full intake form (most control):**

1. Copy the **Intake Form** below into a new message to Claude.
2. Fill in every blocking field. Leave optional fields blank if unknown.
3. Send it. Claude will follow the **Execution Flow** to build, audit, and prepare your site for launch.

**Either way:** when Claude asks clarifying questions, answer them. When it asks for approval at a checkpoint, review and approve before it continues.

**If you're Claude reading this skill:** follow the **Execution Flow** section. Do not skip phases. Pause at the marked checkpoints and wait for user approval before continuing.

---

## Intake Form (Copy, Fill, Send to Claude)

```
=== LOCAL WEBSITE INTAKE ===

# REQUIRED (build cannot start without these)
Business legal name:
DBA (if different):
Primary city + state:
Top 5 services (most revenue first):
  1.
  2.
  3.
  4.
  5.
Service area cities (5-12 cities you serve):
Phone number for the website:
Lead email (where form submissions go):
Logo file path or URL:
Primary brand color (hex, e.g. #003B73) — or say "pick one":
Accent/CTA color (hex) — or say "pick one":

# STRONGLY RECOMMENDED
Years in business:
Owner/operator name + 2-sentence bio:
Licenses / certifications / insurance carrier:
3 reasons customers pick you over competitors:
Hours of operation:
Emergency / 24-7 service? (yes/no):
Existing reviews (Google/Yelp link or paste 3 best):
Domain (registered? where?):

# OPTIONAL (used if provided)
Tagline or slogan:
Photos of trucks/team/jobs (file paths):
Awards, BBB rating, # of jobs completed:
Notable clients (with permission to name):
CRM / lead routing system:
Existing host (if any):
Tracking number (CallRail, etc.) — leave blank to use real # first:

# STACK PREFERENCE (pick one or say "you decide")
[ ] Default (Astro + Cloudflare Pages — recommended for non-developers)
[ ] WordPress
[ ] Next.js + Vercel
[ ] Other:
```

---

## Execution Flow (Claude follows this when invoked)

When a user invokes this skill, Claude executes in this order. Do not skip steps. **Checkpoints** require user approval before continuing.

1. **Read intake.** The user may provide either the full Intake Form or a short free-text description (e.g., "Use this skill to build a site for my company. Company: X. Industry: Y. Service area: Z."). Either is acceptable. Extract every field you can from what they gave you, then:
   - **True blockers (must ask):** business name, industry/service category, primary city, phone number, lead email. Without these you cannot proceed. Ask for these in ONE consolidated message, not one at a time.
   - **Inferable fields (do not ask, propose instead):** Top 5 services (infer from the industry — e.g., "septic" → pumping, installation, repair, inspections, drain field), service area cities (propose 5-8 cities/suburbs around the primary city based on geography), brand colors (propose a palette appropriate to the trade — navy/green for trades, navy/burgundy for legal/medical, etc.), logo (offer to generate a simple wordmark if none provided), years in business / differentiators / hours (use sensible placeholders flagged as `[CONFIRM]` so the user can correct them).
   - State your inferences clearly at Checkpoint 1 so the user can correct anything before the build runs.
2. **Confirm stack.** If user said "you decide," default to Astro + Cloudflare Pages (see "Default Stack" section). State the choice and move on.
3. **CHECKPOINT 1 — Plan approval.** Output: page inventory (which 5 services + which cities get pages), proposed brand colors if user said "pick one," and 5 SEO title options for the homepage. Wait for approval.
4. **Visual direction options.** Before scaffolding, present **3 distinct visual directions** the site could take. Each is 2-3 sentences describing: color palette (with hex codes), typography pairing (heading font + body font), and hero treatment (photo overlay, illustrated, flat-color, etc.). Examples: "Direction A: Trustworthy navy (#0A2540) + warm orange CTA (#F26B21), Montserrat headings + Source Sans body, dark photo overlay hero." Wait for the user to pick one before continuing. This prevents a generic-looking first draft.
5. **Scaffold the project.** Run the starter commands (see "Default Stack" section), create the file structure, install dependencies.
6. **Generate copy for every page** using the prompts in "Copy Generation Prompts" section. Generate in this order: homepage → 5 service pages → location pages → about → contact → legal → 404.
7. **CHECKPOINT 2 — Copy review.** Show the user the homepage + 1 service page + 1 location page as samples. Wait for approval before generating the rest in final form. Apply feedback globally.
8. **Build the visual layer.** Apply the chosen visual direction + design system (Phase 3), hero pattern, section rhythm, nav, footer.
9. **Place images.** Use client-provided photos first. If none, use AI image generation (whatever model your agent supports) with SEO-keyword filenames. Compress all images.
10. **Add meta + schema.** Title/description/canonical/OG on every page. JSON-LD (LocalBusiness, Service, BreadcrumbList) per Phase 5.
11. **Wire the form.** Web3Forms by default. Test with a real submission before declaring it working.
12. **Run pre-launch audit (Phase 8).** Use the 3-parallel-subagent pattern (SEO/meta, copy QA, tech hygiene). Fix every P0 finding. Report P1/P2 to user.
13. **CHECKPOINT 3 — Launch approval.** Show the user the staged site URL + audit summary. Wait for approval.
14. **Deploy and walk user through DNS.** Push to GitHub, connect Cloudflare Pages (or chosen host), point DNS. Step-by-step instructions in "Deployment Walkthrough."
15. **Hand off post-launch checklist.** GSC, Bing, GBP, citation list, monitoring.

---

## Default Stack (For Non-Developer Users)

If the user has no preference, **use this stack**. It's free, fast, and battle-tested for local service business sites.

- **Framework:** Astro (static site, fast, SEO-friendly)
- **Hosting:** Cloudflare Pages (free, auto-deploys from GitHub)
- **Domain:** Cloudflare Registrar (or wherever they bought it)
- **Forms:** Web3Forms (free, no backend)
- **Repo:** GitHub (public is fine)

### Starter Commands

```bash
# Prerequisites: Node.js ≥22.12, git, a GitHub account
# Replace {business-slug} with the business name in kebab-case

cd ~/Desktop
npm create astro@latest {business-slug} -- --template minimal --typescript strict --no-install --no-git --yes
cd {business-slug}
npm install
npm install @astrojs/sitemap
npm run dev   # opens http://localhost:4321
```

### File Tree (Claude scaffolds this)

```
{business-slug}/
├── public/
│   ├── _headers              # Cloudflare security headers
│   ├── robots.txt
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── images/
│       ├── og.jpg            # 1200x630 social card
│       ├── hero-{service}-{city}.jpg
│       └── ...
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Shared <head>, nav, footer
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro  # Dynamic: generates 5 service pages
│   │   ├── [city].astro      # Dynamic: generates 5-12 location pages
│   │   ├── service-area.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── disclaimer.astro
│   │   └── 404.astro
│   ├── data/
│   │   ├── site.ts           # Phone, email, address, hours, colors
│   │   ├── services.ts       # 5 services with copy
│   │   └── cities.ts         # 5-12 cities with local content
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

### `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://{yourdomain}.com',
  integrations: [sitemap()],
});
```

### Cloudflare Pages build settings

> ⚠️ **CRITICAL — set this first or your build will fail:** Add an environment variable **`NODE_VERSION = 22`** (or whatever the current Astro LTS requires — check https://docs.astro.build) in the Pages project settings before the first deploy. Cloudflare's default Node version is often older than what Astro needs. This is the #1 reason first-time builds fail with a cryptic error. Set it under Settings → Environment variables → Production, *before* clicking "Save and Deploy."

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: **`NODE_VERSION = 22`** (see warning above)

---

## When to Use This Skill

- New local service business website build
- Redesign of an outdated local business site
- Real client engagements (operator owns the business and runs day-to-day)

**Not for:** ecommerce, SaaS, blogs, national brands, multi-location franchises with 20+ locations (different SEO playbook).

---

## Phase 1 — Discovery (Ask Before Building)

Run this Q&A with the client before writing a line of code or copy. If they can't answer, the build stalls.

### Business Basics
1. Legal business name + DBA if different
2. Years in business + founding story (1-3 sentences)
3. Owner/operator name + bio (used on About page)
4. License numbers, certifications, insurance carrier (credibility signals)
5. Service area: list every city/neighborhood they actually serve
6. Physical address — display publicly? (yes for retail/storefront, often no for in-home service)
7. Hours of operation + emergency/24-7 availability
8. Phone number (will it be a tracking number like CallRail? See Phase 6.)
9. Primary email for leads

### Services
10. Full service list. Force them to name **the top 5** revenue services. These become individual pages.
11. For each top service: 1-paragraph description, typical price range or "starts at" anchor, common questions customers ask
12. Emergency/after-hours service offered? (Standalone page if yes.)
13. Service add-ons that drive ticket size (used in copy)

### Differentiators
14. Why do customers pick them over competitors? (Force 3 concrete answers, not "quality service.")
15. Guarantees, warranties, satisfaction promises
16. Awards, BBB rating, years in business, # jobs completed, team size
17. Notable clients or projects (with permission to name)

### Visual / Brand
18. Existing logo? (Get vector if possible. If raster only, ≥1000px wide.)
19. Brand colors (2 primary, 1 accent). If none: pick a trustworthy primary (navy, forest green, deep red, charcoal) + a contrasting CTA color.
20. Photography: do they have real photos of trucks, team, completed jobs? If no, plan AI generation or a 2-hour photographer shoot ($200-400).
21. Existing reviews on Google, Yelp, Facebook, Angi (used for testimonials section + Schema)

### Tech / Conversion
22. Domain registered? Where?
23. Hosting preference / existing host
24. CRM or lead routing system? (HubSpot, Jobber, ServiceTitan, Housecall Pro, or just email)
25. Form delivery: email-only OK, or do they need form-to-CRM integration?
26. Tracking: GA4 + GSC + call tracking. Will client manage these or should we?

**Block list — don't start until you have:** legal name, top 5 services, service area cities, phone, lead email, primary brand color, logo file.

---

## Phase 2 — Information Architecture

The proven template:

### Page Inventory (Default ~18 Pages)

- `/` Homepage
- 5 individual service pages: `/{service-slug}/`
- 5 location pages: `/{city-slug}/` (or however many cities they actually serve; 5-12 is the sweet spot)
- `/services/` services index (lists all)
- `/service-area/` service area overview
- `/about/`
- `/contact/`
- `/privacy/`, `/terms/`, `/disclaimer/`
- `/404` branded error page

**Scaling rule:** More than 5 services? Pick the top 5 for individual pages, list the rest on `/services/`. More than 12 cities? Group by county or region. Don't dilute internal link equity across 30 thin pages.

### Navigation

Top nav (desktop): Logo left | Services ▾ | Locations ▾ | About | Contact | **Phone CTA (top-right, always visible)**

Mobile: hamburger collapses Services/Locations into accordions. Phone CTA stays in the top bar.

Footer: 4 columns — Logo+blurb+phone | Services list | Locations list | Legal links + hours.

---

## Phase 3 — Visual Design System

### Color Palette
- **Primary** (header, hero overlay, H1/H2): trustworthy, saturated, dark enough for white text. Example: `#003B73` (navy)
- **Accent / CTA** (buttons, links, hover states): contrasts primary, signals action. Example: `#37A82F` (green)
- **Neutral**: `#1a1a1a` text, `#f5f5f5` section backgrounds, `#ffffff` body

### Typography
- **Headings:** geometric sans (Montserrat, Poppins, Inter) — 700 weight
- **Body:** humanist sans (Open Sans, Source Sans, Inter) — 400/600
- Sizes: H1 2.5-3rem, H2 1.75-2rem, H3 1.25-1.5rem, body 1rem / 1.6 line-height

### Hero Pattern (the "autoglassnola" pattern)

Subtle background photo + dark gradient overlay (88-92% opacity primary color). Big H1 + 1-sentence subhead + phone CTA + secondary "Get a Free Estimate" button.

```css
.hero {
  position: relative;
  background:
    linear-gradient(rgba(0, 59, 115, 0.92), rgba(0, 59, 115, 0.88)),
    url('/images/hero-service-city.jpg') center/cover no-repeat;
  color: #fff;
  padding: 6rem 1.5rem 5rem;
  text-align: center;
}
.hero h1 { font-size: 2.75rem; line-height: 1.15; margin-bottom: 1rem; }
.hero p.subhead { font-size: 1.15rem; opacity: 0.92; margin-bottom: 2rem; }
.hero .cta-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-primary { background: #37A82F; color: #fff; padding: 0.9rem 1.75rem; font-weight: 700; border-radius: 6px; text-decoration: none; }
.btn-secondary { background: transparent; color: #fff; border: 2px solid #fff; padding: 0.9rem 1.75rem; border-radius: 6px; text-decoration: none; }
```

### Section Rhythm

Alternate white and light-gray section backgrounds. Each section: H2 + supporting copy + (image OR list OR CTA). Keep sections under 600 words each — 3-5 sections per page max.

---

## Phase 4 — Page Templates (Copy Patterns)

### Homepage Structure

1. **Hero** — H1: `{City} {Service Category}` (e.g., "{City} {Service Category} & Repair"). Subhead: 1 sentence on what you do + where. Two CTAs (call + form).
2. **Trust strip** — 4-6 icons or short bullets: Licensed & Insured | {X} Years Serving {City} | Same-Day Service | {Cert/Award}
3. **Services section** — H2: "{Service Category} Services in {City}". 5 service cards, each linking to its own page. Each card: H3 service name + 2 sentences + "Learn more →"
4. **About snippet** — H2: "Trusted {Service Category} in {Metro Area} Since {Year}". 2-3 paragraphs of operator voice + link to /about/
5. **Service area** — H2: "Serving {City} and Surrounding Areas". List 5-12 cities as a grid of links to location pages.
6. **Why us** — H2: "Why {Metro Area} Chooses {Business Name}". 4-6 bullet differentiators from discovery Q14-16.
7. **Reviews/testimonials** — H2: "What Our Customers Say". 3 real reviews with first name + city. Pull real ones from Google.
8. **Final CTA** — H2: "Get a Free {Service} Estimate in {City}". Phone + form.

### Service Page Structure (`/{service-slug}/`)

1. Hero — H1: `{Service} in {Metro Area}`. Subhead names what's included.
2. **What is {service}** — 2 paragraphs of plain-language explanation. Demonstrates expertise.
3. **Signs you need {service}** — H2 + 5-7 bullet list. High search-intent content.
4. **Our {service} process** — H2 + numbered 3-5 step list.
5. **Pricing** — H2 + honest range or "starts at" anchor + what affects price. NEVER hide pricing entirely — it kills conversion.
6. **FAQ** — 4-6 Q&As specific to this service. Use real questions.
7. **Service area mini-section** — "We provide {service} throughout {Metro}: [list of cities as links]"
8. **CTA** — Call or form.

### Location Page Structure (`/{city-slug}/`)

**Critical: each location page must have ~60% unique content** or Google treats them as doorway pages and won't rank any of them.

1. Hero — H1: `{Service Category} in {City}, {State}`
2. **{City}-specific intro** — 2 paragraphs that demonstrate local knowledge: neighborhoods, terrain, regulatory body, common issues for that city. THIS IS THE UNIQUE CONTENT.
3. **Services in {City}** — Stacked H2s: "{Service 1} in {City}", "{Service 2} in {City}", etc. 1 paragraph each. Repeated `{Service} in {City}` H2s drive keyword density without spam.
4. **Neighborhoods/ZIPs we serve in {City}** — bulleted list of 4-8 named neighborhoods or ZIP codes.
5. **Local credibility** — mention city-specific permit office, regulations, or terrain considerations (verify factually).
6. **CTA** — Phone + form, location-specific copy.

### About Page

Operator voice. First-person plural ("we") OR third-person ("Bob's Plumbing was founded by..."). Pick one and stay consistent.

Sections: Origin story (1-2 paragraphs) | What we do (1 paragraph) | Owner/team intro with names | Credentials & licenses | Service area | CTA.

### Contact Page

Form + phone + email + hours + service area note. If no physical address, write: "We're a service-area business — we come to you. Serving {City} and surrounding {Metro Area}."

---

## Phase 5 — Copy Voice & SEO Patterns

### Voice Rules
- **Operator voice.** "We install water heaters in {City}." Not "Our team can assist with..."
- **Specific over generic.** "Same-day service in {Suburb 1}, {Suburb 2}, and {Suburb 3}" beats "fast service."
- **No corporate hedging.** Cut "may," "might," "potentially," "industry-leading," "world-class."
- **No em dashes (—).** Use periods or regular hyphens. Scan with python3, not grep (grep misses U+2014).
- **No fabricated stats.** Never write "served 500+ customers" or "$12,000 saved" unless verified.
- **Plain English at 8th-grade level.** Hemingway score 7-9.

### SEO Density Patterns

On every page:
- Primary keyword in URL, H1, page title, meta description, first 100 words, one H2
- City name 15-25x on homepage and location pages
- Service category name 30-50x sitewide
- Descriptive image alt text: `{service} {city} {visual detail}` (e.g., "{service} truck {city} residential driveway")

### Meta Patterns

```
Title: {Service} in {City} | {Business Name}                  (≤60 chars)
Description: We provide {service} in {city} and surrounding {metro/county}. Licensed, insured, {years} years experience. Call {phone} for a free estimate.   (150-160 chars)
```

### JSON-LD Schema (paste into `<head>` of relevant pages)

**LocalBusiness (homepage + about + contact):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{Business Name}",
  "image": "https://{domain}/images/og.jpg",
  "telephone": "{phone E.164 format, e.g. +15153034896}",
  "email": "{email}",
  "url": "https://{domain}",
  "areaServed": [
    {"@type": "City", "name": "{City1}"},
    {"@type": "City", "name": "{City2}"}
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{Primary City}",
    "addressRegion": "{State abbr}",
    "addressCountry": "US"
  },
  "openingHours": "Mo-Fr 08:00-17:00",
  "priceRange": "$$"
}
</script>
```

**Service (each service page):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{Service Name}",
  "provider": {"@type": "LocalBusiness", "name": "{Business Name}", "telephone": "{phone}"},
  "areaServed": {"@type": "City", "name": "{Primary City}"},
  "description": "{1-sentence service description}"
}
</script>
```

**BreadcrumbList (every non-homepage):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://{domain}/"},
    {"@type": "ListItem", "position": 2, "name": "{Page Name}", "item": "https://{domain}/{slug}/"}
  ]
}
</script>
```

---

## Phase 6 — Tech Stack & Build Conventions

Stack-agnostic. Whatever framework you pick, enforce these:

### Performance Requirements
- Lighthouse mobile ≥90 performance, ≥95 SEO, ≥95 accessibility, ≥95 best practices
- Hero image ≤400KB (compress 1920px wide JPEG, q72-78)
- Below-fold images: `loading="lazy" decoding="async"`
- Logo ≤120KB
- Total page weight homepage ≤1.5MB

### Required Meta Tags (every page)

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{Page Title}</title>
  <meta name="description" content="{Page Description}" />
  <link rel="canonical" href="https://{domain}{path}" />

  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

  <meta property="og:title" content="{Page Title}" />
  <meta property="og:description" content="{Page Description}" />
  <meta property="og:image" content="https://{domain}/images/og.jpg" />
  <meta property="og:url" content="https://{domain}{path}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

### Security Headers (Cloudflare `_headers` file or equivalent)

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Forms

**Easiest path:** Web3Forms (free, no backend), Formspree, or Netlify Forms. All deliver to email.

Web3Forms minimum:
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="{KEY}" />
  <input type="hidden" name="redirect" value="https://{domain}/thanks/" />
  <input type="hidden" name="subject" value="New lead from {Business Name} site" />
  <input type="text" name="name" required placeholder="Name" />
  <input type="tel" name="phone" required placeholder="Phone" />
  <input type="email" name="email" required placeholder="Email" />
  <textarea name="message" placeholder="Tell us about your job"></textarea>
  <button type="submit">Get a Free Estimate</button>
</form>
```

### Phone Number

Always render `tel:` links in E.164 format: `<a href="tel:+15153034896">(515) 303-4896</a>`. If using call tracking (CallRail, CallTrackingMetrics), wait until the client picks the tracking number before going live, or use the real number and swap later.

---

## Phase 7 — Imagery

**Order of preference for a real client:**
1. **Client's own photos** of trucks, team, completed jobs (best converting, free)
2. **2-hour local photographer shoot** ($200-400, real geo-authentic photos)
3. **AI generation** with the best current image model your agent has access to (e.g., Google Gemini image models, OpenAI image models) using SEO-keyword filenames
4. **Paid stock** (iStock Essentials, ~$12/image) — last resort
5. **Free stock (Pexels/Unsplash)** — usually fails for service trades, fine for white-collar

**Never** scrape competitor sites. Watermark companies actively scan service niches for DMCA enforcement.

**Naming convention:** `{service-or-content}-{city}-{detail}.jpg` — e.g., `roof-repair-des-moines-shingle-replacement.jpg`. Helps image search + accessibility.

**Compression:** 1400-1600px wide, JPEG quality 72-78. Target 250-400KB.

---

## Phase 8 — Pre-Launch Audit (Mandatory)

Run this checklist before pointing the domain at production. **For larger builds, run three parallel subagents** (SEO/meta, copy QA, tech hygiene) and consolidate findings. Then fix P0+P1+P2 in one pass.

### Factual Audit (P0 — non-negotiable)
- [ ] Every code section, statute, license number, or regulatory reference is correct
- [ ] Every certification, association, and award is real and verifiable
- [ ] No fabricated specifics (years, customer counts, project counts, dollar figures)
- [ ] City facts (population, ZIPs, neighborhoods, governing body) verified
- [ ] No competitor names in copy
- [ ] No personal info that creates liability (named permit clerks, etc.)

### SEO/Meta Audit
- [ ] Unique title + description on every page (no duplicates)
- [ ] H1 on every page, exactly one per page
- [ ] All images have descriptive alt text
- [ ] Canonical tags on every page
- [ ] Sitemap generates and includes every public page
- [ ] robots.txt present, allows crawl
- [ ] JSON-LD validates at validator.schema.org
- [ ] Mobile-friendly test passes
- [ ] No em dashes anywhere (`python3 -c "import os; [print(f) for r,d,fs in os.walk('src') for f in fs if '—' in open(os.path.join(r,f),encoding='utf-8',errors='ignore').read()]"`)

### Copy QA
- [ ] Voice consistent (operator vs referral) across all pages
- [ ] No corporate hedging language
- [ ] No banned words list ("world-class," "industry-leading," "best-in-class")
- [ ] Every CTA labels what happens next ("Get a Free Estimate" not "Submit")
- [ ] Phone number consistent everywhere (header, footer, body copy)
- [ ] Email address consistent everywhere

### Tech Hygiene
- [ ] HTTPS works, HTTP redirects to HTTPS
- [ ] www and non-www both resolve (one redirects to the other)
- [ ] 404 page is branded and links to home + main services
- [ ] All internal links resolve (no 404s on internal nav)
- [ ] Form tested with real submission, lead lands in inbox
- [ ] Phone link opens dialer on mobile
- [ ] Security headers set
- [ ] Favicon shows in browser tab + bookmark
- [ ] og.jpg renders correctly in Facebook/LinkedIn debugger

---

## Phase 9 — Launch & Post-Launch

### Launch Day
1. Push to production
2. Point domain DNS to host
3. Verify HTTPS cert provisioned
4. Submit sitemap to **Google Search Console**
5. Submit sitemap to **Bing Webmaster Tools**
6. Set up **Google Business Profile** (real clients only — claim, verify, optimize)
7. Install **GA4** + (optional) PostHog/Plausible
8. Connect call tracking if using it
9. Test form once more from a real device

### Week 1 Followups
- BBB profile (real client → claim)
- Yelp profile
- Angi profile
- Niche directories (HomeAdvisor, Houzz Pro, Thumbtack)
- NAP consistency check across all citations (Name, Address, Phone — must match exactly)
- Request first 5 Google reviews from recent happy customers

### Week 2-4 Followups
- Embed Google Map on contact page once GBP is verified
- Add real testimonials section once you have 5+ reviews
- Write first blog post or service-deep-dive page targeting a long-tail keyword
- Set up monthly Lighthouse + uptime monitoring

---

## Recursive Audit Loop (for higher-stakes builds)

For client builds where mistakes are expensive, run the **generate → evaluate → diagnose → improve → repeat** loop before launch:

1. **Generate** the full draft
2. **Evaluate** against this skill's checklists with explicit pass/fail (not "looks good")
3. **Diagnose** what failed and why
4. **Rewrite** to fix
5. **Re-score** until everything passes

Run 3 parallel subagents at the audit step (SEO/meta, copy QA, tech hygiene). Saves hours vs sequential review.

---

## Copy Generation Prompts (Claude Uses These)

When Claude is generating page copy from the intake form, it uses these internal prompts. The user does not need to run these manually — Claude runs them automatically. Listed here so the user can review/adjust the inputs.

### Homepage Copy Prompt

```
Generate homepage copy for {Business Name}, a {service category} business in {Primary City}, {State}.

INPUTS:
- Top 5 services: {list}
- Years in business: {years}
- 3 differentiators: {list}
- Service area cities: {list}
- Phone: {phone}
- Hours: {hours}
- Tagline (if any): {tagline}

OUTPUT in this exact structure:
1. SEO title (≤60 chars) — 5 options
2. Meta description (150-160 chars)
3. H1 (format: "{City} {Service Category}" — e.g. "{City} {Service Category} & Repair")
4. Subhead (1 sentence, what you do + where)
5. Trust strip (4-6 short bullets: license, years, same-day, cert)
6. Services section H2 + 5 service cards (each: H3 + 2 sentences)
7. About snippet (2-3 paragraphs operator voice)
8. Service area section (H2 + city list)
9. Why-us section (H2 + 4-6 bullets from differentiators)
10. Reviews placeholder (3 slots, mark "[REAL REVIEW NEEDED]")
11. Final CTA (H2 + 1-paragraph + phone)

VOICE RULES:
- Operator voice ("we"), not referral
- No em dashes
- No corporate hedging ("may," "potentially," "world-class")
- No fabricated stats
- Repeat "{Primary City}" 15-25 times naturally
- Repeat "{service category}" 30-50 times naturally
- 8th-grade reading level
```

### Service Page Copy Prompt

```
Generate copy for a service page: "{Service Name}" in {Primary City}.

INPUTS:
- Service name: {name}
- 1-paragraph description from client: {description}
- Typical price range: {range}
- Common questions: {list}
- Service area cities: {list}

OUTPUT:
1. SEO title: "{Service} in {City} | {Business Name}" (≤60 chars)
2. Meta description (150-160 chars)
3. H1: "{Service} in {Primary City}"
4. Hero subhead (1 sentence, what's included)
5. "What is {service}" (2 paragraphs, plain English)
6. "Signs you need {service}" (H2 + 5-7 bullets, high-intent)
7. "Our {service} process" (H2 + 3-5 numbered steps)
8. Pricing section (H2 + honest range + what affects price — NEVER hide pricing entirely)
9. FAQ (4-6 Q&As specific to this service)
10. Service area mini-section (cities as links)
11. CTA section (phone + form)

Apply the same voice rules as homepage.
```

### Location Page Copy Prompt

```
Generate copy for a location page: "{Service Category} in {City}, {State}."

CRITICAL: This page must have ~60% unique content vs. other location pages. Google penalizes doorway pages. Make every location page genuinely different.

INPUTS:
- City: {city}
- State: {state}
- Neighborhoods/ZIPs in this city: {list — research if not provided}
- County: {county}
- Local permit/regulatory body: {if applicable}
- Terrain/local issues unique to this city: {research}

OUTPUT:
1. SEO title: "{Service Category} {City}, {State} | {Business Name}" (≤60 chars)
2. Meta description with city-specific angle (150-160 chars)
3. H1: "{Service Category} in {City}, {State}"
4. City-specific intro (2 paragraphs demonstrating local knowledge — this is the unique content)
5. Stacked H2s — one per top service, format "{Service} in {City}":
   - "{Service 1} in {City}" + 1 paragraph
   - "{Service 2} in {City}" + 1 paragraph
   - (etc, for all 5 services)
6. "Neighborhoods we serve in {City}" (bulleted, 4-8 named areas or ZIPs)
7. Local credibility paragraph (mention city-specific permit office, regulations, or terrain — VERIFY factually before writing, do not fabricate)
8. CTA section

Apply voice rules. NO fabricated city facts. If you can't verify a claim, omit it.
```

### Legal Pages Copy Prompt

Generate `/privacy/`, `/terms/`, and `/disclaimer/` using this prompt. These are required pages on every site.

```
Generate three legal pages for {Business Name}, a {service category} business in {Primary City}, {State}.

INPUTS:
- Business legal name: {legal name}
- Operating state: {state}
- Lead email: {email}
- Phone: {phone}
- Does the site collect contact form data? Yes (name, email, phone, message)
- Does the site use analytics? {GA4 yes/no}
- Does the site use cookies? Minimal (analytics only) unless specified otherwise

OUTPUT three separate pages:

1. /privacy/ — Privacy Policy
   - What we collect (form submissions, analytics)
   - How we use it (respond to inquiries, improve site)
   - Who we share with (no sale of data; only service providers like form host + analytics)
   - User rights (request deletion via {email})
   - Cookie usage
   - Effective date: {today's date}
   - Contact: {email}, {phone}

2. /terms/ — Terms of Service
   - Acceptance of terms by using the site
   - Description of services (informational; quotes/estimates are not binding contracts)
   - Limitation of liability (site information provided "as is")
   - Intellectual property (site content owned by {Business Name})
   - Governing law: {state}
   - Effective date: {today's date}
   - Contact: {email}

3. /disclaimer/ — General Disclaimer
   - Site is for informational purposes
   - No guarantee of service outcomes
   - Pricing shown is estimate only; final pricing requires on-site assessment
   - {Business Name} is licensed and insured in {state} (if applicable — verify before including)
   - Contact: {phone}, {email}

Plain language, no legalese where avoidable. Operator voice. Note at the top of each: "This is a starting template. For final legal review, consult a licensed attorney in {state}."
```

**Important:** AI-generated legal pages are a starting point, not a substitute for legal advice. Recommend the user have an attorney review before launching anything where legal exposure matters (high-ticket services, regulated industries, multi-state operations). Free generators like termly.io or iubenda.com are alternatives.

---

### About Page Copy Prompt

```
Generate the About page for {Business Name}.

INPUTS:
- Owner name + bio: {bio}
- Founding year + story: {story}
- Service area: {cities}
- Credentials/licenses: {list}
- 3 differentiators: {list}

OUTPUT:
1. H1: "About {Business Name}"
2. Origin story (1-2 paragraphs)
3. What we do (1 paragraph)
4. Owner/team intro with names
5. Credentials & licenses section
6. Service area paragraph
7. CTA

Operator voice. First-person plural ("we"). No fabricated history.
```

---

## Deployment Walkthrough (Cloudflare Pages + GitHub)

Use this when launching with the default stack. Claude walks the user through each step; the user clicks the buttons.

### 1. Create GitHub repo

```bash
cd ~/Desktop/{business-slug}
git init
git add .
git commit -m "Initial site build"
# Create the repo on github.com (public is fine), then:
git remote add origin https://github.com/{username}/{business-slug}.git
git branch -M main
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Go to https://dash.cloudflare.com → find the **Workers & Pages** (or **Workers**) section in the left sidebar → create a new Pages project → choose **Connect to Git**. Cloudflare renames these menu items occasionally; if labels differ, look for "Pages" or "Connect to Git."
2. Authorize GitHub, pick the `{business-slug}` repo
3. Build settings:
   - Production branch: `main`
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. ⚠️ **Environment variables** → add **`NODE_VERSION = 22`** under Production. **DO THIS BEFORE THE FIRST DEPLOY.** If you skip this, the build fails with a confusing Node version error. This is the single most common first-build failure — set it now.
5. Click **Save and Deploy**. First build takes ~2-3 minutes. Future pushes to `main` deploy automatically in ~90 seconds.

### 3. Point custom domain

1. In Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `{yourdomain}.com` → Cloudflare auto-provisions the DNS records if the domain is on Cloudflare
3. If domain is at another registrar: copy the CNAME records Cloudflare shows and add them at your registrar
4. Wait 5-30 minutes for HTTPS cert provisioning. Verify https:// loads before announcing the site.

### 4. Verify launch

- [ ] https://{yourdomain}.com loads with HTTPS
- [ ] http:// redirects to https://
- [ ] www and non-www both work (one redirects to the other)
- [ ] Form submission delivers to lead email
- [ ] Phone link opens dialer on mobile
- [ ] No console errors in browser devtools
- [ ] Sitemap loads at https://{yourdomain}.com/sitemap-index.xml

### 5. Post-launch (do these the same day)

1. **Google Search Console** — https://search.google.com/search-console → add property → verify via DNS TXT record → submit sitemap
2. **Bing Webmaster Tools** — https://www.bing.com/webmasters → import from GSC (fastest)
3. **Google Business Profile** — https://business.google.com → claim or create → verify (postcard, video, or instant) → optimize
4. **Citations** — BBB, Yelp, Angi, niche directories. Use identical NAP (Name, Address, Phone) everywhere.
5. **GA4** — https://analytics.google.com → create property → paste tag in Layout.astro before `</head>`

---

## Quick Start Checklist (Copy/Paste for Each New Build)

```
[ ] Discovery Q&A complete (Phase 1, all blocking questions answered)
[ ] Domain registered
[ ] Hosting picked and project deployed empty
[ ] Logo file in hand
[ ] Brand colors locked
[ ] Page inventory drafted (Phase 2)
[ ] Homepage built
[ ] 5 service pages built
[ ] 5-12 location pages built (with unique local content each)
[ ] About + Contact + Services index + Service Area built
[ ] Legal pages built (privacy, terms, disclaimer)
[ ] 404 page built
[ ] Hero image + section images placed
[ ] JSON-LD added (LocalBusiness, Service, BreadcrumbList)
[ ] Meta tags + favicons + og.jpg complete
[ ] Security headers set
[ ] Form tested live
[ ] Pre-launch audit complete (Phase 8 — all P0 fixed)
[ ] DNS pointed, HTTPS verified
[ ] GSC + Bing + GBP submitted
[ ] GA4 installed
[ ] Citation plan kicked off (BBB, Yelp, Angi)
```
