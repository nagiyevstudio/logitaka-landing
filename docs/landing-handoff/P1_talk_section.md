# P1 — Build `TalkSection` + `TalkDemo` (the wedge centerpiece)

**Role:** Frontend engineer (Astro 7 + React 19).
**Repo:** `/Users/faignaghiyev/DEV/logitaka.com/frontend`
**Wave:** 1 (no dependencies). **Bring output back to the architect at Checkpoint A.**

---

## Goal
Make Logitaka **Talk** — the fullscreen voice workspace — the visible centerpiece of
the landing. Build a new `TalkSection` (placed right after the Hero) and an animated
`TalkDemo` that replaces the current text-based `ChatDemo` inside `HowItWorks`.

The single feeling to convey: **you speak, and structured cards build themselves live;
you confirm exactly what you see.**

---

## Conventions you MUST match (verified in the codebase)

- i18n: `import { useTranslation } from 'react-i18next'`; read strings via
  `t('landing.talk.…')`; arrays via `t('…', { returnObjects: true })`.
- Section skeleton (copy this pattern from `HowItWorks.jsx` / `Hero.jsx`):
  ```jsx
  <section id="talk">
    <div className="section-inner split-grid"> … </div>
  </section>
  ```
- Eyebrow / kicker pattern:
  ```jsx
  <div className="section-eyebrow">
    <span className="section-kicker">01.5</span>
    <span className="section-kicker-line" aria-hidden="true"></span>
  </div>
  <h2 className="section-title medium reveal">…</h2>
  ```
- Reveal-on-scroll: add `className="reveal"` to animated blocks (observer lives in
  `MainLayout.astro` — do not re-implement it).
- Buttons: `button button-solid` / `button button-ghost`.
- Panels: `quote-panel`, `muted-label`, `section-copy`, `bullet-list`.
- Theme: use ONLY CSS variables from `src/styles/variables.css`. Key tokens:
  `--bg --surface --surface-strong --text --muted --faint --line --line-strong
  --accent (#ff4500) --accent-strong --accent-dim --radius (20px) --glass
  --glass-border --shadow-card --shadow-soft --shadow-accent`.
  Never hardcode colors. Must look correct in both light and dark (`[data-theme="dark"]`).
- Put new styles in a NEW file `src/styles/talk.css` and import it the same way the
  other section CSS is imported (check how `chat-demo.css` / `landing.css` are pulled in).

---

## Deliverable 1 — `src/components/home/TalkSection.jsx`

Layout: **asymmetric split**, not three equal cards.
- Left (sticky on desktop): the 3-step list below, each step = number + title + body.
- Right: the animated `<TalkDemo />`.
- Below the split: a horizontal strip of 3 differentiators rendered as inline **chips**
  (small pills), not cards.

### Copy (put under a NEW `landing.talk` namespace in `translation.json` — use EXACTLY this)
```json
"talk": {
  "eyebrow": "The wedge · Logitaka Talk",
  "title": "One voice session. A fully structured day.",
  "subtitle": "Open Talk. Speak. Watch live draft cards build themselves across your projects — tasks, events, decisions, notes. Confirm once, and it's real.",
  "steps": [
    { "title": "Speak", "body": "Open fullscreen Talk and talk naturally. One session covers up to 3 minutes and 8 actions — across multiple projects." },
    { "title": "Watch it structure", "body": "The live model assembles your words into draft cards in real time. Missing fields show as empty slots. Wrong project? Say so — it corrects in place, no duplicates." },
    { "title": "Confirm", "body": "Review the batch. Hit Apply. Logitaka executes exactly what you saw — no second AI pass, no surprises." }
  ],
  "chips": [
    "Deterministic confirm — what you see is exactly what gets applied",
    "Multi-project scopes in one session",
    "Nothing writes to your workspace until you confirm"
  ]
}
```

Wire `TalkSection` into `src/pages/index.astro` **immediately after `<Hero />`**.

---

## Deliverable 2 — `src/components/home/TalkDemo.jsx`

A self-contained animated mock of the fullscreen Talk UI, inside a phone/desktop frame.
Pure CSS + JSX + `setInterval`/`requestAnimationFrame`. **No new dependencies.**

### Structure of the mock frame
- **Top bar:** close dot · `Talk` brand + a "listening" pulse dot · sound icon.
- **Transcript strip:** one line of live speech that types out character-by-character.
- **Center:** draft cards appearing one by one inside project frames:
  - a solid frame labelled `Logitaka` containing a **task card** and an **event card**
    (event shows a time chip, e.g. `15:00`);
  - a **dashed** frame labelled `Project ?` that resolves into a solid `Logitaka`
    frame (project binding);
  - one **correction** card: old date struck through → new date beside it
    (e.g. `~~Thu~~ → Fri`).
  - Cards show empty dashed slots (missing title/date) that later fill in.
- **Bottom bar:** stop button · live waveform bars · countdown timer `3:00 → 2:14`
  (ticking) · ops counter `3 / 8` · an `Apply` button.

### Animation loop (≈ 12–16 s, then loop)
1. Transcript types: `"Call the designer tomorrow at 3, and move the SMM task to Friday in Logitaka"`.
2. Cards appear one by one (task, then event with time, then the correction).
3. The dashed `Project ?` frame solidifies into `Logitaka`.
4. An empty date slot fills in.
5. Timer ticks down; counter rises to `2 / 8` then `3 / 8`.
6. Batch summary appears: `3 changes · 1 project`.
7. `Apply` button pulses (accent glow `--shadow-accent`), cards flip to `Applied ✓`.
8. Short pause → reset → loop.

### Hard requirements
- Respect `prefers-reduced-motion`: render a **static** fully-populated state, no loop.
- Use only theme CSS variables; correct in light + dark.
- Accessible: the frame is decorative — give it `role="img"` and an
  `aria-label` describing the Talk flow; hide inner animation nodes from AT.
- No console errors; no layout shift on load.

---

## Deliverable 3 — swap `ChatDemo` out of `HowItWorks`
- In `HowItWorks.jsx`, replace `import ChatDemo from './ChatDemo'` and its usage with
  `import TalkDemo from './TalkDemo'` (same slot: `transformation-visual-slot`).
- **Do NOT delete `ChatDemo.jsx` or `chat-demo.css`** — just stop importing them.

---

## Constraints (non-negotiable)
- Do NOT touch `models_page` or `pro_page` content in `translation.json`.
- Do NOT add npm dependencies.
- Do NOT change Hero, Pricing, FAQ, or FinalCTA.
- Keep `translation.json` valid JSON.

## Acceptance (verify before returning)
- [ ] `npm run build` passes (run it from `frontend/`).
- [ ] `TalkSection` renders right after Hero; `TalkDemo` loops smoothly.
- [ ] `prefers-reduced-motion` shows a static state.
- [ ] Light + dark themes both correct; mobile viewport sane.
- [ ] No console errors; no hardcoded colors.

## Return to orchestrator
- List of files created/changed.
- The exact translation keys you added (confirm they match the spec above).
- Any deviation from this spec and why.
