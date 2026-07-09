# Sales Email Skill

Write sales emails and multi-email promotional sequences for Ryan Doser's digital products and offers. Use when creating product launch emails, promotional sequences, flash sales, price increases, or any email with a purchase CTA. Different from the Email Newsletter Skill which handles weekly AI Power Play newsletters with multi-section structure. Sales emails are single-purpose, one CTA, conversion-focused.

## Purpose

Generate concise sales emails and full promotional sequences that convert subscribers into buyers. These emails are for warm audiences who already follow Ryan's content and know his voice. The goal is to close, not educate.

## Two Modes

This skill operates in two modes:

### Mode 1: Single Email
When Ryan asks for "a sales email" or a one-off promotional email. Follow the single email workflow below.

### Mode 2: Campaign Sequence
When Ryan asks for "a sequence," "a launch," "a flash sale," "a campaign," or mentions multiple emails. Follow the campaign sequence workflow below.

---

## Monetization Mindset

Stop being nice. Be generous, be useful, be real, but stop pretending the email isn't also a sales tool. Ryan has a kid. Every email needs to move someone toward a purchase or a conversation that leads to one.

**Rules:**
1. **Earn the pitch.** Give enough value in the first half that the offer feels like a logical next step, not a bait-and-switch.
2. **Don't apologize for selling.** No "I don't normally do this" or "I hate being salesy but..." Just make the offer.
3. **Replies are sales conversations.** Every reply prompt is a soft open for a deal. "Tell me about your business" is a qualifying question disguised as engagement.
4. **Match the offer to the pain.** Don't pitch AI Skills Stack to someone who needs done-for-you implementation. Read the room.
5. **One CTA, one offer, one action.** Don't confuse the reader with options. Pick the right offer and commit.

## Ryan's Offer Stack

| Offer | Price | Who It's For | Pitch Energy |
|-------|-------|-------------|-------------|
| Claude Code Skills Stack | $99 one-time | DIY marketers who use Claude Code | "Copy my files" |
| AI Marketing Insiders (Free) | $0 | Anyone, entry point | "Join free, upgrade inside" |
| AI Marketing Insiders (Premium) | $150/year | Engaged community members | "Go deeper" |
| AI Marketing Insiders (VIP) | $300/year | Power users wanting live access | "Get direct access" |
| AI Consulting | Custom (hourly/session) | Founders/execs who need strategy + setup | "Let's build this together" |
| AI Concierge | Custom (retainer/project) | Businesses that want done-for-you AI implementation | "I'll build it for you" |
| AI Authority Accelerator | $3K-$5K/month | Founders building authority in their space | "Position yourself as the expert" |

**Primary offer links:**
- Claude Code Skills Stack: https://skills.ryandoser.com/
- AI Marketing Insiders (Skool community): https://www.skool.com/ai-marketing-insiders

## Tone and Style

- **Tone:** Direct, conversational, confident. Not nice, not aggressive. A friend who sells things and isn't weird about it. No hype. No corporate speak. No apologizing for the pitch.
- **Style:** Punchy sentences, plainspoken, slightly contrarian when it fits. The value should be so obvious that the offer feels like a favor, not an ask.
- **Reading level:** 6th-8th grade (scannable by anyone)
- **Length:** Under 200 words (body only, excluding subject/preview/signature). Exception: product showcase emails that list multiple features/skills can go up to 300 words if every line is specific product content, not filler. Value stack emails can go to 400 words when detailing bonuses.
- **Audience:** Marketers, creators, and founders on Ryan's email list who already know him
- **Design for scanners.** Lead with outcome, front-load key info, use bold for emphasis, short paragraphs. People read in an F-pattern.

---

## Single Email Workflow

### Initial Response Pattern

When Ryan requests a single sales email, respond with:

```
I'll write a sales email for you. To write the best one, I need:
1. Which offer are we pitching?
2. What's the context? (Recent content, client win, pain point you've been hearing)
3. Primary CTA (link, reply prompt, or placeholder)
4. Any specific angle or pain point to lead with (optional)
```

If Ryan provides enough context, skip the questions and write.

### Single Email Structure Template

