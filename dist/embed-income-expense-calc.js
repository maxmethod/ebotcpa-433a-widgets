/**
 * income-expense-calc module
 * Generated from income-expense-calc.html by scripts/build-embed.js — do not hand-edit.
 * Styles + behavior, no mount <div> (it field-anchors itself). Paste once, anywhere.
 *   <script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-income-expense-calc.js"></script>
 */
(function () {
  if (window.__incomeExpense433aLoaded) return;
  window.__incomeExpense433aLoaded = true;

  const style = document.createElement('style');
  style.setAttribute('data-433a-calc', 'styles');
  style.textContent = `.mm-calc-card {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #ffffff; border: 1px solid #e3e6eb; border-left: 4px solid #1A2744;
    border-radius: 10px; padding: 16px 18px; margin: 18px auto 6px; color: #1A2744;
    box-shadow: 0 2px 10px rgba(26,39,68,0.06);
    width: 100%; max-width: 100%; box-sizing: border-box;
  }
  .mm-calc-card * { box-sizing: border-box; }
  .mm-calc-card h4 { margin: 0 0 12px; font-size: 13px; font-weight: 700; letter-spacing: .04em;
    text-transform: uppercase; color: #5a6578; }
  .mm-calc-card .mm-row { display: flex; justify-content: space-between; align-items: baseline;
    font-size: 14px; padding: 4px 0; gap: 12px; }
  .mm-calc-card .mm-row .lbl { color: #4A5568; }
  .mm-calc-card .mm-row .amt { font-variant-numeric: tabular-nums; font-weight: 500; white-space: nowrap; }
  .mm-calc-card .mm-total { display: flex; justify-content: space-between; align-items: baseline;
    margin-top: 10px; padding-top: 10px; border-top: 2px solid #1A2744; font-size: 15px; }
  .mm-calc-card .mm-total .lbl { font-weight: 700; }
  .mm-calc-card .mm-total .amt { font-weight: 800; font-size: 18px; font-variant-numeric: tabular-nums; }`;
  document.head.appendChild(style);

(function () {
  // ============================================================
  // CONFIG — one entry per running-total. Matched by GHL data-q clean key.
  // Every field whose data-q starts with `prefix` is summed into `totalQ`,
  // EXCEPT any total field and any description field (see EXCLUDE).
  //
  // totalQ = the data-q of the field the calc WRITES the total into. It MUST be a
  // PLAIN-TEXT field — GHL currency-masked MONETARY fields drop a programmatic write
  // on submit (saves null). The deploy plan adds NEW text totals ("(Auto)") alongside
  // the existing monetary ones; set each totalQ below to the NEW text field's data-q.
  // ============================================================
  // totalQ points at the NEW plain-TEXT "Total Monthly Auto" fields (created
  // 2026-06-24) — NOT the legacy MONETARY totals, which drop a programmatic
  // write on submit. data-q is name-derived on GHL surveys (" - " -> "_-_"),
  // so "433A Income - Total Monthly Auto" renders data-q below.
  //   income  : fieldKey contact.433a_income__total_monthly_auto  (id s51oFH6iMl4aM8oW8qfC)
  //   expense : fieldKey contact.433a_expense__total_monthly_auto (id Ec8WqxkkgV5nn2N1ql0m)
  var GROUPS = [
    { key: 'income',  prefix: '433a_income_-_',  totalQ: '433a_income_-_total_monthly_auto',  cardId: 'mm-433a-income-card',  title: 'Total Monthly Income' },
    { key: 'expense', prefix: '433a_expense_-_', totalQ: '433a_expense_-_total_monthly_auto', cardId: 'mm-433a-expense-card', title: 'Total Monthly Expenses' }
  ];
  // Keep EVERY total field out of the sum — the old monetary total AND the new text
  // "(Auto)" total the calc writes to — plus any description field. Matching "total"
  // is safe: no income/expense line item has "total" in its data-q.
  var EXCLUDE = /total|desc/i;

  // ---------- helpers ----------
  function byQ(q) { return document.querySelector('[data-q="' + q + '"]'); }
  // Resolve the field the total is WRITTEN into. Exact data-q first; if the
  // survey rendered the "Total Monthly Auto" field's data-q slightly
  // differently, fall back to the field under this group's prefix whose
  // data-q contains both "total" and "auto" — that is ONLY the new auto-total
  // (no line item has "total"/"auto"), so the write can never land on a line.
  function totalEl(g) {
    var el = byQ(g.totalQ); if (el) return el;
    var cands = document.querySelectorAll('[data-q^="' + g.prefix + '"]');
    for (var i = 0; i < cands.length; i++) {
      var q = (cands[i].getAttribute('data-q') || '').toLowerCase();
      if (q.indexOf('total') > -1 && q.indexOf('auto') > -1) return cands[i];
    }
    return null;
  }
  function linesFor(g) {
    return Array.prototype.slice.call(document.querySelectorAll('[data-q^="' + g.prefix + '"]')).filter(function (el) {
      var q = el.getAttribute('data-q') || '';
      return !EXCLUDE.test(q) && el.tagName !== 'TEXTAREA';
    });
  }
  function num(el) {
    if (!el) return 0;
    var raw = String(el.value || '').trim();
    if (!raw) return 0;
    var neg = /^\(.*\)$/.test(raw) || /^-/.test(raw);            // accounting parens / leading minus
    var s = raw.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); // strip $ , and a stray 2nd dot
    var n = parseFloat(s);
    if (!isFinite(n)) return 0;
    return neg ? -Math.abs(n) : n;
  }
  function r2(x) { var y = Math.round((Number(x) || 0) * 100) / 100; return y === 0 ? 0 : y; }
  function money(n) {
    var v = Number(n); if (!isFinite(v)) v = 0;
    var neg = v < 0;
    var s = '$' + Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return neg ? '(' + s + ')' : s;
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]; }); }
  function labelOf(el, g) {
    var w = el.closest('.form-builder--item, [class*="form-field"], .field, [class*="--item"]');
    if (w) { var L = w.querySelector('label, [class*="label"]'); if (L) { var t = (L.textContent || '').replace(/\s+/g, ' ').trim(); if (t) return t; } }
    return (el.getAttribute('data-q') || '').replace(g.prefix, '').replace(/_/g, ' ').trim();
  }
  // React-friendly write: native setter + input/change so GHL records the value.
  function setVal(el, value) {
    if (!el) return;
    var proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    var setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
    setter.call(el, String(value));
    el.dispatchEvent(new Event('input',  { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // ---------- compute / render / write ----------
  var suppress = false, lastWrite = {};

  function computeGroup(g) {
    var total = 0, lines = [];
    linesFor(g).forEach(function (el) { var v = num(el); total += v; if (v) lines.push({ label: labelOf(el, g), amt: v }); });
    return { total: r2(total), lines: lines };
  }
  function card(g) {
    var anchor = totalEl(g) || linesFor(g)[0];
    if (!anchor) return null;
    var slide = anchor.closest('[class*="slide-no-"]') || anchor.parentNode;
    var c = slide.querySelector('#' + g.cardId);
    if (!c) { c = document.createElement('div'); c.id = g.cardId; c.className = 'mm-calc-card'; slide.appendChild(c); }
    return c;
  }
  function render(g, d) {
    var c = card(g); if (!c) return;
    var rows = d.lines.map(function (r) {
      return '<div class="mm-row"><span class="lbl">' + esc(r.label) + '</span><span class="amt">' + money(r.amt) + '</span></div>';
    }).join('') || '<div class="mm-row"><span class="lbl" style="font-style:italic;color:#8896A7;">Nothing entered yet</span><span class="amt"></span></div>';
    c.innerHTML = '<h4>' + esc(g.title) + '</h4>' + rows +
      '<div class="mm-total"><span class="lbl">' + esc(g.title) + '</span><span class="amt">' + money(d.total) + '</span></div>';
  }
  function writeBack(g, d) {
    var el = totalEl(g); if (!el) return;
    var val = money(d.total);
    if (lastWrite[g.totalQ] === val) return; // only write on a real change
    lastWrite[g.totalQ] = val;
    suppress = true;
    try { setVal(el, val); } finally { suppress = false; }
  }

  // ---------- net difference (IRS 433-A Line 51 = total income − total expenses) ----------
  // Writes the new TEXT field "433A Line 51 - Net Difference Auto" (id oxbZvGjxxesuTo8NYNb4).
  // Must be TEXT — the legacy MONETARY 433a_line_50__net_difference drops a programmatic write.
  var NET = { totalQ: '433a_line_51_-_net_difference_auto', altQ: '433a_line_51__net_difference_auto', cardId: 'mm-433a-net-card', title: 'Net Difference (Line 51)' };
  function netEl() { return byQ(NET.totalQ) || byQ(NET.altQ) || document.querySelector('[name="' + NET.altQ + '"]'); }
  function netTotal() { return r2(computeGroup(GROUPS[0]).total - computeGroup(GROUPS[1]).total); }
  function renderNet() {
    var anchor = netEl(); if (!anchor) return;
    var slide = anchor.closest('[class*="slide-no-"]') || anchor.parentNode;
    var c = slide.querySelector('#' + NET.cardId);
    if (!c) { c = document.createElement('div'); c.id = NET.cardId; c.className = 'mm-calc-card'; slide.appendChild(c); }
    var inc = computeGroup(GROUPS[0]).total, exp = computeGroup(GROUPS[1]).total, net = r2(inc - exp);
    c.innerHTML = '<h4>' + esc(NET.title) + '</h4>' +
      '<div class="mm-row"><span class="lbl">Total Monthly Income</span><span class="amt">' + money(inc) + '</span></div>' +
      '<div class="mm-row"><span class="lbl">Total Monthly Expenses</span><span class="amt">&minus;' + money(exp) + '</span></div>' +
      '<div class="mm-total"><span class="lbl">Net Difference</span><span class="amt">' + money(net) + '</span></div>';
  }
  function writeNet() {
    var el = netEl(); if (!el) return;
    var val = money(netTotal());
    if (lastWrite[NET.totalQ] === val) return;
    lastWrite[NET.totalQ] = val;
    suppress = true; try { setVal(el, val); } finally { suppress = false; }
  }

  // ---------- run ----------
  // Render the live cards on every keystroke (DISPLAY ONLY), but DEBOUNCE the
  // write-back of the totals into the GHL Total fields. Writing a GHL field on
  // every keystroke makes GHL's React form re-render mid-keystroke, which races
  // with the currency mask and drops the digit (user has to type each number
  // several times). Deferring the write removes that race; totals still save
  // 400ms after a pause, on blur (change), and on Next/Submit.
  var writeTimer = null;
  function renderAll() { GROUPS.forEach(function (g) { render(g, computeGroup(g)); }); renderNet(); }
  function flushWrite()    { clearTimeout(writeTimer); GROUPS.forEach(function (g) { writeBack(g, computeGroup(g)); }); writeNet(); }
  function scheduleWrite() { clearTimeout(writeTimer); writeTimer = setTimeout(flushWrite, 400); }
  function onEdit(e) { if (suppress) return; if (e.target && e.target.getAttribute && e.target.getAttribute('data-q')) { renderAll(); scheduleWrite(); } }
  document.addEventListener('input',  onEdit, true);
  document.addEventListener('change', onEdit, true);
  document.addEventListener('submit', flushWrite, true);
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest && e.target.closest('.ghl-footer-next, .ghl-submit-btn, .ghl-footer-submit, button[type="submit"]');
    if (t) flushWrite();
  }, true);
  setInterval(renderAll, 1000); // re-inject the cards if GHL re-renders a slide (display only)
  renderAll();
  scheduleWrite();
})();
})();
