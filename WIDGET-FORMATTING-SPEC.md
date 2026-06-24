# 433-A Widget Formatting Spec (v3.5 look)

The styling convention every survey widget should follow so it reads as **native survey
content** — flat on the page, balanced into a couple of wide rows on desktop, single
column on mobile. This is the formatting applied across all 7 asset repeaters; apply the
same to any new widget.

> **The shape of the look:** no gray card, ~3 wide columns at the 900px survey width
> (long labels get room instead of collapsing), and a clean vertical stack on phones.

---

## 1. Design tokens (`:root`)

Keep these verbatim — they are the ebotCPA brand surface. Brand accent defaults to navy
`#1A2744` and is overridden live by `data-primary-color`.

```css
:root {
  --ar-bg: #ffffff; --ar-surface: #f7f8fa; --ar-border: #e3e6eb; --ar-border-strong: #c9cfd8;
  --ar-text: #1a2332; --ar-text-muted: #5a6578;
  --ar-accent: #1A2744; --ar-accent-hover: #11192d;
  --ar-danger: #c94545; --ar-danger-hover: #a83838;
  --ar-radius: 8px;
  --ar-font: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

---

## 2. The formatting rules (what's "new")

These are the rules that produce the flat / balanced / responsive look. Copy them as-is.

```css
/* FLAT — no gray box; widget sits flat on the white survey page. */
.ar-section { background: transparent; border: none; border-radius: 0; padding: 0; margin-bottom: 22px; }
/* Divider ONLY between two stacked sections in one widget (e.g. Credit + Life Insurance). */
.ar-section + .ar-section { padding-top: 22px; border-top: 1px solid var(--ar-border); }

