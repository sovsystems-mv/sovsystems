# Nano Banana Pro API Best Practices

## Skill Metadata
- **Skill Name:** Nano Banana Pro API Best Practices
- **Model:** google/gemini-3-pro-image-preview
- **Purpose:** Guide for generating high-quality images using Google's Nano Banana Pro via OpenRouter
- **Version:** 1.0
- **Last Updated:** 2026-01-19

---

## Overview

Nano Banana Pro (Gemini 3 Pro Image Preview) is Google's most advanced image generation model, offering industry-leading capabilities for professional asset production, text rendering, multi-image blending, and identity preservation.

**Key Strengths:**
- Advanced text rendering (long passages, multilingual layouts)
- Multi-image blending with up to 14 reference images
- Identity preservation for up to 5 human faces and 6 objects
- 2K/4K output resolution support
- Fine-grained controls (localized edits, lighting, camera transforms)
- Built-in reasoning for composition refinement

---

## API Configuration

### OpenRouter Setup

**Model ID:** `google/gemini-3-pro-image-preview`

**Endpoint:** `https://openrouter.ai/api/v1/chat/completions`

**Authentication:**
```python
headers = {
    "Authorization": f"Bearer {YOUR_OPENROUTER_API_KEY}",
    "Content-Type": "application/json"
}
```

**Basic Request Structure:**
```python
payload = {
    "model": "google/gemini-3-pro-image-preview",
    "messages": [
        {
            "role": "user",
            "content": "Your detailed image description here"
        }
    ]
}
```

### Response Structure

Images are returned in the `message.images` array:
```python
result["choices"][0]["message"]["images"][0]["image_url"]["url"]
# Returns: "data:image/png;base64,iVBORw0KG..."
```

---

## Prompt Engineering Best Practices

### 1. **Describe Scenes, Don't List Keywords**

**❌ Bad (keyword list):**
```
"man, computer, office, professional, blue shirt"
```

**✅ Good (narrative description):**
```
"A professional businessman in his mid-30s sits at a modern standing desk in a bright
corner office. He wears a crisp blue button-down shirt and is focused on a large
ultrawide monitor displaying data analytics. Natural light streams through floor-to-ceiling
windows behind him, creating a soft backlight. Shot with an 85mm lens at f/2.8 for
shallow depth of field."
```

### 2. **Style-Specific Guidelines**

#### Photorealistic Images
Include photography terminology:
- **Camera angles:** "eye-level", "low-angle", "bird's eye view"
- **Lens specs:** "85mm portrait lens", "24mm wide-angle", "50mm"
- **Lighting:** "golden hour lighting", "studio three-point lighting", "softbox diffused"
- **Settings:** "f/2.8", "shallow depth of field", "bokeh background"
- **Mood:** "moody", "bright and airy", "dramatic contrast"

**Example:**
```
"Close-up portrait of a confident female entrepreneur in her 40s, shot with an 85mm lens
at f/1.8. Studio lighting with a key light at 45 degrees, fill light, and subtle rim light.
Sharp focus on her eyes with a creamy bokeh background. High contrast, professional
retouching, 4K resolution."
```

#### Illustrations & Graphic Design
- **Style:** "kawaii style", "minimalist flat design", "hand-drawn illustration"
- **Line work:** "bold outlines", "clean vector lines", "sketch-style linework"
- **Shading:** "cel-shaded", "gradient shading", "flat colors only"
- **Background:** "solid color background", "transparent background", "abstract geometric shapes"

**Example:**
```
"Minimalist flat design illustration of a workspace. Simple geometric shapes, limited color
palette (navy blue, coral, cream, mint green). Clean vector lines, no gradients. Desktop
computer with simplified UI, potted plant, coffee mug. Solid coral background with subtle
texture. Modern, professional aesthetic."
```

#### Text Rendering in Images
Nano Banana Pro excels at text rendering. Be specific:
- **Font style:** "bold sans-serif", "elegant serif", "retro pixel font", "handwritten script"
- **Text content:** Specify exact words to appear
- **Placement:** "top left corner", "centered", "bottom banner"
- **Design context:** "YouTube thumbnail", "social media post", "logo design"

