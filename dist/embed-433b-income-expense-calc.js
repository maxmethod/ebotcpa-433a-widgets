/**
 * 433b-income-expense-calc module
 * Generated from 433b-income-expense-calc.html by scripts/build-embed.js — do not hand-edit.
 * Styles + behavior, no mount <div> (it field-anchors itself). Paste once, anywhere.
 *   <script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-433b-income-expense-calc.js"></script>
 */
(function () {
  if (window.__incomeExpense433bLoaded) return;
  window.__incomeExpense433bLoaded = true;

  const style = document.createElement('style');
  style.setAttribute('data-433b-calc', 'styles');
  style.textContent = `.mmb-calc-card {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #ffffff; border: 1px solid #e3e6eb; border-left: 4px solid #1A2744;
    border-radius: 10px; padding: 16px 18px; margin: 18px auto 6px; color: #1A2744;
    box-shadow: 0 2px 10px rgba(26,39,68,0.06);
    width: 100%; max-width: 100%; box-sizing: border-box;
  }
  .mmb-calc-card * { box-sizing: border-box; }
  .mmb-calc-card h4 { margin: 0 0 12px; font-size: 13px; font-weight: 700; letter-spacing: .04em;
    text-transform: uppercase; color: #5a6578; }
  .mmb-calc-card .mmb-row { display: flex; justify-content: space-between; align-items: baseline;
    font-size: 14px; padding: 4px 0; gap: 12px; }
  .mmb-calc-card .mmb-row .lbl { color: #4A5568; }
  .mmb-calc-card .mmb-row .amt { font-variant-numeric: tabular-nums; font-weight: 500; white-space: nowrap; }
  .mmb-calc-card .mmb-total { display: flex; justify-content: space-between; align-items: baseline;
    margin-top: 10px; padding-top: 10px; border-top: 2px solid #1A2744; font-size: 15px; }
  .mmb-calc-card .mmb-total .lbl { font-weight: 700; }
  .mmb-calc-card .mmb-total .amt { font-weight: 800; font-size: 18px; font-variant-numeric: tabular-nums; }
  .mmb-calc-card .mmb-result { border-radius: 8px; padding: 12px 14px; margin-top: 12px; }
  .mmb-calc-card .mmb-result.pos  { background: #E8F5EE; border: 1.5px solid #1E7C4D; }
  .mmb-calc-card .mmb-result.neg  { background: #FEF5EC; border: 1.5px solid #C05A10; }
  .mmb-calc-card .mmb-result.zero { background: #F0EAF8; border: 1.5px solid #5A2D82; }
  .mmb-calc-card .mmb-result .rlbl { font-size: 11px; text-transform: uppercase; letter-spacing: .05em; color: #4A5568; }
  .mmb-calc-card .mmb-result .ramt { font-size: 22px; font-weight: 800; font-variant-numeric: tabular-nums; margin-top: 2px; }`;
  document.head.appendChild(style);

(function () {
  // ============================================================
  // CONFIG — IRS Form 433-B Section 5. Each line carries BOTH its clean field
  // key (data-q, "__" -> "_-_" on the survey) and its GHL customFieldId (name=),
  // so el() can resolve by whichever the survey renders.
  //   income lines → Total Income (Line 36)   write 433b_income__total_monthly_auto (TEXT)
  //   expense lines→ Total Expenses (Line 49)  write 433b_expense__total_monthly_auto (TEXT)
  //   net          = income − expense (Line 50) write 433b_line_50__net_income_auto (TEXT)
  // The …other_description fields are plain survey text (NOT summed).
  // ============================================================
  var INCOME = [
    ['Gross receipts',      '433b_income__gross_receipts', 'UbTXcas6OHmBX1DHbH6V'],
    ['Gross rental income', '433b_income__gross_rental',   'bYIrs7yCzfb6dzlRNUOG'],
    ['Interest',            '433b_income__interest',       'kCiWut1PgQFcebCA8RO1'],
    ['Dividends',           '433b_income__dividends',      'UtjgsILMiDbthB4LD1u4'],
    ['Cash receipts',       '433b_income__cash_receipts',  'aImjh66Ml1QbuGrFp6P8'],
    ['Other income',        '433b_income__other',          'DsnmKEw1q9pD9bAgz373']
  ];
  var EXPENSES = [
    ['Materials purchased',   '433b_expense__materials',            '3YlurUF2srp3z4BRrym4'],
    ['Inventory purchased',   '433b_expense__inventory',            '4u8STLGVBNgTAeV3qEol'],
    ['Gross wages & salaries','433b_expense__wages',                'TD55TBdN4jhZfC6yajTo'],
    ['Rent',                  '433b_expense__rent',                 'sDX3u0jPZ9XR07cPRun6'],
    ['Supplies',              '433b_expense__supplies',             '2N7Rp8jLwocBVt9JLGyP'],
    ['Utilities / telephone', '433b_expense__utilities_telephone',  'IUOG4IjUbldtc8n8wO1e'],
    ['Vehicle gas / oil',     '433b_expense__vehicle_gas_oil',      'kOjGmFfKHNoUbPKtlU3Z'],
    ['Repairs & maintenance', '433b_expense__repairs',              'iWEy1294u7Bwl3gugYAR'],
    ['Insurance',             '433b_expense__insurance',            'ytgjQskMSejr93W568Ng'],
    ['Current taxes',         '433b_expense__current_taxes',        'Ts7v4KiWDYlQKpXoLhal'],
    ['Other expenses',        '433b_expense__other',                'AReNmcMqcKZh5cwkAvqk'],
    ['Installment payments',  '433b_expense__installment_payments', '8iE8XzICh2SzeVHHCJkQ']
  ];
  // Where to WRITE the computed totals (TEXT fields — must be on the survey for the write to land).
  var INCOME_TOTAL  = { key: '433b_income__total_monthly_auto',  id: '2FocKVAdBzRhtnqkaYaU' };
  var EXPENSE_TOTAL = { key: '433b_expense__total_monthly_auto', id: 'G1D5ZkTxNHBp2CCXUJXW' };
  var NET           = { key: '433b_line_50__net_income_auto',    id: 'rlsecaBS98CS6xLgAq6T' };

  // ============================================================
  // helpers — resolve a field by id (name=) OR clean key / dash key (data-q).
  // ============================================================
  function el(field) {
    var id = field.id, key = field.key;
    var dash = key ? key.replace(/__/g, '_-_') : null;
    var sels = [];
    if (id)   sels.push('[name="' + id + '"]');
    if (key)  sels.push('[data-q="' + key + '"]', '[name="' + key + '"]');
    if (dash) sels.push('[data-q="' + dash + '"]', '[name="' + dash + '"]');
    for (var i = 0; i < sels.length; i++) {
      var e = document.querySelector(sels[i]);
      if (e && ('value' in e)) return e;
    }
    return null;
  }
  function num(field) {
    var e = el(field); if (!e) return 0;
    var raw = String(e.value || '').trim();
    if (!raw) return 0;
    var neg = /^\(.*\)$/.test(raw) || /^-/.test(raw);             // accounting parens / leading minus
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
  // React-friendly write: native setter + input/change so GHL records the value.
  function setVal(field, value) {
    var e = el(field); if (!e) return;
    var proto = e.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    var setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
    if (setter) setter.call(e, String(value)); else e.value = String(value);
    e.dispatchEvent(new Event('input',  { bubbles: true }));
    e.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // ============================================================
  // compute
  // ============================================================
  function sumLines(lines) {
    var total = 0, shown = [];
    lines.forEach(function (row) { var v = num({ key: row[1], id: row[2] }); total += v; if (v) shown.push({ label: row[0], amt: v }); });
    return { total: r2(total), lines: shown };
  }
  function compute() {
    var inc = sumLines(INCOME), exp = sumLines(EXPENSES);
    return { inc: inc, exp: exp, net: r2(inc.total - exp.total) };
  }

  // ============================================================
  // render — inject/update each card on the slide that holds its anchor field.
  // ============================================================
  function cardFor(field, fallbackLines, cardId) {
    var anchor = el(field);
    if (!anchor && fallbackLines && fallbackLines.length) anchor = el({ key: fallbackLines[0][1], id: fallbackLines[0][2] });
    if (!anchor) return null;
    var slide = (anchor.closest && anchor.closest('[class*="slide-no-"]')) || anchor.parentNode;
    if (!slide) return null;
    var c = slide.querySelector('#' + cardId);
    if (!c) { c = document.createElement('div'); c.id = cardId; c.className = 'mmb-calc-card'; slide.appendChild(c); }
    return c;
  }
  function rowsHtml(lines, emptyMsg) {
    return lines.map(function (r) {
      return '<div class="mmb-row"><span class="lbl">' + esc(r.label) + '</span><span class="amt">' + money(r.amt) + '</span></div>';
    }).join('') || '<div class="mmb-row"><span class="lbl" style="font-style:italic;color:#8896A7;">' + esc(emptyMsg) + '</span><span class="amt"></span></div>';
  }
  function render(d) {
    var ic = cardFor(INCOME_TOTAL, INCOME, 'mmb-433b-income');
    if (ic) ic.innerHTML = '<h4>Total Monthly Income · Line 36</h4>' + rowsHtml(d.inc.lines, 'No income entered yet') +
      '<div class="mmb-total"><span class="lbl">Total income (L36)</span><span class="amt">' + money(d.inc.total) + '</span></div>';
    var ec = cardFor(EXPENSE_TOTAL, EXPENSES, 'mmb-433b-expense');
    if (ec) ec.innerHTML = '<h4>Total Monthly Expenses · Line 49</h4>' + rowsHtml(d.exp.lines, 'No expenses entered yet') +
      '<div class="mmb-total"><span class="lbl">Total expenses (L49)</span><span class="amt">' + money(d.exp.total) + '</span></div>';
    var nc = cardFor(NET, INCOME, 'mmb-433b-net');
    if (nc) {
      var cls = d.net > 0 ? 'pos' : (d.net < 0 ? 'neg' : 'zero');
      var rlbl = d.net > 0 ? '▲ Net Income (Line 50)' : (d.net < 0 ? '▼ Net Loss (Line 50)' : 'Net Income (Line 50)');
      nc.innerHTML = '<h4>Net Business Income · Line 50</h4>' +
        '<div class="mmb-row"><span class="lbl">Total monthly income (L36)</span><span class="amt">' + money(d.inc.total) + '</span></div>' +
        '<div class="mmb-row"><span class="lbl">Total monthly expenses (L49)</span><span class="amt">&minus;' + money(d.exp.total) + '</span></div>' +
        '<div class="mmb-result ' + cls + '"><div class="rlbl">' + rlbl + ' &nbsp;=&nbsp; Income (L36) − Expenses (L49)</div>' +
        '<div class="ramt">' + money(d.net) + '</div></div>';
    }
  }

  // ============================================================
  // write computed totals into the GHL "(Auto)" TEXT fields (save on submit).
  // ============================================================
  var suppress = false, lastWrite = {};
  function writeOne(field, value) { if (lastWrite[field.id] === value) return; lastWrite[field.id] = value; setVal(field, value); }
  function writeBack(d) {
    suppress = true;
    try {
      writeOne(INCOME_TOTAL,  money(d.inc.total));
      writeOne(EXPENSE_TOTAL, money(d.exp.total));
      writeOne(NET,           money(d.net));
    } finally { suppress = false; }
  }

  // ============================================================
  // run — render cards on every keystroke (display only); DEBOUNCE the field
  // write-back (writing a GHL field per-keystroke races the currency mask and
  // drops digits). Totals still save 400ms after a pause, on blur, and on Next/Submit.
  // ============================================================
  var lastSig = null, writeTimer = null;
  function renderNow() {
    var d = compute();
    var sig = JSON.stringify(d);
    if (sig !== lastSig) { lastSig = sig; render(d); }
    return d;
  }
  function flushWrite()    { clearTimeout(writeTimer); writeBack(compute()); }
  function scheduleWrite() { clearTimeout(writeTimer); writeTimer = setTimeout(flushWrite, 400); }
  function onEdit(e) { if (suppress) return; var t = e.target; if (t && (t.name || (t.getAttribute && t.getAttribute('data-q')))) { renderNow(); scheduleWrite(); } }
  document.addEventListener('input',  onEdit, true);
  document.addEventListener('change', onEdit, true);
  document.addEventListener('submit', flushWrite, true);
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest && e.target.closest('.ghl-footer-next, .ghl-submit-btn, .ghl-footer-submit, button[type="submit"]');
    if (t) flushWrite();
  }, true);
  setInterval(renderNow, 1000); // re-inject cards if GHL re-renders a slide (display only)
  renderNow();
  scheduleWrite();              // initial write once (covers pre-filled values)
})();
})();
