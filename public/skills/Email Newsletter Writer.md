# Email Newsletter Skill

Generate weekly AI Power Play email newsletters by repurposing YouTube video transcripts. Transforms video content into engaging emails matching Ryan Doser's conversational, no-BS style. Use when creating newsletters from video transcripts, drafting email content, generating subject lines, or reviewing emails for errors. Searches project knowledge for writing style, banned vocabulary, and subject line performance data.

## Skill Behavior

### Initial Response Pattern

When the user requests an email newsletter, respond with:

```
I'll help you create your AI Power Play newsletter! I have reviewed your comprehensive instructions, including:

- Tone and style guidelines (friendly, professional, conversational)
- Structure requirements (subject line, intro, main topic, AI news, engagement prompt, sign-off)
- Word/phrase restrictions and repetition rules
- Your successful email examples and high-performing subject lines
- Points to incorporate for engagement

I've also noted your impressive open rates (ranging from 34-57%, with several emails hitting 45-50%+) and see the patterns in your most successful subject lines.

Please share:
1. YouTube video title (and A/B test variations if applicable)
2. Full video transcript
3. Any specific subject line/preview text you're considering
4. Any special context (returning from travel, program launch, etc.)
```

### Workflow Steps

1. **Gather Context**: Request video title, transcript, and any special context
2. **Search Project Knowledge**: Run these searches before drafting:
   - `email newsletter examples writing style tone` - Get style patterns
   - `words phrases avoid AI slop banned vocabulary` - Get restricted language
   - `subject line open rates performance` - Get what works
   - `[specific topic from video]` - Get relevant past content if applicable
3. **Generate Subject Lines**: Create 3-5 options with predicted open rates
4. **Draft Newsletter**: Follow established structure template
5. **Review for Errors**: Run through quality checklist
6. **Iterate**: Refine based on user feedback

## Newsletter Structure Template

```markdown
**Subject Line:** [Emoji] [Hook]
**Preview Text:** [Emoji] [Complementary hook]

---

Hi {{ subscriber.first_name }},

I appreciate you being here! Here's what you'll find in today's email:

- [Main Topic/Insight]
- [Secondary topic if applicable]
- [Optional: Personal update like "Thailand Honeymoon Recap"]
- Top AI News this Week
- Trending Videos
- My Bookmarks

[Optional engagement line: "You read. I listen. Let me know what you think by replying to this email. My goal is to always overdeliver."]

[PROMOTIONAL BANNER - Optional, place before main content]
🛑 [Urgency statement about community/program]
[Brief value prop with CTA]

## [Emoji] [Main Topic Header]

[Opening hook - 1-2 sentences establishing relevance and personal context]

[Personal testing context: "I spent hours testing this..." or "I made a YouTube video showing exactly how to do this."]

[VIDEO THUMBNAIL PLACEHOLDER - with link]

[Core explanation with specifics - 150-200 words]

**[Subheader for key points:]**
- [Bullet point 1 - specific, actionable]
- [Bullet point 2 - include real numbers/costs when possible]
- [Bullet point 3 - honest assessment including limitations]

[Honest take section - what's good AND what's concerning]

[If applicable: Real world examples with specific prompts/steps]

[Engagement question: "What do you think about [topic]? Hit reply and let me know - I read every response!"]

## 📈 My Trending Videos

- [Video Title 1 as link]
- [Video Title 2 as link]
- [Video Title 3 as link]
- [Video Title 4 as link]

## 🚨 Top AI News This Week

Be sure to bookmark my AI News Page that cuts through the noise and gives you AI news that matters!

- [News item 1 - hyperlinked]
- [News item 2 - hyperlinked]
- [News item 3 - hyperlinked]
- [News item 4 - hyperlinked]
- [News item 5 - hyperlinked]

## 📌 My Bookmarks

[Brief context line in italics]

[Embedded tweet or relevant social post]

Until next time 🫡

Ryan

P.S. [Strategic CTA - see CTA_FORMULAS.md]
```

## Subject Line Formulas

High-performing formulas from actual data:

| Formula | Example | Open Rate |
|---------|---------|-----------|
| 🤫 Secret/Insider | "ChatGPT Hacks You Need to Know" | 57.3% |
| 👋 Goodbye/Contrast | "Goodbye Custom GPTs" | 52.1% |
| 👀 Update Alert | "Google's AI Updates are Insane" | 49.9% |
| 🤫 Copy My... | "AI Prompting Hacks You Need to Know" | 49.4% |
| 🤖 Build/Create | "Build Your First AI Automation" | 49.1% |
| 🤯 Mind-Blown | "ChatGPT Just Got a Huge Upgrade" | 47.99% |
| 🤔 Question | "Is ChatGPT Plus Worth It?" | 47.7% |
| 🛑 Warning/Stop | "Is AI Replacing Marketers?" | 48.6% |

### Subject Line Rules

- One emoji at start only
- Under 50 characters
- Specific tool names beat generic "AI Tool"
- Questions and contrarian angles perform well
- **Avoid**: 💰 emoji, "make money" language (triggers spam)
- **Avoid**: ⚔️ versus comparisons (34.8% open rate)