/* The add-box keeps light structure (white + dashed) so the input area is still legible on white. */
.ar-add-box { background: #fff; border: 1px dashed var(--ar-border-strong); border-radius: var(--ar-radius); padding: 14px; }

/* BALANCED GRID — column count is driven by the WIDGET's own width, NOT the viewport.
   minmax(240px) means a column never shrinks below 240px: auto-fill drops the COUNT
   3 → 2 → 1 as the box narrows (900px survey = 3, tablet = 2, portrait phone = 1).
   No viewport @media — so the widget reflows correctly even in a wide container on a
   physically small screen (e.g. phone landscape), where a viewport query would lie. */
.ar-field-group { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 14px 16px; margin-bottom: 12px; }

/* Each cell is a flex column packed to the bottom: inputs bottom-align across a row even
   when one label wraps to two lines, while each label stays flush above its own input
   (labels bind to their field by proximity only — there is no for/id — so never let a
   label detach from its input). */
.ar-field-group > div { display: flex; flex-direction: column; justify-content: flex-end; }

/* Field chrome */
label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 6px; color: var(--ar-text); }
input[type="text"] {
  width: 100%; padding: 9px 12px; font-size: 14px; font-family: var(--ar-font);
  border: 1px solid var(--ar-border-strong); border-radius: var(--ar-radius);
  background: #fff; color: var(--ar-text); transition: border-color .15s, box-shadow .15s;
}
input:focus { outline: none; border-color: var(--ar-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ar-accent) 22%, transparent); }
```

> The markup each grid cell expects:
> `<div><label>…</label><input type="text"></div>`
> (money fields wrap the input: `<div><label>…</label><div class="ar-amount-wrap"><input></div></div>`).

---

## 3. Responsive behavior

The single knob is the `minmax()` min-width. `240px` is tuned so the **900px survey lands on 3 columns**.
Column count follows the **widget's own width** (the grid box), not the viewport — and a column
**never shrinks below 240px** (auto-fill drops the count instead), so no width is ever "cramped".

| Widget width (the grid box) | Columns | Example: 5-field add-box | Verified col width |
|---|---|---|---|
| ≥ ~760px (900px survey · phone landscape) | **3** | rows of 3 + 2 | ~247–261px |
| ~590–755px (small tablet) | 2 | rows of 2 + 2 + 1 | ~280px |
| ≤ ~580px (portrait phone) | **1** | fully vertical stack | full-width |

> Phone **portrait** → 1 column (vertical), as intended. Phone **landscape** has a wide box, so it
> shows 3 readable ~247px columns — same as desktop, never cramped — which is correct for the space.

**Tuning:** raise the min (e.g. `260px`) → fewer / wider columns; lower it (`200px`) → more columns.
To give one long field its own full-width row (e.g. a "name & address" field), add `grid-column: 1 / -1`
to that cell. To force a clean 2-up everywhere, set `repeat(auto-fill, minmax(320px, 1fr))`.

---

## 4. Building a NEW repeater widget (the fast path)

This repo is **config-driven**: the CSS above lives **once** in `investments.html`. A new widget
inherits all formatting for free — you only describe its fields.

1. **Add a config** to the `WIDGETS` map in [`scripts/gen-asset-widgets.js`](scripts/gen-asset-widgets.js):
   ```js
   'my-widget.html': {
     title: '433-A — My Widget Repeater', container: 'my-433a-widget', keyComment: '433a__my_summary',
     config: {
       containerId: 'my-433a-widget', configGlobal: 'MY_433A_CONFIG',
       sections: [{
         key: '433a__my_summary', title: 'My Section', subtitle: '…',
         addLabel: 'Add an item', addBtn: 'Add item', gateWarn: 'Enter X before adding.',
         emptyNote: 'Nothing added yet.', totalLabel: 'Total', totalCol: 'value',
         columns: [
           { id: 'name',  label: 'Name & address',  kind: 'text',  ph: 'Name, street, city…', gate: true, role: 'name' },
           { id: 'detail',label: 'Detail',           kind: 'text',  slabel: 'Detail', role: 'meta' },
           { id: 'value', label: 'Value',            kind: 'money', slabel: 'Value', role: 'amount' }
           // kind: 'calc' for a derived column → { kind:'calc', sub:['a','b'], floor:true }
         ]
       }]
     }
   }
   ```
   - `kind`: `text` | `money` | `calc` (calc = `sub[0] − sub[1]`, no input; `floor:true` clamps to ≥ $0)
   - `gate`: the field required before a row can be added
   - `role`: `name` | `meta` | `amount` (drives the saved summary card)
   - `slabel`: label used in the pipe-delimited summary

2. **Add a build entry** to the `WIDGETS` map in [`scripts/build-embed.js`](scripts/build-embed.js) — every
   value must be **unique** so multiple embeds can coexist on a page:
   ```js
   myWidget: { input: 'my-widget.html', output: 'dist/embed-my-widget.js',
     containerId: 'my-433a-widget', dataAttr: 'data-my-433a-widget',
     styleAttr: 'data-my-433a', guard: '__my433aEmbedLoaded', label: 'my-widget' }
   ```

3. **Generate + build:**
   ```bash
   node scripts/gen-asset-widgets.js && node scripts/build-embed.js
   ```

4. **Commit, tag, push** (jsDelivr serves the tag), then embed:
   ```html
   <div id="my-433a-widget" data-primary-color="{{custom_values.brand_primary_color}}"></div>
   <script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-my-widget.js"></script>
   ```

> To change formatting for ALL widgets at once, edit the CSS in `investments.html`, then
> re-run the two build commands. Never hand-edit `dist/*.js` — they're build artifacts.

---

## 5. Building a STANDALONE widget (outside this engine)

If the new widget is **not** a repeater and won't ride the engine, just reuse the visual
language: paste the `:root` tokens (§1) + the formatting rules (§2) into its `<style>`, and
structure each input as `<div><label>…</label><input></div>` inside a `.ar-field-group` grid.
That alone gives you the flat + 3-col-desktop + 1-col-mobile look.

---

## 6. Gotchas (carry these into any new widget)

- **The build scopes + strips.** `scripts/build-embed.js` rewrites every selector to
  `#container#container <sel>` (doubled id = wins the cascade over GHL form CSS without
  `!important`) and **drops all `body`/`html` rules**. Don't rely on `body` styling in the embed.
- **Prefer container-driven layout over viewport `@media`.** Column count comes from
  `auto-fill, minmax(240px,1fr)` reflowing off the *grid box's* width, so it stays correct even when
  a small device has a wide container (phone landscape). A viewport `@media` would disagree with the
  container there — don't reach for one. (If you ever do add a `@media`/`@container`, the build scopes
  the inner selector and passes the wrapper through — verified — but you shouldn't need it for columns.)
- **Match GHL host fields by clean key**, not the encrypted `name=`. In survey `data-q`, `__`
  renders as `_-_` and ` - ` → `_-_`. The widget writes its summary into the hidden LARGE_TEXT host.
- **Pin embeds to a real tag** (`@vX.Y.Z`), never `@main`. Old tags are frozen, so shipping a new
  look = new tag + re-paste (or bump the version in already-placed embeds).
- **Brand color** comes from `data-primary-color="{{custom_values.brand_primary_color}}"`; it
  overrides `--ar-accent` (and a derived `--ar-accent-hover`). Default navy `#1A2744`.
