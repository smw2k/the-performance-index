# The Performance Index — Project Plan & PRD

> A research-backed database of performance compounds, mechanisms, and risks.  
> Built for gym-goers, biohackers, and everyday optimisers — not scientists.

---

## 1. Product Vision

**One-liner:** We turn a confusing, risky space into a clear system you can navigate in minutes.

**Core promise:** Save users 10+ hours of research, reduce perceived risk, and deliver clarity on peptides and performance compounds.

**What this is NOT:**
- Not medical advice
- Not a protocol or prescription service
- Not another supplement store

**What this IS:**
- A structured education platform
- A research translation tool
- A personalised starting point for compound discovery

---

## 2. Target Audience

**Primary:** Men aged 20–40 interested in health optimisation — gym-goers, biohackers, high performers

**Pain points:**
- Contradictory information online
- Can't trust sources (forums, YouTube, influencers)
- Research papers are too technical
- No clear risk framework exists for general public
- Scared to make mistakes with their body

---

## 3. Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router) + Tailwind CSS |
| Backend | Convex |
| Database | Convex |
| Auth | Clerk |
| Payments | Polar |
| Deployment | Vercel |
| AI | Claude API (Anthropic) |

**Build order (strict — do not deviate):**
1. Frontend UI + compound pages (core value)
2. Convex data layer
3. Clerk auth
4. Polar payments
5. Claude API integration

---

## 4. Pricing Model

| Tier | Price | What's included |
|---|---|---|
| Free | $0 | Quiz results, basic profile, teaser insights |
| Lifetime | $49 one-time | Full Performance Index library, future compound additions |
| Subscription | $19–$29/month | Weekly check-in tracking, photos, mood, energy, insights |

---

## 5. Core Features (Priority Order)

### 5.1 — Compound Database Pages (P0 — Build First)

Each compound gets its own dedicated page. This is the core product.

**Page structure for every compound:**

```
/compounds/[slug]   e.g. /compounds/bpc-157
```

**Sections on each compound page:**

1. **Hero** — Name, one-line description, quick-stat badges (Evidence Score, Risk Level, Popularity)

2. **Evidence Scoring System**
   - Evidence Strength: 1–5 scale (with explanation of what each score means)
   - Risk Level: Low / Moderate / High / Unknown
   - Popularity / Anecdotal Use: Low / Medium / High

3. **What It Is** — Plain English explanation (no jargon)

4. **Mechanism of Action**
   - Easy explanation (for beginners)
   - Advanced explanation (for those who want depth)

5. **What People Use It For** — Real-world use cases

6. **Research Findings** — Summary of key studies (translated from academic language)

7. **Timeline Expectations**
   - Week 1–2: What people might notice
   - Week 2–6: Expected changes
   - Long-term considerations

8. **Side Effects** — What they are, how they come about, what to watch for

9. **Bloodwork & Monitoring Guidance** — Which markers to track, when to test

10. **Video Explainer** — Embedded NotebookLM-generated explainer video

11. **Myths vs Reality** — Common claims vs what research actually says

12. **Related Compounds** — Links to similar or commonly stacked compounds

---

### 5.2 — Quiz / Assessment Flow (P0)

**URL:** `/quiz`

**Purpose:** Personalise the user experience and act as the top-of-funnel conversion tool.

**Quiz framing:** "Find your optimisation bottleneck" (NOT "What peptides should you take?")

**Questions to cover:**
- Primary goal (fat loss / muscle / recovery / longevity / cognitive)
- Current health status (sleep, stress, energy levels)
- Experience level with compounds (none / some / experienced)
- Biological sex
- Age range
- Any current health conditions or medications (disclaimer: not medical advice)

**Output after quiz:**
- Basic profile summary
- Top 2–3 compounds worth learning about (based on their goals)
- Teaser insights (free)
- CTA to unlock full library (paid)

---

### 5.3 — Landing Page (P0)

**URL:** `/`

**Sections (in order):**

1. **Hero**
   - Headline: *Understand performance compounds without the confusion, guesswork, or risk*
   - Subheadline: The Performance Index is a research-backed system that breaks down peptides and optimisation compounds into clear, structured insights.
   - CTA: Take the 60-second assessment
   - Micro copy: Free. Instant results. No medical advice — education only.

2. **Problem Section**
   - Headline: *The problem isn't lack of information. It's too much of the wrong kind.*
   - Bullets: contradictory articles, forum noise, oversimplified YouTube, unreadable research papers

3. **Pain Amplification**
   - Headline: *And when it comes to your body, guessing isn't harmless.*
   - Bullets: wrong expectations, unintended side effects, wasted time and money

4. **Solution Intro**
   - Headline: *So we built a system that cuts through the noise.*

5. **Core Benefits** (what you get)
   - Clear structured breakdowns
   - Evidence-based insights
   - Risk & monitoring guidance
   - Comparison tools
   - Personalised starting point

6. **Value Prop**
   - *What normally takes 10+ hours of scattered research… now takes minutes.*

7. **Trust Section**
   - Headline: *Built with one principle: clarity over hype*
   - Not a protocol. Not a recommendation engine. A structured system.

8. **CTA Section**
   - Take the assessment → quiz flow

---

### 5.4 — Comparison Tool (P1)

**URL:** `/compare`

Side-by-side comparison of two compounds across:
- Mechanism
- Use cases
- Evidence strength
- Risk profile
- Timeline

**Launch example:** Semaglutide (Ozempic) vs Tirzepatide

