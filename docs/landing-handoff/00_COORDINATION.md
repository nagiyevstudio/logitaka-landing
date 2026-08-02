# ORCHESTRATION PROTOCOL — Logitaka Landing Update (Talk Wedge)

> Read this first. You are the **orchestrator**. The architect (Qoder) coordinates
> through you. Flash models execute the bounded tasks `P1`–`P5`.
> Hand each `P*.md` file to a fresh flash model. Come back to the architect at the
> checkpoints below — do **not** skip them.

## Roles

| Role | Who | Does |
|------|-----|------|
| Orchestrator | **you** | hand out tasks, carry outputs between agents |
| Architect | **Qoder** | specs, key copy, review, final QA, coordination |
| Flash A–E | fast models | execute exactly one `P*.md` each, under its constraints |

## The two waves

```
WAVE 1  (run in parallel — no dependencies between them)
   ├─ P1  TalkSection + TalkDemo      → Flash A (frontend)
   ├─ P2  Hero visual                 → Flash B (design)
   ├─ P3  Copywriting                 → Flash C (copy)      [uses 00_FACT_SHEET.md]
   └─ P5  Model catalog doc           → Flash E (docs)      [Logitaka app repo]

   ▼ CHECKPOINT A — come back to the architect with ALL FOUR outputs
     Architect reviews quality + fact-accuracy, then issues the FINAL P4 brief
     (reconciled to the real file names / translation keys the flashes produced).

WAVE 2  (single task — depends on P1 + P2 + P3)
   └─ P4  Assembly: /models page + wire sections + Opus 5 fix  → Flash D

   ▼ CHECKPOINT B — come back to the architect
     Architect runs WS-5 final QA (build / typecheck / lint / responsive / wedge check)
     and signs off, or sends back precise fixes.
```

## What to bring back at each checkpoint

**Checkpoint A** (after P1, P2, P3, P5):
- P1: list of files changed + component/translation-key names actually used
- P2: the delivered image file path(s) + source
- P3: the translation.json diff summary (which keys changed)
- P5: doc change summary + any "config drift" flagged
- Any failures, skipped items, or constraint violations

**Checkpoint B** (after P4):
- P4: files changed, which sections were re-enabled, build output
- The architect then runs the QA checklist (see below) itself.

## Rules for the orchestrator

1. **One task per flash model.** Do not let one agent do two `P*` files.
2. **Hand the file verbatim.** Each `P*.md` is self-contained; don't paraphrase it.
3. **Never let a flash model invent facts.** All numbers/features come from
   `00_FACT_SHEET.md`. If a flash model asks for a fact not in the sheet,
   bring the question to the architect — don't guess.
4. **Deploy safety:** only `frontend/dist/` is deployed (FTP). This handoff folder
   and the source `.md` files never ship. Landing branch is `main`.
5. **Do not commit until Checkpoint B passes.**

## Final QA checklist (architect runs at Checkpoint B — WS-5)

- [ ] Talk visible above the fold; demo loops; `prefers-reduced-motion` static fallback
- [ ] No "Watch 60-Second Demo" dead link; CTAs point to the app / `#talk`
- [ ] Pricing has no "Express Meeting"; features match `00_FACT_SHEET.md` tiers
- [ ] Every fact (model count 43, providers 8, Talk 3 min / 8 ops) matches the sheet
- [ ] `models_page` says "Claude Opus 5" (not 4.8)
- [ ] `npm run build` + typecheck + lint clean; dark/light theme; mobile viewport
- [ ] Internal model catalog doc updated (or drift explicitly flagged)
- [ ] `translation.json` valid JSON; `pro_page` untouched
