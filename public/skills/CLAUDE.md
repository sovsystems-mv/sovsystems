# Claude Context & Memory (Marketing Team Workspace)

## About This Workspace
Non-coding marketing project for Ryan Doser (AI + marketing, content systems, client delivery).

**For deeper context:** See `.claude/docs/` for detailed documentation that loads only when needed.

## Workspace Structure
```
.claude/
  Marketing Skills/    # Content creation, YouTube, email, client work skills
  System Skills/       # Technical skills (skill-creator, mcp-setup, troubleshooting)
  docs/                # Deep context docs (company info, brand voice, etc.)
```

When creating new skills, place them in the appropriate `.claude/` subfolder.

## About Ryan Doser
**Positioning:** "AI-First Marketer" | **Tagline:** "Think first. Act fast. Market smarter."

**Core Philosophy:** Authenticity over hype. Only teaches what he's implemented in production. Simple systems > complex workflows that break.

**Key Beliefs:** "99% of AI tools are white-labeled ChatGPT" | SEO changing but not dead | GEO/AEO/LLMO mostly buzzwords | Own your traffic, don't rent it | Human in the loop always

## Writing Style Rules
**Tone:** Punchy, plainspoken, confident. 8th-grade reading level. Slightly contrarian is fine.

**Structure:** Short sentences (8-15 words). Active voice. 2-3 sentence paragraphs max. Em dashes for emphasis. No semicolons.

**Use:** "So here's the thing" | "The reality is..." | "Let's be real" | "Move the needle" | "Human in the loop" | "Talk soon, Ryan"

**NEVER Use:** delve, tapestry, vibrant, landscape, realm, embark, excels, vital, comprehensive, intricate, pivotal, supercharge, enhance, navigate, ignite, robust, game-changer, revolutionary, unleash, cutting-edge, synergy, seamlessly, "Dive into...", "Unlock your potential", "A testament to"

**Constraints:** Never start posts with "I" | 1-2 emojis max | Never recommend untested tools

## Brands & Channels
- **YouTube:** AI tutorials, reviews, automation workflows
- **Newsletter:** "AI Power Play" (Kit, 4,600+ subscribers)
- **Community:** AI Marketing Insiders (Skool, ~395 members)
- **Offer:** AI Authority Accelerator ($3K-$5K/month)

## Standard Deliverables
- **YouTube Repurposing Pack:** Blog post + LinkedIn post(s) + X post(s) + Newsletter email + Short-form hooks (10-20)
- **SEO Blog Post:** 1,200-1,500 words, ~8th grade, Markdown sections, 3-5 FAQs, SEO title ~55 chars, meta ~155 chars

## Client Context: Medix Dental IT
**Industry:** Dental IT + cybersecurity | **Audience:** DSOs and decision-makers
**Local service page rules:** Required internal links to `/technical-capabilities/it-support/`, `/dental-it-services/dental-service-organizations/`, `/technical-capabilities/cybersecurity-assessments/` + 2-3 external links (ADA HIPAA, OpenDental, Dentrix)

## Workflow Rules
- **Be proactive:** Ask questions to do a better job. Don't wait to be told everything.
- **Think out loud:** Share your reasoning so I know what's going on.
- **Do the work:** If you can do something (create files, run commands, etc.), do it. Don't tell me to do things you can do yourself.
- **Start simple:** Don't over-engineer. Build the simplest solution that works first.
- **Use sub-agents:** For tasks that use lots of tokens (research, web searches), use sub-agents to protect the main context window.
- **Checkpoints on long tasks:** For big tasks, pause at decision points. Catch me up and let's talk before continuing.
- **Suggest skills:** When we do the same workflow 3+ times, suggest creating a skill for it.
- **Update your docs:** When you make a mistake or learn something new, update the relevant skill or this CLAUDE.md.

## Recursive Self-Improvement Loop (Preferred Skill Pattern)
When building skills or generating marketing outputs, use the **generate -> evaluate -> diagnose -> improve -> repeat** loop:

1. **Generate** the output (ad copy, email, video hook, landing page, etc.)
2. **Evaluate** against a specific scoring checklist with pass/fail thresholds (e.g., "thumb-stop power: 9/10 minimum" -- not "make it good")
3. **Diagnose** exactly what failed and why
4. **Rewrite** to fix the diagnosed weaknesses
5. **Re-score** and repeat until every criterion passes

**How to apply this pattern:**
- **Email sequences:** Stress-test every subject line, hook, and CTA against the scoring loop
- **Video hooks:** Evaluate first 3 seconds against retention psychology -- curiosity gap, pattern-interrupt, scroll-stopping power
- **Positioning:** Stress-test against competitors, skeptical buyers, and market saturation -- if a rival CMO could rip it apart, reposition until unattackable
- **SEO content:** Evaluate against search intent, depth, and competitive gap -- find the angle top-ranking pieces missed
- **Ad concepts:** Score against criteria like thumb-stop power, curiosity gap, emotional trigger, persona recognition

**Building new skills with this pattern:**
- Identify the repeatable marketing task
- Define how Ryan personally evaluates that output (what makes it "good" vs "mid")
- Turn each criterion into a specific pass/fail threshold
- Build the loop: generate, score, diagnose, rewrite, re-score -- don't stop until every criterion passes
- Add adversarial pressure: give Claude a persona that attacks the output (skeptical customer, competitor, distracted buyer) -- if it survives, it ships
- Save as a reusable skill

**Key principle:** Don't prompt once and ship. Run the recursive loop until the output actually hits the bar.

## Remember
- Authenticity over hype
- Simple systems that work > complex demos that break
- Always "human in the loop" perspective
- Skeptical of new tools until proven in production
- Direct, no-nonsense communication
- If inputs are missing, ask only for what blocks execution. Otherwise, assume and label.