**Example:**
```
"Professional YouTube thumbnail. On the left, close-up of a man with shaved head,
subtle smirk. On the right, large bold white sans-serif text reading 'HOLY' on top line
and 'HIT' on bottom line. Between them, an orange rounded-square app icon with white
lightning bolt. Bottom right: small pill-shaped button with orange border containing
'TRY THIS' in white retro-pixel font. Dark moody chocolate-brown gradient background
with heavy vignette."
```

#### Product Photography
Detail the setup:
- **Lighting:** "softbox three-point lighting", "natural window light", "studio flash"
- **Angles:** "45-degree angle", "straight-on", "overhead flat lay"
- **Background:** "seamless white background", "wooden surface", "marble countertop"
- **Props:** Specify any supporting elements

**Example:**
```
"Professional product photography of a smartwatch on a clean white seamless background.
Shot from a 45-degree angle with soft studio lighting. Watch displays a fitness interface.
Subtle shadow beneath for depth. High-end commercial photography style, sharp focus
throughout, 4K resolution."
```

#### Designs with Negative Space
For images that need text overlay:
```
"Minimalist composition with significant negative space in the upper third for text overlay.
Subject positioned in lower right following rule of thirds. Clean, uncluttered background
with subtle gradient."
```

### 3. **Resolution & Aspect Ratio Guidelines**

**Resolution Options:**
- **1K:** Fast generation, social media, thumbnails
- **2K:** Standard professional quality (recommended default)
- **4K:** Maximum quality for print, large displays, detailed work

**Note:** Use uppercase "K" (1K, 2K, 4K) - lowercase is rejected

**Aspect Ratios:**
- `1:1` - Instagram posts, profile pictures
- `16:9` - YouTube thumbnails, presentations, widescreen
- `9:16` - Instagram Stories, TikTok, mobile vertical
- `4:5` - Instagram portraits
- `3:2` - Standard photography
- `21:9` - Ultrawide cinematic

**Supported ratios:** "1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"

**Best Practice:** Always specify resolution and aspect ratio in your prompt:
```
"[Your scene description]. 4K resolution, 16:9 aspect ratio."
```

---

## Advanced Features

### Multi-Turn Editing

Use conversational refinement for iterative improvements:

**Turn 1:**
```
"Generate a modern home office setup with natural lighting, 2K, 16:9"
```

**Turn 2:**
```
"Make the lighting warmer and add a plant in the background"
```

**Turn 3:**
```
"Change the wall color to sage green"
```

The model maintains context across turns for consistent editing.

### Reference Images (Up to 14)

Nano Banana Pro supports:
- **6 object references:** For composition, style, or product consistency
- **5 human face references:** For identity preservation

Use reference images when you need:
- Character consistency across multiple generations
- Specific product angles or styling
- Brand identity matching
- Person likeness preservation

### Grounding with Google Search

For factually accurate, current information:
```python
payload = {
    "model": "google/gemini-3-pro-image-preview",
    "messages": [{"role": "user", "content": "Current weather map for California"}],
    "tools": [{"google_search": {}}]
}
```

Use for:
- Current weather conditions
- Real-time stock charts
- Recent event imagery
- Up-to-date statistics visualizations

### Reasoning Mode

Nano Banana Pro uses built-in reasoning (mandatory). The model:
1. Analyzes your prompt
2. Plans composition
3. Generates interim "thought images"
4. Refines before final output

This happens automatically - no configuration needed.

---

## Optimization Tips

### 1. **Be Specific and Detailed**

More context = better results. Include:
- Subject details (age, appearance, clothing, expression)
- Environment details (location, time of day, weather)
- Technical specs (camera, lighting, resolution)
- Style and mood (aesthetic, atmosphere, emotion)

### 2. **Use Professional Terminology**

The model understands industry terms:
- Photography: "bokeh", "golden hour", "rule of thirds"
- Design: "negative space", "color palette", "typography"
- Art: "composition", "perspective", "shading technique"

### 3. **Specify What You DON'T Want**

Include negative guidance:
```
"Professional headshot with neutral background. No distracting elements, no harsh shadows,
no oversaturation."
```

### 4. **Leverage Compositional Guidelines**

Reference established principles:
- "Following rule of thirds composition"
- "Centered symmetrical layout"
- "Leading lines drawing eye to subject"
- "Foreground, midground, background depth"

### 5. **Request Specific Color Palettes**