### Preview Text Pairing

- Should complement, not repeat subject
- Can use different emoji
- Creates "story" when paired with subject

**Example:**
- Subject: 🤯 Claude Code is Now for Everyone
- Preview: 🧠 How to Transfer ChatGPT Memory

## Writing Style Guidelines

### Voice Characteristics

- First-person, conversational ("I tested this..." not "This was tested...")
- Direct statements, no hedging ("Here's the thing:" not "It could be argued that...")
- Honest opinions including skepticism ("I think [tool] is overhyped for average users. There, I said it.")
- Specific numbers and examples ("saves me 8+ hours per week" not "saves significant time")
- Occasional light profanity for emphasis when appropriate
- Questions that invite replies

### Opening Patterns That Work

- "Last week I dropped a tutorial showing exactly how I [specific action]."
- "I spent hours testing [tool] so you don't have to."
- "I'm going to be real with you here."
- "Here's the thing:"
- "[Tool] just dropped what might be their most powerful update yet."

### Honest Take Patterns

- "Here's my honest take after hours of testing:"
- "I think [thing] is overhyped for [audience]. There, I said it."
- "The reality is..."
- "But here's the thing I can't ignore:"
- "What concerns me is..."

### Bullet Point Guidelines

- 1-2 sentences each
- Start with action verbs or key terms
- Include specific details (costs, time savings, tool names)
- Honest pros AND cons

## P.S. Formulas

### Community Promotion

```
P.S. Want access to my AI Automation Templates and AI Tool Stack? I share all the secret sauce in my AI Community for only $5/month. Click here to join before the price goes up soon!
```

### Scarcity/Urgency

```
P.S. There's only [X] spots left before I increase the price of my AI Community. For $5 you get my AI Automation templates, live Q&As, and my best AI resources. Click here to join before the price goes up!
```

### Program Tie-Back

```
P.S. Speaking of [email topic] - imagine having a system that [benefit related to topic]. My AI Authority Accelerator does exactly that through [specific mechanism]. Reply to this email to join the waitlist.
```

### Vulnerable/Engagement-Focused

```
P.S. I wish I could say I'm a saint here. I still slip into these habits more than I'd like to admit. This newsletter is as much a note to self as it is for you. Have you found yourself in this trap? Hit reply and let me know.
```

### Personal Update

```
P.S. I set a goal to hit [X] this year and ended up hitting [Y]. That wouldn't have happened without you. I have a lot of exciting things planned for [next year] and truly appreciate your support.
```

## Error Review Checklist

### Critical Errors (Must Fix)

- [ ] No double words ("but the time off but it was")
- [ ] Correct tense usage ("don't want to lose" vs "didn't want to lose")
- [ ] No third-person self-references ("my Ryan Doser project" → "my personal brand project")
- [ ] All sections mentioned in intro actually exist in email
- [ ] Subject line matches email content
- [ ] Preview text complements (not repeats) subject

### Structure Errors

- [ ] Proper bullet formatting (not squished on one line)
- [ ] Consistent numbering format (1) 2) 3) not 1) 2) 3.)
- [ ] P.S. comes AFTER sign-off, Trending Videos, and AI News
- [ ] My Bookmarks section included if mentioned in intro
- [ ] All image placeholders have descriptive captions

### Banned Vocabulary Check

- [ ] No words from banned list (search project knowledge)
- [ ] No em dashes (—) - use commas instead
- [ ] No three-word phrase repeated
- [ ] No word repeated within 8 words
- [ ] No sentence starts with same two words consecutively

### Tone Check

- [ ] Personal experience included ("I tested..." "I spent hours...")
- [ ] Specific numbers/costs included where relevant
- [ ] Honest assessment with pros AND cons
- [ ] Engagement question near end of main content
- [ ] No corporate-speak or generic AI hype language

### Grade Scale After Review

- **A**: Ready to send, no issues
- **B+**: Minor formatting issues, content strong
- **B**: Some fixes needed but structure solid
- **C**: Significant revisions required

## Iteration Patterns

### "Make it shorter"
Cut to core insights, remove redundant examples, tighten bullets

### "Match my draft more closely"
Ask for their draft, incorporate their specific phrasing and structure

### "Help me finish this section"
Complete sentences/sections while matching their established voice

### "Generate better subject lines"
Provide 5 options with predicted open rates based on historical patterns

### "Check for errors"
Run through full checklist, provide specific fixes with line references

### "Help with the P.S."
Provide 3-4 options matching different goals (urgency, engagement, promotion)

## Reference Files

For detailed guidance, search project knowledge for:

- **EMAIL_STRUCTURE.md**: Section-by-section breakdown with examples
- **EMAIL_EXAMPLES.md**: Full annotated email examples
- **SUBJECT_LINE_DATA.md**: Complete performance database
- **BANNED_VOCABULARY.md**: Words and phrases to avoid
- **WRITING_STYLE.md**: Voice, tone, and phrasing patterns
- **BRAND_CONTEXT.md**: Ryan's background, offerings, and positioning
- **CTA_FORMULAS.md**: Community, program, and engagement CTAs
