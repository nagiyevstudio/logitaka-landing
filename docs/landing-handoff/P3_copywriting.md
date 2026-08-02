# P3 — Landing copywriting (Talk-first)

**Role:** SaaS copywriter. Valley style: short, benefit-first, concrete, zero fluff.
**Language:** English only.
**File you edit:** `/Users/faignaghiyev/DEV/logitaka.com/frontend/src/locales/en/translation.json`
**Wave:** 1. **Bring output back to the architect at Checkpoint A.**

---

## Read first (mandatory)
`00_FACT_SHEET.md` in this folder is the **only** source of facts. Rules:
- If a claim is not in the fact-sheet, **do not write it**.
- Never invent model names, numbers, prices, or features.
- **Never mention "Express Meeting"** (superseded). Use "Structured Meetings".
- There is **no standalone "Critic" product** — "Independent AI Analytics" =
  Project Health + Risk Radar. Don't personify it as a separate product.
- **Talk is the wedge** and is available on every tier — it must lead the story.

## Immutable (architect-approved — do NOT rewrite, build around them)
These strings are final. You may move/place them but not alter the wording:

- Hero headline: `Speak your mind. Watch it become a plan.`
- Hero subheadline: `Logitaka Talk is a fullscreen voice workspace. Speak naturally — tasks, events, and decisions assemble into live draft cards as you talk. Review the batch. Hit confirm. It's on your roadmap. No typing. No forms. No second pass.`
- Hero CTAs: primary `Try Talk Free`; secondary `See how Talk works`.
- The entire `landing.talk` namespace (owned by P1 — do not touch it).
- The 4 Talk FAQ answers below (keep verbatim).

---

## Tasks

### 1. Hero microcopy
- Set `landing.hero.headline`, `landing.hero.subheadline`, `landing.hero.ctaPrimary`,
  `landing.hero.ctaSecondary` to the immutable strings above.
- Tighten `landing.hero.supporting` (if present) to the Talk-first story.
- Update hero stats to Talk-specific (suggested): `3 min — one voice session`,
  `8 — actions per batch`, `0 — typing required`. Keep the existing stats structure/keys.

### 2. FAQ — expand `landing.faq.items` to ~9 entries
Keep these 4 verbatim, then add ~5 more:
- `What is Logitaka Talk?` → `A fullscreen voice workspace. Speak naturally and Logitaka assembles your words into structured draft cards — tasks, events, decisions, notes — in real time. Review and confirm to apply.`
- `Does it write to my projects while I speak?` → `No. Everything you see while speaking is a draft. Nothing touches your workspace until you hit Apply — then Logitaka executes exactly the batch you reviewed, with no second AI pass.`
- `What if it misunderstands me?` → `Corrections happen in place. Say "not tomorrow, Friday" and the card updates. Missing fields show as empty slots you can fill with your next phrase.`
- `How long is a session?` → `Up to 3 minutes or 8 actions per batch, whichever comes first. Apply, then start a new one.`

Suggested additional questions (answer strictly from the fact-sheet):
- Which AI models power it? (43 active models, 8 providers; routed by task complexity)
- Is Logitaka a chatbot? (No — deterministic confirm; no second AI pass on apply)
- What plans include Talk? (All tiers; Inbox/Focus/Discussion are Pro+; DevTeam/Strategist/Profiler/AI Analytics are Premium)
- How is my data handled? (keep factual, no invented certifications — if unsure, keep generic and flag to architect)
- Who is it for? (founders/managers/freelancers who think faster than they type)

### 3. Pricing features — align `landing.pricing.cards[*].features` with the fact-sheet tiers
- Starter $4.99 / Pro $9.99 / Premium $24.99 (prices are correct — keep them).
- **Pro:** replace `"Meeting & Express Meeting Processes"` with `"Structured Meetings"`.
- Verify each feature maps to the fact-sheet tier table; fix any that don't.
- Name Talk explicitly in Starter (it currently says "Voice assistant" → `"Logitaka Talk voice workspace"`).

### 4. Model teaser numbers
- `landing.modelTeaser.title`: change `"10+ Top AI Models"` → `"40+ Top AI Models"`
  (keep the rest of the teaser; the cost-routing message is good).

### 5. Social proof (new) — add a `landing.socialProof` namespace
- 3 testimonial placeholders. **Label them clearly as drafts** (e.g. prefix the name
  field with `[DRAFT]`) so they are obviously replaced with real quotes later.
- A stats band using ONLY fact-sheet numbers (e.g. `43 AI models`, `8 providers`,
  `3-min voice sessions`). Do not invent user counts or ratings.

### 6. Supporting sections
- Tighten `landing.transformation.*` to the Talk-first story (this section now hosts
  the TalkDemo via P1 — keep its keys, sharpen the words).

---

## Constraints (non-negotiable)
- Keep `translation.json` **valid JSON** (validate before returning).
- Do NOT touch `models_page` or `pro_page` (except: you may leave `models_page` alone —
  the Opus 4.8→5 fix is owned by P4).
- Do NOT touch the `landing.talk` namespace (owned by P1).
- No emoji. No "unleash / supercharge / game-changer / revolutionize".
- No invented facts, prices, certifications, or customer names.

## Acceptance
- [ ] `translation.json` is valid JSON; `npm run build` passes.
- [ ] Immutable strings present verbatim; 4 Talk FAQ answers verbatim.
- [ ] No "Express Meeting" anywhere; no standalone-"Critic" framing.
- [ ] Every factual claim traceable to `00_FACT_SHEET.md`.
- [ ] Social-proof entries clearly marked `[DRAFT]`.

## Return to orchestrator
- Diff summary: which keys changed/added.
- Any place you wanted a fact that was NOT in the sheet (list them for the architect).