```markdown
**Subject:** [Emoji] [Hook - under 50 characters]
**Preview:** [Emoji] [Complementary hook - under 90 characters]

---

Hi {{ subscriber.first_name }},

[Opening hook - 1-2 sentences. Call out a pain point or bad habit the reader recognizes.]

[Agitation - 1 short sentence. Name what that habit really is.]

[Solution - 2-3 sentences. Introduce the product and what it does. No over-explaining.]

**What's inside:**
- [Bullet 1 - specific, concrete]
- [Bullet 2 - specific, concrete]
- [Bullet 3 - specific, concrete]
- [Bullet 4 - specific, concrete]

**[Price]. [Terms]. [Anti-subscription or value reinforcement.]**

[1-2 sentence closer. Frame the choice: build it yourself vs. use what's already built.]

[CTA link with arrow →]

Talk soon,
Ryan

P.S. [Secondary offer, related upsell, or reply prompt. Keep to 2 sentences max.]
```

---

## Campaign Sequence Workflow

### Step 1: Gather Information

When Ryan asks for a campaign, gather what's needed in a single message. Only ask for what's missing.

**Required information:**
1. **The Offer** - Product/service, price, primary outcome
2. **The Promotion** - Type: `launch | flash_sale | price_increase | webinar | evergreen`
3. **Timeline** - Start date, end date
4. **Email count** - How many emails (or let me recommend based on type)
5. **Top objections** - What stops people from buying? (1-2)
6. **Bonuses** - Any limited-time incentives?

### Step 2: Generate Strategy

Before writing copy, produce a strategy brief. Map the promotion type to the right template sequence:

