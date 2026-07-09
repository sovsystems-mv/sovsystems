---
name: infographic-generator
description: Generates on-brand infographics for Ryan Doser's content. Use when creating visual content for social media, newsletters, or educational materials about AI marketing, automation, and personal branding.
---

# Infographic Generator for Ryan Doser Brand

Generate infographics that match Ryan Doser's established visual brand.

## Brand Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Navy Blue (Primary) | #1B3A4B | Headlines, icons, text, logo |
| Cream/Off-White | #F5F3EE | Background |
| Mint Green (Accent) | #D4E8D1 | Highlight behind key words in headlines |
| Teal | #4A9B9B | Secondary accent (comparison graphics) |
| Coral/Salmon | #F5A68C | Secondary accent (comparison graphics) |
| Orange/Red | #E85A3C | Warning elements, emphasis |

## Typography

- **Headlines:** Bold sans-serif, large size
- **Body text:** Clean sans-serif, medium weight
- **Hierarchy:** Large headline > Subheading > Body text > Labels
- **Reading level:** 8th grade—clear beats clever

## Logo Placement

Always include the exact Ryan Doser logo:
- **Location:** Bottom center (default) or top left (for comparison layouts)
- **Style:** Navy blue "RD" monogram with "RYAN DOSER" text below
- **IMPORTANT:** Always include the logo file as a reference image in the API call to ensure exact reproduction

## Layout Types

### 1. List Format
Best for: Tips, steps, signals, quick wins
- Bold headline at top with key word highlighted in mint green
- Icon + text list (left-aligned icons, text to the right)
- 3-7 items maximum
- Logo at bottom center
- Example: "5 Trust Signals to Grow Your Personal Brand"

### 2. Grid Format
Best for: Categories, tools, features
- Bold headline at top
- Icons arranged in grid (2-3 columns)
- Labels below each icon
- Logo at bottom center
- Example: "5 AI Automations that Save Me Hours"

### 3. Comparison Format
Best for: Tool comparisons, before/after, pros/cons
- Title centered at top
- Logo in top left corner
- Two columns with distinct background colors (teal vs coral)
- Each column has: Tool logo/name, subtitle, icon + text list
- Vertical divider between columns
- Example: "Claude Code vs n8n"

### 4. Storytelling/Flow Format
Best for: Processes, warnings, explanations
- Headline at top
- Central visual element (illustration)
- Arrows showing flow or sequence
- Text callouts explaining each step
- Logo integrated into design
- Example: "AI ≠ Easy Button"

### 5. Explainer Format
Best for: Definitions, "What is X" content
- Question as headline
- Visual illustration on one side
- Bullet points or labels on the other
- "NOT" items crossed out when showing what something isn't
- Logo at bottom
- Example: "What are AI Agents?"

## Design Rules

1. **White space:** Generous margins and spacing—never cramped
2. **Icons:** Simple, flat style in navy blue (or contextual colors for comparisons)
3. **Headline accent:** Highlight ONE key word/phrase with mint green background
4. **Alignment:** Clean edges, consistent spacing
5. **Maximum text:** Keep copy minimal—infographics are visual, not essays
6. **Orientation:** Portrait (1080x1350) for social or square (1080x1080)

## Content Guidelines

Match Ryan's voice and philosophy:
- Practical over theoretical
- Skeptical of hype
- Simple systems that actually work
- "Human in the loop" perspective when relevant
- No buzzwords (avoid: delve, unlock, supercharge, game-changer, etc.)

## Output Requirements

When generating an infographic, provide:
1. **Layout type** selected with reasoning
2. **Headline** with highlighted word identified
3. **Content elements** (icons needed, text for each item)
4. **Color specifications** for all elements
5. **Nano Banana Pro prompt** using the template below

---

## Nano Banana Pro API Configuration

**Model:** `google/gemini-3-pro-image-preview` (Nano Banana Pro)

**Endpoint:** `https://openrouter.ai/api/v1/chat/completions`

**Authentication:**
```python
headers = {
    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
    "Content-Type": "application/json"
}
```

**Request Structure (with logo reference):**
```python
import base64
from pathlib import Path

# Load logo as base64
logo_path = Path("Ryan Doser Logo.png")
logo_base64 = base64.b64encode(logo_path.read_bytes()).decode("utf-8")
logo_data_url = f"data:image/png;base64,{logo_base64}"

payload = {
    "model": "google/gemini-3-pro-image-preview",
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {"url": logo_data_url}
                },
                {
                    "type": "text",
                    "text": "Your infographic prompt here - include instruction to use the EXACT logo from the reference image"
                }
            ]
        }
    ]
}
```

**Response Handling:**
```python
# Images returned in message.images array
image_url = result["choices"][0]["message"]["images"][0]["image_url"]["url"]
# Returns: "data:image/png;base64,iVBORw0KG..."
```

---

## Nano Banana Pro Prompt Templates

### List Format Infographic
```
Professional infographic with clean minimalist design. Cream/off-white background (#F5F3EE).

At the top, bold sans-serif headline reading "[FULL HEADLINE]" in dark navy blue (#1B3A4B). The word "[KEY WORD]" has a soft mint green (#D4E8D1) highlight rectangle behind it.

Below the headline, a vertical list of [NUMBER] items. Each item has:
- A simple flat icon in navy blue (#1B3A4B) on the left
- Bold label text in navy blue to the right of each icon

The items are:
1. [Icon: simple hashtag speech bubble] "[ITEM 1 TEXT]"
2. [Icon: circular refresh arrow] "[ITEM 2 TEXT]"
3. [Icon: lightbulb with rays] "[ITEM 3 TEXT]"
[Continue for all items...]

At the bottom center, a logo consisting of a stylized "RD" monogram in navy blue (#1B3A4B) with "RYAN DOSER" text below it in the same color.

Generous white space throughout. Clean alignment. Modern professional aesthetic. No gradients on icons—flat solid colors only.

2K resolution, 4:5 aspect ratio (portrait orientation for social media).
```

