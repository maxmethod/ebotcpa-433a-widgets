#!/usr/bin/env node
// ebotCPA — Create the 433-B "slide 1" IRS-notice / urgency intake fields on the
// BUSINESS (Company) object, mirroring the 433-A contact fields:
//   433A - Notice Type/Number  (contact.irs_intake__notice_typenumber, TEXT)
//   433A - Notice Date         (contact.irs_intake__notice_date,        DATE)
//   433A - Amount Owed         (contact.irs_intake__amount_owed,        MONETORY)
//   433A - Urgency Level       (contact.irs_intake__urgency_level,      RADIO)
//
// On 433-B these belong on the business object (survey targets the Company object),
// folder "433B Fields" (parentId 3t6f2NkRurqaRD3ET9om, loc iQ5GwlNz7ISfYopdpBUG).
//
// Recipe verified by create-schedc-fields.sh (business-object custom fields):
//   POST /custom-fields/  { locationId, name, dataType, fieldKey:"business.<key>",
//                           objectKey:"business", parentId, showInForms:true, options:[{key,label}] }
//   -> response wraps the field under "field" (or "customField").
// Idempotent: pulls the live business field list first and skips by fieldKey.
//
// Usage:
//   GHL_PIT=<location-pit>  node scripts/create-433b-urgency-fields.js
//   (the PIT lives in the gcloud secret  ghl-pit-<locationId>  in project mm-control-plane)

const https = require('https');
const fs = require('fs');
const path = require('path');

const PIT = process.env.GHL_PIT;
const LOC = process.env.GHL_LOCATION_ID || 'iQ5GwlNz7ISfYopdpBUG';
const PARENT = '3t6f2NkRurqaRD3ET9om'; // 433B Fields folder on the business object
if (!PIT) { console.error('ERROR: GHL_PIT required'); process.exit(1); }

// key = bare key (the widget data-q is derived: "business." stripped, "__" -> "_-_")
const FIELDS = [
  { name: '433B - Notice Type/Number', key: '433b__notice_typenumber', dataType: 'TEXT' },
  { name: '433B - Notice Date',        key: '433b__notice_date',       dataType: 'DATE' },
  { name: '433B - Amount Owed',        key: '433b__amount_owed',       dataType: 'MONETORY' },
  { name: '433B - Urgency Level',      key: '433b__urgency_level',     dataType: 'RADIO',
    options: [
      { key: 'Critical',      label: 'Critical' },
      { key: 'High Priority', label: 'High Priority' },
      { key: 'Standard',      label: 'Standard' },
    ] },
];

function req(method, urlPath, body) {
  return new Promise((resolve) => {
    const payload = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'services.leadconnectorhq.com',
      path: urlPath,
      method,
      headers: {
        Authorization: `Bearer ${PIT}`,
        Version: '2021-07-28',
        Accept: 'application/json',
        ...(payload ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) } : {}),
      },
    };
    const r = https.request(options, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => { try { resolve({ status: res.statusCode, body: JSON.parse(data) }); } catch { resolve({ status: res.statusCode, body: data }); } });
    });
    r.on('error', (e) => resolve({ status: 0, body: { message: e.message } }));
    if (payload) r.write(payload);
    r.end();
  });
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const live = await req('GET', `/custom-fields/object-key/business?locationId=${LOC}`);
  const liveFields = (live.body && (live.body.fields || live.body.customFields)) || [];
  const byKey = new Map(liveFields.map((f) => [(f.fieldKey || '').toLowerCase(), f]));
  console.log(`Live business fields: ${liveFields.length}. Creating up to ${FIELDS.length} (skip if fieldKey exists)...\n`);

  const results = [];
  let created = 0, skipped = 0, failed = 0;

  for (let i = 0; i < FIELDS.length; i++) {
    const f = FIELDS[i]; const n = i + 1;
    const fk = `business.${f.key}`.toLowerCase();
    if (byKey.has(fk)) {
      const e = byKey.get(fk);
      results.push({ name: f.name, fieldKey: e.fieldKey, dataType: e.dataType, id: e.id, status: 'skipped-exists' });
      skipped++; console.log(`[${n}/${FIELDS.length}] = ${f.name} already exists -> ${e.id}`);
      continue;
    }
    const body = {
      locationId: LOC,
      name: f.name,
      dataType: f.dataType,
      fieldKey: `business.${f.key}`,
      objectKey: 'business',
      parentId: PARENT,
      showInForms: true,
    };
    if (f.options) body.options = f.options;
    const res = await req('POST', '/custom-fields/', body);
    const cf = res.body && (res.body.field || res.body.customField || (res.body.id && res.body));
    if ((res.status === 200 || res.status === 201) && cf && cf.id) {
      results.push({ name: f.name, fieldKey: cf.fieldKey, dataType: cf.dataType, id: cf.id, options: cf.options || null, status: 'created' });
      created++; console.log(`[${n}/${FIELDS.length}] + ${f.name} -> ${cf.id} (${cf.fieldKey})`);
    } else {
      const err = (res.body && (res.body.message || res.body.error)) || res.body;
      results.push({ name: f.name, dataType: f.dataType, status: 'failed', httpStatus: res.status, error: err });
      failed++; console.log(`[${n}/${FIELDS.length}] x ${f.name} (HTTP ${res.status}): ${JSON.stringify(err)}`);
    }
    await sleep(300);
  }

  console.log(`\n===== SUMMARY ===== created:${created} skipped:${skipped} failed:${failed}`);
  const out = {
    locationId: LOC, objectKey: 'business', folder: PARENT,
    purpose: '433-B slide-1 IRS notice / urgency intake (mirror of 433-A contact fields)',
    createdAt: new Date().toISOString(), fields: results,
  };
  const outPath = path.join(__dirname, '..', '433b-urgency-fields-created.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`\nMapping saved -> ${outPath}`);
})();
