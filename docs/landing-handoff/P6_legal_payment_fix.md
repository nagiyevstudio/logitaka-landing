# P6 — Fix stale payment processor in legal pages (Kapital Bank → Lemon Squeezy)

**Role:** Technical writer (legal-lite).
**Repo:** `/Users/faignaghiyev/DEV/logitaka.com/frontend`
**Files you edit (ONLY these two):**
- `src/pages/privacy.md`
- `src/pages/terms.md`
**Wave:** independent. **Owner must review before deploy** (legal content).

---

## Context (owner-confirmed 2026-08-02)
The real payment processor is **Lemon Squeezy** (automated subscription checkout;
confirmed in the app code and by the owner). **Kapital Bank is an OLD, inactive
contour** still named in the legal pages. It must be replaced. The one true fact that
must survive every edit: *Logitaka does not receive or store full card details.*

## Exact stale references to fix
1. `privacy.md:38` — "All such data is processed directly by **Kapital Bank** or its
   authorized payment systems." → name **Lemon Squeezy** instead.
2. `privacy.md:59` — "Payments are handled manually through payment links. All financial
   transactions are processed by our payment provider, **Kapital Bank**." → this describes
   the OLD manual flow. Rewrite to reflect the real **automated Lemon Squeezy checkout**
   (subscription billing handled by Lemon Squeezy; we never store card details).
3. `privacy.md:66` — "* **Payment Services:** Kapital Bank;" → "Lemon Squeezy".
4. `terms.md:26` — "* **Processing:** Payments are processed via a third-party provider,
   **Kapital Bank**." → "Lemon Squeezy".

## Constraints (non-negotiable)
- Edit ONLY the two files above. Touch no other legal clauses, dates, or structure.
- Keep the Markdown formatting and section structure intact.
- Do NOT invent certifications (GDPR/PCI/SOC2) or retention periods — not verified.
- Do NOT add the on-premise claim anywhere (it is not a shipped product).
- Keep operator details as-is (Faig Nagiyev, Baku, Azerbaijan; support@logitaka.com).

## Acceptance
- [ ] `grep -ri kapital src/pages/` returns nothing.
- [ ] Lemon Squeezy named as the processor in both files.
- [ ] "We do not store full card details" statement preserved in both.
- [ ] No invented certifications/retention; no on-premise claim added.
- [ ] Markdown still renders (build passes).

## Return to orchestrator
- The before/after of each changed line.
- Flag for owner legal review before deploy.
