# Social Media Dashboard Builder

## Purpose

Build a standalone local social media schedule dashboard — a single `index.html` file served via Python's built-in HTTP server. The dashboard visualizes scheduled posts across platforms with calendar and list views, platform status badges, and per-post caption display.

Works with any scheduling tool (Blotato, Buffer, Later, Hootsuite, manual) or no tool at all. The data file is plain JSON you populate yourself.

## When to trigger

- "build me a social media dashboard"
- "create a social media schedule dashboard"
- "I want a local dashboard to track my social posts"
- "build the social media dashboard builder"

---

## Step 1 — Ask the user these questions first

Before building anything, ask:

1. **Brand/page name** — what should appear in the header? (e.g., "Acme Co Social")
2. **Platforms** — which platforms do they post to? (YouTube, TikTok, Instagram, Threads, LinkedIn, X/Twitter, Facebook, Pinterest, etc.)
3. **Caption groups** — do they use the same caption everywhere, or different captions by platform? If different, how do they group them? (e.g., "hashtag platforms" vs "no-hashtag platforms")
4. **Scheduling tool** — are they using Blotato, Buffer, Later, or something else? Or manual/none? This determines whether to include a `schedule_ids` field for tracking external IDs.
5. **Where to save** — what folder should the project live in?

Label any assumptions you make and confirm before writing files.

---

## Step 2 — Scaffold the project

Create this file structure at the user's chosen path:

```
[project-folder]/
├── index.html
├── data/
│   └── schedule.json
└── README.md
```

Serve with:
```bash
cd "[project-folder]" && python3 -m http.server 4545
```

Then open: `http://localhost:4545`

---

## Step 3 — Build index.html

Single self-contained file. Vanilla JS only — no React, no Vue, no build step. Styles in a `<style>` block. One `fetch('data/schedule.json')` call on load.

### Design
- Dark theme: `background: #111827`, surfaces `#1a2535`, accent color user's choice (default gold `#FFD700`)
- Google Fonts: Inter (weights 400, 500, 600, 700)
- Responsive enough to use on a laptop

### Header
- Brand name (from user input) on the left
- Status pill center or right: green "SCHEDULED" if `status === "scheduled"`, amber "DRAFT" if not
- View toggle button: **Calendar** / **List**

### Stats bar
Three stat cards below the header:
- Total Posts
- Platforms Active (count of platforms in the data)
- Date Range (`start_date → end_date`)

If the user's tool tracks schedule IDs, add a fourth card: **Scheduled** (count of posts with at least one schedule ID).

### Calendar view
- Monthly grid (Sun–Sat)
- Month navigation tabs if posts span multiple months
- Each day with a post shows: post title (truncated), platform dots
- Platform dot colors (use these or let user override):
  - YouTube: `#FF0000`
  - TikTok: `#ff2d55`
  - Instagram: `#C13584`
  - Threads: `#1a1a1a` (outlined)
  - LinkedIn: `#0A66C2`
  - X/Twitter: `#888`
  - Facebook: `#1877F2`
  - Pinterest: `#E60023`
  - Default/other: `#6b7280`
- If tracking schedule IDs: dot is full color = scheduled, dim/outlined = pending
- If not tracking IDs: all dots are full color (post exists = it's on the calendar)
- Past dates: faded (opacity 0.4)
- Today: highlighted border
- Click a day to expand inline and show post title + platform badges

### List view
- One row per post, sorted by date ascending
- Each row: date | day number (if applicable) | post title | platform badges | expand arrow
- Expand row to show captions (one labeled block per caption group or platform)
- Caption blocks show character count
- Platform filter chips at top (All | YouTube | LinkedIn | etc.)
- If tracking schedule IDs: badge is green = has ID, amber = no ID yet

### Error state
If `fetch()` fails, show a clear overlay:
```
Can't load data/schedule.json

Either the file doesn't exist yet, or you're opening index.html directly 
instead of through the server.

Run: python3 -m http.server 4545
Then open: http://localhost:4545
```

---

## Step 4 — Build data/schedule.json

Generate a starter JSON file based on the user's answers. Schema:

```json
{
  "brand": "Your Brand Name",
  "last_updated": "YYYY-MM-DD",
  "status": "draft",
  "timezone": "America/Chicago",
  "post_time_local": "09:00",
  "start_date": "YYYY-MM-DD",
  "end_date": "YYYY-MM-DD",
  "platforms": ["youtube", "instagram", "linkedin", "twitter"],
  "caption_groups": {
    "group_a": ["youtube", "instagram", "tiktok", "threads"],
    "group_b": ["linkedin", "twitter"]
  },
  "accounts": {
    "youtube":   { "name": "Your Channel" },
    "instagram": { "username": "yourhandle" },
    "linkedin":  { "name": "Your Name" },
    "twitter":   { "username": "yourhandle" }
  },
  "posts": [
    {
      "id": 1,
      "date": "YYYY-MM-DD",
      "title": "Your first post title",
      "media_url": "",
      "captions": {
        "group_a": "Caption for visual/hashtag platforms.\n\n#hashtag1 #hashtag2",
        "group_b": "Caption for professional/no-hashtag platforms."
      },
      "status": "draft",
      "schedule_ids": {}
    }
  ]
}
```

**Notes on the schema:**
- `caption_groups` is optional — if the user uses one caption everywhere, replace `captions` on each post with a single `"caption"` string field
- `schedule_ids` is optional — omit entirely if the user isn't tracking external scheduler IDs. If included, it maps platform key → scheduler's UUID/ID string
- `status` at the root level: `"draft"` or `"scheduled"`
- `status` per post: `"draft"`, `"scheduled"`, `"posted"`, `"paused"`
- `platforms` array drives which columns/badges appear — only include what the user actually uses

**If user is using Blotato specifically:** `schedule_ids` values are Blotato schedule UUIDs returned after calling `blotato_update_schedule`. The dashboard reads these to determine scheduled vs. pending status per platform.

**If user has no scheduling tool:** Remove `schedule_ids` from the schema entirely. All posts are treated as "on the calendar" and shown in full color.

---

## Step 5 — Build README.md

Short file covering:
1. How to start the server
2. How to add a new post (edit schedule.json)
3. What the status values mean
4. How to update schedule IDs after scheduling (if applicable)

---

## Rules

- **Never break the JSON.** Use Read to load, then Edit for minimal changes. Never rewrite the whole file from scratch.
- **No external JS dependencies.** No CDN scripts. Vanilla only.
- **No build step.** The user should be able to open the folder and run one command.
- **Platforms are user-defined.** Don't hardcode Ryan Doser or any specific brand's accounts. Use whatever the user provided in Step 1.
- **Caption groups are flexible.** Some users post one caption everywhere. Some split by platform. Some split into 2 groups. Build to match what the user actually needs.
- **Schedule ID tracking is optional.** Don't force it on users who aren't using an external scheduler. If omitted, simplify the UI accordingly (no pending/scheduled distinction, no schedule ID column).
- After building, tell the user: "Open http://localhost:4545 after running the server command. Edit `data/schedule.json` to add your posts."
