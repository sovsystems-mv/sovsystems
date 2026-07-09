---
name: seo-blog-post-writer
description: Repurpose YouTube videos into SEO-optimized blog posts for ryandoser.com. Uses Blotato to scrape video transcripts, then writes publish-ready articles with proper heading hierarchy, keyword placement, engagement hooks, and Ryan's voice. Use when user says "write a blog post", "blog post from video", "repurpose this video", "SEO article", "turn this video into a blog post", "write an article from my YouTube video", or provides a YouTube URL and wants a blog post. Do NOT use for email newsletters (use Email Newsletter Writer), social media posts (use Crosspost or LinkedIn Post Writer), or general SEO audits (use SEO Audit skill).
version: 1.0.0
---

# SEO Blog Post Writer

Repurpose YouTube videos from @RyanDoserAI into SEO-optimized blog posts for ryandoser.com. Takes a YouTube URL, scrapes the transcript via Blotato, and produces a publish-ready Markdown article.

## Intake

When the user triggers this skill, collect:

1. **YouTube video URL** (required)
2. **Target keyword** (required)
3. **Secondary keywords** (optional, 2-4 recommended)
4. **Target audience** (optional, defaults to: marketers, content creators, and entrepreneurs interested in AI)
5. **Word count** (optional, defaults to 1,200-1,500 words)
6. **Any special context** (e.g., tie-in to a product launch, community promo, specific angle)

If only a URL and keyword are provided, proceed with defaults. Don't stall asking for optional info.

---

## Workflow

### Step 1: Get the Transcript

Use Blotato to extract the YouTube video transcript:

```
blotato_create_source:
  sourceType: "youtube"
  url: [YouTube URL]
  customInstructions: "Extract the full transcript with timestamps. Preserve the speaker's exact phrasing and any tool names, brand names, or technical terms mentioned."
```

If Blotato returns in-progress, poll with `blotato_get_source_status` every 15 seconds until complete.

If the transcript extraction fails:
- Ask Ryan to paste the transcript manually
- Proceed with whatever transcript source is available

### Step 2: Analyze the Transcript

Before writing, extract from the transcript:

1. **Core topic and angle** -- what is Ryan actually saying? What's the main argument?
2. **Key points** -- the 3-5 most important takeaways
3. **Specific examples** -- tools mentioned, workflows demonstrated, numbers/stats cited
4. **Quotes worth preserving** -- strong opinions, funny lines, memorable phrases
5. **Ryan's honest takes** -- any contrarian opinions, warnings, or "here's what I actually think" moments

Present a brief summary to Ryan: "Here's what I pulled from the transcript. Anything to add or change before I write?"

**If Ryan says to just go ahead, skip the approval and write.**

### Step 3: Quick Competitive Research

Use web search to check the top 3-5 results for the target keyword:

1. What angles are competitors covering?
2. What are they missing?
3. What depth/word count are they hitting?
4. What questions appear in "People Also Ask"?

This takes 2-3 minutes. Don't over-research. The goal is to find gaps Ryan's first-hand experience can fill.

### Step 4: Write the Blog Post

Write the full article in one pass following ALL rules below. Voice consistency matters more than section-by-section perfection.

**Output the article as a single Markdown file.**

### Step 5: Self-Edit Pass

After writing, run the quality checklist (see Quality Scoring below). Fix any failures before presenting to Ryan.

Check with terminal:
- Total word count (body text, excluding meta)
- Word count per H2 section
- Em dash scan (grep for — character, must be ZERO)
- Banned word scan
- Repeated phrase check

**Verify external links:** Before publishing, use `curl -s -o /dev/null -w "%{http_code}" [URL]` to check each external link returns a 200 status. Replace any links returning 404 or other errors with working alternatives before the post goes to WordPress.

### Step 6: Publish to WordPress

Publish the article as a **draft** on ryandoser.com using the WordPress MCP:

1. **Upload featured image:** Grab the YouTube thumbnail (`https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg`), upload via `wp_upload_media`, then set it as featured image via `wp_set_featured_image`. This is the ONLY image in the post. Do NOT generate or upload any additional body images.
2. **Create the post:** Use `wp_create_post` with:
   - `post_title`: The blog post title (keyword toward beginning, under 65 chars)
   - `post_content`: Full article in HTML (convert Markdown links to `<a>` tags, embed YouTube iframe, use HTML heading tags)
   - `post_status`: "draft"
   - `post_name`: Target keyword in kebab-case
   - `post_excerpt`: Meta description
   - `meta_input`: Set Yoast SEO title and meta description (`_yoast_wpseo_title`, `_yoast_wpseo_metadesc`)
