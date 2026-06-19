# ebotcpa-433a-widgets

Client-side widgets for the **ebotCPA IRS Form 433-A intake** (GoHighLevel). Each widget embeds in a GHL form step, provides a repeatable UI that GHL forms can't do natively, and writes the result into existing GHL custom fields by **clean key**.

**Separate from `doc-rx-lookup` on purpose** — that's the generic, cross-account enrollment widget set. This repo is the ebotCPA 433-A build (mirrors the `lpi-enrollment-widgets` per-client pattern).

**This repo is intentionally public.** The code runs entirely in the browser and is visible via View Source on any page that embeds it. Do not commit secrets, API keys, customer data, or anything you would not want indexed.

## Widgets

| Widget | Source | Embed | Container id | Writes (clean keys) |
| --- | --- | --- | --- | --- |
| **Assets repeaters** (Bank Accounts + Vehicles) | `assets-repeater.html` | `dist/embed-assets.js` | `assets-433a-widget` | `433a__bank_accounts_summary` · `433a__vehicles_summary` |

Both repeaters live in one embed (they sit on the same Assets step). Each adds rows the client can add/remove, then serializes them into the matching LARGE_TEXT field in the **same pipe format the existing 433-A webhook/PDF use**:

```
Bank:     Wells Fargo | Checking | $2,500
Vehicle:  2019 Ford F-150 | Value: $28,000 | Loan: $15,500.50
```

The two LARGE_TEXT fields must be **on the same form step**; the widget auto-hides their raw textareas and drives them, so the client only sees the repeaters.

## Brand color — driven by a GHL custom value

Set `data-primary-color` on the container to the literal merge tag **`{{custom_values.brand_primary_color}}`**. Resolution order (first valid wins):

1. `window.ASSETS_CONFIG.primaryColor` — explicit JS override
2. `data-primary-color` on the container (the custom-value merge tag)
3. Auto-detect: GHL form submit-button background, then survey Next-button color
4. Fallback: ebotCPA navy `#1A2744`

Unresolved `{{...}}` merge tags are ignored, so an account without the custom value still renders sanely.

## GHL embed snippet

Paste into a Custom Code / HTML block on the Assets step. Ready-to-paste copy in `GHL-EMBED-SNIPPETS.html`.

```html
<!-- 433-A Assets — Bank Accounts + Vehicles -->
<div id="assets-433a-widget" data-primary-color="{{custom_values.brand_primary_color}}"></div>
<script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-assets.js"></script>
```

> Pin `@vX.Y.Z` to a real tag, not `@main`. Test on the **published** form — GHL's in-builder preview may not run `<script>`.

## What the account needs

- **Custom value:** `brand_primary_color` (a hex). Drives the widget color. (Optional — falls back to navy.)
- **Custom fields** (already created for ebotCPA): `433a__bank_accounts_summary` and `433a__vehicles_summary` as **LARGE_TEXT**, both added to the same form step the widget sits on. See `SNAPSHOT-FIELDS.md`.

## Build

`dist/*.js` embeds are **build artifacts — never hand-edit them.** After any change to `assets-repeater.html`:

```bash
node scripts/build-embed.js            # build all widgets
node scripts/build-embed.js assets     # or just one
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
