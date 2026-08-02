# FACT-SHEET — Logitaka (verified against production code, 2026-08-02)

> **This is the single source of truth for every claim on the landing.**
> Flash models: if a fact you need is not here, STOP and ask the architect.
> Do not invent numbers, features, or model names.

Source: `OS/apps/frontend/src/server/*`, `plan-capabilities.ts`, `navigation.ts`,
`provider-config.json` (updated 2026-08-01), live web price checks (Aug 2026).

---

## 1. Features that are really live

| Feature | Live? | Tier gate |
|---------|-------|-----------|
| **Talk** (voice wedge) | ✅ | **Not gated → ALL tiers** |
| Talk session limits | ✅ | **3 minutes OR 8 operations**, whichever first |
| Talk modes | ✅ | Compose / Read / Work-Handoff; barge-in; reconnect; draft preservation |
| **Inbox** (files / photos / audio) | ✅ | `canUseInbox` → **Pro+** |
| **Focus / Pomodoro** ("Pomodoro workspace with AI companion") | ✅ | `canUseDiscussion` → **Pro+** |
| **Daily AI Briefs** | ✅ | `canUseCases` → **ALL tiers** |
| **Telegram sync** (briefs delivered via Telegram) | ✅ | with briefs |
| **Comic Strip** (brief visual) | ✅ | part of briefs |
| **Discussion** | ✅ | `canUseDiscussion` → **Pro+** |
| **Meetings** (structured) | ✅ | `canUseMeetings` → **Pro+** |
| **DevTeam / GitHub** | ✅ | `canUseDevTeam` → **Premium** |
| **AI Strategist Insights** | ✅ | `canUseIntelligenceSuite` → **Premium** |
| **Personal AI Profiler** | ✅ | `canUseIntelligenceSuite` → **Premium** |
| **Project Health + Risk Radar** (= marketing "Independent AI Analytics / Anti-Yes-Man") | ✅ | analytics tab → **Premium** |
| **Pulse** (dashboard) | ✅ | — |
| **Calendar / Google Calendar** | ✅ | — |

### Naming rules for copy
- There is **no separate "Critic" product**. The marketing line "Independent AI
  Critic (The Anti-Yes-Man)" maps to **Project Health Analyzer + Risk Radar**.
  Do not describe it as a standalone product.
- **Express Meeting is SUPERSEDED** as a user-facing product. It now only powers
  Inbox updates internally. **Never advertise "Express Meeting".** Use "Structured
  Meetings" or just "Meetings".
- **Talk is the wedge.** It is free-tier accessible and must lead the narrative.

---

## 2. Models & providers (config 2026-08-01)

- **43 active models** (52 total), **8 enabled providers**:
  `moonshot, openai, google, zai, alibaba, mistral, openrouter, xiaomi`
- Present: GPT-5.6 Sol/Terra/Luna, **Claude Opus 5**, Claude Sonnet 5, Claude Fable 5,
  Gemini 3.x, Grok 4.5, GLM-5.2, Qwen 3.7, Kimi K2.6 / K3, Mistral Large 3 / Small 4,
  DeepSeek v4, MiniMax M3, Mimo v2.5 — plus image / realtime-voice / TTS models.
- **Current flagship is Claude Opus 5** (the landing's "Claude Opus 4.8" is wrong → fix to "Opus 5").
- Landing `modelTeaser` says "10+ Top AI Models" → **understated**. Prefer "40+ models from 8 providers".
- Landing `context.models` = `[OpenAI, Google, Anthropic, Zhipu, Kimi]` → **incomplete**;
  missing Mistral, Alibaba/Qwen, xAI/Grok, Xiaomi, OpenRouter, DeepSeek.

---

## 3. Tiers (authoritative: `plan-capabilities.ts`) — landing prices are current

| | **Starter $4.99** | **Pro $9.99** | **Premium $24.99** |
|---|---|---|---|
| Projects | 5 | 10 | unlimited |
| People / team | 0 | 5 | unlimited |
| Talk, Briefs, Calendar | ✅ | ✅ | ✅ |
| Discussion, Focus, Inbox, Meetings, Library, Search, Archive, model choice | — | ✅ | ✅ |
| DevTeam/GitHub, Strategist, Profiler, AI Analytics | — | — | ✅ |

**Only landing mismatch:** Pro feature `"Meeting & Express Meeting Processes"` →
remove "Express Meeting", use `"Structured Meetings"`. Everything else matches code.

---

## 4. Competitor prices (ValueStack) — web-verified Aug 2026

| Service | Landing | Actual | Verdict |
|---------|---------|--------|---------|
| ChatGPT Plus | $20 | $20 | ✅ |
| Claude Pro | $20 | $20 ($17 annual) | ✅ |
| Gemini AI Pro | $19.99 | $19.99 | ✅ |
| SuperGrok | $30 | $30 | ✅ |
| Kimi Pro | $19 | from $19 | ✅ |
| Le Chat Pro | $14.99 | $14.99 | ✅ |
| z.ai Pro | ~$16 | ambiguous (coding plans $30+) | ⚠ soften / verify |

"Total separately ~$140" is consistent. **6/7 exact; z.ai is the only soft spot.**

---

## 5. Talk — the wedge (key messages, architect-approved, immutable)

- **What:** fullscreen voice workspace; natural speech becomes structured draft cards
  (tasks, events, decisions, notes, open questions) **in real time**, across multiple projects.
- **Limits:** up to 3 minutes or 8 operations per batch.
- **Deterministic confirm:** what you see is exactly what gets applied — **no second LLM pass**.
- **Nothing writes to the workspace until you confirm.**
- **Corrections happen in place** (no duplicates); missing fields show as empty slots.
