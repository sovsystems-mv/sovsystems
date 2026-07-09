---
name: crosscheck
description: Cross-reference Claude Code's output against OpenAI and Google's latest models via OpenRouter. Use when user says "crosscheck", "get a second opinion", "ask Gemini", "ask GPT", "ask OpenAI", "cross-reference this", or "what would GPT/Gemini think". Never call external models without the user's direct intention to do so.
version: 1.0.0
---

# Crosscheck

Cross-reference Claude Code's output (Opus 4.6 / Sonnet 4.6) against OpenAI and Google's latest models via OpenRouter. Get second opinions without leaving Claude Code.

## Important

- Never call an external model without the user explicitly requesting it
- Always present which model(s) will be consulted and get confirmation before making API calls
- Read `references/config.md` for available models and default task routing

## How It Works

1. User requests a second opinion (explicitly or via `/crosscheck`)
2. Determine which model(s) to consult based on the task type and config defaults
3. Package the relevant context (code snippets, problem statement, what's been tried)
4. Run `scripts/query_model.py` to send the query to the external model
5. Present the response with Claude Code's own synthesis

## Invocation Methods

- `/crosscheck` — opens the crosscheck workflow, asks what to consult on
- "Ask Gemini about..." / "Ask GPT about..." / "Ask OpenAI about..." — routes to the named provider
- "Get a second opinion on..." — queries both OpenAI and Google by default
- "Cross-reference this with GPT and Gemini" — explicit dual-model query

## Step-by-Step Process

### Step 1: Identify the Task

Determine the task category:
- **bug-fix**: Error diagnosis, logic bugs, failing tests
- **frontend**: UI/UX review, CSS issues, layout problems, design feedback
- **copywriting**: Copy review, messaging, tone, persuasion
- **architecture**: System design, refactoring decisions, code organization
- **quick-check**: Fast sanity check on any topic
- **general**: Anything that doesn't fit above

### Step 2: Select Model(s)

- Read `references/config.md` for model IDs and defaults
- If user named a specific provider (GPT, Gemini), query just that one
- If user said "get a second opinion" or "cross-reference", query **both** OpenAI and Google
- For quick/cheap checks, use the mini/flash variants

### Step 3: Package Context

When sending context to another model, always include:
1. **Problem statement** — what specifically needs review or help
2. **Relevant code snippets** — the actual code, not just descriptions
3. **What's been tried** — approaches attempted and why they didn't work (if applicable)
4. **Constraints** — any requirements or limitations

Build the prompt as a single string. Keep it focused — don't dump the entire codebase.

### Step 4: Query the Model

Run the script:
```bash
python3 "$(find ~/.claude -path '*/crosscheck/scripts/query_model.py' 2>/dev/null | head -1)" \
  --model "MODEL_ID" \
  --prompt "THE_PACKAGED_PROMPT" \
  --system "You are an expert reviewer. Be specific and actionable in your feedback."
```

Adjust the `--system` prompt based on the task:
- **bug-fix**: "You are an expert debugger. Analyze the code and identify the root cause. Be specific about what's wrong and how to fix it."
- **frontend**: "You are a senior frontend engineer and UI/UX expert. Review the code for best practices, accessibility, responsiveness, and visual polish. Score issues by priority."
- **copywriting**: "You are an expert copywriter. Review for clarity, persuasion, tone, and engagement. Score the copy and suggest specific rewrites."
- **architecture**: "You are a senior software architect. Review for scalability, maintainability, and design patterns. Flag any anti-patterns."

### Step 5: Present and Synthesize

After receiving the external model's response:

1. **Present the raw response** — clearly labeled with the model name (e.g., "Gemini 2.5 Pro says:")
2. **State agreement or disagreement** — Claude Code's own take on the advice
3. **Highlight the best suggestions** — pull out the most actionable items
4. **Flag anything questionable** — if the external model suggested something risky or wrong
5. **Propose a plan** — combine the best of both perspectives

Format:
```
## [Model Name] Response
[raw response]

## Claude Code Synthesis
- **Agree on**: [items where both models align]
- **Disagree on**: [items where Claude Code has a different take, with reasoning]
- **Top priority fixes**: [ordered list of what to do first]

Want me to implement these changes?
```

### Multi-Model Queries

When consulting multiple models on the same task:
- Run queries in parallel (multiple bash calls)
- Present each response separately
- Synthesize across all responses, noting where models agree and disagree
- The strongest signal is when multiple independent models flag the same issue

## Updating the Config

The model landscape changes fast. When a new model drops or you find a model works better for a task, just tell Claude Code to update `references/config.md`. Say things like:
- "OpenAI released GPT-6, update the crosscheck config"
- "Switch to Gemini 4 Pro as the default Google model"
- "Add DeepSeek as a third provider"
