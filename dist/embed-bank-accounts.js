/**
 * bank-accounts embed bootstrap
 * Generated from bank-accounts.html by scripts/build-embed.js — do not hand-edit.
 *
 * Drop into a GHL form step (Custom Code element) with:
 *   <div id="bank-433a-widget" data-primary-color="{{custom_values.brand_primary_color}}"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-bank-accounts.js"></script>
 *
 * Or omit the <div> and the script appends the widget to <body>.
 */
(function () {
  if (window.__bank433aEmbedLoaded) return;
  window.__bank433aEmbedLoaded = true;

  // ---- styles ----
  const style = document.createElement('style');
  style.setAttribute('data-bank-433a', 'styles');
  style.textContent = `:root {
    --ar-bg: #ffffff; --ar-surface: #f7f8fa; --ar-border: #e3e6eb; --ar-border-strong: #c9cfd8;
    --ar-text: #1a2332; --ar-text-muted: #5a6578;
    --ar-accent: #5E52A3; --ar-accent-hover: #4B4183; 
    --ar-danger: #c94545; --ar-danger-hover: #a83838;
    --ar-radius: 8px;
    --ar-font: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }#bank-433a-widget#bank-433a-widget * { box-sizing: border-box; }#bank-433a-widget#bank-433a-widget .ar-container { font-family: var(--ar-font); color: var(--ar-text); font-size: 15px; line-height: 1.5; }#bank-433a-widget#bank-433a-widget .ar-section { background: transparent; border: none; border-radius: 0; padding: 0; margin-bottom: 22px; }#bank-433a-widget#bank-433a-widget .ar-section + .ar-section { padding-top: 22px; border-top: 1px solid var(--ar-border); }#bank-433a-widget#bank-433a-widget .ar-section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }#bank-433a-widget#bank-433a-widget .ar-section-title { font-size: 16px; font-weight: 700; margin: 0; }#bank-433a-widget#bank-433a-widget .ar-section-count { color: var(--ar-text-muted); font-size: 13px; }#bank-433a-widget#bank-433a-widget .ar-subtitle { font-size: 12px; color: var(--ar-text-muted); margin: 0 0 14px; }#bank-433a-widget#bank-433a-widget label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 6px; color: var(--ar-text); }#bank-433a-widget#bank-433a-widget input[type="text"] {
    width: 100%; padding: 9px 12px; font-size: 14px; font-family: var(--ar-font);
    border: 1px solid var(--ar-border-strong); border-radius: var(--ar-radius);
    background: #fff; color: var(--ar-text); transition: border-color .15s, box-shadow .15s;
  }#bank-433a-widget#bank-433a-widget input:focus { outline: none; border-color: var(--ar-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ar-accent) 22%, transparent); }#bank-433a-widget#bank-433a-widget .ar-amount-wrap { position: relative; }#bank-433a-widget#bank-433a-widget .ar-amount-wrap input { padding-left: 22px; }#bank-433a-widget#bank-433a-widget .ar-amount-wrap::before { content: "$"; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--ar-text-muted); font-size: 14px; pointer-events: none; }#bank-433a-widget#bank-433a-widget button {
    font-family: var(--ar-font); font-size: 14px; padding: 9px 16px; border-radius: var(--ar-radius);
    border: 1px solid var(--ar-border-strong); background: #fff; color: var(--ar-text); cursor: pointer; font-weight: 500; transition: background .15s, border-color .15s;
  }#bank-433a-widget#bank-433a-widget button:hover { background: var(--ar-surface); }#bank-433a-widget#bank-433a-widget button.ar-primary { background: var(--ar-accent); border-color: var(--ar-accent); color: #fff; }#bank-433a-widget#bank-433a-widget button.ar-primary:hover { background: var(--ar-accent-hover); border-color: var(--ar-accent-hover); }#bank-433a-widget#bank-433a-widget button.ar-danger-text { background: transparent; border: none; color: var(--ar-danger); padding: 4px 8px; font-size: 13px; }#bank-433a-widget#bank-433a-widget button.ar-danger-text:hover { color: var(--ar-danger-hover); background: transparent; }#bank-433a-widget#bank-433a-widget .ar-add-box { background: #fff; border: 1px dashed var(--ar-border-strong); border-radius: var(--ar-radius); padding: 14px; }#bank-433a-widget#bank-433a-widget .ar-add-box h4 { margin: 0 0 10px; font-size: 14px; font-weight: 600; }#bank-433a-widget#bank-433a-widget .ar-field-group { display: grid; grid-template-columns: repeat(auto-fill, minmax(var(--ar-col-min, 240px), 1fr)); gap: 14px 16px; margin-bottom: 12px; }#bank-433a-widget#bank-433a-widget .ar-field-group > div { display: flex; flex-direction: column; justify-content: flex-end; }#bank-433a-widget#bank-433a-widget .ar-actions-right { display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px; }#bank-433a-widget#bank-433a-widget .ar-items-list { margin-top: 14px; display: flex; flex-direction: column; gap: 8px; }#bank-433a-widget#bank-433a-widget .ar-item-card { background: #fff; border: 1px solid var(--ar-border); border-radius: var(--ar-radius); padding: 12px 14px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }#bank-433a-widget#bank-433a-widget .ar-item-main { flex: 1; min-width: 0; }#bank-433a-widget#bank-433a-widget .ar-item-name { font-weight: 500; font-size: 14px; }#bank-433a-widget#bank-433a-widget .ar-item-meta { font-size: 13px; color: var(--ar-text-muted); margin-top: 2px; }#bank-433a-widget#bank-433a-widget .ar-item-amount { font-weight: 600; font-size: 14px; white-space: nowrap; text-align: right; }#bank-433a-widget#bank-433a-widget .ar-empty { font-size: 13px; color: var(--ar-text-muted); font-style: italic; padding: 6px 0 0; }#bank-433a-widget#bank-433a-widget .ar-total { display: flex; justify-content: space-between; align-items: baseline; margin-top: 12px; padding-top: 10px; border-top: 2px solid var(--ar-border); font-size: 14px; font-weight: 700; }#bank-433a-widget#bank-433a-widget .ar-total .ar-total-val { color: var(--ar-accent); font-size: 16px; font-variant-numeric: tabular-nums; }#bank-433a-widget#bank-433a-widget .ar-warn { background: #fff3cd; border: 1px solid #ffd866; color: #665300; padding: 8px 12px; border-radius: var(--ar-radius); font-size: 13px; margin-bottom: 10px; display: none; }#bank-433a-widget#bank-433a-widget .ar-warn.visible { display: block; }`;
  document.head.appendChild(style);

  // ---- markup ----
  let container = document.getElementById('bank-433a-widget') ||
                  document.querySelector('[data-bank-433a-widget]');
  if (!container) {
    container = document.createElement('div');
    container.id = 'bank-433a-widget';
    container.setAttribute('data-ar-autoplaced', '1'); // engine may relocate next to its host field (true paste-once)
    document.body.appendChild(container);
  }
  container.innerHTML = `<div class="ar-container"></div>`;

  // ---- widget logic ----
  (function widgetMain() {
(function () {
  // ============================================================
  // CONFIG — the only thing that differs between 433-A asset widgets.
  // Override at runtime via window[CONFIG.configGlobal] = { primaryColor, max }.
  //   column.kind: 'text' | 'money' | 'calc'   (calc = sub[0] − sub[1], no input)
  //   column.gate: the field required before a row can be added
  //   column.role: 'name' | 'meta' | 'amount'  (drives the summary card)
  //   column.slabel: label used in the saved pipe summary
  //   section.totalCol: the money/calc column summed for the total line
  //   section.noTotal: true -> omit the trailing total line (pure-list classes:
  //                    personnel, processors, credit cards, affiliations, etc. — no $ total)
  // ============================================================
  var CONFIG = {
    "containerId": "bank-433a-widget",
    "configGlobal": "BANK_433A_CONFIG",
    "sections": [
      {
        "key": "433a__bank_accounts_summary",
        "title": "Cash & Bank Accounts",
        "subtitle": "Checking, savings, money market, online/stored-value accounts — list every institution (IRS Form 433-A, line 13).",
        "addLabel": "Add a bank / account",
        "addBtn": "Add account",
        "gateWarn": "Enter the institution name before adding.",
        "emptyNote": "No accounts added yet.",
        "totalLabel": "Total cash in banks",
        "totalCol": "balance",
        "columns": [
          {
            "id": "institution",
            "label": "Bank / institution name & address",
            "kind": "text",
            "ph": "Name, street, city, state, ZIP",
            "gate": true,
            "role": "name"
          },
          {
            "id": "acct",
            "label": "Account number",
            "kind": "text",
            "ph": "Acct. no",
            "slabel": "Acct"
          },
          {
            "id": "type",
            "label": "Type of account",
            "kind": "text",
            "ph": "Checking, Savings, MMA…",
            "slabel": "Type",
            "role": "meta"
          },
          {
            "id": "asof",
            "label": "Balance as of (date)",
            "kind": "text",
            "ph": "MM/DD/YYYY",
            "slabel": "As of"
          },
          {
            "id": "balance",
            "label": "Account balance",
            "kind": "money",
            "slabel": "Balance",
            "role": "amount"
          }
        ]
      }
    ]
  };

  // ============================================================
  // ENGINE — identical across all 433-A asset widgets.
  // ============================================================
  var OVR = (typeof window !== 'undefined' && window[CONFIG.configGlobal]) || {};
  var MAX = OVR.max || 10;

  // Shared host-field wrapper selector (the label+input row GHL renders) — used by
  // both the field-anchor placement and the host-field hider.
  var HOST_WRAP_SEL = '.form-builder--item, .form-field-wrap, .menu-field-wrap, [class*="form-field-col"], .field';
  function hostWrapOf(el) { return (el && el.closest && el.closest(HOST_WRAP_SEL)) || el; }

  var widgetEl = document.getElementById(CONFIG.containerId);

  // TRUE PASTE-ONCE: if the embed auto-created the container (no <div> placed by the
  // user — the bootstrap flags it data-ar-autoplaced), relocate it to sit right before
  // its first section's native host field, so the widget lands in the right spot with NO
  // mount div. Idempotent + retried in the poll (GHL can mount step fields late).
  function placeWidget() {
    if (!widgetEl || widgetEl.getAttribute('data-ar-autoplaced') !== '1' || widgetEl.getAttribute('data-ar-placed') === '1') return;
    var host = realHost(CONFIG.sections[0].key);   // first section's real (non-fallback) host field
    if (!host) return;                              // not mounted yet — try again next tick
    var hw = hostWrapOf(host);
    if (hw && hw.parentNode && hw !== widgetEl && !widgetEl.contains(hw)) {
      hw.parentNode.insertBefore(widgetEl, hw);
      widgetEl.setAttribute('data-ar-placed', '1');
    }
  }
  placeWidget();

  // One-time best-effort guard: a multi-section widget (e.g. Credit + Life Insurance) renders
  // ALL its sections together, anchored to section[0], and hides EVERY host field wherever it
  // is. If its section hosts sit on DIFFERENT survey steps, the later step would show only a
  // hidden field (a blank step) — warn so it's caught in a staging test. Keep such widgets on
  // ONE step. Returns true once it has decided (so it isn't re-checked every tick).
  function warnSplitSections() {
    var slide = function (k) { var h = realHost(k); return h && h.closest ? h.closest('[class*="slide-no-"]') : null; };
    var s0 = slide(CONFIG.sections[0].key);
    for (var i = 1; i < CONFIG.sections.length; i++) {
      var sN = slide(CONFIG.sections[i].key);
      if (!sN) return false; // a host isn't mounted yet — re-check next tick
      if (s0 && sN !== s0) { try { console.warn('[433A] ' + CONFIG.containerId + ' has sections on different survey steps — keep all of its sections on ONE step (it renders them together and hides every host field).'); } catch (e) {} return true; }
    }
    return true;
  }

  // scope the mount to THIS widget's own container (so multiple asset widgets
  // can coexist on one page); fall back to document for standalone preview.
  var mount = (widgetEl || document).querySelector('.ar-container');
  var RID = 0;

  // Per-widget column density: a widget can ask for wider columns (fewer per row) by setting
  // CONFIG.colMin (or window[configGlobal].colMin) — e.g. Real Property uses 2 columns because
  // its title/location/lender fields are long. Unset keeps the default 240px / ~3-col layout.
  var COLMIN = OVR.colMin || CONFIG.colMin;
  if (COLMIN && mount && mount.style) mount.style.setProperty('--ar-col-min', COLMIN);

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) { return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]; });
  }
  function sanitize(v) { return String(v == null ? '' : v).replace(/\s*[|\r\n]+\s*/g, ' / ').trim(); } // pipe/newline would corrupt the pipe-delimited, one-row-per-line summary the webhook/PDF parses
  function parseMoney(s) {
    if (s == null) return null;
    var t = String(s).trim();
    if (t === '') return null;
    var neg = /^\(.*\)$/.test(t) || /^-/.test(t);  // accounting parens or leading minus = negative
    // strip ONLY currency symbol, thousands separators, surrounding parens/sign/space — never interior junk
    var core = t.replace(/^[-(]+/, '').replace(/[)\s]+$/, '').replace(/[$,\s]/g, '');
    if (!/^\d*\.?\d+$/.test(core)) return null;     // letters, interior '-' (ranges like 2500-3000), 'e', extra dots -> null (money() preserves raw text)
    var n = Number(core);
    if (!isFinite(n)) return null;
    return neg ? -n : n;
  }
  function fmtMoney(n) {
    var v = Number(n) || 0, neg = v < 0, abs = Math.abs(v);
    var hasCents = Math.round(abs * 100) % 100 !== 0;
    var s = '$' + abs.toLocaleString('en-US', { minimumFractionDigits: hasCents ? 2 : 0, maximumFractionDigits: 2 });
    return neg ? '(' + s + ')' : s;  // negatives in accounting parentheses
  }
  function money(raw) { var n = parseMoney(raw); return n != null ? fmtMoney(n) : (raw || '').trim(); }
  function num(v) { var n = parseMoney(v); return n == null ? 0 : n; }

  // GHL surveys render the fieldKey's "__" as "_-_" in data-q (fieldKey
  // 433a__bank_accounts_summary -> survey data-q 433a_-_bank_accounts_summary), and the
  // survey's name= is an encrypted blob. Match the host by the clean key AND its "_-_" form,
  // across name= and data-q. WITHOUT this the widget can't find its host on a real survey:
  // it appends to <body>, never hides the native field, and never writes the summary back.
  // Field-id match (MOST robust, preferred): GHL renders the host field as
  // <textarea name="<fieldId>" id="<fieldId>">, and the survey data-q is derived from the
  // field's DISPLAY NAME — NOT its fieldKey. So a friendly rename ("Business Bank Accounts")
  // makes data-q "433b_-_business_bank_accounts" and key/data-q matching MISSES the host.
  // When CONFIG supplies the GHL field id per section (`id`), match on it first (rename-proof,
  // exactly how the income/expense calc binds). Falls back to clean-key/data-q forms when no
  // id is given (so 433-A configs without `id` behave unchanged).
  function idForKey(key) {
    try { for (var i = 0; i < CONFIG.sections.length; i++) { var s = CONFIG.sections[i]; if (s.key === key && s.id) return s.id; } } catch (e) {}
    return null;
  }
  function hostSel(key, live) {
    var suf = live ? ':not([data-ar-fallback])' : '';
    var dash = key.replace(/__/g, '_-_');
    var sel = [];
    var fid = idForKey(key);
    if (fid) sel.push('[name="' + fid + '"]' + suf, '[id="' + fid + '"]' + suf);
    sel.push('[data-q="' + key + '"]' + suf, '[name="' + key + '"]' + suf);
    if (dash !== key) sel.push('[data-q="' + dash + '"]' + suf);
    return sel.join(', ');
  }

  function setAll(key, value) {
    document.querySelectorAll(hostSel(key)).forEach(function (el) {
      if (!('value' in el)) return; // a wrapper can also carry data-q — only write to the field itself
      // React-safe write: set through the native value setter so GHL's React survey actually
      // RECORDS the value. A plain `el.value=` shows in the DOM but React can drop it on submit
      // (same lesson the income/expense calc learned). Then fire input+change for onChange.
      var proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype
                : el.tagName === 'SELECT'   ? HTMLSelectElement.prototype
                : HTMLInputElement.prototype;
      var d = Object.getOwnPropertyDescriptor(proto, 'value');
      if (d && d.set) d.set.call(el, value); else el.value = value;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  function col(sec, id) { for (var i = 0; i < sec.columns.length; i++) if (sec.columns[i].id === id) return sec.columns[i]; return null; }
  function roleCol(sec, role) { for (var i = 0; i < sec.columns.length; i++) if (sec.columns[i].role === role) return sec.columns[i]; return null; }
  function calcVal(c, row) { var v = num(row[c.sub[0]]) - num(row[c.sub[1]]); return c.floor ? Math.max(0, v) : v; } // floor:true clamps underwater equity to $0 (IRS OIC convention)
  function totalOf(sec) {
    var tc = col(sec, sec.totalCol);
    return sec._state.reduce(function (s, row) { return s + (tc.kind === 'calc' ? calcVal(tc, row) : num(row[tc.id])); }, 0);
  }

  function buildSummary(sec) {
    if (!sec._state.length) return '';
    var lines = sec._state.map(function (row) {
      var parts = [];
      sec.columns.forEach(function (c) {
        var v;
        if (c.kind === 'calc') v = money(calcVal(c, row));
        else if (c.kind === 'money') v = row[c.id] ? money(row[c.id]) : '';
        else v = (row[c.id] || '').trim();
        v = sanitize(v);  // neutralize pipe/newline so a row can't corrupt the delimited summary
        if (c.gate) parts.push(v || '(unnamed)');
        else if (v !== '') parts.push((c.slabel ? c.slabel + ': ' : '') + v);
      });
      return parts.join(' | ');
    });
    if (!sec.noTotal) lines.push('— ' + (sec.totalLabel || 'Total') + ': ' + money(totalOf(sec))); // noTotal: pure-list classes have no meaningful $ total line
    return lines.join('\n');
  }

  function render(sec, write) {
    var n = sec._state.length;
    sec._els.count.textContent = n + ' of ' + MAX;
    sec._els.empty.style.display = n === 0 ? 'block' : 'none';
    var nameCol = roleCol(sec, 'name') || sec.columns[0], metaCol = roleCol(sec, 'meta'), amtCol = roleCol(sec, 'amount');
    sec._els.list.innerHTML = sec._state.map(function (row) {
      var name = escapeHtml((row[nameCol.id] || '').trim() || '(unnamed)');
      var meta = metaCol ? escapeHtml((row[metaCol.id] || '').trim()) : '';
      var amt = '';
      if (amtCol) amt = amtCol.kind === 'calc' ? money(calcVal(amtCol, row)) : (row[amtCol.id] ? money(row[amtCol.id]) : '');
      return '<div class="ar-item-card"><div class="ar-item-main"><div class="ar-item-name">' + name + '</div>' +
             (meta ? '<div class="ar-item-meta">' + meta + '</div>' : '') + '</div>' +
             (amt ? '<div class="ar-item-amount">' + escapeHtml(amt) + '</div>' : '') +
             '<button class="ar-danger-text" data-rm="' + row._id + '">Remove</button></div>';
    }).join('');
    sec._els.list.querySelectorAll('[data-rm]').forEach(function (b) {
      b.onclick = function () { sec._state = sec._state.filter(function (r) { return r._id !== b.dataset.rm; }); render(sec, true); };
    });
    if (sec._els.total) { sec._els.total.style.display = (!sec.noTotal && n > 0) ? 'flex' : 'none'; if (!sec.noTotal) sec._els.totalVal.textContent = money(totalOf(sec)); } // noTotal: never show or compute a total (totalCol may be absent)
    sec._els.box.style.display = n >= MAX ? 'none' : 'block';
    if (write) setAll(sec.key, buildSummary(sec));
  }

  function buildSection(sec) {
    sec._state = [];
    var inputCols = sec.columns.filter(function (c) { return c.kind !== 'calc'; });
    var fields = inputCols.map(function (c) {
      var input = c.kind === 'money'
        ? '<div class="ar-amount-wrap"><input type="text" data-f="' + c.id + '" placeholder="' + (c.ph || '0.00') + '" inputmode="decimal" autocomplete="off"></div>'
        : '<input type="text" data-f="' + c.id + '" placeholder="' + (c.ph || '') + '" autocomplete="off">';
      return '<div><label>' + escapeHtml(c.label) + '</label>' + input + '</div>';
    }).join('');
    var wrap = document.createElement('div');
    wrap.className = 'ar-section';
    wrap.innerHTML =
      '<div class="ar-section-header"><h3 class="ar-section-title">' + escapeHtml(sec.title) + '</h3><span class="ar-section-count">0 of ' + MAX + '</span></div>' +
      (sec.subtitle ? '<p class="ar-subtitle">' + escapeHtml(sec.subtitle) + '</p>' : '') +
      '<div class="ar-add-box"><h4>' + escapeHtml(sec.addLabel || 'Add') + '</h4>' +
        '<div class="ar-warn">' + escapeHtml(sec.gateWarn || 'Fill in the required field before adding.') + '</div>' +
        '<div class="ar-field-group">' + fields + '</div>' +
        '<div class="ar-actions-right"><button type="button" data-act="clear">Clear</button><button type="button" class="ar-primary" data-act="add">' + escapeHtml(sec.addBtn || 'Add') + '</button></div>' +
      '</div>' +
      '<div class="ar-items-list"></div>' +
      '<p class="ar-empty">' + escapeHtml(sec.emptyNote || 'Nothing added yet.') + '</p>' +
      '<div class="ar-total" style="display:none;"><span>' + escapeHtml(sec.totalLabel || 'Total') + '</span><span class="ar-total-val">$0.00</span></div>';
    mount.appendChild(wrap);

    sec._els = {
      box: wrap.querySelector('.ar-add-box'), warn: wrap.querySelector('.ar-warn'),
      count: wrap.querySelector('.ar-section-count'), list: wrap.querySelector('.ar-items-list'),
      empty: wrap.querySelector('.ar-empty'), total: wrap.querySelector('.ar-total'),
      totalVal: wrap.querySelector('.ar-total-val'), inputs: {}
    };
    inputCols.forEach(function (c) { sec._els.inputs[c.id] = wrap.querySelector('[data-f="' + c.id + '"]'); });
    var gateCol = sec.columns.filter(function (c) { return c.gate; })[0] || sec.columns[0];
    sec._els.inputs[gateCol.id].addEventListener('input', function () { if (this.value.trim()) sec._els.warn.classList.remove('visible'); });
    wrap.querySelector('[data-act="clear"]').onclick = function () { inputCols.forEach(function (c) { sec._els.inputs[c.id].value = ''; }); sec._els.warn.classList.remove('visible'); };
    wrap.querySelector('[data-act="add"]').onclick = function () {
      var gv = (sec._els.inputs[gateCol.id].value || '').trim();
      if (!gv) { sec._els.warn.classList.add('visible'); sec._els.inputs[gateCol.id].focus(); return; }
      var row = { _id: 'r' + (RID++) };
      inputCols.forEach(function (c) { row[c.id] = (sec._els.inputs[c.id].value || '').trim(); });
      sec._state.push(row);
      inputCols.forEach(function (c) { sec._els.inputs[c.id].value = ''; });
      render(sec, true); sec._els.inputs[gateCol.id].focus();
    };
    render(sec, false);
  }

  // ---------- hide host fields + fallback inputs ----------
  function hideHostFields() {
    CONFIG.sections.forEach(function (sec) {
      document.querySelectorAll(hostSel(sec.key)).forEach(function (el) {
        if (el.getAttribute('data-ar-fallback') != null) return;
        var wrap = hostWrapOf(el);
        if (wrap && wrap !== el) {
          // Keep the native field's .form-builder--item RENDERED (display:block) but emptied.
          // GHL auto-SKIPS any survey slide whose every form item is display:none, and our
          // injected widget is NOT a GHL form item — so an asset slide that holds ONLY this
          // summary field would be skipped if we hid the whole wrapper. Instead hide just the
          // field's inner label + input; the wrapper stays counted, the client sees only the widget.
          if (wrap.classList) wrap.classList.remove('d-none');
          // display:block keeps GHL's "slide has a visible form item" check happy; the 1px
          // overflow-hidden box keeps it non-zero-height too (in case GHL checks rendered height),
          // while showing nothing. Inner label + input hidden so only our widget is visible.
          wrap.style.setProperty('display', 'block', 'important');
          wrap.style.margin = '0'; wrap.style.padding = '0'; wrap.style.border = '0';
          wrap.style.height = '1px'; wrap.style.minHeight = '1px'; wrap.style.overflow = 'hidden';
          wrap.querySelectorAll('label').forEach(function (l) { l.style.display = 'none'; });
          el.style.display = 'none';
        } else if (wrap) {
          wrap.style.display = 'none'; // no GHL wrapper (standalone) — just hide the field
        }
      });
    });
  }

  // ---------- brand color ----------
  function isValidColor(v) { if (!v || typeof v !== 'string') return false; var s = v.trim(); if (!s || s.indexOf('{{') !== -1 || s.indexOf('}}') !== -1) return false; return /^#[0-9a-f]{3,8}$/i.test(s) || /^rgba?\(/i.test(s); }
  function darken(color, amount) {
    var r, g, b, hex = color.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i), rgb = color.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
    if (hex) { var h = hex[1].length === 3 ? hex[1].split('').map(function (c) { return c + c; }).join('') : hex[1]; r = parseInt(h.slice(0,2),16); g = parseInt(h.slice(2,4),16); b = parseInt(h.slice(4,6),16); }
    else if (rgb) { r = +rgb[1]; g = +rgb[2]; b = +rgb[3]; } else { return color; }
    var d = function (v) { return Math.max(0, Math.round(v * (1 - amount))).toString(16).padStart(2, '0'); };
    return '#' + d(r) + d(g) + d(b);
  }
  // A fully-transparent color (alpha 0) must NEVER be used as the accent. GHL footer/submit
  // buttons render with backgroundColor rgba(255,255,255,0); the old code scraped that as the
  // brand color and painted the Add buttons see-through. We no longer scrape GHL chrome at all.
  function isTransparent(v) {
    if (!v) return true;
    var s = String(v).trim().toLowerCase();
    if (s === 'transparent') return true;
    var rgba = s.match(/^rgba?\(\s*\d+[\s,]+\d+[\s,]+\d+[\s,/]+([\d.]+)\s*\)$/);
    if (rgba && parseFloat(rgba[1]) === 0) return true;
    if (/^#([0-9a-f]{6})00$/.test(s) || /^#([0-9a-f]{3})0$/.test(s)) return true; // #rrggbb00 / #rgb0
    return false;
  }
  function applyPrimaryColor() {
    if (!widgetEl) return;
    // Use an EXPLICIT valid color only — a runtime override (window config) or a
    // data-primary-color that actually resolved to a color. Otherwise keep the hardcoded brand
    // default from :root (--ar-accent). We deliberately do NOT fall back to scraping the GHL
    // footer/submit button: on a landing-page embed its background is transparent, which used to
    // leak through and make the buttons invisible.
    var color = null;
    if (isValidColor(OVR.primaryColor)) color = OVR.primaryColor;
    else if (widgetEl.dataset && isValidColor(widgetEl.dataset.primaryColor)) color = widgetEl.dataset.primaryColor;
    if (!color || isTransparent(color)) return; // keep the hardcoded CSS default (brand purple)
    var hex8 = color.match(/^#([0-9a-f]{8})$/i); if (hex8) color = '#' + hex8[1].substring(0, 6);
    widgetEl.style.setProperty('--ar-accent', color);
    widgetEl.style.setProperty('--ar-accent-hover', darken(color, 0.14));
  }

  // ---------- fallback inputs: ONLY when there is no real host field (standalone preview).
  // Avoids a duplicate element sharing the GHL field's name, which would break submit. ----------
  function realHost(key) { return document.querySelector(hostSel(key, true)); }
  function reconcileFallbacks() {
    CONFIG.sections.forEach(function (sec) {
      var real = realHost(sec.key);
      var fb = mount.querySelector('input[data-ar-fallback="1"][name="' + sec.key + '"]');
      if (real && fb) { fb.parentNode.removeChild(fb); setAll(sec.key, buildSummary(sec)); } // host appeared late -> drop the dup, sync the real field
      else if (!real && !fb) { var hi = document.createElement('input'); hi.type = 'hidden'; hi.setAttribute('name', sec.key); hi.setAttribute('data-ar-fallback', '1'); mount.appendChild(hi); }
    });
  }

  // ---------- commit an in-progress add-box row before the form advances/submits ----------
  function flushPending() {
    CONFIG.sections.forEach(function (sec) {
      var gateCol = sec.columns.filter(function (c) { return c.gate; })[0] || sec.columns[0];
      var gi = sec._els && sec._els.inputs[gateCol.id];
      if (gi && gi.value.trim()) { var b = sec._els.box.querySelector('[data-act="add"]'); if (b) b.click(); }
    });
  }
  document.addEventListener('submit', flushPending, true);
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest && e.target.closest('.ghl-footer-next, .ghl-submit-btn, .ghl-footer-submit, button[type="submit"]');
    if (t) flushPending();
  }, true);

  // Un-hide the widget's OWN Custom-Code element wrapper. GHL sometimes bakes its d-none
  // (display:none !important) class onto a Custom-Code element's .form-builder--item — observed
  // when an element is duplicated from a conditionally-hidden one — which hides the whole widget
  // even though it rendered perfectly inside. This is a STATIC publish-time state (present at
  // load, with no conditional-logic rule to ever clear it), so we strip it during the bounded
  // boot poll only. That fixes the stuck-hidden case without fighting genuine conditional-logic
  // gating (which toggles later, after the user answers — and which, on this survey, gates via
  // its own mechanism, not d-none on the Custom-Code wrapper).
  function unhideSelf() {
    if (!widgetEl) return;
    var wrap = widgetEl.closest && widgetEl.closest('.form-builder--item');
    if (wrap && wrap.classList && wrap.classList.contains('d-none')) wrap.classList.remove('d-none');
  }

  // ---------- boot ----------
  CONFIG.sections.forEach(buildSection);
  reconcileFallbacks();
  applyPrimaryColor();
  hideHostFields();
  unhideSelf();
  var tries = 0, layoutWarned = CONFIG.sections.length < 2;
  var timer = setInterval(function () { tries++; placeWidget(); unhideSelf(); if (!layoutWarned) layoutWarned = warnSplitSections(); applyPrimaryColor(); hideHostFields(); reconcileFallbacks(); if (tries > 40) clearInterval(timer); }, 300);

  // Durable, time-UNBOUNDED placement. The 300ms poll above only runs ~12s — plenty when
  // GHL has all steps in the DOM at load (every widget places at once). But if GHL mounts a
  // later step's fields only when the client navigates there — which can be many minutes in —
  // this MutationObserver places the widget (and hides its host) the instant the field
  // appears, with NO time limit. It self-disconnects once placed, and is never created for an
  // explicitly-placed <div> (which needs no relocation), so there's no lingering cost.
  if (window.MutationObserver && widgetEl &&
      widgetEl.getAttribute('data-ar-autoplaced') === '1' && widgetEl.getAttribute('data-ar-placed') !== '1') {
    var mo = new MutationObserver(function () {
      placeWidget(); hideHostFields();
      if (widgetEl.getAttribute('data-ar-placed') === '1') mo.disconnect();
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
  })();
})();