---

### 5.5 — Stack Logic Section (P1)

**URL:** `/stacks`

Common compound combinations people explore, including:
- Why they're combined
- Potential interactions
- Risk considerations

**Launch examples:**
- Wolverine Stack (BPC-157 + TB-500)
- GH + Peptide combinations

---

### 5.6 — Myths vs Reality (P1)

**URL:** `/myths`

Common claims in the space vs what research actually shows. Structured as a clean, scannable list.

---

### 5.7 — Auth & User Dashboard (P2)

Using Clerk for authentication.

**User dashboard includes:**
- Quiz results / profile
- Saved compounds
- (Subscription) weekly check-in log

---

### 5.8 — Payments (P2)

Using Polar.

- One-time $49 lifetime payment → unlocks full library
- Monthly subscription $19–29 → unlocks tracking features

---

## 6. Compound Research Pipeline

### Purpose
Automate the research and copy-writing process for each new compound added to the database.

### How it works
1. Input: compound name (e.g. "BPC-157")
2. Agent uses web search + PubMed to gather research
3. Agent structures output using the compound page template above
4. Output: ready-to-review copy for each section of the page
5. Human reviews and approves before publishing

### Agent prompt template (use this for each compound)
```
You are a research analyst for The Performance Index — a platform that translates 
complex peptide and performance compound research into clear, structured content 
for everyday health optimisers.

Research the compound: [COMPOUND NAME]

Output structured copy for each of the following sections. 
Write for an intelligent non-scientist. Avoid jargon unless explained. 
Be accurate, balanced, and honest about where evidence is weak.

Sections to complete:
1. One-line description
2. Evidence Score (1-5) with justification
3. Risk Level (Low/Moderate/High/Unknown) with justification
4. Popularity/Anecdotal Use (Low/Medium/High)
5. What It Is (plain English, 2-3 paragraphs)
6. Mechanism of Action — Easy version (3-4 sentences)
7. Mechanism of Action — Advanced version (1-2 paragraphs)
8. What People Use It For (bullet list)
9. Key Research Findings (3-5 findings, each with plain English summary)
10. Timeline Expectations (Week 1-2 / Week 2-6 / Long-term)
11. Side Effects (what they are, how they occur, what to watch for)
12. Bloodwork & Monitoring Guidance
13. Myths vs Reality (3-5 common claims vs what research says)

Format your response in clearly labelled sections.
```

---

## 7. Site Architecture

```
/                        → Landing page
/quiz                    → Assessment flow
/quiz/results            → Quiz results + teaser
/compounds               → Full compound index (gated)
/compounds/[slug]        → Individual compound page
/compare                 → Comparison tool
/stacks                  → Stack logic
/myths                   → Myths vs reality
/dashboard               → User profile + saved items
/pricing                 → Offer page
```

---

## 8. Design Direction

**Aesthetic:** Clean, premium, medical-adjacent but not clinical. Dark mode first.

**Tone:** Intelligent, calm, not hypey. Feels like a trusted advisor not a supplement brand.

**Typography:** Clean sans-serif. High contrast. Easy to scan.

**Colour palette:** Dark backgrounds, white text, accent colour (consider deep blue or green — trustworthy, not stimulating)

**Avoid:**
- Before/after imagery
- Supplement bottle aesthetics
- Anything that looks like a fitness ad

---

## 9. Compliance & Disclaimer Strategy

Every page must include:
- "This is not medical advice"
- "For educational purposes only"
- "Consult a healthcare professional before making any changes"

Ad copy must avoid:
- "Fat loss", "injectables", "peptides" (ad policy risk)
- Medical claims of any kind

Frame everything as: education, optimisation, clarity.

---

## 10. Launch Sequence

### Phase 1 — Core Product (Weeks 1–3)
- [ ] Scaffold Next.js project with Tailwind
- [ ] Build landing page
- [ ] Build quiz flow (questions + results page)
- [ ] Build compound page template
- [ ] Add first 5 compounds manually (BPC-157, TB-500, Semaglutide, Tirzepatide, Ipamorelin)
- [ ] Deploy to Vercel

### Phase 2 — Data & Auth (Weeks 3–5)
- [ ] Set up Convex database
- [ ] Migrate compound content to database
- [ ] Add Clerk auth
- [ ] Gate full library behind login

### Phase 3 — Monetisation (Week 5–6)
- [ ] Set up Polar payments
- [ ] Build offer/pricing page
- [ ] Connect payment to content gating

### Phase 4 — Growth (Week 6+)
- [ ] Launch ad campaigns (3 angles as planned)
- [ ] Set up compound research pipeline (automated)
- [ ] Add comparison tool
- [ ] Add stack logic section
- [ ] Add PWA config for mobile home screen install

---

## 11. Success Metrics

| Metric | Target |
|---|---|
| Quiz completion rate | >40% |
| Ad CTR | >1.5% |
| Landing → quiz conversion | >20% |
| Quiz → paid conversion | 2–5% |
| Time-on-page (compound pages) | >3 minutes |

---

## 12. Future Roadmap

- Weekly check-in tracking (photos, mood, energy, weight)
- Supplement database (creatine, tongkat ali, shilajit, caffeine, nicotine)
- Sister product: Skincare & Anti-ageing routine
- Affiliate links to vetted compound vendors
- Native mobile app (if subscription base justifies it)

---

*Last updated: May 2026*  
*Status: Pre-build — ready for development*
