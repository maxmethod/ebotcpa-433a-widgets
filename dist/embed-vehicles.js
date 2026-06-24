/**
 * vehicles embed bootstrap
 * Generated from vehicles.html by scripts/build-embed.js — do not hand-edit.
 *
 * Drop into a GHL form step (Custom Code element) with:
 *   <div id="vehicle-433a-widget" data-primary-color="{{custom_values.brand_primary_color}}"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-vehicles.js"></script>
 *
 * Or omit the <div> and the script appends the widget to <body>.
 */
(function () {
  if (window.__vehicle433aEmbedLoaded) return;
  window.__vehicle433aEmbedLoaded = true;

  // ---- styles ----
  const style = document.createElement('style');
  style.setAttribute('data-vehicle-433a', 'styles');
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
  }#vehicle-433a-widget#vehicle-433a-widget * { box-sizing: border-box; }#vehicle-433a-widget#vehicle-433a-widget .ar-container { font-family: var(--ar-font); color: var(--ar-text); font-size: 15px; line-height: 1.5; }#vehicle-433a-widget#vehicle-433a-widget .ar-section {
    background: var(--ar-surface);
    border: 1px solid var(--ar-border);
    border-radius: var(--ar-radius);
    padding: 18px 20px;
    margin-bottom: 18px;
  }#vehicle-433a-widget#vehicle-433a-widget .ar-section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }#vehicle-433a-widget#vehicle-433a-widget .ar-section-title { font-size: 16px; font-weight: 600; margin: 0; }#vehicle-433a-widget#vehicle-433a-widget .ar-section-count { color: var(--ar-text-muted); font-size: 13px; }#vehicle-433a-widget#vehicle-433a-widget label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 6px; color: var(--ar-text); }#vehicle-433a-widget#vehicle-433a-widget input[type="text"] {
    width: 100%; padding: 9px 12px; font-size: 14px; font-family: var(--ar-font);
    border: 1px solid var(--ar-border-strong); border-radius: var(--ar-radius);
    background: #fff; color: var(--ar-text); transition: border-color .15s, box-shadow .15s;
  }#vehicle-433a-widget#vehicle-433a-widget input:focus {
    outline: none; border-color: var(--ar-accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ar-accent) 22%, transparent);
  }#vehicle-433a-widget#vehicle-433a-widget .ar-amount-wrap { position: relative; }#vehicle-433a-widget#vehicle-433a-widget .ar-amount-wrap input { padding-left: 22px; }#vehicle-433a-widget#vehicle-433a-widget .ar-amount-wrap::before {
    content: "$"; position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
    color: var(--ar-text-muted); font-size: 14px; pointer-events: none;
  }#vehicle-433a-widget#vehicle-433a-widget button {
    font-family: var(--ar-font); font-size: 14px; padding: 9px 16px; border-radius: var(--ar-radius);
    border: 1px solid var(--ar-border-strong); background: #fff; color: var(--ar-text);
    cursor: pointer; font-weight: 500; transition: background .15s, border-color .15s;
  }#vehicle-433a-widget#vehicle-433a-widget button:hover { background: var(--ar-surface); }#vehicle-433a-widget#vehicle-433a-widget button.ar-primary { background: var(--ar-accent); border-color: var(--ar-accent); color: #fff; }#vehicle-433a-widget#vehicle-433a-widget button.ar-primary:hover { background: var(--ar-accent-hover); border-color: var(--ar-accent-hover); }#vehicle-433a-widget#vehicle-433a-widget button.ar-danger-text { background: transparent; border: none; color: var(--ar-danger); padding: 4px 8px; font-size: 13px; }#vehicle-433a-widget#vehicle-433a-widget button.ar-danger-text:hover { color: var(--ar-danger-hover); background: transparent; }#vehicle-433a-widget#vehicle-433a-widget .ar-add-box { background: #fff; border: 1px dashed var(--ar-border-strong); border-radius: var(--ar-radius); padding: 14px; }#vehicle-433a-widget#vehicle-433a-widget .ar-add-box h4 { margin: 0 0 10px; font-size: 14px; font-weight: 600; }#vehicle-433a-widget#vehicle-433a-widget .ar-field-group { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 10px; }#vehicle-433a-widget#vehicle-433a-widget .ar-field-group.single { grid-template-columns: 1fr; }#vehicle-433a-widget#vehicle-433a-widget .ar-actions-right { display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px; }#vehicle-433a-widget#vehicle-433a-widget .ar-items-list { margin-top: 14px; display: flex; flex-direction: column; gap: 8px; }#vehicle-433a-widget#vehicle-433a-widget .ar-item-card {
    background: #fff; border: 1px solid var(--ar-border); border-radius: var(--ar-radius);
    padding: 12px 14px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;
  }#vehicle-433a-widget#vehicle-433a-widget .ar-item-main { flex: 1; min-width: 0; }#vehicle-433a-widget#vehicle-433a-widget .ar-item-name { font-weight: 500; font-size: 14px; }#vehicle-433a-widget#vehicle-433a-widget .ar-item-meta { font-size: 13px; color: var(--ar-text-muted); margin-top: 2px; }#vehicle-433a-widget#vehicle-433a-widget .ar-item-amount { font-weight: 600; font-size: 14px; white-space: nowrap; text-align: right; }#vehicle-433a-widget#vehicle-433a-widget .ar-empty { font-size: 13px; color: var(--ar-text-muted); font-style: italic; padding: 6px 0 0; }#vehicle-433a-widget#vehicle-433a-widget .ar-warn {
    background: #fff3cd; border: 1px solid #ffd866; color: #665300; padding: 8px 12px;
    border-radius: var(--ar-radius); font-size: 13px; margin-bottom: 10px; display: none;
  }#vehicle-433a-widget#vehicle-433a-widget .ar-warn.visible { display: block; }`;
  document.head.appendChild(style);

  // ---- markup ----
  let container = document.getElementById('vehicle-433a-widget') ||
                  document.querySelector('[data-vehicle-433a-widget]');
  if (!container) {
    container = document.createElement('div');
    container.id = 'vehicle-433a-widget';
    document.body.appendChild(container);
  }
  container.innerHTML = `<div class="ar-container">

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

    <!-- No hardcoded fallback input here: a duplicate element sharing the GHL field's
         name breaks submit (RadioNodeList). The script appends a hidden fallback ONLY
         when no real host field exists (standalone preview). See reconcileFallbacks(). -->
  </div>`;

  // ---- widget logic ----
  (function widgetMain() {
(function () {
  // ============================================================
  // CONFIG — clean key of the GHL LARGE_TEXT field we drive.
  // Override via window.VEHICLE_433A_CONFIG = { fieldKeys: {...}, primaryColor: '#...' }.
  // ============================================================
  var CFG = (typeof window !== 'undefined' && window.VEHICLE_433A_CONFIG) || {};
  var FIELD_KEYS = Object.assign({ vehicle: ['433a__vehicles_summary'] }, CFG.fieldKeys || {});
  var MAX = 10;

  var widgetEl = document.getElementById('vehicle-433a-widget');
  var state = { vehicles: [] };

  // ---------- utilities ----------
  function $(id) { return document.getElementById(id); }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }
  function sanitize(v) { return String(v == null ? '' : v).replace(/\s*[|\r\n]+\s*/g, ' / ').trim(); } // pipe/newline would corrupt the pipe-delimited summary
  function parseMoney(s) {
    if (s == null) return null;
    var t = String(s).trim();
    if (t === '') return null;
    var neg = /^\(.*\)$/.test(t) || /^-/.test(t);   // accounting parens or leading minus = negative
    // strip ONLY currency symbol, thousands separators, surrounding parens/sign/space — never interior junk
    var core = t.replace(/^[-(]+/, '').replace(/[)\s]+$/, '').replace(/[$,\s]/g, '');
    if (!/^\d*\.?\d+$/.test(core)) return null;      // "N/A", "abc", ranges "2500-3000", "1e3", extra dots -> null (raw text preserved by money())
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

  // ---------- write to host GHL field (clean-key match) ----------
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

  function buildVehicleSummary() {
    return state.vehicles.map(function (v) {
      return sanitize(v.desc) + ' | Value: ' + sanitize(money(v.value)) + ' | Loan: ' + sanitize(money(v.loan));
    }).join('\n');
  }
  function sync(write) { if (!write) return; setAll(FIELD_KEYS.vehicle, buildVehicleSummary()); }

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
  // HIDE the raw host field (the LARGE_TEXT textarea on the form),
  // so the client only sees the repeater. Skips our own fallback input.
  // ============================================================
  function hideHostFields() {
    FIELD_KEYS.vehicle.forEach(function (key) {
      document.querySelectorAll('[name="' + key + '"], [data-q="' + key + '"]').forEach(function (el) {
        if (widgetEl && widgetEl.contains(el)) return;
        var wrap = el.closest('.form-builder--item, .form-field-wrap, .menu-field-wrap, [class*="form-field-col"], .field') || el;
        wrap.style.display = 'none';
      });
    });
  }

  // ============================================================
  // BRAND PRIMARY COLOR — 1) window.VEHICLE_433A_CONFIG.primaryColor,
  // 2) data-primary-color on container, 3) auto-detect host button, 4) default.
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

  // ============================================================
  // DYNAMIC FALLBACK INPUT — created ONLY when there is no real host field
  // (standalone preview). A hardcoded duplicate sharing the GHL field name turns
  // form[name] into a RadioNodeList and breaks submit, so we never ship one.
  // ============================================================
  var mount = (widgetEl || document).querySelector('.ar-container');
  function realHost(key) {
    return document.querySelector('[name="' + key + '"]:not([data-ar-fallback]), [data-q="' + key + '"]:not([data-ar-fallback])');
  }
  function reconcileFallbacks() {
    if (!mount) return;
    FIELD_KEYS.vehicle.forEach(function (key) {
      if (!key) return;
      var real = realHost(key);
      var fb = mount.querySelector('input[data-ar-fallback="1"][name="' + key + '"]');
      if (real && fb) { fb.parentNode.removeChild(fb); setAll([key], buildVehicleSummary()); } // real host appeared -> drop the dup, sync the real field
      else if (!real && !fb) { var hi = document.createElement('input'); hi.type = 'hidden'; hi.setAttribute('name', key); hi.setAttribute('data-ar-fallback', '1'); mount.appendChild(hi); }
    });
  }

  // ============================================================
  // FLUSH an in-progress add-box row before the form advances/submits, so a user
  // who fills the fields but forgets to click "Add vehicle" doesn't lose the row.
  // ============================================================
  function flushPending() { if (vehEls.desc.value.trim()) { var b = $('veh-add'); if (b) b.click(); } }
  document.addEventListener('submit', flushPending, true);
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest && e.target.closest('.ghl-footer-next, .ghl-submit-btn, .ghl-footer-submit, button[type="submit"]');
    if (t) flushPending();
  }, true);

  // ---------- boot ----------
  renderVehicles(false);
  reconcileFallbacks();
  applyPrimaryColor();
  hideHostFields();

  var tries = 0;
  var timer = setInterval(function () {
    tries++;
    applyPrimaryColor();
    hideHostFields();
    reconcileFallbacks();
    if (tries > 40) clearInterval(timer);
  }, 300);
})();
  })();
})();
