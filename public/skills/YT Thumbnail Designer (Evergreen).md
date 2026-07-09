---
skill: youtube-thumbnail-designer
version: 1.0.0
description: Design high-click-through YouTube thumbnails at 1280x720 using a structured concept → generate → self-evaluate loop. Model-agnostic — works with any image generation AI that supports text rendering and (ideally) multi-image reference input.
tags: [youtube, thumbnails, design, content-creation]
examples:
  - Create a thumbnail for a tutorial video about [tool]
  - Design a thumbnail for a negative-take video
  - Make a comparison thumbnail for [Tool A] vs [Tool B]
  - Design a thumbnail for a product showcase
---

# YouTube Thumbnail Designer

A structured workflow for designing high-CTR YouTube thumbnails at **1280x720**. Works with any modern AI image model that can render text and (ideally) accept reference images for faces and logos.

The core loop: **intake → brainstorm concepts → gather assets → generate → self-evaluate → deliver**. Don't skip the self-eval step. Generating once and shipping produces mediocre thumbnails. The value of this skill is the feedback loop.

## Your Setup (fill this in once)

Replace the placeholders in this section for your channel before using the skill:

- **Channel / brand name:** [your channel name]
- **Creator headshot files:** [path to PNG cutouts with transparency, e.g. `./headshots/neutral.png`, `./headshots/pointing.png`, `./headshots/thinking.png`]
- **Brand colors (hex):** [primary, accent, text-on-dark, text-on-light]
- **Brand typography:** [headline font, e.g. Montserrat Bold / Poppins Bold / Anton / Impact]
- **Logo library path:** [folder of real tool/brand logo PNGs]
- **Reference examples folder:** [folder of 5-15 curated thumbnails that represent your style]
- **Image model:** [model name / API endpoint]
- **Output folder:** [where generated thumbnails save]

Prime yourself on the reference examples before each design session. Match that style. Don't copy other creators.

## The Workflow (6 Phases)

### Phase 1: Intake
Ask only what blocks execution:
- Video title or topic (required)
- Angle: tutorial, negative take, comparison, showcase, migration, memory/transfer?
- Primary subject (tool, concept, person)
- Include a headshot or clean/text-only?

If the angle is obvious from the title, infer and move on. Don't stall.

### Phase 2: Concept Brainstorming (2-3 options)
Before generating any image, propose **2-3 distinct concepts**. For each, specify:
- Template (see "Composition Templates" below)
- Layout and subject position (left third, right third, never centered)
- Text overlay (3-4 words max) or "no text"
- Color scheme and mood
- Logos / assets needed
- Headshot pose (if any)
- Why this concept fits the topic

Wait for user approval or one-sentence feedback before generating. A quick "make it more dramatic" or "cleaner, less text" should reshape the concepts. Don't proceed until they sign off.

### Phase 3: Asset Gathering
Confirm needed assets exist:
- **Headshots:** pick the pose that matches the angle (pointing for tutorials, thinking for skeptical takes, neutral for showcases)
- **Logos:** check your logo library for each tool/brand needed. If missing, download the official PNG from the brand's press/media page. **Never let AI invent real brand logos** — they'll be wrong in shape or color.
- **Reference examples:** for style priming only, not as direct input

Report what's cached vs. newly downloaded.

### Phase 4: Generation
Send a structured prompt to your image model. If the model supports multi-image reference input, pass the chosen headshot and critical logos as references so the model composites them faithfully instead of inventing them.

Use the **Prompt Template** below. Keep prompts specific: exact hex codes, exact text string, exact position ("top-left", "right third"), exact font style. Vague prompts produce vague thumbnails.

If your model doesn't support reference images, generate a clean base (no face, no logos) with space reserved for them, then composite the real PNGs in post (PIL, Photoshop, Figma).

### Phase 5: Self-Evaluation (before presenting)
Run every generation through the checklist below. Regenerate anything that fails 2+ items. Only present outputs that pass.