### Grid Format Infographic
```
Professional infographic with clean minimalist design. Cream/off-white background (#F5F3EE).

At the top, bold sans-serif headline reading "[FULL HEADLINE]" in dark navy blue (#1B3A4B). The word "[KEY WORD]" has a soft mint green (#D4E8D1) highlight rectangle behind it.

Below the headline, a grid layout of [NUMBER] items arranged in [ROWS x COLUMNS]. Each item has:
- A simple flat icon in navy blue (#1B3A4B) centered
- Label text in navy blue below each icon

Row 1:
- [Icon description]: "[LABEL]"
- [Icon description]: "[LABEL]"
- [Icon description]: "[LABEL]"

Row 2:
- [Icon description]: "[LABEL]"
- [Icon description]: "[LABEL]"

At the bottom center, a logo consisting of a stylized "RD" monogram in navy blue (#1B3A4B) with "RYAN DOSER" text below it.

Generous white space. Clean grid alignment. Modern professional aesthetic. Flat icon style only.

2K resolution, 4:5 aspect ratio.
```

### Comparison Format Infographic
```
Professional comparison infographic with clean design. Light neutral background.

Top left corner: "RD" monogram logo with "RYAN DOSER" text in navy blue (#1B3A4B).

Centered title at top: "[COMPARISON TITLE]" in bold navy blue sans-serif.

Two equal columns below, separated by a subtle vertical divider:

LEFT COLUMN (light teal/mint background #E8F4F4):
- [Tool/Option 1 name or logo] at top
- Subtitle: "[LEFT SUBTITLE]" in teal (#4A9B9B)
- List of [NUMBER] items with small icons:
  1. [Icon]: "[ITEM TEXT]"
  2. [Icon]: "[ITEM TEXT]"
  [Continue...]

RIGHT COLUMN (light coral/salmon background #FDF0EC):
- [Tool/Option 2 name or logo] at top
- Subtitle: "[RIGHT SUBTITLE]" in coral (#F5A68C)
- List of [NUMBER] items with small icons:
  1. [Icon]: "[ITEM TEXT]"
  2. [Icon]: "[ITEM TEXT]"
  [Continue...]

Clean rounded corners on column backgrounds. Professional typography. Balanced composition.

2K resolution, 1:1 aspect ratio (square).
```

### Storytelling/Flow Format Infographic
```
Professional explanatory infographic with visual flow. Light cream background (#F5F3EE).

Bold headline at top: "[HEADLINE]" in navy blue (#1B3A4B).

"RD" monogram logo with "RYAN DOSER" positioned below headline.

Central visual element: [Describe the main illustration—e.g., "a cracked 'easy button' with warning symbols around it"].

Arrow or flow indicator pointing downward to a text callout box with rounded corners containing: "[KEY MESSAGE TEXT]" with important phrase in bold.

Below, a horizontal flow showing [NUMBER] connected elements:
[Element 1 illustration] → [Element 2 illustration] → [Element 3 illustration]
With labels: "[LABEL 1]" "[LABEL 2]" "[LABEL 3]"

Color accents: Use orange/red (#E85A3C) for warning elements, navy blue (#1B3A4B) for primary elements.

Professional illustration style—clean lines, simple shapes, consistent visual language.

2K resolution, 4:5 aspect ratio.
```

### Explainer Format Infographic
```
Professional explainer infographic with clean design. Cream background (#F5F3EE).

Question headline at top: "[WHAT IS X?]" in bold navy blue (#1B3A4B) sans-serif.

Split layout:
- Left side: Vertical list of "[NUMBER] things it is NOT" with red X marks crossing out each item:
  ✗ "NOT [ITEM 1]"
  ✗ "NOT [ITEM 2]"
  ✗ "NOT [ITEM 3]"
  [Continue...]

- Right side: Simple illustration of [describe the concept] with label "[CONCEPT NAME]" below it.

At the bottom, "RD" monogram logo with "RYAN DOSER" text centered.

Clean typography. Navy blue (#1B3A4B) for text and illustrations. Red/coral for the X marks. Generous spacing.

2K resolution, 1:1 aspect ratio.
```

---

## Nano Banana Pro Best Practices

1. **Always include logo as reference image** — Load `Ryan Doser Logo.png` as base64 and include it in the API call.
2. **Describe scenes narratively** — Don't use keyword lists. Write full descriptions.
3. **Specify exact text** — Include the precise words to appear in the image.
4. **Use hex codes** — Always include specific color values.
5. **Include resolution and aspect ratio** — End every prompt with "2K resolution, [ratio] aspect ratio."
6. **Request flat design** — Specify "flat icons," "no gradients," "solid colors" for consistency.
7. **Reference the logo in prompt** — Tell the model to "use the EXACT logo from the reference image" to ensure accurate reproduction.

## Quality Checklist

Before finalizing:
- [ ] Logo included and properly placed
- [ ] Brand colors used correctly
- [ ] One key word highlighted in headline
- [ ] Icons are simple and consistent style
- [ ] Text is minimal and scannable
- [ ] No banned words or phrases
- [ ] Appropriate layout for content type
- [ ] Dimensions match intended platform
