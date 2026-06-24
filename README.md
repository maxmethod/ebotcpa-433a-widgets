# ebotcpa-433a-widgets

Client-side widgets for the **ebotCPA IRS Form 433-A intake** (GoHighLevel). Each widget embeds in a GHL form step, provides a repeatable UI that GHL forms can't do natively, and writes the result into existing GHL custom fields by **clean key**.

**Separate from `doc-rx-lookup` on purpose** — that's the generic, cross-account enrollment widget set. This repo is the ebotCPA 433-A build (mirrors the `lpi-enrollment-widgets` per-client pattern).

**This repo is intentionally public.** The code runs entirely in the browser and is visible via View Source on any page that embeds it. Do not commit secrets, API keys, customer data, or anything you would not want indexed.

## Widgets

**Independent** repeater widgets covering Form 433-A (Rev. 6-2026) **Section 4 — Personal Asset Information**. Each goes on its **own page** (separate container id / config global / load guard, so they never collide). Headers/labels match the IRS form.

| 433-A line | Widget | Source | Embed | Container id | Writes (clean keys) |
| --- | --- | --- | --- | --- | --- |
| 13 | **Bank Accounts** | `bank-accounts.html` | `dist/embed-bank-accounts.js` | `bank-433a-widget` | `433a__bank_accounts_summary` |
| 14 | **Investments** | `investments.html` | `dist/embed-investments.js` | `investments-433a-widget` | `433a__investments_summary` |
| 15 | **Digital Assets** | `digital-assets.html` | `dist/embed-digital-assets.js` | `digital-assets-433a-widget` | `433a__digital_assets_summary` |
| 16 & 17 | **Available Credit + Life Insurance** | `available-credit.html` | `dist/embed-available-credit.js` | `credit-433a-widget` | `433a__available_credit_summary` · `433a__life_insurance_summary` |
| 18 | **Real Property** | `real-property.html` | `dist/embed-real-property.js` | `real-property-433a-widget` | `433a__real_property_summary` |
| 19 | **Vehicles** | `vehicles.html` | `dist/embed-vehicles.js` | `vehicle-433a-widget` | `433a__vehicles_summary` |
| 20 | **Personal Assets** | `personal-assets.html` | `dist/embed-personal-assets.js` | `personal-assets-433a-widget` | `433a__personal_assets_summary` |

Each adds rows the client can add/remove, then serializes them into the matching LARGE_TEXT field as a pipe summary, with auto-calculated equity/available columns and a running total appended:

```
Bank:        Wells Fargo | Checking | $2,500
Investment:  401(k) | Company: Fidelity | Value: $85,000 | Loan: $10,000 | Equity: $75,000
             — Total equity (value − loans): $75,000
```

Put each widget on the page that holds its LARGE_TEXT field(s); the widget auto-hides those raw textareas and drives them, so the client only sees the repeater.

### Unified bundle (recommended · true paste-once)

`dist/embed-433a.js` bundles **all 7 repeaters + the income/expense calc** into one script. Paste that single `<script>` **once**, anywhere on the survey — **no mount `<div>`s needed.** Each repeater finds its native LARGE_TEXT field by clean key and renders itself right there (the field is auto-hidden + driven); the calc finds its total fields and injects its card. You only need the native fields on their steps. See `GHL-EMBED-SNIPPETS.html` (Option A).