**Technical:**
- [ ] Exactly 1280×720 (YouTube's recommended resolution)
- [ ] Text is spelled correctly, sharp, no AI gibberish or warped letters
- [ ] Logos match official brand (shape, color, not a hallucinated variant)
- [ ] Brand colors are exact hex, not approximated
- [ ] No AI artifacts (extra fingers, warped hands, duplicate elements, melted faces)

**Composition:**
- [ ] Subject on left OR right third (not centered)
- [ ] Text is MASSIVE — roughly 50-60% of image height for the primary hook
- [ ] Bottom-right corner clear (YouTube overlays the timecode here)
- [ ] Visual weight balanced — no huge empty quadrant
- [ ] Leading lines (gaze, pointing gesture, arrow) connect subject to value element

**Thumb-stop:**
- [ ] Readable at 120×67px preview (test by shrinking it)
- [ ] Creates a curiosity gap with the title (doesn't just repeat it)
- [ ] Primary subject identifiable at small size
- [ ] Emotion/tone matches the video angle

**Brand:**
- [ ] Matches your approved concept (no off-topic drift)
- [ ] Consistent with your reference examples
- [ ] Nothing copied from another creator

### Phase 6: Delivery
Save the passing output to your output folder with a descriptive filename (use the target keyword slug, not "thumbnail-final-v7-FINAL.png"). Present one recommended option plus 1-2 alternates. Let the user pick.

## Composition Templates

These are the repeatable patterns that consistently work. Default to the template that matches the video angle.

### Template A — Tool Tutorial
- Text positioned top-left (3-4 words)
- 2-4 tool logos arranged mid-left
- Subject right side, pointing gesture directing attention to the logos
- Bottom-right clear

Use for: tutorial videos, feature demos, how-tos.

### Template B — UI / Product Showcase
- Text banner top-center
- Laptop or screen mockup with the UI on the left
- Floating tool logo overlay
- Subject right, pointing at the UI

Use for: software walkthroughs, interface demos, product reviews.

### Template C — Negative Take
- Bold text top: "I Quit [TOOL]", "[TOOL] Sucks", "Stop Using [TOOL]"
- Broken / crossed-out logo left of center (crack line, red slash, or black + red X)
- Alternative tool logos below
- Subject right, skeptical expression (no gesture)

Use for: critical reviews, migration stories, "I was wrong about X" videos.

### Template D — Comparison
- Text formula top: "[Tool A] > [Tool B]" or "[A] vs [B]"
- Large winning tool logo center-left
- Smaller losing tool logo (grayed or crossed) bottom-left
- Subject right, presenting gesture (open palm toward winner)

Use for: head-to-head comparisons, "better alternative" videos.

### Template E — Memory / Transfer / Flow
- Text top-left
- Source element top-right
- Subject on the left side
- Visual metaphor in center (arrows, flow lines, migration path)
- Target element right side

Use for: migration tutorials, data transfer workflows, integrations, before/after.

### Template F — Clean Hero
- Subject one-third (left or right)
- Single large logo or visual element on the opposite two-thirds, floating with a glow or subtle shadow
- **No text** — the visual tells the story
- Dramatic lighting and background

Use for: product reveals, announcements, "reaction" videos where the face + product say everything.

## Typography Standards

**Font choices:**
- Headlines: bold geometric sans-serif (Montserrat Bold, Poppins Bold)
- Tight spaces: condensed sans-serif (Anton, Impact, Bebas Neue)
- **Never:** script fonts, thin weights, decorative fonts, serifs at small sizes

**Text rules:**
- Maximum 3-4 words per thumbnail
- ALL CAPS for maximum read-at-a-glance legibility
- Text **complements** the title, never repeats it
  - Title: "How to Use [Tool]" → Thumbnail text: "GAME CHANGER" or "[Tool] > [Competitor]"
  - Title: "I Tried [Tool] for 30 Days" → Thumbnail: "WORTH IT?" or "HOLY S**T"

**High-performance hook patterns** (swap in your topic):
- COPY THIS / TRY THIS / STEAL THIS
- [NUMBER]X YOUR [NOUN]
- SYSTEM REVEALED / SECRET EXPOSED
- [TOOL] SUCKS / STOP USING [TOOL] / I QUIT [TOOL]
- GAME CHANGER / MIND BLOWN / HOLY S**T
- [A] > [B] / [A] vs [B]
- BEFORE vs AFTER / FROM $X to $Y

**Text effects that boost legibility:**
- Drop shadow (1-3px, dark)
- Colored highlight box behind ONE key word (not the whole phrase)
- Underline in an accent color (red, orange, yellow) for emphasis
- Gradient fill (one color → accent) for visual interest

## Subject / Face Rules

If you're putting a face in the thumbnail:

- **Use a real cutout** — pass the PNG as a reference image to your model, or composite it in post. Never let AI invent the creator's likeness from scratch. It will drift.
- **Forward-facing expression** — raised eyebrow, slight smirk, or open-mouth shock. Avoid perfect-grin stock-photo energy.
- **Gesture should match the angle:**
  - Pointing → directing attention to a tool / feature
  - Presenting (open palm) → showcasing something
  - Holding / cradling → floating logo above the hand
  - Thinking / chin-on-hand → skeptical takes, questions
  - No gesture, neutral face → serious / negative takes
- **Consistent wardrobe** — pick 1-2 colors that match your brand and stick with them. Repetition builds recognition on the feed.
- **Add depth** — outer glow or drop shadow behind the cutout separates the face from the background.

## Visual Metaphor Library

**Negative / critical sentiment:**
- Cracked logo (split down the middle with a visible crack line)
- Red diagonal slash across the logo
- Black logo with a red X overlay
- Logo shattering / breaking apart

**Positive / action sentiment:**
- Outer glow around the logo
- Floating arrangement at slight 3D angle
- Gold or accent-colored border on feature cards

**Process / flow:**
- Dashed arrows (data / memory transfer)
- Curved arrows (connecting subject to object)
- Dotted lines (soft connection)

## Color Strategy

Pick a primary palette for your channel (3-5 colors) and stick to it across thumbnails. Consistency builds feed recognition.

**For text on dark backgrounds:** white, gold/yellow, or an accent color
**For text on light backgrounds:** dark navy, black, or a dark brand color
**Never:** low-contrast combinations (gray on gray, yellow on white, navy on black). If you can't read it at 120×67px, it's wrong.

**Brand colors must be exact hex** — approximating ChatGPT green, Claude orange, Gemini's gradient, etc., makes the thumbnail feel off even if viewers can't articulate why. Use the official brand kit.

## The Feed Test (non-negotiable)

Before delivery, shrink the thumbnail to **120×67px** (roughly what it looks like on mobile browse). Ask:

1. Can you read the primary text?
2. Is the subject's face recognizable?
3. Is the primary tool/logo identifiable?
4. Does it create curiosity with the title, or just repeat it?

If any answer is "no," redesign. The feed test catches 80% of bad thumbnails.

## Prompt Template (model-agnostic)

```
Create a YouTube thumbnail, exactly 1280x720 pixels, 16:9 aspect ratio.

TEMPLATE: [A / B / C / D / E / F]

SUBJECT: [Composite the provided headshot reference on the LEFT / RIGHT third of the frame. Preserve the face exactly as shown — do not alter features, wardrobe, or expression. Add a subtle outer glow for depth.]
[OR: No human subject — text and logo only.]

BACKGROUND: [Full description with exact hex codes, mood, and any texture or gradient.]

TEXT OVERLAY: "[3-4 WORDS MAX]" in [font style, e.g. Montserrat Bold], [exact color hex], MASSIVE (at least 55% of image height). Positioned [top-left / top-center / etc.]. [Optional: highlight box behind ONE word, color + hex.]

LOGOS: [List each with position, size, and exact brand color hex. If you're passing logos as reference images, say "reference image N = [tool] logo".]

SAFE ZONE: Bottom-right corner must stay clear (YouTube timecode overlay).

NEGATIVE: No warped hands, no extra fingers, no duplicate faces, no nonsense text, no backwards letters, no watermarks.
```

Adapt the prompt structure to your model's specific quirks. Some models need aspect ratio repeated. Some need negative prompts in a separate field. Some ignore hex codes and need color names — test and adjust.

## Common Failure Modes (and how to fix them)

- **Text is too small** — emphasize "MASSIVE" and "at least 55% of image height". Some models shrink text by default. State it explicitly.
- **Wrong logo** — pass the real PNG as a reference image if your model supports it. Otherwise generate without the logo and composite the real one in post.
- **Face drift / morphing** — same fix: reference image for the face, or composite the real cutout after. Never let the model invent the likeness.
- **Busy background drowns out text** — simplify the prompt. Fewer elements = higher fidelity. Move decorative elements out if the headline suffers.
- **Text overlaps subject or logo** — be explicit about positioning ("text in top-left quadrant, subject in right third, logos in mid-left").
- **Centered composition** — explicitly say "left third" or "right third". Models default to center if unprompted.

## Remember

- **Simple beats complex** — clarity at thumbnail size is everything
- **Text creates curiosity** — never repeat the title
- **Brand accuracy matters** — exact hex, verified logos, consistent wardrobe
- **Feed test always** — if you can't read it at 120×67px, redesign
- **Reference examples keep you on-brand** — skim them before every design session
- **The self-eval loop is the skill** — one-shot generation is how you ship mediocre work
