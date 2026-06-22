/**
 * personal-assets embed bootstrap
 * Generated from personal-assets.html by scripts/build-embed.js — do not hand-edit.
 *
 * Drop into a GHL form step (Custom Code element) with:
 *   <div id="personal-assets-433a-widget" data-primary-color="{{custom_values.brand_primary_color}}"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-personal-assets.js"></script>
 *
 * Or omit the <div> and the script appends the widget to <body>.
 */
(function () {
  if (window.__personal433aEmbedLoaded) return;
  window.__personal433aEmbedLoaded = true;

  // ---- styles ----
  const style = document.createElement('style');
  style.setAttribute('data-personal-assets-433a', 'styles');
  style.textContent = `:root {
    --ar-bg: #ffffff; --ar-surface: #f7f8fa; --ar-border: #e3e6eb; --ar-border-strong: #c9cfd8;
    --ar-text: #1a2332; --ar-text-muted: #5a6578;
    --ar-accent: #1A2744; --ar-accent-hover: #11192d;
    --ar-danger: #c94545; --ar-danger-hover: #a83838;
    --ar-radius: 8px;
    --ar-font: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }#personal-assets-433a-widget#personal-assets-433a-widget * { box-sizing: border-box; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-container { font-family: var(--ar-font); color: var(--ar-text); font-size: 15px; line-height: 1.5; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-section { background: var(--ar-surface); border: 1px solid var(--ar-border); border-radius: var(--ar-radius); padding: 18px 20px; margin-bottom: 18px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-section-title { font-size: 16px; font-weight: 700; margin: 0; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-section-count { color: var(--ar-text-muted); font-size: 13px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-subtitle { font-size: 12px; color: var(--ar-text-muted); margin: 0 0 14px; }#personal-assets-433a-widget#personal-assets-433a-widget label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 6px; color: var(--ar-text); }#personal-assets-433a-widget#personal-assets-433a-widget input[type="text"] {
    width: 100%; padding: 9px 12px; font-size: 14px; font-family: var(--ar-font);
    border: 1px solid var(--ar-border-strong); border-radius: var(--ar-radius);
    background: #fff; color: var(--ar-text); transition: border-color .15s, box-shadow .15s;
  }#personal-assets-433a-widget#personal-assets-433a-widget input:focus { outline: none; border-color: var(--ar-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ar-accent) 22%, transparent); }#personal-assets-433a-widget#personal-assets-433a-widget .ar-amount-wrap { position: relative; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-amount-wrap input { padding-left: 22px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-amount-wrap::before { content: "$"; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--ar-text-muted); font-size: 14px; pointer-events: none; }#personal-assets-433a-widget#personal-assets-433a-widget button {
    font-family: var(--ar-font); font-size: 14px; padding: 9px 16px; border-radius: var(--ar-radius);
    border: 1px solid var(--ar-border-strong); background: #fff; color: var(--ar-text); cursor: pointer; font-weight: 500; transition: background .15s, border-color .15s;
  }#personal-assets-433a-widget#personal-assets-433a-widget button:hover { background: var(--ar-surface); }#personal-assets-433a-widget#personal-assets-433a-widget button.ar-primary { background: var(--ar-accent); border-color: var(--ar-accent); color: #fff; }#personal-assets-433a-widget#personal-assets-433a-widget button.ar-primary:hover { background: var(--ar-accent-hover); border-color: var(--ar-accent-hover); }#personal-assets-433a-widget#personal-assets-433a-widget button.ar-danger-text { background: transparent; border: none; color: var(--ar-danger); padding: 4px 8px; font-size: 13px; }#personal-assets-433a-widget#personal-assets-433a-widget button.ar-danger-text:hover { color: var(--ar-danger-hover); background: transparent; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-add-box { background: #fff; border: 1px dashed var(--ar-border-strong); border-radius: var(--ar-radius); padding: 14px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-add-box h4 { margin: 0 0 10px; font-size: 14px; font-weight: 600; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-field-group { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin-bottom: 10px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-actions-right { display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-items-list { margin-top: 14px; display: flex; flex-direction: column; gap: 8px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-item-card { background: #fff; border: 1px solid var(--ar-border); border-radius: var(--ar-radius); padding: 12px 14px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-item-main { flex: 1; min-width: 0; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-item-name { font-weight: 500; font-size: 14px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-item-meta { font-size: 13px; color: var(--ar-text-muted); margin-top: 2px; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-item-amount { font-weight: 600; font-size: 14px; white-space: nowrap; text-align: right; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-empty { font-size: 13px; color: var(--ar-text-muted); font-style: italic; padding: 6px 0 0; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-total { display: flex; justify-content: space-between; align-items: baseline; margin-top: 12px; padding-top: 10px; border-top: 2px solid var(--ar-border); font-size: 14px; font-weight: 700; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-total .ar-total-val { color: var(--ar-accent); font-size: 16px; font-variant-numeric: tabular-nums; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-warn { background: #fff3cd; border: 1px solid #ffd866; color: #665300; padding: 8px 12px; border-radius: var(--ar-radius); font-size: 13px; margin-bottom: 10px; display: none; }#personal-assets-433a-widget#personal-assets-433a-widget .ar-warn.visible { display: block; }`;
  document.head.appendChild(style);

  // ---- markup ----
  let container = document.getElementById('personal-assets-433a-widget') ||
                  document.querySelector('[data-personal-assets-433a-widget]');
  if (!container) {
    container = document.createElement('div');
    container.id = 'personal-assets-433a-widget';
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
  // ============================================================
  var CONFIG = {
    "containerId": "personal-assets-433a-widget",
    "configGlobal": "PERSONAL_433A_CONFIG",
    "sections": [
      {
        "key": "433a__personal_assets_summary",
        "title": "Personal Assets",
        "subtitle": "Furniture, personal effects, artwork, jewelry, collections (coins, guns, etc.), antiques; and intangibles (licenses, domain names, patents, copyrights).",
        "addLabel": "Add a personal asset",
        "addBtn": "Add asset",
        "gateWarn": "Enter a property description before adding.",
        "emptyNote": "No personal assets added yet.",
        "totalLabel": "Total equity (FMV − loans)",
        "totalCol": "equity",
        "columns": [
          {
            "id": "description",
            "label": "Property description",
            "kind": "text",
            "ph": "e.g. Jewelry, artwork, equipment",
            "gate": true,
            "role": "name"
          },
          {
            "id": "location",
            "label": "Location (street, city, state, ZIP, county)",
            "kind": "text",
            "ph": "Where it is kept",
            "slabel": "Location",
            "role": "meta"
          },
          {
            "id": "lender",
            "label": "Lender / lessor (name, address, phone)",
            "kind": "text",
            "ph": "Name, address, phone",
            "slabel": "Lender"
          },
          {
            "id": "purchasedate",
            "label": "Purchase / lease date",
            "kind": "text",
            "ph": "MM/DD/YYYY",
            "slabel": "Purchased"
          },
          {
            "id": "fmv",
            "label": "Current fair market value",
            "kind": "money",
            "slabel": "FMV"
          },
          {
            "id": "loan",
            "label": "Current loan balance",
            "kind": "money",
            "slabel": "Loan"
          },
          {
            "id": "payment",
            "label": "Amount of monthly payment",
            "kind": "money",
            "slabel": "Monthly"
          },
          {
            "id": "finalpayment",
            "label": "Date of final payment",
            "kind": "text",
            "ph": "MM/DD/YYYY",
            "slabel": "Final pmt"
          },
          {
            "id": "equity",
            "label": "Equity",
            "kind": "calc",
            "sub": [
              "fmv",
              "loan"
            ],
            "floor": true,
            "slabel": "Equity",
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
  var widgetEl = document.getElementById(CONFIG.containerId);
  // scope the mount to THIS widget's own container (so multiple asset widgets
  // can coexist on one page); fall back to document for standalone preview.
  var mount = (widgetEl || document).querySelector('.ar-container');
  var RID = 0;

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) { return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]; });
  }
  function parseMoney(s) {
    if (s == null) return null;
    var t = String(s).trim();
    if (t === '') return null;
    var neg = /^\(.*\)$/.test(t) || /^-/.test(t);  // accounting parens or leading minus = negative
    var str = t.replace(/[^0-9.]/g, '');           // keep digits + dot only ($ , ( ) - letters dropped)
    if (!/^\d*\.?\d+$/.test(str)) return null;      // non-numeric / garbage -> null (raw text is preserved by money())
    var n = Number(str);
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

  function setAll(key, value) {
    document.querySelectorAll('[name="' + key + '"], [data-q="' + key + '"]').forEach(function (el) {
      el.value = value;
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
        if (c.gate) parts.push(v || '(unnamed)');
        else if (v !== '') parts.push((c.slabel ? c.slabel + ': ' : '') + v);
      });
      return parts.join(' | ');
    });
    lines.push('— ' + (sec.totalLabel || 'Total') + ': ' + money(totalOf(sec)));
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
    if (sec._els.total) { sec._els.total.style.display = n > 0 ? 'flex' : 'none'; sec._els.totalVal.textContent = money(totalOf(sec)); }
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
      document.querySelectorAll('[name="' + sec.key + '"], [data-q="' + sec.key + '"]').forEach(function (el) {
        if (el.getAttribute('data-ar-fallback') != null) return;
        var w = el.closest('.form-builder--item, .form-field-wrap, .menu-field-wrap, [class*="form-field-col"], .field') || el;
        w.style.display = 'none';
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
  function applyPrimaryColor() {
    if (!widgetEl) return;
    var color = null;
    if (isValidColor(OVR.primaryColor)) color = OVR.primaryColor;
    else if (widgetEl.dataset && isValidColor(widgetEl.dataset.primaryColor)) color = widgetEl.dataset.primaryColor;
    else {
      var fb = document.querySelector('button[type="submit"]');
      if (fb && isValidColor(fb.style.backgroundColor)) color = fb.style.backgroundColor;
      if (!color) {
        var sb = document.querySelector('.ghl-footer-next, .ghl-footer-previous, .ghl-footer .ghl-btn');
        if (sb) { var cs = getComputedStyle(sb), skip = ['rgb(0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgb(96, 113, 121)', 'rgb(255, 255, 255)', 'rgba(255, 255, 255, 1)', 'transparent', '']; if (cs.backgroundColor && skip.indexOf(cs.backgroundColor) === -1) color = cs.backgroundColor; else if (isValidColor(cs.color) && skip.indexOf(cs.color) === -1) color = cs.color; }
      }
    }
    if (!color) return;
    var hex8 = color.match(/^#([0-9a-f]{8})$/i); if (hex8) color = '#' + hex8[1].substring(0, 6);
    widgetEl.style.setProperty('--ar-accent', color);
    widgetEl.style.setProperty('--ar-accent-hover', darken(color, 0.14));
  }

  // ---------- fallback inputs: ONLY when there is no real host field (standalone preview).
  // Avoids a duplicate element sharing the GHL field's name, which would break submit. ----------
  function realHost(key) { return document.querySelector('[name="' + key + '"]:not([data-ar-fallback]), [data-q="' + key + '"]:not([data-ar-fallback])'); }
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

  // ---------- boot ----------
  CONFIG.sections.forEach(buildSection);
  reconcileFallbacks();
  applyPrimaryColor();
  hideHostFields();
  var tries = 0;
  var timer = setInterval(function () { tries++; applyPrimaryColor(); hideHostFields(); reconcileFallbacks(); if (tries > 40) clearInterval(timer); }, 300);
})();
  })();
})();
