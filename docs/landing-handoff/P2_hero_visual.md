# P2 — Hero visual: Logitaka Talk fullscreen UI mockup

**Role:** Product / UI designer.
**Repo (reference only):** `/Users/faignaghiyev/DEV/logitaka.com/frontend`
**Wave:** 1 (no dependencies). **Bring output back to the architect at Checkpoint A.**

---

## Goal
Replace the placeholder hero image (`frontend/public/assets/hero-placeholder.png`)
with a premium mockup of the **Logitaka Talk fullscreen voice interface**.
This is the first thing visitors see — it must instantly read as
*"a voice workspace that structures your speech into cards, live."*

**Do NOT depict a generic dashboard, a chatbot, or a to-do list.** Depict Talk.

---

## What to show (based on the real product)

A fullscreen dark workspace, framed as an app window:

1. **Top bar:** close button · `Talk` brand with a small "listening" indicator · sound icon.
2. **Live transcript strip** under the top bar — one line of recognized speech, e.g.
   `"Call the designer tomorrow at 3, and move the SMM task to Friday…"`.
3. **Center — project frames with draft cards:**
   - a **solid** frame labelled `Logitaka` holding a **task card** and an **event card**
     (event shows a time chip like `15:00`);
   - a **dashed** frame labelled `Project ?` with an empty card whose missing
     title/date appear as **dashed empty slots** (this is a key differentiator — show it);
   - one card **mid-correction**: an old date struck through, a new date beside it.
4. **Bottom bar:** stop button · a live **waveform** · countdown `2:14` · counter
   `3 / 8` · an emphasized **Apply** button.

The composition should make the "speech → structured cards → confirm" story legible
at a glance. A subtle flow from the transcript toward the cards helps.

---

## Brand / style (match the landing exactly)

Design language: **warm minimalist, glassmorphism, generous rounding.**

Tokens from `frontend/src/styles/variables.css`:
- Accent (the ONLY bright color): **`#ff4500`** (orange-red), glow variant `#ff5a1f`.
- Dark theme (preferred for the hero): background `#0d1117`, surface
  `rgba(22,27,34,0.72)`, text `#e8edf2`, muted `#8897a4`, faint `#5a6a76`,
  lines `rgba(176,188,199,0.10)`.
- Light theme: background `#f0ede9` (warm paper), text `#1e2a30`, muted `#6e808d`.
- Corner radius **20px**; glass surfaces with soft borders; soft layered shadows.
- Tier accents exist (teal `#00f2fe`, gold `#ffd700` in dark) — use sparingly if at all;
  the hero should stay accent-`#ff4500`-forward and calm.

Typography: clean sans, high headline contrast, restrained body. No decorative fonts.

---

## Deliverables
- `hero-talk-dark.png` and `hero-talk-light.png` at **2x** resolution
  (target display width ~1100–1240px), placed in `frontend/public/assets/`.
- The editable **source file** (Figma/SVG/PSD) alongside, or a link to it.
- Keep the same aspect ratio/footprint as the current `hero-mockup-image` so the
  Hero layout does not shift (check `Hero.jsx` / `landing.css`).

## Constraints
- No stock imagery, no fake third-party logos.
- No text errors — the UI strings above must be spelled exactly.
- Do NOT modify any code. (The architect will wire the new asset into `Hero.jsx`
  during assembly if the filename differs from `hero-placeholder.png`.)

## Acceptance
- [ ] Reads as a voice workspace structuring speech into cards (not a dashboard/chatbot).
- [ ] Shows: transcript, solid `Logitaka` frame, dashed `Project ?` frame with empty
      slots, one correction, bottom bar with waveform + `2:14` + `3 / 8` + Apply.
- [ ] Correct in dark and light; matches tokens above; accent is `#ff4500`.
- [ ] Crisp at 2x; no layout-shift vs. the current hero footprint.

## Return to orchestrator
- Final file path(s) + source file.
- Confirmation of the exact filename(s) used (so assembly can wire them).