3. **Assign exactly ONE category:** After creating the post, use `wp_get_terms` to look up existing categories (`taxonomy: "category"`). Find the single most relevant match for the article topic. If a matching category exists, assign it via `wp_add_post_terms`. If no close match exists, create one with `wp_create_term` first, then assign it. Never assign more than one category.
4. **Internal links:** If Ryan has provided an XML sitemap, include 3-5 internal links. Otherwise skip.

### Step 7: Save Local Copy

Save the article locally to: `/Users/rdoser/Desktop/Claude-Code-Folder/Blog Post Archives/[keyword-slug]/article.md`

The folder name should be the target keyword in kebab-case (e.g., `claude-code-agent-teams`).

Also save `meta.json` in the same folder:
```json
{
  "seo_title": "",
  "meta_description": "",
  "primary_keyword": "",
  "secondary_keywords": [],
  "word_count": 0,
  "source_video": "",
  "date_created": "",
  "wordpress_post_id": 0
}
```

### Step 8: Present to Ryan

Present:
1. Confirmation the draft is live on WordPress (with post ID)
2. SEO meta (title + description)
3. Word count summary
4. Any notes on competitive gaps filled

---

## Article Structure

Every blog post follows this structure:

```
# [Article Title -- H1, exactly ONE per article, very close to YouTube video title]

[Introduction: 1-2 sentences ONLY. Primary keyword in the first sentence, bolded ONCE. This is a brief lead-in above the first H2 -- not a full multi-paragraph intro. Keep it tight.]

## [H2 Section 1 -- MUST contain the target keyword. Benefit-oriented, search-friendly.]

[Engagement hook -- see hook types below]

[Body content: specific, actionable, draws from transcript]

<iframe src="https://www.youtube.com/embed/[VIDEO_ID]" ...></iframe>

## [H2 Section 2]

[Content organized logically from the video's flow]

### [H3 subsection if needed -- only under an H2, never skip levels]

## [H2 Section 3+]

[Continue as needed based on word count target]

[CTA Block -- place naturally within the body, before the conclusion. See CTA Rules below.]

## [Conclusion H2 -- rotate between: "Ryan's Final Thoughts", "Final Thoughts from Ryan", "Final Notes from Ryan", or a natural variation. Never "The Bottom Line".]

[Brief summary, 50-80 words. End with a forward-looking statement or CTA.]

## [Target Keyword] FAQs

[Replace "[Target Keyword]" with the actual primary keyword. Example: "Claude Code Agent Teams FAQs".]

### [Question 1 -- written as users actually type it into Google]

[Direct answer first, 40-80 words. No throat-clearing.]

### [Question 2]

[Answer]

### [Question 3]

[Answer]

[Optional: ### Question 4-5 if relevant]
```

### Section Heading Rules

- `#` (H1): Article title only. Exactly ONE per article.
- `##` (H2): Major sections, conclusion, FAQ title. No "Key Takeaways" section. **All H2 headings must be wrapped in `<strong>` tags in HTML output.**
- `###` (H3): Subsections within H2s, individual FAQ questions. **All H3 headings must be wrapped in `<strong>` tags in HTML output.**
- No skipped levels (no H1 to H3 without H2)
- **First H2 must contain the target keyword.** It is the most important heading after the title.
- **First H2 should be short and punchy.** Format: "How [Target Keyword] Actually Work" or "What [Target Keyword] Actually Do". Example: "How Claude Code Agent Teams Actually Work" -- not "How Claude Code Agent Teams Actually Work (And Why They're Different)".
- Headings must be specific and benefit-oriented, not generic
- H2 titles should be search-friendly (what someone would actually type)

### Video Embed

Embed the YouTube video directly in the post using an iframe. Extract the video ID from the provided URL and generate:

```html
<!-- wp:embed {"url":"https://www.youtube.com/watch?v=VIDEO_ID","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=VIDEO_ID
</div></figure>
<!-- /wp:embed -->
```

**Note:** Raw iframes and `[embed]` shortcodes are stripped by WordPress on save via MCP. The Gutenberg block comment syntax above is the only method that survives and renders correctly.

