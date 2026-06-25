/**
 * urgency-cards module
 * Generated from urgency-cards.html by scripts/build-embed.js — do not hand-edit.
 * Styles + behavior, no mount <div> (it field-anchors itself). Paste once, anywhere.
 *   <script src="https://cdn.jsdelivr.net/gh/maxmethod/ebotcpa-433a-widgets@vX.Y.Z/dist/embed-urgency-cards.js"></script>
 */
(function () {
  if (window.__urgencyCards433aLoaded) return;
  window.__urgencyCards433aLoaded = true;

  const style = document.createElement('style');
  style.setAttribute('data-433a-urgency', 'styles');
  style.textContent = `.urg-callout{ background:#FDF6E3; border:1px solid #F2D98E; border-radius:12px; padding:14px 16px; margin:4px 0 16px; font-size:13.5px; line-height:1.55; color:#5b4b1f; }
  .urg-callout strong{ color:#3f3413; }
  /* the options wrapper becomes a responsive card grid: 3-across on desktop, wraps to 1 on phones */
  .urg-cards-root{ display:grid !important; grid-template-columns:repeat(auto-fit, minmax(185px, 1fr)); gap:12px; margin-top:6px; }
  .urg-cards-root .option-radio{ margin:0 !important; padding:0 !important; }
  .urg-cards-root .standard-radio-container{ display:block !important; margin:0 !important; }
  /* hide the native radio dot — the whole card is the clickable label (for=) */
  .urg-cards-root input[type=radio]{ position:absolute !important; opacity:0 !important; width:1px; height:1px; pointer-events:none; }
  .urg-card{ display:block; cursor:pointer; background:#fff; border:1.5px solid #e5e7eb; border-radius:14px; padding:16px 14px; text-align:center; height:100%; box-sizing:border-box; margin:0; transition:border-color .15s, box-shadow .15s, transform .1s; box-shadow:0 1px 2px rgba(16,24,40,.04); }
  .urg-card:hover{ border-color:#cbd5e1; box-shadow:0 5px 14px rgba(16,24,40,.09); transform:translateY(-1px); }
  .option-radio.is-selected .urg-card{ border-color:var(--urg-c); box-shadow:0 0 0 3px color-mix(in srgb, var(--urg-c) 20%, transparent); }
  .urg-badge{ display:inline-flex; align-items:center; gap:7px; background:var(--urg-c); color:#fff; font-size:11px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; padding:5px 12px 5px 9px; border-radius:999px; }
  /* GHL forces label text to a dark slate (#344054) with high specificity — force the badge label white so it reads on every badge color (esp. the navy STANDARD pill) */
  .urg-cards-root .urg-badge, .urg-cards-root .urg-badge *{ color:#fff !important; }
  .urg-dot{ width:12px; height:12px; border-radius:50%; background:radial-gradient(circle at 32% 28%, rgba(255,255,255,.85), var(--urg-c) 62%, rgba(0,0,0,.25)); box-shadow:inset 0 0 0 1px rgba(255,255,255,.35); }
  .urg-title{ font-weight:700; font-size:15px; color:#1A2744; margin:12px 0 6px; }
  .urg-codes{ font-size:12px; color:#6b7280; line-height:1.5; }
  .urg-sla{ font-size:12px; color:#9aa3b2; font-style:italic; margin-top:9px; }`;
  document.head.appendChild(style);

(function () {
  var Q = 'irs_intake_-_urgency_level';
  // content per radio value. Edit codes/SLAs here; keys must match the radio option values.
  var DATA = {
    'Critical':      { c:'#C0392B', badge:'CRITICAL',      title:'Immediate Levy Risk',     codes:'LT11 · CP90 · CP91 · CP297 · CP504 · LT16', sla:'Callback within 1 hour' },
    'High Priority': { c:'#E08A1E', badge:'HIGH PRIORITY', title:'Balance / Assessment',    codes:'CP11 · CP12 · CP14 · CP21 · CP22 · CP2000 · LT38', sla:'Callback within 4 hours' },
    'Standard':      { c:'#1A2744', badge:'STANDARD',      title:'General / Info Requests', codes:'CP01 · CP05 · CP53 · CP75 · Letter 525 · Other', sla:'Callback next business day' }
  };
  // set SHOW_CALLOUT to false if you don't want the "Why this matters" box.
  var SHOW_CALLOUT = true;
  var CALLOUT_HTML = '<strong>Why this matters:</strong> Some IRS notices indicate imminent action (bank levies, wage garnishments). Identifying your notice type lets us assign the right response timeline and attorney.';

  function esc(x){ return String(x).replace(/[&<>]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]; }); }

  function radios(){ return [].slice.call(document.querySelectorAll('input[type=radio][data-q="' + Q + '"]')); }
  function syncSel(){ radios().forEach(function(r){ var o = r.closest('.option-radio'); if (o) o.classList.toggle('is-selected', r.checked); }); }

  function enhance(){
    var rs = radios();
    if (!rs.length) return false;
    var wrap = rs[0].closest('.option-radio') ? rs[0].closest('.option-radio').parentElement : null;
    if (!wrap) return false;
    wrap.classList.add('urg-cards-root');
    if (SHOW_CALLOUT && !document.getElementById('urg-callout')) {
      var c = document.createElement('div'); c.id = 'urg-callout'; c.className = 'urg-callout'; c.innerHTML = CALLOUT_HTML;
      wrap.parentNode.insertBefore(c, wrap);
    }
    rs.forEach(function(r){
      var opt = r.closest('.option-radio'); if (!opt) return;
      var d = DATA[r.value]; if (!d) return;
      opt.style.setProperty('--urg-c', d.c);
      var label = opt.querySelector('label');
      if (label && opt.getAttribute('data-urg') !== '1') {
        label.classList.add('urg-card');
        label.innerHTML =
          '<span class="urg-badge"><span class="urg-dot"></span>' + esc(d.badge) + '</span>' +
          '<div class="urg-title">' + esc(d.title) + '</div>' +
          '<div class="urg-codes">' + esc(d.codes) + '</div>' +
          '<div class="urg-sla">' + esc(d.sla) + '</div>';
        opt.setAttribute('data-urg', '1');
      }
    });
    syncSel();
    return true;
  }

  // clicking a card selects its radio (label for=) -> keep the selected ring in sync
  document.addEventListener('change', function(e){
    if (e.target && e.target.matches && e.target.matches('input[type=radio][data-q="' + Q + '"]')) syncSel();
  }, true);

  enhance();
  // GHL can (re)mount step fields late or re-render — re-apply for a few seconds, and keep a
  // MutationObserver as a durable backstop (enhance() is idempotent via the data-urg flag).
  var tries = 0, t = setInterval(function(){ tries++; enhance(); if (tries > 25) clearInterval(t); }, 300);
  if (window.MutationObserver) {
    var mo = new MutationObserver(function(){ enhance(); });
    mo.observe(document.documentElement, { childList:true, subtree:true });
  }
})();
})();
