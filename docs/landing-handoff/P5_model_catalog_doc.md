# P5 — Update the internal AI model catalog doc

**Role:** Technical writer.
**Repo:** `/Users/faignaghiyev/DEV/Logitaka` (the **app** repo — NOT the landing).
**File you edit:** `docs/app/LOGITAKA_AI_PROVIDER_MODEL_CATALOG_CURRENT.md`
**Wave:** 1 (independent). **Bring output back to the architect at Checkpoint A.**

---

## Context
This doc claims to mirror `OS/.local/admin/provider-config.json` but is stale
(its `updated_at` is 2026-05). Production has moved on. The **landing page** model
list is current and authoritative for marketing, but this internal doc must reflect
the real runtime config.

Verified current state (config `updated_at: 2026-08-01`):
- **43 active models** (52 total), **8 enabled providers**:
  `moonshot, openai, google, zai, alibaba, mistral, openrouter, xiaomi`.
- Flagship: **Claude Opus 5**. Present: GPT-5.6 Sol/Terra/Luna, Claude Sonnet 5,
  Claude Fable 5, Gemini 3.x, Grok 4.5, GLM-5.2, Qwen 3.7, Kimi K2.6/K3,
  Mistral Large 3 / Small 4, DeepSeek v4, MiniMax M3, Mimo v2.5 — plus image,
  realtime-voice, and TTS models.

---

## Tasks
1. Read `OS/.local/admin/provider-config.json` (models are keyed objects under
   `models`; providers under `providers`). Count `status === "active"` models and
   `enabled && !deleted` providers.
2. Cross-check against the landing list in
   `/Users/faignaghiyev/DEV/logitaka.com/frontend/src/locales/en/translation.json`
   under `models_page.compareModels` (read-only reference — do not edit the landing).
3. Rewrite the doc so its model list, labels, counts, providers, and `updated_at`
   match the **config** (the runtime source of truth). Use the verified numbers above
   as a sanity check.
4. **Config-drift rule:** if the config genuinely lacks models that the landing lists
   (or vice versa), DO NOT edit the config and DO NOT edit the landing. Instead add a
   `> ⚠ Config drift` note at the TOP of the doc listing the specific mismatches, then
   stop and report it.

## Constraints (non-negotiable)
- Edit ONLY `docs/app/LOGITAKA_AI_PROVIDER_MODEL_CATALOG_CURRENT.md`.
- **Never print or commit API keys / secrets.** Keep any key fields redacted
  (the config has `api_key` fields — do not copy their values).
- Do not touch the landing repo or the config file.

## Acceptance
- [ ] Doc model list + counts match the config's active set (≈43 active / 8 providers),
      or drift is explicitly flagged at the top.
- [ ] `updated_at` in the doc reflects today.
- [ ] No secrets appear in the doc.

## Return to orchestrator
- Summary of changes (old counts → new counts; notable model additions/removals).
- Any config-drift flagged.
