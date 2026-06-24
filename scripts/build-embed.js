#!/usr/bin/env node
// Build the self-bootstrapping single-file embed(s). Each widget compiles to one
// dist/*.js file: paste a <script> tag into a GHL Custom Code block and it
// injects styles + markup + logic into the page.
//
// Usage:
//   node scripts/build-embed.js          # build every widget
//   node scripts/build-embed.js assets   # build only one
//
// Mirrors the maxmethod/doc-rx-lookup build exactly so this repo is maintained
// the same way. dist/*.js are build artifacts — never hand-edit them.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CDN_REPO = 'maxmethod/ebotcpa-433a-widgets';

// One entry per widget. scope/containerId/guard/configGlobal must be unique so
// multiple embeds can coexist on the same GHL page without colliding.
const WIDGETS = {
  // Section 4 asset repeaters (config-driven engine) — each on its own page.
  investments: {
    input: 'investments.html',
    output: 'dist/embed-investments.js',
    containerId: 'investments-433a-widget',
    dataAttr: 'data-investments-433a-widget',
    styleAttr: 'data-investments-433a',
    guard: '__investments433aEmbedLoaded',
    label: 'investments'
  },
  digitalAssets: {
    input: 'digital-assets.html',
    output: 'dist/embed-digital-assets.js',
    containerId: 'digital-assets-433a-widget',
    dataAttr: 'data-digital-assets-433a-widget',
    styleAttr: 'data-digital-assets-433a',
    guard: '__digital433aEmbedLoaded',
    label: 'digital-assets'
  },
  availableCredit: {
    input: 'available-credit.html',
    output: 'dist/embed-available-credit.js',
    containerId: 'credit-433a-widget',
    dataAttr: 'data-credit-433a-widget',
    styleAttr: 'data-credit-433a',
    guard: '__credit433aEmbedLoaded',
    label: 'available-credit'
  },
  realProperty: {
    input: 'real-property.html',
    output: 'dist/embed-real-property.js',
    containerId: 'real-property-433a-widget',
    dataAttr: 'data-real-property-433a-widget',
    styleAttr: 'data-real-property-433a',
    guard: '__realprop433aEmbedLoaded',
    label: 'real-property'
  },
  personalAssets: {
    input: 'personal-assets.html',
    output: 'dist/embed-personal-assets.js',
    containerId: 'personal-assets-433a-widget',
    dataAttr: 'data-personal-assets-433a-widget',
    styleAttr: 'data-personal-assets-433a',
    guard: '__personal433aEmbedLoaded',
    label: 'personal-assets'
  },
  // Split widgets — each goes on its OWN page. These are the recommended embeds.
  bank: {
    input: 'bank-accounts.html',
    output: 'dist/embed-bank-accounts.js',
    containerId: 'bank-433a-widget',
    dataAttr: 'data-bank-433a-widget',
    styleAttr: 'data-bank-433a',
    guard: '__bank433aEmbedLoaded',
    label: 'bank-accounts'
  },
  vehicles: {
    input: 'vehicles.html',
    output: 'dist/embed-vehicles.js',
    containerId: 'vehicle-433a-widget',
    dataAttr: 'data-vehicle-433a-widget',
    styleAttr: 'data-vehicle-433a',
    guard: '__vehicle433aEmbedLoaded',
    label: 'vehicles'
  },
  // Legacy combined widget (bank + vehicles in one block). Kept for backward compat
  // with any v1.0.0 embed; new work should use the two split widgets above.
  assets: {
    input: 'assets-repeater.html',
    output: 'dist/embed-assets.js',
    containerId: 'assets-433a-widget',
    dataAttr: 'data-assets-widget',
    styleAttr: 'data-assets-repeater',
    guard: '__assets433aEmbedLoaded',
    label: 'assets-repeater'
  },
  // Module (style + script, NO container/markup): the income/expense live calculator.
  // It field-anchors itself (finds the total fields, injects its own card), so it needs
  // no mount div. Snapshot of the other session's tested calc — see income-expense-calc.html.
  incomeExpenseCalc: {
    input: 'income-expense-calc.html',
    output: 'dist/embed-income-expense-calc.js',
    styleAttr: 'data-433a-calc',
    guard: '__incomeExpense433aLoaded',
    label: 'income-expense-calc',
    module: true
  }
};

