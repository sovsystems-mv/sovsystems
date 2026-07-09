---
name: keyword-research
description: Performs keyword research using the Data for SEO API to retrieve real search data including monthly search volume (MSV), keyword difficulty (KD), cost per click (CPC), competition level, and trend data. Use when the user asks to research keywords, find keyword opportunities, analyze search volume, check keyword difficulty, get keyword suggestions, find related keywords, identify SERP competitors, or do any SEO keyword analysis. Also triggers on phrases like "topical map", "keyword gap", "content gap", "search volume", or "keyword ideas".
---

# Keyword Research

Research keywords using the Data for SEO API. Returns real metrics: monthly search volume, keyword difficulty, CPC, competition, trends, and related keyword opportunities.

## First-Time Setup

Credentials are stored in `~/.dataforseo_config.json`. If missing, run:

```bash
python /path/to/scripts/kw_research.py setup YOUR_LOGIN YOUR_PASSWORD
```

Get API credentials at https://app.dataforseo.com/register — most research calls cost $0.03–0.10 each.

## Core Workflow

### Single Keyword Research

For researching one keyword or a small set, use the `research` command. This runs search volume, keyword suggestions, related keywords, and keyword difficulty in one pass.

```bash
python scripts/kw_research.py research "real estate crm" --limit 30
```

This returns:
- **Seed keyword metrics**: MSV, KD, CPC, competition, 12-month trend
- **Keyword suggestions**: Up to `--limit` related terms with full metrics
- **Related keywords**: Semantically related terms with metrics

### Batch Volume Lookup

For checking metrics on a known list of keywords:

```bash
python scripts/kw_research.py volume "keyword one, keyword two, keyword three"
```

Returns MSV, CPC, and competition for each keyword. Batch up to 700 keywords per call.

### Get Keyword Difficulty

```bash
python scripts/kw_research.py difficulty "keyword one, keyword two"
```

### Find Keyword Suggestions (seed expansion)

```bash
python scripts/kw_research.py suggestions "seed keyword" --limit 50
```

### Find Related Keywords (semantic)

```bash
python scripts/kw_research.py related "seed keyword" --limit 50
```

### Find SERP Competitors

```bash
python scripts/kw_research.py competitors "keyword"
```

Returns domains ranking for this keyword with visibility scores.

## Common Options

| Flag | Default | Description |
|------|---------|-------------|
| `--location` | `2840` | Location code (2840=US, 2826=UK, 2036=AU, 2124=CA) |
| `--language` | `en` | Language code |
| `--limit` | `50` | Max results for suggestions/related |
| `--output` | stdout | Save JSON to file |

## Output Format

Present results to the user in a clean table. Always include these columns when available:

| Keyword | MSV | KD | CPC | Competition | Intent |
|---------|-----|-----|-----|-------------|--------|
| real estate crm | 2,400 | 45 | $12.50 | HIGH | Commercial |

- **MSV**: Monthly search volume (format with commas)
- **KD**: Keyword difficulty 0–100 (0–30 = Easy, 31–60 = Medium, 61–80 = Hard, 81–100 = Very Hard)
- **CPC**: Cost per click in USD
- **Competition**: LOW / MEDIUM / HIGH (from Google Ads data)
- **Intent**: Classify using the guide below

### Trend Indicator

When monthly search data is available, note the trend direction:
- **↑ Trending up**: Last 3 months average > previous 3 months average
- **↓ Trending down**: Last 3 months average < previous 3 months average
- **→ Stable**: Within 15% variance

## Search Intent Classification

Classify every keyword into one of four intent types. Use keyword modifiers and SERP context as signals:

**Informational (I)** — User wants to learn something
- Signals: "how to", "what is", "guide", "tutorial", "tips", "why", "examples"
- Content format: Blog post, guide, tutorial, explainer

**Commercial (C)** — User is researching before a decision
- Signals: "best", "vs", "review", "comparison", "top", "alternative to", "features"
- Content format: Comparison page, review, listicle, buyer's guide