**Place the video embed near the top of the article, after the introduction and immediately after the first H2 section.** Do not bury it mid-article. One embed per article.

---

## Voice and Style Rules

### Ryan's Voice

- **Tone:** Friendly but professional, conversational, direct. Blend of seriousness and empathy.
- **Reading level:** 8th-9th grade. Understandable to the average person.
- **Perspective:** First-person when sharing experience ("I tested this..."), second-person when advising ("You'll want to...")
- **Personality:** Slightly contrarian when earned (back it up). Honest opinions including skepticism. Specific over vague.
- **Address the reader directly.** Write to one person, not an audience.
- Show, don't tell. Concrete examples over abstract claims.

### Sentence and Paragraph Rules

- Short sentences: 8-15 words average
- Alternate short and long sentences for rhythm
- Short sentence after a complex idea = emphasis
- Never start 3+ consecutive sentences the same way
- Do not start any sentence with the same two words as the previous sentence
- Do not use any three-word phrase more than once in the entire article
- Do not repeat any word within eight words of its last use
- Maximum 4 sentences per paragraph
- Mix short (1-2 sentence) paragraphs with longer ones
- "Slippery slope" writing: each paragraph pulls to the next
- Active voice. Subject-verb-object.

### Em Dash Ban

**ZERO em dashes (—) in any output. Non-negotiable.**

Replace with:
- A period and a new sentence
- A comma (if the clause is short)
- Parentheses (sparingly)
- Restructure the sentence

### Punctuation Rules

- No semicolons. Ever.
- **ZERO emojis. Never use emojis anywhere in the article.**
- No excessive exclamation points

---

## SEO Rules

### Keyword Placement

- **Primary keyword must appear in the first sentence of the intro.** Bold it ONCE on that first use.
- Primary keyword in first 100 words of intro, bolded ONCE (covered by first-sentence rule above)
- Primary keyword 1-2 times per major H2 section (natural placement, not forced)
- 3-5 unique LSI/secondary keywords, each used 2-3 times naturally throughout
- Primary keyword in at least one H2 heading

### Blog Post Title Rules

The blog post title (H1 and WordPress post_title) must:
- **Stay very close to the YouTube video title.** Adapt minimally for SEO. Do not reframe or rewrite it.
- Place the target keyword toward the beginning
- **Up to 65 characters max.** Use the full budget when the title benefits from it. Do not truncate to be short.
- Sound intriguing enough for someone to click
- Not be generic or clickbaity

**Good title examples** (from "How to Use Claude Code Agent Teams in 10 Minutes"):
- How to Use Claude Code Agent Teams in 10 Minutes
- How to Use Claude Code Agent Teams (Real World Example)
- How to Use Claude Code Agent Teams (Army of AI Agents)

### Meta Generation

**SEO Title:** ~55-65 characters. Includes primary keyword toward the beginning. Sounds enticing, not clickbait.
**Meta Description:** Must not exceed 155 characters. Primary keyword must appear in the meta description. Summarizes the post. Creates curiosity. Always verify character count before finalizing.

### Permalink

Always set the permalink (post_name/slug) to the target keyword in kebab-case. Example: target keyword "Claude Code Agent Teams" becomes `claude-code-agent-teams`.

### Internal Links

When Ryan provides an XML sitemap, include 3-5 internal links to relevant published articles on ryandoser.com with proper descriptive anchor text. Until a sitemap is provided, skip internal links.

### External Links

- **3-5 outbound links** to credible, high-authority sources (official docs, research papers, trusted industry publications, government/academic sites)
- No links to competitors' blog posts or low-authority sources
- Link anchor text should be descriptive, not "click here"
- **All external links must open in a new tab.** In HTML use `target="_blank" rel="noopener noreferrer"`. In Markdown use inline HTML: `<a href="URL" target="_blank" rel="noopener noreferrer">anchor text</a>`
- Spread links naturally throughout the body. Do not cluster them all in one section.

### CTA Rules

Every article must include one CTA block pointing to Ryan's Free AI Marketing Guide. **Place it directly after the first H2 section, before any other body sections.** It should appear high on the page, within the first 300-400 words. It must flow naturally from the surrounding content. Never place it in the conclusion or after the FAQ.