Be precise with colors:
```
"Limited color palette: navy blue (#1A237E), coral (#FF6B6B), cream (#F5F5DC),
mint green (#98D8C8)"
```

---

## Common Use Cases & Templates

### YouTube Thumbnails (16:9)

```
"Professional YouTube thumbnail with [subject description] on the left side.
Bold [color] sans-serif text reading '[TEXT]' on the right. [Icon or graphic element]
between them. [Background description with mood and colors]. Eye-catching,
high contrast, 4K resolution, 16:9 aspect ratio."
```

### Social Media Posts (1:1 or 4:5)

```
"Instagram post featuring [subject]. [Style description - minimalist/vibrant/moody].
[Composition notes]. Negative space at [location] for text overlay.
[Color scheme]. 2K resolution, [aspect ratio]."
```

### Product Photography

```
"Professional product photography of [product] on [background].
Shot from [angle] with [lighting setup]. [Detail specifications].
[Mood and style]. Sharp focus, commercial quality, 4K resolution."
```

### Illustrations

```
"[Style] illustration of [subject]. [Line work and shading details].
[Color palette]. [Background description]. [Overall aesthetic].
High quality, vector-style, 2K resolution."
```

### Text-Heavy Designs

```
"[Design context - poster/banner/thumbnail] with prominent text.
Main text reads '[EXACT TEXT]' in [font description].
[Layout and composition]. [Visual elements supporting the text].
[Color scheme and mood]. Professional typography, legible, 4K resolution."
```

---

## Technical Specifications

### Rate Limits
- **250 requests per minute (RPM)**
- For high-volume needs, consider batch processing

### Pricing (via OpenRouter)
- Input: $2/1M tokens
- Output: $12/1M tokens
- Image Processing: $0.067/image
- Image Output: $0.00012/image token

### Context Window
- **65,536 tokens** for input
- **32,768 tokens** for completion

### Supported Parameters
- `temperature` - Creativity control (0.0-2.0)
- `top_p` - Nucleus sampling
- `seed` - Reproducibility
- `max_tokens` - Response length limit
- `stop` - Stop sequences

---

## Error Handling Best Practices

### Handle API Errors Gracefully

```python
try:
    response = requests.post(API_URL, headers=headers, json=payload)
    response.raise_for_status()
    result = response.json()

    # Validate response structure
    if "choices" not in result or not result["choices"]:
        raise ValueError("No choices in API response")

    message = result["choices"][0].get("message", {})

    if "images" not in message or not message["images"]:
        raise ValueError("No images in response")

except requests.exceptions.RequestException as e:
    print(f"API request failed: {e}")
except ValueError as e:
    print(f"Invalid response structure: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
```

### Common Issues

**Issue:** "Invalid aspect ratio"
**Solution:** Use only supported ratios, properly formatted as strings

**Issue:** "Resolution parameter rejected"
**Solution:** Use uppercase K (1K, 2K, 4K), not lowercase

**Issue:** Text not appearing correctly
**Solution:** Be more explicit - specify exact text, font style, and placement

**Issue:** Inconsistent results
**Solution:** Add more detail to prompts, use seed parameter for reproducibility

---

## Quality Checklist

Before generating, ensure your prompt includes:

- ✅ **Subject description** (what/who is in the image)
- ✅ **Style specification** (photorealistic, illustration, etc.)
- ✅ **Composition guidance** (layout, positioning, framing)
- ✅ **Technical details** (camera, lighting for photos; line work for illustrations)
- ✅ **Color information** (palette, mood, saturation)
- ✅ **Resolution** (1K, 2K, or 4K)
- ✅ **Aspect ratio** (if not 1:1 default)
- ✅ **Context and mood** (professional, playful, dramatic, etc.)

---

## Additional Resources

- **Google Official Docs:** https://ai.google.dev/gemini-api/docs/image-generation
- **OpenRouter Model Page:** https://openrouter.ai/google/gemini-3-pro-image-preview
- **Provider:** Google Vertex AI

---

## Safety & Attribution

All images generated by Nano Banana Pro include **SynthID watermarks** for content identification and attribution purposes. These are invisible to the human eye but detectable by verification tools.

---

## Version History

- **v1.0 (2026-01-19):** Initial skill creation with comprehensive best practices from official documentation
