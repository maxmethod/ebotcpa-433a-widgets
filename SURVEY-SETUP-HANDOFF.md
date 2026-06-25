# 433-A Survey Widget Setup — Handoff (EOD 2026-06-24)

**All widget CODE is built, fixed, and deployed.** The only thing left is GHL **survey config** —
getting exactly one embed onto each asset slide and the calc on the income slide. It kept
"going back and forth" because of leftover/duplicate embeds, not because the code is broken.

Live survey: `link.ebotcpa.com/widget/survey/lQFuqGwaenzxr9JtpNVR`
Deployed: **widgets @v3.5.3**, **calc @v3.5.4** (jsDelivr base `cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets`).

---

## ✅ TARGET CONFIG — what the survey SHOULD have

**Rule: ONE Custom-Code block per asset slide (a `<div>` + its `<script>`). NO unified
`embed-433a.js` bundle anywhere** (the bundle skips slides AND its guards block the per-page
embeds — never run both). Pin widgets to `@v3.5.3`.

| Slide | Custom-Code block to paste |
|---|---|
| Bank | `<div id="bank-433a-widget" data-primary-color="{{custom_values.brand_primary_color}}"></div>` + `…@v3.5.3/dist/embed-bank-accounts.js` |
| Investments | `<div id="investments-433a-widget" …></div>` + `…@v3.5.3/dist/embed-investments.js` |
| Digital Assets | `<div id="digital-assets-433a-widget" …></div>` + `…@v3.5.3/dist/embed-digital-assets.js` |
| Available Credit + Life | `<div id="credit-433a-widget" …></div>` + `…@v3.5.3/dist/embed-available-credit.js` — **both native fields stay on this ONE slide** |
| Real Property | `<div id="real-property-433a-widget" …></div>` + `…@v3.5.3/dist/embed-real-property.js` (2-column) |
| Vehicles | `<div id="vehicle-433a-widget" …></div>` + `…@v3.5.3/dist/embed-vehicles.js` |
| Personal Assets | `<div id="personal-assets-433a-widget" …></div>` + `…@v3.5.3/dist/embed-personal-assets.js` |
| **Income slide** | `…@v3.5.4/dist/embed-income-expense-calc.js` (no div — paste ONCE; drives income + expense + net) |

Full copy-paste list: `GHL-EMBED-SNIPPETS.html`.
Net field "**433A Line 51 - Net Difference Auto**" (TEXT, id `oxbZvGjxxesuTo8NYNb4`) is on slide 16 — fine there.

---

## 📍 CURRENT LIVE STATE (what's actually on the survey right now)

- ✅ Bundle removed. ✅ No slide will be skipped (every asset slide has a visible element).
- ✅ Present & rendering @v3.5.3: **bank, real-property, vehicles, personal-assets**.
- ❌ **MISSING embeds: Investments and Available Credit** → those two widgets don't appear at all.
- ⚠️ **Digital Assets**: the script is on the slide but the widget didn't render last check — re-add/verify it; open the browser console on that slide to see any error.
- ❌ **Calc not loaded** → income total, expense total, and **net difference won't populate** until the `embed-income-expense-calc.js @v3.5.4` block is (re)added to the income slide.
- ℹ️ "Personal asset summary is hidden" = EXPECTED. The widget intentionally collapses the raw
  `…_summary` textarea (keeps its box rendered at ~0 height so GHL doesn't skip the slide) and
  shows the widget instead. The personal-assets WIDGET itself rendered fine. If it's not visible
  when you're actually ON slide 13, that's the thing to check (console + that the div is present).

---

## ☀️ AM CHECKLIST

1. **Add the 2 missing embeds:** Investments + Available Credit (table above).
2. **Re-add the calc** on the income slide: `…@v3.5.4/dist/embed-income-expense-calc.js`.
   - If it won't load (jsDelivr was slow-warming v3.5.4 with 502s), use the githack twin:
     `https://rawcdn.githack.com/maxmethod/ebotcpa-433a-widgets/v3.5.4/dist/embed-income-expense-calc.js`
3. **Verify Digital Assets** renders (re-paste its block; check console on its slide).
4. **Reload the PUBLISHED survey** and walk every slide — each asset slide should show its widget; no slide should skip.
5. **Confirm the net difference** writes once the calc loads (enter income + expenses → slide-16 net card + field show income − expenses).
6. Confirm **no `embed-433a.js`** (bundle) is anywhere, and **no slide has two embeds** for the same widget.

---

## 🔑 WHY IT KEPT BREAKING (lessons — all already fixed in the code)

- **Field matching:** GHL renders the fieldKey's `__` as `_-_` in `data-q`, and `name=` is an
  encrypted blob → match by `data-q` in both forms. *(fixed v3.5.1)*
- **Write-back:** GHL's React form drops a plain `el.value=`; must use the native value setter. *(fixed v3.5.1)*
- **Slide-skip:** GHL auto-skips a slide whose every form item is `display:none`. The widget hides
  the raw field, so it now keeps that field's wrapper rendered (collapsed) to keep the slide alive. *(fixed v3.5.2)*
- **Bundle vs per-page:** the unified bundle's guards (`window.__*EmbedLoaded`) block per-page
  embeds, and an old bundle version reintroduced the skip → **use per-page only, no bundle.**
- **CDN warming:** jsDelivr can 502 a brand-new tag for minutes → githack fallback works immediately.

Verified working in isolation (harness + live DOM): all 7 widgets mount + write, calc computes
income/expense/net. The only variable now is which embeds are placed on which slides.