**CTA destination:** `https://ai-insider-tips.kit.com/79fe0f3bb2` (always opens in a new tab)

**Rules:**
- Write 2-3 sentences of copy that connects the article topic to the guide. Make it feel earned, not bolted on.
- The copy should name something specific from the article topic that the guide helps with.
- Do not use generic phrases like "check out my free guide" or "get started today."
- **The link text must be bolded** to make it visually prominent and easy to click.
- In HTML: `<strong><a href="https://ai-insider-tips.kit.com/79fe0f3bb2" target="_blank" rel="noopener noreferrer">Free AI Marketing Essentials Guide</a></strong>`

**CTA link formatting rule:** The link must live on its own line as a standalone paragraph. Never embed it inline inside a longer sentence. Write 1-2 sentences of lead-in copy as one paragraph, then put the link on a separate line as its own paragraph.

**Example CTA block (adapt copy to each article's topic):**

> If you're building AI workflows with Claude Code, my Free AI Marketing Essentials Guide covers the exact prompts, tools, and systems I use in production. It's where I share what's actually working, not what sounds good on a webinar.
>
> <strong><a href="https://ai-insider-tips.kit.com/79fe0f3bb2" target="_blank" rel="noopener noreferrer">Free AI Marketing Essentials Guide</a></strong> — [one-line description of what's inside, specific to the article topic].

### FAQ Rules

- 3-5 FAQs at the end
- FAQ section heading must be "[Target Keyword] FAQs" (e.g., "Claude Code Agent Teams FAQs") -- never just "FAQ"
- Questions written as users actually type them into Google
- Direct answer first (40-80 words per answer)
- Can reference main article sections: "See [Section Name] above for the full breakdown"

---

## Engagement Hooks

Every H2 section should open with an engagement hook. Types:

| Type | What It Does | Example |
|------|-------------|---------|
| `curiosity_gap` | Question or contradiction that demands resolution | "What if the most popular advice about X is wrong?" |
| `pain_point` | Name a specific frustration, pivot to solution | "You've spent hours on X only to get Y." |
| `surprising_fact` | Counter-intuitive stat or insight | "Only 12% of teams actually use X the way it was designed." |
| `quick_win` | Promise immediate, tangible value | "This one setting change cuts your X time in half." |

Don't use the same hook type twice in a row. Vary them across sections.

---

## Information Density

Every sentence earns its place. Apply this test:

1. **Does it add new information?** If not, cut it.
2. **Could it be more specific?** "Many users" becomes "68% of users surveyed"
3. **Is it actionable?** Vague advice becomes a specific imperative.
4. **Does it advance the reader's understanding?** Setup sentences that add no info get cut or combined.

### Lists and Tables

- Use bullet lists for 3+ inline items (don't bury lists in prose)
- Use tables for comparisons (features, pros/cons, tools)
- Don't overdo it. Articles shouldn't look like documentation.

### Quotability

Write facts and insights in NLP-friendly language search engines can extract as featured snippets:

**Bad:** "There are various benefits to using this approach."
**Good:** "Using [approach] reduces [metric] by [X]%, according to [source]."

---

## Word Count Rules

- Default target: 1,000-1,200 words total. Do not exceed 1,200 words. Content past that point is almost always fluff.
- Respect whatever target Ryan specifies (within reason)
- Each H2 section should be proportional (intro shorter, body sections longer, conclusion shorter)
- When over: cut low-value content, compress, consolidate -- be ruthless
- When under: add specific examples, data points, actionable details
- NEVER pad with fluff to hit targets

---

## Banned Words and Phrases

### Single Words -- NEVER Use

delve, tapestry, vibrant, landscape, realm, embark, excels, vital, comprehensive, intricate, pivotal, moreover, arguably, notably, spark, sparked, supercharge, supercharged, enhance, navigate, ignite, ignited, robust, multi-faceted, solely, crucial, ensure, portray, ongoing, vigilance, intriguing, holistic, game-changer, revolutionary, unleash, cutting-edge, synergy, seamlessly, transformative, utilize, execute, facilitate, implement, optimize, leverage

### Phrases -- NEVER Use

- "Dive into..." / "Let's dive in..."
- "Unlock your potential"
- "It's important to note that..."
- "In this section..."
- "Without further ado..."
- "At the end of the day..."
- "It goes without saying..."
- "Needless to say..."
- "In today's world..."
- "As we all know..."
- "It's worth mentioning..."
- "The truth is..."
- "Many people don't realize..."
- "Great question!"
- "That's a common concern"
- "Many people ask..."
- "A testament to"
- "Silver bullet"
- "Based on the information provided"
- "Navigating the landscape/complexities of"
- "Delving into the intricacies"
- "The catch?"
- "Want to know the secret?"
- "The brutal truth?"
- "Here's the kicker"
- "The best part?"
- "Ready to level up?"
- "Changed everything"
- "Game-changer" / "game-changing"

### Structural Patterns to Avoid

- Binary contrast addiction ("it's not X, it's Y" overuse)
- Triple threat syndrome (grouping things in threes everywhere)
- Infomercial transitions ("the catch?" / "want to know the secret?")
- Corporate verb disease ("highlighting the benefits" / "facilitating outcomes")
- Hedging language ("it's worth considering" / "you might want to think about")
- Thesaurus abuse (utilize, execute, facilitate, implement)

---

## Continuity and Flow

- Reference earlier sections when relevant ("As covered in [section name] above...")
- Build a narrative arc. The article should feel like a journey, not fragmented chunks.
- FAQ can reference main sections for deeper context
- Transitions between sections should feel natural, not bolted on

---

## Google E-E-A-T Alignment

Google rewards content demonstrating Experience, Expertise, Authoritativeness, and Trustworthiness. This skill naturally hits E-E-A-T because:

- **Experience:** Ryan tested the tools/strategies himself on video. Reference specific hands-on testing.
- **Expertise:** Ryan's background in AI marketing. Include specific results, numbers, real workflows.
- **Authoritativeness:** Link to Ryan's YouTube channel, community, and other published content where relevant.
- **Trustworthiness:** Honest pros AND cons. No hype. Real opinions. Acknowledge limitations.

When writing, lean into first-hand experience from the video. "I tested this for two weeks" beats "many experts recommend" every time.

---

## Quality Scoring

Before delivering, score the article against these criteria. Every item must pass.

### Must-Pass Checklist

- [ ] Intro is 1-2 sentences only, above the first H2, with primary keyword in the first sentence bolded once
- [ ] Primary keyword in at least one H2 heading
- [ ] Primary keyword density: 1-2 times per H2 section
- [ ] 3-5 secondary/LSI keywords used naturally
- [ ] H1 is the article title, appears exactly once
- [ ] Blog post title stays very close to the YouTube video title, up to 65 characters
- [ ] Heading hierarchy is clean (no skipped levels)
- [ ] No "Key Takeaways" section
- [ ] First H2 contains the target keyword and is short (not a long clause-heavy heading)
- [ ] Conclusion H2 uses a "Ryan's Final Thoughts" style heading, not "The Bottom Line"
- [ ] 3-5 FAQs at the end with direct answers, under heading "[Target Keyword] FAQs"
- [ ] YouTube video embedded via iframe (not a placeholder), placed after intro and first H2
- [ ] Featured image set from YouTube thumbnail. NO additional body images generated or uploaded.
- [ ] 3-5 external links to credible, high-authority sources, all opening in a new tab (`target="_blank" rel="noopener noreferrer"`), spread naturally throughout the body
- [ ] 3-5 internal links to ryandoser.com articles (when sitemap provided)
- [ ] CTA block placed directly after the first H2 section, within first 300-400 words, link is bolded, opens in new tab, copy is topic-specific
- [ ] Exactly ONE WordPress category assigned. No more.
- [ ] All H2 and H3 headings are bold (wrapped in `<strong>` tags in HTML)
- [ ] All external links verified as non-broken (200 status) before publishing
- [ ] ZERO emojis anywhere in the article
- [ ] Blog post title under 65 characters with keyword toward beginning
- [ ] SEO title ~55-65 characters with primary keyword
- [ ] Meta description does not exceed 155 characters, primary keyword included
- [ ] Word count does not exceed 1,200 words
- [ ] ZERO em dashes (—) in entire article
- [ ] ZERO banned words or phrases
- [ ] No sentence starts with same two words as previous sentence
- [ ] No three-word phrase used more than once
- [ ] No word repeated within 8 words of its last use
- [ ] Every H2 section opens with an engagement hook
- [ ] Reading level at 8th-9th grade
- [ ] Every sentence adds new information (no fluff)
- [ ] Includes statistics, examples, or quotes from the video
- [ ] Honest assessment with pros AND cons where relevant
- [ ] Conclusion includes brief summary and CTA/forward-looking statement

### Scoring

Count failures. Target: 0 failures.

- **0 failures:** Ship it.
- **1-2 failures:** Fix them. Re-check.
- **3+ failures:** Rewrite affected sections. Run full checklist again.

---

## Iteration

After delivering, Ryan may:

- **"Make it shorter"** -- Cut to core insights, remove redundant examples, tighten bullets
- **"Change the angle"** -- Rewrite intro/conclusion to reframe, adjust section emphasis
- **"Add more from the video"** -- Pull additional quotes/examples from transcript
- **"Make it more [contrarian/punchy/tactical]"** -- Adjust tone intensity
- **"Fix this section"** -- Edit only the specified section, preserve the rest
- **"Run the checklist again"** -- Re-score the full article

---

## Quick Commands

- **"blog post from [URL]"** -- Full workflow from YouTube video
- **"blog post from [URL] for [keyword]"** -- Full workflow with specified keyword
- **"rewrite [section]"** -- Edit a specific section
- **"check word count"** -- Terminal check on article length
- **"run checklist"** -- Score the current draft
- **"add FAQs"** -- Generate/regenerate FAQ section
- **"shorten to [X] words"** -- Compress the article

---

## Example: How the Output Should Read

This is the target voice and structure (abbreviated):

```markdown
# 9 AI Tools That Actually Save Marketers Time in 2026

Every listicle out there recommends 30+ AI marketing tools. Most read like
feature pages. The problem? Small businesses spend 22% of their marketing
budget just managing tools, not doing marketing.

More tools is not the answer. **Better tools for AI marketing** is.

I tested dozens of options over the past year. Here are the 9 that stuck
around in my actual workflow, not because they're trendy, but because they
save me real time every week.

## The Best AI Marketing Tools That Actually Earn Their Spot

You've probably heard of ChatGPT. Most marketers default to it. But after
months of testing both side by side, Claude produces better marketing copy
out of the box.

The difference is nuance. Claude picks up on tone, follows brand guidelines
more consistently, and doesn't need five rounds of "make it less generic"
prompting.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>

I use Claude for blog outlines, email drafts, and landing page copy. It
handles long-form content without losing the thread halfway through.

That said, Claude isn't perfect for everything. Real-time data? It can't
browse the web natively. Quick image generation? ChatGPT wins there.

Pick the tool that matches the task. Not the one with the biggest logo.
```

Notice: short paragraphs, specific details, honest pros AND cons, no banned words, no em dashes, no emojis, no Key Takeaways section, first H2 contains the target keyword, all external links open in a new tab, varied sentence starts, conversational but informative.

---

## Blog Post Image Generation

Every blog post should include 1-2 AI-generated images in addition to the YouTube thumbnail featured image. Use Nano Banana Pro via OpenRouter to generate them.

### Image Specs (Non-Negotiable)

- **Dimensions:** 600x338 pixels (16:9) for blog body images. This is smaller and more professional than 800x450 -- do not upsize.
- **Format:** WebP (preferred) or JPEG
- **File size:** Under 100KB per image
- **Watermark:** Strip all metadata on export (removes SynthID watermark automatically)

### Generation Workflow

**Step 1: Generate via OpenRouter API**

Use the OpenRouter API key from `APIs.env` (`OPENROUTER_API_KEY`) with model `google/gemini-3-pro-image-preview`:

```bash
curl -s -X POST "https://openrouter.ai/api/v1/chat/completions" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "google/gemini-3-pro-image-preview",
    "messages": [{"role": "user", "content": "[PROMPT]"}]
  }' | python3 -c "
import json, sys, base64
data = json.load(sys.stdin)
url = data['choices'][0]['message']['images'][0]['image_url']['url']
header, b64data = url.split(',', 1)
ext = header.split('/')[1].split(';')[0]
with open('/tmp/blog_image.[EXT]', 'wb') as f:
    f.write(base64.b64decode(b64data))
print('SAVED')
"
```

**Step 2: Resize, convert to WebP, strip metadata**

Use Pillow (available on this machine):

```python
from PIL import Image
img = Image.open('/tmp/blog_image.jpeg')
img_resized = img.resize((600, 338), Image.LANCZOS).convert("RGB")
img_resized.save('output.webp', "WEBP", quality=72, method=6)
# PIL strips all EXIF/metadata on save -- SynthID watermark is gone
```

Start at quality 72. If still over 100KB, drop to 65, then 58, then 50 until under 100KB.

**Step 3: Upload via MCP JSON-RPC endpoint**

The `wp_upload_media` MCP tool can't handle large base64 strings through normal tool calls. Use the direct JSON-RPC endpoint instead:

```python
import base64, json, urllib.request

with open('output.webp', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

payload = json.dumps({
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
        "name": "wp_upload_media",
        "arguments": {
            "filename": "descriptive-seo-filename.webp",
            "base64": b64,
            "title": "Image title with keywords",
            "alt": "Alt text with target keywords naturally placed"
        }
    },
    "id": 1
}).encode('utf-8')

req = urllib.request.Request(
    "https://ryandoser.com/wp-json/mcp/v1/http",
    data=payload,
    headers={
        "Authorization": "Bearer water-napkin-feel",
        "Content-Type": "application/json"
    }
)
with urllib.request.urlopen(req, timeout=30) as resp:
    result = json.loads(resp.read())
    print(result)  # Returns the uploaded image URL
```

### Image Naming and Alt Text Rules

- **Filename:** `[primary-keyword]-[description].webp` -- kebab-case, SEO-friendly, no generic names
- **Alt text:** Describe the image naturally using the primary keyword and/or secondary keywords. Write it for a screen reader, not a search engine. 10-15 words max.
- **Title:** Short descriptive title, can include keyword

### Placement in Post

- **Image 1:** After the first H2 body content, before or after the video embed
- **Image 2:** After the second or third H2 section, before the CTA or conclusion
- Wrap in `<figure>` and `<figcaption>` tags for semantic HTML:

```html
<figure>
  <img src="[URL]" alt="[alt text]" width="600" height="338" />
  <figcaption>[Short descriptive caption, 1 sentence]</figcaption>
</figure>
```

### Prompt Guidelines

- Write prompts as narrative scene descriptions, not keyword lists (see Nano Banana Pro API Best Practices.md for full guidance)
- For blog post body images: use **minimalist flat design illustration** style -- clean, professional, consistent with a tech/marketing aesthetic
- Always specify: `2K resolution, 16:9 aspect ratio` at the end of the prompt
- Images should visually explain a concept from the article, not be decorative
- Good image concepts: workflow diagrams, before/after comparisons, process flows, concept illustrations

### Quality Checklist for Images

- [ ] 600x338 pixels (NOT 800x450 -- smaller is more professional and loads faster)
- [ ] WebP format
- [ ] Under 100KB
- [ ] Metadata stripped (no SynthID watermark)
- [ ] Filename is SEO-friendly kebab-case
- [ ] Alt text includes target keyword naturally
- [ ] Placed in `<figure>` tags with `<figcaption>`
- [ ] Visually relevant to the surrounding section content

---

## Lessons Learned

*(Update this section as patterns emerge from actual use)*

- Blotato transcript extraction works well for videos under 30 minutes. Longer videos may need manual transcript paste.
- First drafts tend to run over 1,200 words. Be ruthless about cutting. Anything past 1,200 is almost always fluff.
- Blog post title should stay very close to the YouTube video title. Minimal SEO adaptation only. Keyword toward the beginning, under 65 characters.
- Embed the YouTube video directly via iframe instead of using a placeholder. Extract video ID from the URL Ryan provides.
- Use the YouTube maxresdefault thumbnail as the featured image. Upload via `wp_upload_media` with the URL `https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg`. This is the ONLY image. Do not generate or upload body images.
- Local article folders save to `/Users/rdoser/Desktop/Claude-Code-Folder/Blog Post Archives/[keyword-slug]/`. Folder name is target keyword in kebab-case.
- When Ryan provides his XML sitemap, include 3-5 internal links with proper anchor text in every post.
- External links target is 3-5. Spread them throughout the body, not clustered in one section. Verify all links return 200 before publishing -- no broken links.
- Permalink should always be the target keyword in kebab-case.
- No emojis. Ever.
- No Key Takeaways section. First H2 must contain the target keyword and be short -- no long clause-heavy headings.
- Target keyword must appear in the very first sentence of the article, bolded once.
- Intro is 1-2 sentences only, placed above the first H2. Not a multi-paragraph block.
- Blog post title should use the full 65-character budget when it helps. Don't truncate just to be short.
- Meta description must not exceed 155 characters. Always verify the count before publishing.
- Conclusion H2 rotates between "Ryan's Final Thoughts", "Final Thoughts from Ryan", "Final Notes from Ryan" -- never "The Bottom Line".
- Every article needs a CTA block placed early (after first or second H2, before the article midpoint). The link must be bolded. Copy must be topic-specific. Don't use generic "check out my guide" language.
- CTA link format in HTML: <strong><a href="https://ai-insider-tips.kit.com/79fe0f3bb2" target="_blank" rel="noopener noreferrer">link text</a></strong>
- Video embed goes near the top: after the intro and first H2, not buried mid-article.
- CTA goes directly after the video embed in the first H2 section. Never push it past the second H2.
- Never include an H1 tag anywhere in the post_content body. WordPress renders the post_title as the H1. The body should start at H2.
- Assign exactly ONE WordPress category per post. Use `wp_get_terms` to find existing categories first. Create a new one with `wp_create_term` if no close match exists.
- The CTA guide link must be on its own standalone paragraph line. Lead-in copy = one paragraph. Link = separate paragraph below it.
- All H2 and H3 headings must be bold in HTML output. Wrap heading text in `<strong>` tags.
- FAQ section heading must be "[Target Keyword] FAQs" -- not just "FAQ".
- Local article file should be named after the target keyword in kebab-case (e.g., `claude-code-agent-teams.md`), NOT `article.md`. Save directly in the keyword folder.
- The intro paragraph must be included in `post_content` sent to WordPress. It's easy to accidentally omit it and start the body with an H2. Always include the intro `<p>` tag before the first `<h2>`.
- First mention of Blotato in any article must use the affiliate link: `https://www.blotato.com/?ref=rdoser`. Subsequent mentions do not need a link.
- CTA descriptor text should be generic: "includes my Claude Code Skills, automation templates, systems, and more" -- not article-specific. Do not tailor the parenthetical to the article topic.
- Local article folders save to `/Users/rdoser/Desktop/Claude-Code-Folder/Marketing/Blog Post Archives/[keyword-slug]/` (note the Marketing/ prefix).
- YouTube embed: use the Gutenberg block comment syntax (see Video Embed section above). Do NOT use iframes or responsive div wrappers -- WordPress strips them on save via MCP.
- ryandoser.com uses Elementor. Posts published via MCP will show blank until an Elementor Single Post template is configured in Theme Builder with a Post Title widget and Post Content widget. This is a one-time setup Ryan does in the browser -- once done, all future posts render automatically.
- After publishing, set `_elementor_template_type` to `wp-post` and `_elementor_edit_mode` to `builder` via `wp_update_post_meta` to signal Elementor to use the theme template.
- YouTube embed: raw iframes are stripped by WordPress on save. Bare URLs get auto-linked. `[embed]` shortcodes get mangled. The ONLY method that works via MCP is the native Gutenberg block comment syntax. Use this exact pattern in post_content:

```
<!-- wp:embed {"url":"https://www.youtube.com/watch?v=VIDEO_ID","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=VIDEO_ID
</div></figure>
<!-- /wp:embed -->
```

This block comment syntax survives wp_create_post and renders as a full YouTube player on the frontend.
- Featured image: do NOT use `wp_upload_media` with a URL parameter -- the attachment is created with `url: false` and the thumbnail won't display. Always download the thumbnail locally first, base64-encode it, and upload via the JSON-RPC endpoint (`https://ryandoser.com/wp-json/mcp/v1/http`) with the `wp_upload_media` tool and a `base64` field. Then set `_thumbnail_id` via `wp_update_post_meta` using the returned attachment ID.
- NEVER delete and recreate a post to fix content issues. Once a post is published or has a live URL, deleting it orphans the slug and breaks the link. Always update the existing post in place using wp_create_post for new posts only, and the JSON-RPC wp_update_post call for any content fixes on existing posts.
- `wp_add_post_terms` requires `ID` (integer, capital) and `terms` (array of integers). Using `post_id` or string slugs will throw an error.
- `wp_update_post_meta` requires `ID` (capital), not `post_id`. Use the `meta` object to update multiple fields at once.
