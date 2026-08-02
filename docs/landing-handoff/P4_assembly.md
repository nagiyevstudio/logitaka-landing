# P4 — Assembly: `/models` page + wire sections + Opus 5 fix

**Role:** Frontend engineer (Astro 7 + React 19).
**Repo:** `/Users/faignaghiyev/DEV/logitaka.com/frontend`
**Wave:** 2 — **depends on P1, P2, P3 being merged.** The architect issues a reconciled
version of this brief at Checkpoint A (real file names / keys). Use that if provided.

---

## Goal
Finish the structural integration so the landing is whole and the wedge is wired:
1. Create the missing `/models` page from existing components.
2. Wire the hero visual delivered by P2.
3. Re-enable the confirmed home sections.
4. Fix CTAs and the one model-name error.

---

## Task 1 — Create `src/pages/models.astro`
- Components already exist in `src/components/models/`: `ModelsHero`, `PriceChart`,
  `CapabilityMatrix`, `Scenarios`, `AdvisorWidget`.
- Localized content already exists under `models_page` in `translation.json`.
- Build `models.astro` following the exact pattern of `pro.astro` and `index.astro`:
  `MainLayout`, `getT`, and `client:load` on the interactive components.
- Compose the five components in a sensible order (Hero → CapabilityMatrix →
  PriceChart → Scenarios → AdvisorWidget, or as the content dictates).
- Add a **`Models`** nav link: update `landing.ui.nav` and `landing.footer.nav`
  in `translation.json`, and wire the header/footer if they read those keys.

## Task 2 — Wire the hero visual (from P2)
- P2 delivered `hero-talk-dark.png` / `hero-talk-light.png` (confirm exact names from
  the Checkpoint-A summary). In `Hero.jsx`, replace the single
  `/assets/hero-placeholder.png` `<img>` with theme-aware rendering:
  show the dark asset under `[data-theme="dark"]` and the light asset otherwise
  (use a `<picture>`/CSS or two imgs toggled by the theme attribute — match however
  the site already does theme switching). Keep the `hero-mockup-image` class/footprint.
- Update the `alt` to describe the Talk interface.

## Task 3 — Re-enable confirmed home sections in `src/pages/index.astro`
Per the fact-sheet, these are confirmed current and may be re-enabled:
`Capabilities`, `LiveContext`, `Audience`, `ValueStack`, and the new `SocialProof`
(from P3) + `TalkSection` (from P1, if not already wired).
- Import and place them in a coherent order. Suggested:
  `Hero → TalkSection → Problem → HowItWorks(TalkDemo) → Capabilities → LiveContext →
   ValueStack → Audience → SocialProof → Pricing → FAQ → FinalCTA`.
- **Do NOT re-enable `DevTeam`/`DevFlow`** unless the architect confirms (Premium-only
  context; keep the page wedge-focused).
- For `ValueStack`: the `z.ai Pro ~$16` line is the only unverified price — keep it but
  ensure the `disclaimer` field is a short honest note (e.g. "Prices as of Aug 2026;
  approximate."). Do not change the other six (they are verified).

## Task 4 — CTA + model-name fixes
- Remove any "Watch 60-Second Demo" dead link. Hero secondary CTA → `#talk`
  (P3 sets the label `See how Talk works`). Hero primary CTA → the app URL
  `https://app.logitaka.com/app/login` (label `Try Talk Free`, set by P3). Confirm the
  `href`s in `Hero.jsx` match (`#pricing`/`#how-it-works` → app URL / `#talk`).
- **The ONE allowed `models_page` edit:** in `models_page.compareModels`, change
  `"Claude Opus 4.8"` → `"Claude Opus 5"`. Change nothing else in `models_page`.

---

## Constraints (non-negotiable)
- Do NOT alter `models_page` content except the single Opus fix above.
- Do NOT alter `pro_page`.
- Do NOT rewrite copy owned by P3 (`landing.hero`, `landing.faq`, `landing.talk`,
  `landing.socialProof`, pricing features) — only wire/structure it.
- No new npm dependencies. Keep `translation.json` valid JSON.

## Acceptance
- [ ] `/models` renders all five sections; nav + footer link work.
- [ ] Hero shows the Talk mockup, theme-aware, no layout shift.
- [ ] `index.astro` shows the re-enabled sections in a coherent order; no DevTeam.
- [ ] Hero CTAs: primary → app URL, secondary → `#talk`; no dead "60-Second Demo" link.
- [ ] `models_page` says "Claude Opus 5".
- [ ] `npm run build` passes; dark/light + mobile viewport correct; no console errors.

## Return to orchestrator
- Files changed; which sections were re-enabled (and confirmation DevTeam stayed off).
- Build output. Any integration friction with P1/P2/P3 artifacts.