**Transactional (T)** — User is ready to act
- Signals: "buy", "price", "pricing", "discount", "free trial", "sign up", "demo", "near me"
- Content format: Landing page, product page, pricing page

**Navigational (N)** — User wants a specific site/brand
- Signals: Brand names, product names, "[brand] login", "[brand] support"
- Content format: Usually not worth targeting unless it's your own brand

When intent is ambiguous, check the actual SERP. If top results are product pages → Transactional. If top results are blog posts → Informational. If top results are comparison articles → Commercial.

## Keyword Opportunity Scoring

After gathering data, score each keyword opportunity to help prioritize:

```
Priority Score = Volume Weight + Difficulty Weight + Intent Weight

Volume:     MSV > 1000 = 3pts | 100-1000 = 2pts | < 100 = 1pt
Difficulty:  KD < 30 = 3pts   | 30-60 = 2pts    | > 60 = 1pt
Intent:     Transactional = 3pts | Commercial = 3pts | Informational = 1pt
```

- **Score 7-9**: High priority — pursue immediately
- **Score 4-6**: Medium priority — build into content calendar
- **Score 1-3**: Low priority — only if topical authority demands it

Quick wins = High volume + Low difficulty keywords. Flag these explicitly.

## AI Overview Impact Assessment

For each keyword, note if it's likely to trigger an AI Overview based on these patterns:

**High AIO risk** (likely reduced CTR):
- Pure informational "what is" / "how to" queries
- Definition-style queries
- Simple factual questions

**Medium AIO risk**:
- "Best of" lists and comparisons
- Multi-step how-to guides

**Low AIO risk** (safer for organic traffic):
- Transactional/purchase-intent queries
- Local service queries ("near me")
- Brand-specific queries
- Complex, nuanced topics requiring depth
- Tool/calculator queries

Flag high-risk keywords so the user can weigh traffic expectations accordingly.

## Advanced Workflows

### Competitor Gap Analysis

1. Identify 3-5 competitors (ask user or find via `competitors` command)
2. For each competitor, use their domain to find ranking keywords
3. Compare against user's current rankings
4. Flag keywords where competitors rank but user doesn't (gaps)
5. Prioritize gaps by opportunity score

### Keyword Clustering

After gathering a large keyword set, group them into clusters:
1. Group by semantic similarity (keywords that would rank on the same page)
2. Assign each cluster a primary keyword (highest volume)
3. Classify cluster intent
4. Map clusters to content types (pillar, cluster, supporting)

### Topical Map Creation

For building a complete topical map from keyword research:
1. Run broad research on seed topics
2. Cluster keywords into topic groups
3. Organize into hub-and-spoke architecture:
   - **Pillar pages** (hubs): Broad topic, high-volume primary keyword
   - **Cluster pages** (spokes): Specific subtopics, long-tail keywords
   - **Supporting pages**: Tangential topics that strengthen authority
4. Define internal linking structure (every spoke links to hub, hubs link to all spokes)
5. Prioritize into growth phases (Phase 1: quick wins, Phase 2: medium difficulty, Phase 3: competitive terms)

## API Cost Reference

| Endpoint | Approximate Cost |
|----------|-----------------|
| Search Volume (per 700 keywords) | ~$0.05 |
| Keyword Suggestions (per request) | ~$0.04 |
| Related Keywords (per request) | ~$0.04 |
| Bulk KD (per 700 keywords) | ~$0.04 |
| SERP Competitors (per request) | ~$0.04 |
| Full `research` command | ~$0.15 |

## Troubleshooting

- **"No credentials found"**: Run the setup command with your Data for SEO login/password
- **HTTP 401**: Invalid credentials — verify at https://app.dataforseo.com
- **HTTP 402**: Insufficient balance — top up at Data for SEO dashboard
- **Empty results**: Keyword may have no data in Google Ads for that location. Try US (2840) if using another country
- **Low search volume**: Data for SEO may return 0 for very niche terms. This doesn't mean the keyword is worthless — it may fall below Google Ads' reporting threshold