**Flash Sales (48-72h):**
1. Announcement (what's on sale + deadline + value stack)
2. Picks & Benefits (T+12-24h, use-case curation)
3. Last Day AM (morning of final day, shorter copy, bigger CTA)
4. Final Hours (plain-text founder note, 1-4 hours before close)

**Product Launches (7-14 days):**
1. Teaser (problem + what's changing + waitlist/early-bird CTA)
2. Day 1 Offer (demo/video + offer stack + risk reversal + CTA)
3. Case Study / Use-Case Deep Dive (before/after + steps + screenshots)
4. FAQ / Objection Handler (top 5 objections + mini case + CTA)
5. Last Day AM (quick recap + objection bullets + social proof + deadline)
6. Final Hours (plain-text, 3 lines: reminder + outcome + single link)

**Price Increases:**
1. Advance Notice (why + what's changing + lock-in CTA, 7-14 days before)
2. Value Recap / Price Justification (what you get + why it costs what it costs)
3. Founder Letter (plain-text story + invitation)
4. Last Chance (final hours format)

**Evergreen / Lifecycle:**
1. Content Bridge (reference recent content + 3-step mini plan + offer)
2. Activation Nudge (next best action + quick win)
3. ROI Calculator (quick formula + example)
4. Social Proof Wall (logos/quotes/metrics + CTA)

#### Strategy Brief Format

```markdown
# Email Promotion Strategy: {Product_Name}

## Campaign Overview
- **Promotion Type:** {type}
- **Duration:** {start_date} to {end_date}
- **Total Emails:** {number}
- **Core Promise:** {main_transformation}

---

## Email Sequence

### Email {X} of {Y}

**Timing:** {Day X, HH:MM AM/PM EST}
**Template:** {Template_Name}
**Psychological Angle:** {1-2 sentences: core message + trigger}

**Key Elements:**
- **Hook:** {Specific opening line strategy}
- **Value Stack:** {Main benefits to emphasize}
- **Social Proof:** {Type of proof to include}
- **CTA:** {Specific call-to-action approach}
- **P.S.:** {Optional postscript strategy}

**Subject Line Options:**
1. {First option}
2. {Second option}

**Preheader:** {40-100 characters extending subject}

---

[Repeat for each email]

## A/B Testing Priorities
- {What to test first}
```

After presenting the strategy, ask: **"Want me to write the copy for this sequence?"**

### Step 3: Write Email Copy

After strategy approval, write complete email copy for each email in the sequence.

**Save output to:** `/Users/rdoser/Desktop/email-strategy/` in a subfolder named after the campaign (e.g., `skills-stack-flash-sale/`). Each email as a separate markdown file (`email-1-announcement.md`, `email-2-picks.md`, etc.) plus the strategy brief as `strategy.md`.

---

## Template Library

### Flash Sale - Announcement
**Hook:** What's on sale + who it helps
**Body:** Value stack + best-sellers/use-cases + deadline box (exact timestamp, timezone) + FAQ + CTA
**Pro tip:** Put deadline + timezone above the fold

### Flash Sale - Picks & Benefits
**Hook:** Curated recommendations
**Body:** Product tiles ("best for" + quick proof) + FAQ + CTA
**Best used:** 12-24h after announcement

### Last Day AM
**Hook:** Quick recap of benefit + offer
**Body:** Objection bullets + social proof + deadline module + CTA
**Pro tip:** Shorter copy, bigger CTA. Restate time left.

### Final Hours (Plain-Text Founder Note)
**Hook:** 3 lines max: reminder + outcome + single link
**Body:** That's it. Keep it under 50 words. No formatting. No images. No bullets.
**Pro tip:** This is where the money is. Plain-text founder notes outperform designed emails for closers.

### Product Launch - Teaser
**Hook:** Problem + what's changing (teaser, no reveal)
**Body:** Waitlist/early-bird CTA
**Best used:** 3-14 days pre-launch

### Product Launch - Day 1 Offer
**Hook:** It's live + demo (gif/video link)
**Body:** Offer stack (what/price/bonus) + risk reversal + CTA + P.S. deadline

### Case Study / Use-Case Deep Dive
**Hook:** "[Name] achieved [result] with [Product]"
**Body:** Before + after + steps + screenshots/proof + CTA
**Pro tip:** Lead with outcome, not features

### FAQ / Objection Handler
**Hook:** "Is [Product] right for you? Quick answers."
**Body:** Top 3-5 objections as bullets (price, fit, time, risk) + one mini case + CTA

### Founder Letter (Plain-Text)
**Hook:** Story (inciting incident)
**Body:** Realization + solution + invitation (CTA)
**Pro tip:** Keep under 300 words. No images. Real signature feel.

### Price Increase - Advance Notice
**Hook:** "Advance notice: pricing changes on [DATE]"
**Body:** Why + what's changing + who's affected + lock-in option + CTA

### Value Recap / Price Justification
**Hook:** What you get and why it's priced this way
**Body:** Cost drivers + outcomes + proof + comparison vs. DIY + CTA

### Content Bridge (Evergreen)
**Hook:** Reference recent content (YouTube video, newsletter)
**Body:** 3-step mini plan from content to results + offer as next step + CTA

### Social Proof Wall
**Hook:** "Real results from people like you"
**Body:** Quotes + metrics + mini-case tiles + CTA

### ROI Calculator
**Hook:** "What [Product] is worth to you (fast math)"
**Body:** Quick formula + example + CTA

### Comparison Table
**Hook:** "If you are [X], choose [Y]"
**Body:** Side-by-side comparison + 3 proof points + CTA

### VIP / Early Access
**Hook:** "You're on the list: get in early"
**Body:** Why you're invited + early access perk + deadline + CTA

---

## Persuasion Tactics

### Value Stacking (for higher-ticket offers or bonus-heavy promos)
Use escalating structure to build perceived value:
- **"First you'll get..."** [Core offer with specific details]
- **"Second you'll get..."** [Bonus with page count/dollar value/specific outcome]
- **"PLUS you also get..."** [Surprise bonus that tips the scales]

Each item must answer: "What do I get?" AND "What does it do for me?"
Include specific details: page counts, dollar values, student numbers, time saved.

### Objection Handling (in-email)
Handle the top 3 objections in bullet format:
- **Price:** "Costs {$X}, typically saves {$Y or time} monthly. See the math."
- **Time:** "Setup takes {mins}. I'll walk you through it."
- **Fit:** "Best for {segment}. Not ideal if {edge case}."
- **Risk:** "Try it. If it doesn't work, reply and I'll help."

### Urgency (truth-based only)
- Real deadlines only. Never fake scarcity.
- Put deadline + timezone in subject or preheader for time-bound promos.
- "Closes {day, time, TZ} because {real constraint}."
- For final hours: hyper-specific time remaining ("less than 3 hours / 180 minutes")

### Social Proof Placement
- Weave proof throughout the sequence (not all in one email)
- Use specific numbers: "4,600+ subscribers" not "thousands"
- Mix testimonials, metrics, and named results

### The Reply-to-Sell Move
After delivering useful content, drop this:
> If any of this has you thinking "I need help with this," just reply and tell me what you're working on. I'll point you to the right thing, whether that's a $99 skill file or a full done-for-you build.

This drives replies (deliverability), opens sales conversations, and qualifies leads.

---

## Section-Specific Rules

### Subject Line
- One emoji at the start
- Under 50 characters
- Clarity beats cleverness. Specificity beats vague clickbait.
- Write subject + preview as one complete thought
- Best performers for sales: Secret/Insider (🤫), Stop (🛑), Copy My (🤫), Update/Improvement (🔥)
- Proven patterns: "{Outcome} without {pain}" / "New: {feature} + {benefit}" / "Ends {day/time}: {offer}"
- Avoid: money emoji (💰), versus format (⚔️), generic "My New" format (🚀)

### Preview Text
- Complements the subject, does not repeat it
- 40-100 characters
- One emoji at start is fine
- Together with subject line, tells a complete story

### Opening Hook
- Never start with "I"
- Say what/why/when in 2-3 lines. Front-load the point.
- Call out a specific behavior the reader is doing right now
- Effective pattern: name the bad habit, call out the lack of results, reframe the blame
- Watch for "I" stacking in the sentences that follow. Avoid two consecutive paragraphs starting with "I".

### Agitation
- One short sentence that reframes the pain
- Metaphors work well: "That's a hamster wheel." "That's renting, not owning."
- Don't stack multiple agitation lines. Pick one.

### Solution / Product Introduction
- 2-3 sentences max
- Name the product clearly
- Explain what it does in plain language
- Don't over-educate. The audience already has context from YouTube, newsletters, etc.

### Bullet List
- 3-5 bullets for standard sales emails
- For product showcase emails with many features, split: "What's New" (3-5 bullets) and "What Else is Inside" (5-8 bullets, intriguing one-liners)
- "What Else is Inside" bullets: Short, intriguing. Don't explain, make them want to find out. Example: "The skill that wrote this email you're reading right now"
- Use consistent separators (all hyphens or all dashes, never mixed)
- No fluff bullets like "and much more!"

### Price Line
- Bold the price section
- State price, terms, and one anti-friction line
- Examples: "$99. One-time. No subscription." or "$150/year. Cancel anytime."

### Closer
- Frame it as a choice: the hard way vs. the easy way
- 1-2 sentences
- No hype. No urgency tricks. Just a clear value statement.

### CTA
- One primary CTA per email for standard sales emails
- For product showcase emails with two sections, a second CTA at the bottom is acceptable
- Format: `[Action phrase →](LINK)` or `👉 [Action phrase](LINK)`
- Make the CTA answer "what do I get?" not "what do I do?"
- Action phrases: "Get the [Product]" "Grab the [Product]" "Start my [Product]"
- Add risk-reducers near the CTA: "no card," "cancel anytime"
- Never: "Buy now" "Purchase today" "Don't miss out" "Learn more" "Click here"

### Sign-off
- "Talk soon," + new line + "Ryan"
- Never: "To your success" "Best regards" "Cheers to your growth"

### P.S. Section
- "P.S." with a period, never "P.S:" with a colon
- Use for ONE of these:
  - Secondary offer from the offer stack
  - Social proof or credibility line
  - Reply prompt that doubles as a sales qualifier
- 2 sentences max
- The P.S. should always create a second path to revenue
- End with a reply prompt when possible. Replies are sales conversations.
- Skimmers often read the P.S. Make it count.

---

## Writing Rules

### Must Follow
- No em dashes. Use commas instead. Zero exceptions. Em dashes are an AI writing tell.
- No semicolons. Ever.
- No word repeated within 8 words of itself
- No three-word phrase used more than once
- No two consecutive sentences starting with the same two words
- Short paragraphs: 2-3 sentences max
- Active voice throughout
- 1-2 emojis max in the body (subject/preview emojis don't count)
- Front-load meaning in subjects, headers, bullets. Readers scan left and top.
- Replace weasel words with specific facts. "Industry-leading speed" becomes "loads in 0.9s."

### Words and Phrases to Avoid
Reference the anti-slop skill for the full banned list. Key ones for sales emails:
- delve, tapestry, vibrant, landscape, realm, embark, supercharge, enhance, navigate, robust, game-changer, revolutionary, unleash, cutting-edge, synergy, seamlessly, transformative, comprehensive, pivotal, vital, innovative, world-class, leading
- "Dive into..." / "Unlock your potential" / "A testament to" / "It's worth considering"
- "If you're serious about..." / "Ready to level up?" / "The best part?" / "The catch?"
- "No X. No Y. Just Z." structure
- Any sign-off like "To your success"

### Anti-Slop Structural Checks
- No binary contrast addiction ("it's not X, it's Y" overuse)
- No triple threat syndrome (forced groups of three)
- No infomercial transitions
- No hedging language
- No thesaurus abuse (use simple words)

---

## Offer-Specific Templates

### Claude Code Skills Stack ($99)

**Best angles:**
- "Copy my files" (the shortcut angle)
- "Stop prompting, start building" (the system angle)
- "The skill that wrote this email" (proof-in-action angle)

**Template:**
```
Subject: [Emoji] [Hook - under 50 characters]
Preview: [Emoji] [Complementary hook - under 90 characters]

---

Hi {{ subscriber.first_name }},

[Opening hook - call out the prompt copy/paste habit]

[Agitation - "That's not a system. That's a hamster wheel."]

[Solution - Introduce Skills as reusable markdown files that tell Claude Code how you work]

What's inside:
- [Bullet 1 - Marketing Skills count + examples]
- [Bullet 2 - System Skills + what they do]
- [Bullet 3 - Setup video]
- [Bullet 4 - Lifetime updates]

$99. One-time. No subscription.

[Closer - build it yourself vs. copy mine]

👉 Get My Claude Code Skills Stack (https://skills.ryandoser.com/)

Talk soon,
Ryan

P.S. Annual members of my community get the AI Skills Stack included with their membership. Have questions? Just reply.
```

### AI Marketing Insiders Community

**Best angles:**
- "Stop learning alone" (the community angle)
- "Get answers from people who actually use this stuff" (the practitioner angle)
- "Free to join, worth way more" (the no-risk angle)

**Template:**
```
Subject: [Emoji] [Hook - under 50 characters]
Preview: [Emoji] [Complementary hook - under 90 characters]

---

Hi {{ subscriber.first_name }},

[Opening hook - call out the isolation of learning AI solo]

[Agitation - "You don't need another course. You need people doing the work."]

[Solution - Introduce the community and what members actually do there]

What members get:
- [Bullet 1 - specific resource or interaction]
- [Bullet 2 - specific resource or interaction]
- [Bullet 3 - specific resource or interaction]

Free to join. Upgrade to Premium ($150/year) or VIP ($300/year) when you're ready.

[Closer - try it, it costs nothing]

👉 Join AI Marketing Insiders (https://www.skool.com/ai-marketing-insiders)

Talk soon,
Ryan

P.S. [Reply prompt or Skills Stack mention as secondary path]
```

### AI Concierge (Done-For-You)

```
Subject: [Emoji] [Hook about the problem they're trying to solve manually]
Preview: [Emoji] [What life looks like after it's built for them]

---

Hi {{ subscriber.first_name }},

[Opening hook - "You watched the tutorial. You bookmarked it. You haven't built it yet."]

[1-2 sentences naming why: time, complexity, or "I'll get to it next week" syndrome.]

[Introduce AI Concierge - "I build these systems for businesses. You tell me what you need, I build it, you use it."]

**Recent builds:**
- [Example 1 - specific, real if possible]
- [Example 2 - specific, real if possible]
- [Example 3 - specific, real if possible]

[1 sentence closer: stop watching tutorials, start getting results.]

Reply "build" and tell me what you need. I'll let you know if I can help.

Talk soon,
Ryan

P.S. If you'd rather build it yourself, my Claude Code Skills Stack has the files I use. $99, one-time. https://skills.ryandoser.com/
```

### AI Consulting (Done-With-You)

```
Subject: [Emoji] [Hook about being stuck or overwhelmed with AI options]
Preview: [Emoji] [What clarity looks like]

---

Hi {{ subscriber.first_name }},

[Opening hook - "too many tools, no strategy" problem.]

[1-2 sentences. They don't need another tool, they need someone to tell them which tools matter for THEIR business.]

[Introduce consulting - "I do 1:1 sessions where we map out your AI strategy and build the first workflow together. You leave with a plan and a working system, not a slide deck."]

**What we typically cover:**
- Audit current stack
- Identify highest-ROI automation
- Build it live on the call
- Leave with a 90-day roadmap

Reply "consulting" and tell me about your business. I'll let you know if it's a fit.

Talk soon,
Ryan

P.S. If you'd rather I just build everything for you, that's AI Concierge. Reply and I'll explain the difference.
```

---

## Quality Checklist

### Before Presenting Draft

- [ ] Under 200 words (body only), or under 300 for showcase, or under 400 for value stack
- [ ] Subject line under 50 characters
- [ ] Preview text 40-100 characters
- [ ] Preview complements subject (not repeats)
- [ ] Subject + preview read as one complete thought
- [ ] Doesn't start with "I"
- [ ] No consecutive paragraphs starting with "I"
- [ ] One primary CTA only (exception: product showcase with two sections)
- [ ] CTA answers "what do I get?" not "what do I do?"
- [ ] Consistent separators (all hyphens or all dashes, never mixed)
- [ ] P.S. uses period not colon
- [ ] P.S. is 2 sentences or fewer
- [ ] No banned words or phrases
- [ ] No em dashes (zero, anywhere)
- [ ] No semicolons
- [ ] No word repeated within 8 words
- [ ] No three-word phrase repeated
- [ ] Active voice throughout
- [ ] 6th-8th grade reading level
- [ ] Ends like a human, not a pitch
- [ ] Urgency is truth-based only (real deadlines, real scarcity)

### For Campaign Sequences (additional checks)
- [ ] Each email has a distinct psychological angle
- [ ] Urgency timeline is consistent across the sequence
- [ ] Objections are handled across multiple emails, not dumped in one
- [ ] Social proof is woven throughout, not concentrated
- [ ] Final email is plain-text founder note format
- [ ] A/B subject line options provided for each email

### Grade Scale

- **A:** Ready to send, no issues
- **B+:** Minor tweaks, content is strong
- **B:** Some fixes needed but structure is solid
- **C:** Significant revisions required

---

## Reference Email: AI Skills Stack (February 2025)

This is a real sales email Ryan approved. Use it as the primary voice and structure reference.

```
Subject: 🤫 Copy My AI Skills
Preview: 🚀 15+ Skill Files I Use Daily

Hi {{ subscriber.first_name }},

So here's the thing. Most people are still copy/pasting prompts into
ChatGPT and wondering why their outputs suck.

That's not a system. That's a hamster wheel.

I built something better. Skills are reusable markdown files that tell
Claude Code exactly how I write, think, and work. Every session picks
up where the last one left off.

I packaged the 15+ Skills I use daily into the AI Skills Stack.

What's inside:
- 12 Marketing Skills (anti-slop, copywriting, YouTube, SEO, email,
  paid ads, social media, image design)
- 3 System Skills (skill creator, MCP setup, Claude Code troubleshooting)
- Setup video to help you get started
- Lifetime updates as I add new Skills

$99 One-time. No subscription.

You could spend months building these yourself. Or you could copy the
files I already use in production and start today.

👉 Get My AI Skills Stack

Talk soon,
Ryan

P.S. Annual members of my community get the AI Skills Stack included
with their membership. Have questions about the community? Just reply
to this email.
```

## Reference Email: AI Skills Stack Update (March 2025)

Product showcase format for emails pitching products with many features.

```
Subject: 🔥 My Claude Code Skills Just Got Better
Preview: 🤖 My Daily Driver for Everything

Hi {{ subscriber.first_name }},

Most people are still copying and pasting prompts into ChatGPT,
not getting results, and blaming AI.

The problem isn't AI. It's how you're using it.

I stopped prompting months ago. Instead, I built reusable skill
files that tell Claude Code exactly how I write, think, and work.

Over the last few weeks I've been adding new skills to my Claude
Code Skills Stack, and it's now 20+ skill files deep.

What's New:
- SEO Blog Post Writer - Give it a YouTube URL and it writes a
  full optimized blog post with headings, FAQs, and meta
  descriptions
- Keyword Research - Pulls real search volume, difficulty, CPC,
  and trend data so you stop guessing at keywords
- Web Designer - Builds landing pages and web components that
  don't look like every other AI-generated site
- CLAUDE.md Optimization Tips - My actual file plus best practices
  for teaching Claude Code who you are

👉 Get My Claude Code Skills Stack

What Else is Inside:
- Anti-Slop - The banned word list that separates your content
  from everyone else's AI slop
- LinkedIn Post Writer - The exact format that's getting my
  LinkedIn posts 10x more replies
- YouTube SEO Packaging - How I optimize every YouTube video
  before I hit publish
- Thumbnail Designer - The layouts I use to design engaging
  YouTube thumbnails
- Local SEO - Creating local SEO service pages that rank high
  on Google
- Sales Email - The skill that wrote this email you're reading
  right now
- 3 System Skills - The behind-the-scenes tools that make
  everything else work
- Lifetime updates as I add new skills

Quick Note: Claude Code requires a paid Claude plan. I recommend
Claude Max ($100/month) for the best results.

What Makes Skills Different: These aren't prompts. They're
reusable markdown files that work inside Claude Code, Codex,
Gemini CLI, or any AI coding agent. If Claude Code disappeared
tomorrow, your skills still work.

$99. One-time. No subscription.

You could spend months building these yourself. Or you could copy
the 20+ files I already use in production.

👉 Get My Claude Code Skills Stack

Talk soon,
Ryan

P.S. Have questions about Claude Code or how Skills work? Check
out my Claude Code Beginner's Guide and reply to this email!
```

---

## Product Showcase Template (Extended)

Use this when pitching a product with many features (like the AI Skills Stack with 20+ skills). Allows for longer emails with two bullet sections and two CTAs.

```markdown
**Subject:** [Emoji] [Hook - under 50 characters]
**Preview:** [Emoji] [Complementary hook - under 90 characters]

---

Hi {{ subscriber.first_name }},

[Opening hook - Call out the bad habit and reframe the blame. 2-3 sentences.]

[Bridge - How you solved this problem. 1-2 sentences. Introduce the product.]

**What's New:**
- [New feature 1 - specific, concrete description]
- [New feature 2 - specific, concrete description]
- [New feature 3 - specific, concrete description]
- [New feature 4 - specific, concrete description]

[CTA #1 - 👉 link]

[Optional: Screenshot or visual proof]

**What Else is Inside:**
- [Skill/feature - intriguing one-liner that creates curiosity]
- [Skill/feature - intriguing one-liner]
- [Skill/feature - intriguing one-liner]
- [Skill/feature - intriguing one-liner]
- [Skill/feature - intriguing one-liner]
- [Skill/feature - intriguing one-liner]
- [System skills - intriguing one-liner]
- Lifetime updates as I add new skills

[Optional: Quick note about requirements]

**What Makes Skills Different:** [1-2 sentences on portability/transferability.]

**[Price]. [Terms]. [Anti-subscription line.]**

[1-2 sentence closer. Build it yourself vs. copy mine.]

[CTA #2 - 👉 link]

Talk soon,
Ryan

P.S. [Reply prompt or secondary path to revenue. 2 sentences max.]
```

---

## Iteration Patterns

### "Make it shorter"
Cut to core value prop. Remove any explanatory sentences. Tighten bullets.

### "Make it more urgent"
Add a scarcity element (limited spots, price increase, bonus deadline) but only if it's real. Never fake urgency.

### "Different angle"
Rewrite the opening hook from a different pain point. Keep the same structure.

### "Better subject lines"
Provide 5 options with A/B testing notes. Patterns to try: clarity vs curiosity, number/time specific vs not, with/without urgency.

### "Add a second CTA"
Push back. One CTA per sales email. Move the second offer to the P.S. or suggest a follow-up email in a sequence.

### "Make it a sequence"
Switch to Campaign Sequence mode. Ask for promotion type, timeline, and email count.

### "Check for errors"
Run through full quality checklist. Flag specific issues with fixes.

---

## Copy Tests Worth Running

When Ryan has A/B testing capability, suggest testing these (one at a time):
- **Subject:** Clarity vs. curiosity; with/without urgency; specific time vs. not
- **Preview:** Benefit vs. proof
- **CTA:** First-person ("Start my...") vs. second-person ("Get your..."); benefit-led vs. generic
- **Angle:** Proof-led vs. ROI-math vs. story
- **Format:** Designed vs. plain-text (especially for closers)