// Scope every selector to #<containerId> so the widget's CSS cannot leak out and
// affect the host page. We DOUBLE the scope id (#x#x) to bump specificity above
// typical host-page form-framework rules — the cheapest way to win the cascade
// against e.g. GHL's form styles without resorting to !important. Two ID
// selectors on the same element is valid CSS and doubles the specificity weight.
// Keeps :root custom-property declarations global; drops body/html rules.
function scopeCss(css, scope) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');  // strip CSS comments
  const compound = `${scope}${scope}`;
  return css.replace(/([^{}]+)\{([^{}]*)\}/g, (match, selector, body) => {
    const sel = selector.trim();
    if (sel === ':root') return `${sel} {${body}}`;
    if (sel === 'body' || sel === 'html' || sel === 'html, body') return '';
    const scoped = sel.split(',').map(part => {
      const trimmed = part.trim();
      if (!trimmed) return trimmed;
      if (trimmed.startsWith(scope)) return trimmed;
      return `${compound} ${trimmed}`;
    }).join(', ');
    return `${scoped} {${body}}`;
  });
}

const escapeForTemplate = s =>
  s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

function build(widget) {
  const input = path.resolve(ROOT, widget.input);
  const output = path.resolve(ROOT, widget.output);
  const html = fs.readFileSync(input, 'utf8');
  const scope = `#${widget.containerId}`;

  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  if (!styleMatch) throw new Error(`[${widget.label}] Could not find <style> block`);
  const css = scopeCss(styleMatch[1].trim(), scope);

  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
  if (!bodyMatch) throw new Error(`[${widget.label}] Could not find <body> block`);
  let body = bodyMatch[1].trim();

  const scriptMatch = body.match(/<script>([\s\S]*?)<\/script>/);
  if (!scriptMatch) throw new Error(`[${widget.label}] Could not find <script> block in body`);
  const js = scriptMatch[1].trim();
  body = body.replace(scriptMatch[0], '').trim();

  const embed = `/**
 * ${widget.label} embed bootstrap
 * Generated from ${widget.input} by scripts/build-embed.js — do not hand-edit.
 *
 * Drop into a GHL form step (Custom Code element) with:
 *   <div id="${widget.containerId}" data-primary-color="{{custom_values.brand_primary_color}}"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/${CDN_REPO}@vX.Y.Z/${widget.output}"></script>
 *
 * Or omit the <div> and the script appends the widget to <body>.
 */
(function () {
  if (window.${widget.guard}) return;
  window.${widget.guard} = true;

  // ---- styles ----
  const style = document.createElement('style');
  style.setAttribute('${widget.styleAttr}', 'styles');
  style.textContent = \`${escapeForTemplate(css)}\`;
  document.head.appendChild(style);

  // ---- markup ----
  let container = document.getElementById('${widget.containerId}') ||
                  document.querySelector('[${widget.dataAttr}]');
  if (!container) {
    container = document.createElement('div');
    container.id = '${widget.containerId}';
    container.setAttribute('data-ar-autoplaced', '1'); // engine may relocate next to its host field (true paste-once)
    document.body.appendChild(container);
  }
  container.innerHTML = \`${escapeForTemplate(body)}\`;

  // ---- widget logic ----
  (function widgetMain() {
${js}
  })();
})();
`;

  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, embed);
  const kb = (fs.statSync(output).size / 1024).toFixed(1);
  console.log(`[${widget.label}] wrote ${widget.output} (${kb} KB)`);
}

