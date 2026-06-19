/**
 * assets-repeater embed bootstrap
 * Generated from assets-repeater.html by scripts/build-embed.js — do not hand-edit.
 *
 * Drop into a GHL form step (Custom Code element) with:
 *   <div id="assets-433a-widget" data-primary-color="{{custom_values.brand_primary_color}}"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-assets.js"></script>
 *
 * Or omit the <div> and the script appends the widget to <body>.
 */
(function () {
  if (window.__assets433aEmbedLoaded) return;
  window.__assets433aEmbedLoaded = true;

  // ---- styles ----
  const style = document.createElement('style');
  style.setAttribute('data-assets-repeater', 'styles');
  style.textContent = `:root {
    --ar-bg: #ffffff;
    --ar-surface: #f7f8fa;
    --ar-border: #e3e6eb;
    --ar-border-strong: #c9cfd8;
    --ar-text: #1a2332;
    --ar-text-muted: #5a6578;
    --ar-accent: #1A2744;          
    --ar-accent-hover: #11192d;
    --ar-danger: #c94545;
    --ar-danger-hover: #a83838;
    --ar-radius: 8px;
    --ar-font: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }#assets-433a-widget#assets-433a-widget * { box-sizing: border-box; }#assets-433a-widget#assets-433a-widget .ar-container { font-family: var(--ar-font); color: var(--ar-text); font-size: 15px; line-height: 1.5; }#assets-433a-widget#assets-433a-widget .ar-section {
    background: var(--ar-surface);
    border: 1px solid var(--ar-border);
    border-radius: var(--ar-radius);
    padding: 18px 20px;
    margin-bottom: 18px;
  }#assets-433a-widget#assets-433a-widget .ar-section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }#assets-433a-widget#assets-433a-widget .ar-section-title { font-size: 16px; font-weight: 600; margin: 0; }#assets-433a-widget#assets-433a-widget .ar-section-count { color: var(--ar-text-muted); font-size: 13px; }#assets-433a-widget#assets-433a-widget label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 6px; color: var(--ar-text); }#assets-433a-widget#assets-433a-widget input[type="text"] {
    width: 100%; padding: 9px 12px; font-size: 14px; font-family: var(--ar-font);
    border: 1px solid var(--ar-border-strong); border-radius: var(--ar-radius);
    background: #fff; color: var(--ar-text); transition: border-color .15s, box-shadow .15s;
  }#assets-433a-widget#assets-433a-widget input:focus {
    outline: none; border-color: var(--ar-accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ar-accent) 22%, transparent);
  }#assets-433a-widget#assets-433a-widget .ar-amount-wrap { position: relative; }#assets-433a-widget#assets-433a-widget .ar-amount-wrap input { padding-left: 22px; }#assets-433a-widget#assets-433a-widget .ar-amount-wrap::before {
    content: "$"; position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
    color: var(--ar-text-muted); font-size: 14px; pointer-events: none;
  }#assets-433a-widget#assets-433a-widget button {
    font-family: var(--ar-font); font-size: 14px; padding: 9px 16px; border-radius: var(--ar-radius);
    border: 1px solid var(--ar-border-strong); background: #fff; color: var(--ar-text);
    cursor: pointer; font-weight: 500; transition: background .15s, border-color .15s;
  }#assets-433a-widget#assets-433a-widget button:hover { background: var(--ar-surface); }#assets-433a-widget#assets-433a-widget button.ar-primary { background: var(--ar-accent); border-color: var(--ar-accent); color: #fff; }#assets-433a-widget#assets-433a-widget button.ar-primary:hover { background: var(--ar-accent-hover); border-color: var(--ar-accent-hover); }#assets-433a-widget#assets-433a-widget button.ar-danger-text { background: transparent; border: none; color: var(--ar-danger); padding: 4px 8px; font-size: 13px; }#assets-433a-widget#assets-433a-widget button.ar-danger-text:hover { color: var(--ar-danger-hover); background: transparent; }#assets-433a-widget#assets-433a-widget .ar-add-box { background: #fff; border: 1px dashed var(--ar-border-strong); border-radius: var(--ar-radius); padding: 14px; }#assets-433a-widget#assets-433a-widget .ar-add-box h4 { margin: 0 0 10px; font-size: 14px; font-weight: 600; }#assets-433a-widget#assets-433a-widget .ar-field-group { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 10px; }#assets-433a-widget#assets-433a-widget .ar-field-group.single { grid-template-columns: 1fr; }#assets-433a-widget#assets-433a-widget .ar-actions-right { display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px; }#assets-433a-widget#assets-433a-widget .ar-items-list { margin-top: 14px; display: flex; flex-direction: column; gap: 8px; }#assets-433a-widget#assets-433a-widget .ar-item-card {
    background: #fff; border: 1px solid var(--ar-border); border-radius: var(--ar-radius);
    padding: 12px 14px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;
  }#assets-433a-widget#assets-433a-widget .ar-item-main { flex: 1; min-width: 0; }#assets-433a-widget#assets-433a-widget .ar-item-name { font-weight: 500; font-size: 14px; }#assets-433a-widget#assets-433a-widget .ar-item-meta { font-size: 13px; color: var(--ar-text-muted); margin-top: 2px; }#assets-433a-widget#assets-433a-widget .ar-item-amount { font-weight: 600; font-size: 14px; white-space: nowrap; text-align: right; }#assets-433a-widget#assets-433a-widget .ar-empty { font-size: 13px; color: var(--ar-text-muted); font-style: italic; padding: 6px 0 0; }#assets-433a-widget#assets-433a-widget .ar-warn {
    background: #fff3cd; border: 1px solid #ffd866; color: #665300; padding: 8px 12px;
    border-radius: var(--ar-radius); font-size: 13px; margin-bottom: 10px; display: none;
  }#assets-433a-widget#assets-433a-widget .ar-warn.visible { display: block; }`;
  document.head.appendChild(style);

  // ---- markup ----
  let container = document.getElementById('assets-433a-widget') ||
                  document.querySelector('[data-assets-widget]');
  if (!container) {
    container = document.createElement('div');
    container.id = 'assets-433a-widget';
    document.body.appendChild(container);
  }
  container.innerHTML = `<div class="ar-container">

    <!-- ============ CASH & BANK ACCOUNTS ============ -->
    <div class="ar-section">
      <div class="ar-section-header">
        <h3 class="ar-section-title">Cash &amp; Bank Accounts</h3>
        <span class="ar-section-count" id="bank-count">0 of 10</span>
      </div>

      <div class="ar-add-box" id="bank-add-box">
        <h4>Add a bank / account</h4>
        <div class="ar-warn" id="bank-warn">Enter at least an institution name before adding.</div>
        <div class="ar-field-group">
          <div>
            <label for="bank-name">Bank / Institution</label>
            <input type="text" id="bank-name" placeholder="e.g. Wells Fargo" autocomplete="off">
          </div>
          <div>
            <label for="bank-type">Account type</label>
            <input type="text" id="bank-type" placeholder="Checking, Savings…" autocomplete="off">
          </div>
          <div>
            <label for="bank-balance">Balance</label>
            <div class="ar-amount-wrap">
              <input type="text" id="bank-balance" placeholder="0.00" inputmode="decimal" autocomplete="off">
            </div>
          </div>
        </div>
        <div class="ar-actions-right">
          <button type="button" id="bank-clear">Clear</button>
          <button type="button" class="ar-primary" id="bank-add">Add account</button>
        </div>
      </div>

      <div class="ar-items-list" id="bank-list"></div>
      <p class="ar-empty" id="bank-empty">No accounts added yet.</p>
    </div>

    <!-- ============ VEHICLES ============ -->
    <div class="ar-section">
      <div class="ar-section-header">
        <h3 class="ar-section-title">Vehicles</h3>
        <span class="ar-section-count" id="veh-count">0 of 10</span>
      </div>

      <div class="ar-add-box" id="veh-add-box">
        <h4>Add a vehicle</h4>
        <div class="ar-warn" id="veh-warn">Enter at least a year/make/model before adding.</div>
        <div class="ar-field-group single">
          <div>
            <label for="veh-desc">Year, Make &amp; Model</label>
            <input type="text" id="veh-desc" placeholder="e.g. 2019 Ford F-150" autocomplete="off">
          </div>
        </div>
        <div class="ar-field-group">
          <div>
            <label for="veh-value">Market value</label>
            <div class="ar-amount-wrap">
              <input type="text" id="veh-value" placeholder="0.00" inputmode="decimal" autocomplete="off">
            </div>
          </div>
          <div>
            <label for="veh-loan">Loan balance</label>
            <div class="ar-amount-wrap">
              <input type="text" id="veh-loan" placeholder="0.00" inputmode="decimal" autocomplete="off">
            </div>
          </div>
        </div>
        <div class="ar-actions-right">
          <button type="button" id="veh-clear">Clear</button>
          <button type="button" class="ar-primary" id="veh-add">Add vehicle</button>
        </div>
      </div>

      <div class="ar-items-list" id="veh-list"></div>
      <p class="ar-empty" id="veh-empty">No vehicles added yet.</p>
    </div>

    <!-- Fallback placeholders so the widget still syncs when previewed
         standalone. In a real GHL form the matching fields receive the same value. -->
    <input type="hidden" name="433a__bank_accounts_summary">
    <input type="hidden" name="433a__vehicles_summary">
  </div>`;

  // ---- widget logic ----
  (function widgetMain() {
(function () {
  // ============================================================
  // CONFIG — clean keys of the GHL LARGE_TEXT fields we drive.
  // Override via window.ASSETS_CONFIG = { fieldKeys: {...}, primaryColor: '#...' }.
  // ============================================================
  var CFG = (typeof window !== 'undefined' && window.ASSETS_CONFIG) || {};
  var FIELD_KEYS = Object.assign({
    bank:    ['433a__bank_accounts_summary'],
    vehicle: ['433a__vehicles_summary']
  }, CFG.fieldKeys || {});
  var MAX = 10;

  var widgetEl = document.getElementById('assets-433a-widget');
  var state = { banks: [], vehicles: [] };

  // ---------- utilities ----------
  function $(id) { return document.getElementById(id); }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }
  function parseMoney(s) {
    if (s == null || String(s).trim() === '') return null;
    var n = Number(String(s).replace(/[^0-9.\-]/g, ''));
    return isFinite(n) ? n : null;
  }
  function fmtMoney(n) {
    var v = Number(n) || 0;
    var hasCents = Math.round(v * 100) % 100 !== 0;
    return '$' + v.toLocaleString('en-US', { minimumFractionDigits: hasCents ? 2 : 0, maximumFractionDigits: 2 });
  }
  // Format money for display if numeric; otherwise echo whatever was typed.
  function money(raw) { var n = parseMoney(raw); return n != null ? fmtMoney(n) : (raw || '').trim(); }

  // ---------- write to host GHL fields (clean-key match) ----------
  function setAll(keys, value) {
    (Array.isArray(keys) ? keys : [keys]).forEach(function (key) {
      if (!key) return;
      document.querySelectorAll('[name="' + key + '"], [data-q="' + key + '"]').forEach(function (el) {
        el.value = value;
        el.dispatchEvent(new Event('input',  { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
  }

  // ---------- summary builders (mirror the existing webhook/PDF format) ----------
  function buildBankSummary() {
    return state.banks.map(function (b) {
      return [b.name, b.type, money(b.balance)].join(' | ');
    }).join('\n');
  }
  function buildVehicleSummary() {
    return state.vehicles.map(function (v) {
      return v.desc + ' | Value: ' + money(v.value) + ' | Loan: ' + money(v.loan);
    }).join('\n');
  }

  function sync(write) {
    if (!write) return;
    setAll(FIELD_KEYS.bank,    buildBankSummary());
    setAll(FIELD_KEYS.vehicle, buildVehicleSummary());
  }

  // ============================================================
  // BANK ACCOUNTS
  // ============================================================
  var bankEls = {
    name: $('bank-name'), type: $('bank-type'), bal: $('bank-balance'),
    warn: $('bank-warn'), box: $('bank-add-box')
  };
  bankEls.name.addEventListener('input', function () {
    if (bankEls.name.value.trim()) bankEls.warn.classList.remove('visible');
  });
  function clearBank() { bankEls.name.value = ''; bankEls.type.value = ''; bankEls.bal.value = ''; bankEls.warn.classList.remove('visible'); }
  $('bank-clear').onclick = clearBank;
  $('bank-add').onclick = function () {
    var name = bankEls.name.value.trim();
    if (!name) { bankEls.warn.classList.add('visible'); bankEls.name.focus(); return; }
    state.banks.push({ id: 'bank_' + Date.now(), name: name, type: bankEls.type.value.trim(), balance: bankEls.bal.value.trim() });
    clearBank(); renderBanks(true); bankEls.name.focus();
  };
  function renderBanks(write) {
    var list = $('bank-list'); var n = state.banks.length;
    $('bank-count').textContent = n + ' of ' + MAX;
    $('bank-empty').style.display = n === 0 ? 'block' : 'none';
    list.innerHTML = state.banks.map(function (b) {
      var meta = b.type ? escapeHtml(b.type) : '<span style="font-style:italic;">type not set</span>';
      var amt = b.balance ? money(b.balance) : '';
      return '<div class="ar-item-card">' +
               '<div class="ar-item-main"><div class="ar-item-name">' + escapeHtml(b.name) + '</div>' +
               '<div class="ar-item-meta">' + meta + '</div></div>' +
               (amt ? '<div class="ar-item-amount">' + escapeHtml(amt) + '</div>' : '') +
               '<button class="ar-danger-text" data-rm-bank="' + b.id + '">Remove</button>' +
             '</div>';
    }).join('');
    list.querySelectorAll('[data-rm-bank]').forEach(function (btn) {
      btn.onclick = function () { state.banks = state.banks.filter(function (b) { return b.id !== btn.dataset.rmBank; }); renderBanks(true); };
    });
    bankEls.box.style.display = n >= MAX ? 'none' : 'block';
    sync(write);
  }

  // ============================================================
  // VEHICLES
  // ============================================================
  var vehEls = {
    desc: $('veh-desc'), value: $('veh-value'), loan: $('veh-loan'),
    warn: $('veh-warn'), box: $('veh-add-box')
  };
  vehEls.desc.addEventListener('input', function () {
    if (vehEls.desc.value.trim()) vehEls.warn.classList.remove('visible');
  });
  function clearVeh() { vehEls.desc.value = ''; vehEls.value.value = ''; vehEls.loan.value = ''; vehEls.warn.classList.remove('visible'); }
  $('veh-clear').onclick = clearVeh;
  $('veh-add').onclick = function () {
    var desc = vehEls.desc.value.trim();
    if (!desc) { vehEls.warn.classList.add('visible'); vehEls.desc.focus(); return; }
    state.vehicles.push({ id: 'veh_' + Date.now(), desc: desc, value: vehEls.value.value.trim(), loan: vehEls.loan.value.trim() });
    clearVeh(); renderVehicles(true); vehEls.desc.focus();
  };
  function renderVehicles(write) {
    var list = $('veh-list'); var n = state.vehicles.length;
    $('veh-count').textContent = n + ' of ' + MAX;
    $('veh-empty').style.display = n === 0 ? 'block' : 'none';
    list.innerHTML = state.vehicles.map(function (v) {
      var parts = [];
      if (v.value) parts.push('Value ' + money(v.value));
      if (v.loan)  parts.push('Loan ' + money(v.loan));
      var meta = parts.length ? escapeHtml(parts.join(' · ')) : '<span style="font-style:italic;">value not set</span>';
      return '<div class="ar-item-card">' +
               '<div class="ar-item-main"><div class="ar-item-name">' + escapeHtml(v.desc) + '</div>' +
               '<div class="ar-item-meta">' + meta + '</div></div>' +
               '<button class="ar-danger-text" data-rm-veh="' + v.id + '">Remove</button>' +
             '</div>';
    }).join('');
    list.querySelectorAll('[data-rm-veh]').forEach(function (btn) {
      btn.onclick = function () { state.vehicles = state.vehicles.filter(function (v) { return v.id !== btn.dataset.rmVeh; }); renderVehicles(true); };
    });
    vehEls.box.style.display = n >= MAX ? 'none' : 'block';
    sync(write);
  }

  // ============================================================
  // HIDE the raw host fields (the LARGE_TEXT textareas on the form),
  // so the client only sees the repeaters. Skips our own fallback inputs.
  // ============================================================
  function hideHostFields() {
    var keys = [].concat(FIELD_KEYS.bank, FIELD_KEYS.vehicle);
    keys.forEach(function (key) {
      document.querySelectorAll('[name="' + key + '"], [data-q="' + key + '"]').forEach(function (el) {
        if (widgetEl && widgetEl.contains(el)) return; // never hide our own hidden inputs
        var wrap = el.closest('.form-builder--item, .form-field-wrap, .menu-field-wrap, [class*="form-field-col"], .field') || el;
        wrap.style.display = 'none';
      });
    });
  }

  // ============================================================
  // BRAND PRIMARY COLOR — same resolution model as the rx/income widgets:
  //   1. window.ASSETS_CONFIG.primaryColor  (explicit JS override)
  //   2. data-primary-color on container = {{custom_values.brand_primary_color}}
  //   3. auto-detect host form submit-button / survey button color
  //   4. fallback: the widget's default --ar-accent
  // ============================================================
  function isValidColor(v) {
    if (!v || typeof v !== 'string') return false;
    var s = v.trim();
    if (!s || s.indexOf('{{') !== -1 || s.indexOf('}}') !== -1) return false;
    return /^#[0-9a-f]{3,8}$/i.test(s) || /^rgba?\(/i.test(s);
  }
  function darken(color, amount) {
    var r, g, b;
    var hex = color.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    var rgb = color.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
    if (hex) {
      var h = hex[1].length === 3 ? hex[1].split('').map(function (c) { return c + c; }).join('') : hex[1];
      r = parseInt(h.slice(0,2),16); g = parseInt(h.slice(2,4),16); b = parseInt(h.slice(4,6),16);
    } else if (rgb) { r = +rgb[1]; g = +rgb[2]; b = +rgb[3]; } else { return color; }
    var d = function (v) { return Math.max(0, Math.round(v * (1 - amount))).toString(16).padStart(2, '0'); };
    return '#' + d(r) + d(g) + d(b);
  }
  function applyPrimaryColor() {
    if (!widgetEl) return;
    var color = null;
    if (isValidColor(CFG.primaryColor)) color = CFG.primaryColor;
    else if (widgetEl.dataset && isValidColor(widgetEl.dataset.primaryColor)) color = widgetEl.dataset.primaryColor;
    else {
      var formBtn = document.querySelector('button[type="submit"]');
      if (formBtn && isValidColor(formBtn.style.backgroundColor)) color = formBtn.style.backgroundColor;
      if (!color) {
        var sb = document.querySelector('.ghl-footer-next, .ghl-footer-previous, .ghl-footer .ghl-btn');
        if (sb) {
          var cs = getComputedStyle(sb);
          var skip = ['rgb(0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgb(96, 113, 121)', 'rgb(255, 255, 255)', 'rgba(255, 255, 255, 1)', 'transparent', ''];
          if (cs.backgroundColor && skip.indexOf(cs.backgroundColor) === -1) color = cs.backgroundColor;
          else if (isValidColor(cs.color) && skip.indexOf(cs.color) === -1) color = cs.color;
        }
      }
    }
    if (!color) return;
    var hex8 = color.match(/^#([0-9a-f]{8})$/i);
    if (hex8) color = '#' + hex8[1].substring(0, 6);
    widgetEl.style.setProperty('--ar-accent', color);
    widgetEl.style.setProperty('--ar-accent-hover', darken(color, 0.14));
  }

  // ---------- boot ----------
  renderBanks(false);
  renderVehicles(false);
  applyPrimaryColor();
  hideHostFields();

  // GHL custom-code can run before the form fields render — poll briefly to
  // catch the host fields (to hide them) and the brand button (for color).
  var tries = 0;
  var timer = setInterval(function () {
    tries++;
    applyPrimaryColor();
    hideHostFields();
    if (tries > 40) clearInterval(timer);
  }, 300);
})();
  })();
})();