- **Field-anchoring** also makes the `<div>` optional for the *individual* embeds: omit it and the embed mounts next to its native field; include it (back-compat) and it mounts there. Placement is durable via a `MutationObserver` — it works even if GHL mounts a later step's fields long after load.
- A widget with **multiple sections** (Credit + Life Insurance) renders them together and hides every host field, so keep all of its fields on **one** survey step (the engine logs a console warning otherwise).
- The income/expense calc (`income-expense-calc.html` → `dist/embed-income-expense-calc.js`) is a **verbatim snapshot** of the calc owned by a separate session — re-sync that file if the source changes (don't edit it here).

### Config-driven engine

`investments.html` is the **canonical engine** — a pure-data, multi-section repeater. The Section-4 asset widgets (`digital-assets`, `available-credit`, `real-property`, `personal-assets`) are **generated** from it by `scripts/gen-asset-widgets.js`, which swaps only the `CONFIG` object (columns, headers, field keys, auto-calc rules). To change the engine: edit `investments.html`, run `node scripts/gen-asset-widgets.js`, then `node scripts/build-embed.js`. `bank-accounts.html` / `vehicles.html` are the earlier standalone (pre-engine) widgets and are maintained directly.

> **Legacy:** `assets-repeater.html` → `dist/embed-assets.js` (container `assets-433a-widget`) is the original *combined* bank+vehicles block. Kept for backward-compat.

## Brand color — driven by a GHL custom value

Set `data-primary-color` on the container to the literal merge tag **`{{custom_values.brand_primary_color}}`**. Resolution order (first valid wins):

1. `window.<WIDGET>_CONFIG.primaryColor` — explicit JS override (`BANK_433A_CONFIG` / `VEHICLE_433A_CONFIG`)
2. `data-primary-color` on the container (the custom-value merge tag)
3. Auto-detect: GHL form submit-button background, then survey Next-button color
4. Fallback: ebotCPA navy `#1A2744`

Unresolved `{{...}}` merge tags are ignored, so an account without the custom value still renders sanely.

## GHL embed snippets

Ready-to-paste copies in `GHL-EMBED-SNIPPETS.html`.

**Option A — unified bundle (recommended, paste-once, no divs):**

```html
<!-- Paste ONCE, anywhere on the survey. Just have the native fields on their steps. -->
<script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-433a.js"></script>
```

**Option B — individual per-step embeds (the `<div>` is now optional):**

```html
<!-- Bank Accounts (its own page; omit the <div> to field-anchor to the native field) -->
<div id="bank-433a-widget" data-primary-color="{{custom_values.brand_primary_color}}"></div>
<script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-bank-accounts.js"></script>
```

> Pin `@vX.Y.Z` to a real tag, not `@main`. Test on the **published** form — GHL's in-builder preview may not run `<script>`.

## What the account needs

- **Custom value:** `brand_primary_color` (a hex). Drives the widget color. (Optional — falls back to navy.)
- **Custom fields** (already created for ebotCPA): `433a__bank_accounts_summary` and `433a__vehicles_summary` as **LARGE_TEXT**, both added to the same form step the widget sits on. See `SNAPSHOT-FIELDS.md`.

## Build

`dist/*.js` embeds are **build artifacts — never hand-edit them.** After any change to a source `.html`:

```bash
node scripts/build-embed.js            # build all widgets + the unified bundle (embed-433a.js)
node scripts/build-embed.js bank       # or just one: bank | vehicles | investments | … | income-expense-calc | assets
node scripts/build-embed.js bundle     # rebuild the bundle's parts + re-concatenate embed-433a.js
```

The build scopes the widget's CSS to its container id (doubled `#id#id` for specificity, no `!important`) and inlines markup + logic into a self-bootstrapping IIFE.

## Versioning and deploys

jsDelivr serves **immutable content per git tag** and caches `@main` for up to 12h. **Always deploy by tag:**

1. Commit changes to `main`.
2. `git tag vX.Y.Z && git push origin vX.Y.Z`.
3. Bump `@vX.Y.Z` in the embed snippet wherever it's used.

> If a file gets stuck on a jsDelivr serving glitch, serve from `https://rawcdn.githack.com/maxmethod/ebotcpa-433a-widgets/<tag>/<path>` or cut a fresh tag. Verify `dist/embed-assets.js` returns HTTP 200 before relying on it.

## Local development

```bash
npx http-server . -p 8791 -c-1
# then open http://localhost:8791/test-embed-assets.html
```

`test-embed-assets.html` simulates a GHL form step: the widget div + the two hidden custom-field textareas (with `name`/`data-q` clean keys), so you can watch the fields populate and confirm the widget hides them.
