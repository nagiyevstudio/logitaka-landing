# P4 (RECONCILED) — Assembly, after Checkpoint A review

> This **supersedes** the original `P4_assembly.md`. It is reconciled to the EXACT
> files, keys, and line numbers the architect verified in the codebase on 2026-08-02.
> **Role:** Frontend engineer (Astro 7 + React 19).
> **Repo:** `/Users/faignaghiyev/DEV/logitaka.com/frontend`
> **Depends on:** P1, P2, P3, P5, P6 (all reviewed & passed).
> **Bring output back to the architect at Checkpoint B.**

---

## Architect's Checkpoint-A verdict (what's already done & verified)

| Task | Status | Notes |
|------|--------|-------|
| P1 TalkSection + TalkDemo | ✅ PASS | `TalkSection.jsx`, `TalkDemo.jsx`, `talk.css` (imported in `all.css:10`); `HowItWorks.jsx` now imports `TalkDemo`; `index.astro` wires `<TalkSection client:visible />` after Hero. One cosmetic code smell to fix (see Task 6). |
| P2 Hero visual | ✅ PASS | `hero-talk-dark.png` + `hero-talk-light.png` (and `.svg` sources + `build-hero-assets.cjs`) in `public/assets/`. High quality, both themes. **NOTE:** the flash also overwrote `hero-placeholder.png` with the dark image — so right now the light theme wrongly shows the dark hero. Task 2 fixes this. |
| P3 Copy | ✅ PASS | `landing.talk` (3 steps/3 chips), hero headline/CTAs verbatim, 9 FAQ, `modelTeaser` = "40+…", PRO feature = "Structured Meetings", `landing.socialProof` = 3 `[DRAFT]` testimonials + stats (43/8/3 min). |
| P5 Model doc | ✅ PASS | `docs/app/…CATALOG_CURRENT.md` = 52 total / 43 active / 8 enabled providers; keys redacted. |
| P6 Legal | ✅ PASS | No `kapital` left in `privacy.md`/`terms.md`. **Owner must review before deploy.** |
| Build | ✅ PASS | `npm run build` → 5 pages. (Pre-existing `Astro.request.headers` warnings are NOT a regression.) |

---

## Your tasks (do all of these)

### Task 1 — Create `src/pages/models.astro`
Components confirmed present in `src/components/models/`: `ModelsHero`, `CapabilityMatrix`,
`PriceChart`, `Scenarios`, `AdvisorWidget`. Content exists under `models_page` in
`translation.json`. Build `models.astro` mirroring `pro.astro` / `index.astro`
(`MainLayout`, `getT`, `client:load` on interactive widgets). Order:
`ModelsHero → CapabilityMatrix → PriceChart → Scenarios → AdvisorWidget`.
Add a **Models** nav link: update `landing.ui.nav` and `landing.footer.nav`, and wire
the header/footer if they read those keys (check `Header.jsx` / footer).

### Task 2 — Hero: theme-aware image + correct CTAs (`src/components/home/Hero.jsx`)
- **Image (lines 30–34):** currently a single `<img src="/assets/hero-placeholder.png">`.
  Make it theme-aware: show `hero-talk-dark.png` under `[data-theme="dark"]` and
  `hero-talk-light.png` otherwise (two `<img>` toggled by CSS on the theme attribute,
  or a `<picture>` — match whatever pattern the site already uses for theme). Keep the
  `hero-mockup-image` class and footprint. Update `alt` to:
  `Logitaka Talk fullscreen voice workspace — live speech assembling into structured draft cards`.
- **CTAs (lines 18 & 21):**
  - primary `href="#pricing"` → `href="https://app.logitaka.com/app/login"` (label is already `Try Talk Free`).
  - secondary `href="#how-it-works"` → `href="#talk"` (label is already `See how Talk works`).
  - Remove any "Watch 60-Second Demo" text/link if present (none expected).

### Task 3 — Create `src/components/home/SocialProof.jsx` + wire home sections
- **Create `SocialProof.jsx`** (it does NOT exist yet; P3 only added the keys). Read
  `landing.socialProof.testimonials` (array of `{name, role, quote}`) and
  `landing.socialProof.stats` (array of `{value, label}`). Render: a stats band
  (the 3 fact-sheet numbers) + 3 testimonial cards. Use existing classes
  (`section-inner`, `section-eyebrow`, `section-title`, `reveal`, `quote-panel`/panels)
  and theme CSS variables only. Mark the section clearly as containing draft quotes
  (e.g. a small muted note is fine; the `[DRAFT]` prefixes in the data already signal it).
- **Wire confirmed sections in `src/pages/index.astro`** in this order:
  `Hero → TalkSection → Problem → HowItWorks → Capabilities → LiveContext → ValueStack →
   Audience → SocialProof → Pricing → FAQ → FinalCTA`.
  (Components `Capabilities`, `LiveContext`, `ValueStack`, `Audience` all exist.)
  Use `client:visible` on interactive ones, matching the existing pattern.
- **Do NOT** add `DevTeam` / `DevFlow` / `ChatDemo` / `ContextCard` / `ModelTeaser`.

### Task 4 — Model-name fix (the ONE allowed `models_page` edit)
In `translation.json`, under `models_page.compareModels`, change the label
`"Claude Opus 4.8"` → `"Claude Opus 5"`. Change nothing else in `models_page`.

### Task 5 — Pro-page fix (AUTHORIZED EXCEPTION to the "don't touch pro_page" rule)
In `translation.json`, `pro_page.pro_details[0].title` is currently
`"Meeting & Express Meeting"`. Change it to `"Structured Meetings"` (Express Meeting is
superseded). Touch ONLY this string in `pro_page`.

### Task 6 — Cosmetic cleanup in `TalkDemo.jsx` (optional but do it)
Line 272: `` className={`talk-project-frame ${phase >= 5 ? 'solid' : 'solid'}`} `` —
both branches are identical (dead ternary). Simplify to `className="talk-project-frame solid"`.
(The dashed→solid effect is correctly handled by the separate dashed element at lines 314–318.)

---

## Constraints (non-negotiable)
- Do NOT alter `models_page` except Task 4; do NOT alter `pro_page` except Task 5.
- Do NOT rewrite copy owned by P3 (`landing.hero`, `landing.faq`, `landing.talk`,
  `landing.socialProof`, pricing features) — only render/structure it.
- No new npm dependencies. Keep `translation.json` valid JSON. Theme via CSS variables only.

## Housekeeping note (tell the orchestrator)
The handoff briefs were copied into the landing repo as `docs/landing-handoff/`
(untracked). They never deploy (only `frontend/dist/` ships), but decide with the
orchestrator whether to keep them or add to `.gitignore`.

## Acceptance (verify before returning)
- [ ] `/models` renders all five sections; nav + footer link work.
- [ ] Hero shows dark image in dark theme, light image in light theme; no layout shift.
- [ ] Hero CTAs: primary → app URL, secondary → `#talk`.
- [ ] `index.astro` shows the 12 sections in the order above; no DevTeam/ChatDemo/ModelTeaser.
- [ ] `SocialProof` renders 3 draft testimonials + the 43/8/3-min stats band.
- [ ] `models_page` says "Claude Opus 5"; `pro_page` says "Structured Meetings".
- [ ] `TalkDemo` line 272 ternary simplified.
- [ ] `npm run build` passes; dark/light + mobile viewport correct; no console errors.

## Return to orchestrator
- Files changed; confirm the 12-section order and that DevTeam stayed off.
- Build output. Any friction with the P1/P2/P3 artifacts.