// Build a module that has styles + a script but NO container/markup (e.g. the
// income/expense calc, which field-anchors itself and injects its own card). Produces a
// guarded IIFE that injects the <style> and runs the <script>. CSS is left global on
// purpose (the calc's .mm-calc-card is its own namespace and is owned by another session).
function buildModule(widget) {
  const input = path.resolve(ROOT, widget.input);
  const output = path.resolve(ROOT, widget.output);
  const html = fs.readFileSync(input, 'utf8');

  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const css = styleMatch ? styleMatch[1].trim() : '';
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  if (!scriptMatch) throw new Error(`[${widget.label}] Could not find <script> block`);
  const js = scriptMatch[1].trim();

  const styleInject = css ? `  const style = document.createElement('style');
  style.setAttribute('${widget.styleAttr}', 'styles');
  style.textContent = \`${escapeForTemplate(css)}\`;
  document.head.appendChild(style);

` : '';

  const embed = `/**
 * ${widget.label} module
 * Generated from ${widget.input} by scripts/build-embed.js — do not hand-edit.
 * Styles + behavior, no mount <div> (it field-anchors itself). Paste once, anywhere.
 *   <script src="https://cdn.jsdelivr.net/gh/${CDN_REPO}@vX.Y.Z/${widget.output}"></script>
 */
(function () {
  if (window.${widget.guard}) return;
  window.${widget.guard} = true;

${styleInject}${js}
})();
`;
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, embed);
  const kb = (fs.statSync(output).size / 1024).toFixed(1);
  console.log(`[${widget.label}] wrote ${widget.output} (${kb} KB) [module]`);
}

// ---- Unified bundle: all asset repeaters + the income/expense calc in ONE paste-in script ----
// Each part is a self-contained, guarded IIFE (repeaters scoped to their own #container;
// the calc field-anchors + namespaces its own card), so concatenating them is safe — pasting
// this one <script> once drives everything. Survey-step order (13→20, then the calc). The
// legacy combined 'assets' embed is excluded (it would double up bank + vehicles).
const BUNDLE = {
  output: 'dist/embed-433a.js',
  parts: ['bank', 'investments', 'digitalAssets', 'availableCredit', 'realProperty', 'vehicles', 'personalAssets', 'incomeExpenseCalc'],
  label: '433a-bundle'
};
function buildBundle() {
  const header = `/**
 * 433-A UNIFIED BUNDLE — every asset repeater + the income/expense calc in ONE paste-in script.
 * Generated by scripts/build-embed.js — do not hand-edit. Concatenation of the individual
 * dist/embed-*.js modules; each is a self-contained, guarded IIFE (repeaters scoped to their
 * own #container, calc namespaced to .mm-calc-card), so they coexist with no collisions.
 *
 * TRUE PASTE-ONCE: paste this ONE <script> once (anywhere — every survey step shares one DOM).
 * No mount <div>s required: each repeater finds its native LARGE_TEXT host field (matched by
 * clean key) and renders itself right there; the calc finds its total fields and injects its card.
 * Just have the native fields on their steps.
 *   <script src="https://cdn.jsdelivr.net/gh/${CDN_REPO}@vX.Y.Z/${BUNDLE.output}"></script>
 * Modules: ${BUNDLE.parts.join(', ')}.
 */
`;
  const chunks = BUNDLE.parts.map(name => {
    const w = WIDGETS[name];
    if (!w) throw new Error(`[bundle] unknown part "${name}"`);
    const p = path.resolve(ROOT, w.output);
    if (!fs.existsSync(p)) throw new Error(`[bundle] missing ${w.output} — run a full build first`);
    const tag = w.containerId ? '#' + w.containerId : 'module';
    return `\n/* ===================== ${w.label} (${tag}) ===================== */\n` + fs.readFileSync(p, 'utf8').trim() + '\n';
  });
  const outPath = path.resolve(ROOT, BUNDLE.output);
  const out = header + chunks.join('\n');
  fs.writeFileSync(outPath, out);
  console.log(`[${BUNDLE.label}] wrote ${BUNDLE.output} (${(out.length / 1024).toFixed(1)} KB) — ${BUNDLE.parts.length} modules`);
}

const only = process.argv[2];
if (only === 'bundle') {
  // Rebuild every part FIRST so `build-embed.js bundle` can't ship stale modules from dist/,
  // then concatenate. (A full `build-embed.js` already builds all parts before bundling.)
  for (const name of BUNDLE.parts) { const w = WIDGETS[name]; (w.module ? buildModule : build)(w); }
  buildBundle();
  process.exit(0);
}
const names = only ? [only] : Object.keys(WIDGETS);
for (const name of names) {
  const w = WIDGETS[name];
  if (!w) { console.error(`Unknown widget "${name}". Known: ${Object.keys(WIDGETS).join(', ')}, bundle`); process.exit(1); }
  (w.module ? buildModule : build)(w);
}
if (!only) buildBundle();
