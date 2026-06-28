# 433-B Survey — Field-by-Slide Map

Mirrors the module's 433-B tab (`B433_CARDS()`), in IRS **Form 433-B (Rev. 6-2026)** order, so the survey and the slide-out viewer line up. **Survey targets the business (Company) object.**

Legend: **$**=MONETARY · **txt**=TEXT · **note**=LARGE_TEXT · **Y/N**=RADIO yes/no · **date**=DATE · **#**=NUMERICAL · **WIDGET**=LARGE_TEXT `*_summary` host the widget hides & replaces · **auto**=TEXT total written by the calc.

> **Two global rules** (from the 433-A lessons): every WIDGET slide must contain its native `*_summary` field (the widget hides it) **and** the Custom-Code block (keeps the slide from being skipped). Pin all embeds `@v3.7.0`.

---

## INTAKE — IRS Notice / Urgency (Slide 1, "START HERE")
🧩 WIDGET `embed-433b-urgency-cards.js` (module, no div — paste once on this slide; @v3.9.0). Styles the `433b__urgency_level` radio into 3 cards + a "Why this matters" callout. Mirrors the 433-A slide-1 urgency intake; **all 4 fields are on the business object.**
| Field | key | type |
|---|---|---|
| Urgency Level (the radio question) | `433b__urgency_level` | RADIO (Critical / High Priority / Standard; GHL keys `critical`/`high_priority`/`standard`) |
| Notice Type/Number | `433b__notice_typenumber` | txt |
| Notice Date | `433b__notice_date` | date |
| Amount Owed (total balance IRS claims) | `433b__amount_owed` | $ |

Eyebrow "START HERE" / heading / subtitle = native GHL slide text (not the widget). The widget matches the radio by its option **value set**, so the displayed question can be named anything.

---

## SECTION 1 — Business Information

**Slide 1 · Business Identity**
| Field | key | type |
|---|---|---|
| Business Name | `name` | Company native (standard) |
| EIN | `ein` | Company field |
| Type of Business / Principal Industry | `principal_industry` | Company field |
| Type of Entity (Sole prop/Partnership/LLC/Corp/Other) | `433b__type_of_entity` | Y/N→RADIO (options) |
| Entity Type Detail (LLC # members / "Other") | `433b__entity_type_detail` | txt |
| Date Incorporated / Established (2c) | `433b__date_established` | date |

**Slide 2 · Business Address & Contact**
| Field | key | type |
|---|---|---|
| Business Street Address | `address` | Company native |
| Mailing Address (if different, 1b) | `433b__mailing_address` | txt |
| City / State / Zip | `city` / `state` / `postalCode` | Company native |
| County | `433b__county` | txt |
| Business Phone | `phone` | Company native |
| Website (1f) | `website` | Company native |

**Slide 3 · Workforce & Tax Deposits**
| Field | key | type |
|---|---|---|
| Number of Employees (3a) | `433b__number_of_employees` | # |
| Monthly Gross Payroll (3b) | `433b__monthly_gross_payroll` | $ |
| Frequency of Tax Deposits (3c) | `433b__tax_deposit_frequency` | txt |
| Enrolled in EFTPS? (3d) | `433b__eftps_enrolled` | Y/N |
| Engages in e-Commerce? (4) | `433b__ecommerce` | Y/N |

**Slide 4 · Payment Acceptance** — 🧩 WIDGET `payment-433b-widget` (`embed-433b-payment-acceptance.js`) — **both sections on this one slide**
| Field | key | type |
|---|---|---|
| Payment Processors (5a–5b) | `433b__payment_processors_summary` | WIDGET (list) |
| Credit Cards Accepted (6a–6c) | `433b__credit_cards_summary` | WIDGET (list) |

---

## SECTION 2 — Business Personnel

**Slide 5 · Personnel & Contacts** — 🧩 WIDGET `personnel-433b-widget` (`embed-433b-personnel.js`)
| Field | key | type |
|---|---|---|
| Partners / Officers / Members (7a–7d) | `433b__business_personnel_summary` | WIDGET (list) |

---

## SECTION 3 — Other Financial Information
*Each `_detail`/widget can be revealed on "Yes" via GHL conditional logic (optional — Marsh did this natively on 433-A). Each of the 3 widget slides keeps its Y/N question visible so the slide isn't skipped.*

**Slide 6 · Payroll Service (8)** — `433b_s3__payroll_service_provider` (Y/N) · `433b_s3__payroll_service_detail` (note, reveal on Yes)
**Slide 7 · Lawsuit (9)** — `433b_s3__lawsuit` (Y/N) · `433b_s3__lawsuit_detail` (note)
**Slide 8 · Bankruptcy (10)** — `433b_s3__bankruptcy` (Y/N) · `433b_s3__bankruptcy_detail` (note)
**Slide 9 · Related-Party Loans (11)** — `433b_s3__related_party_loans` (Y/N) + 🧩 WIDGET `loans-433b-widget` (`embed-433b-related-party-loans.js`), host `433b__related_party_loans_summary`
**Slide 10 · Asset Transfers (12)** — `433b_s3__asset_transfers` (Y/N) + 🧩 WIDGET `transfers-433b-widget` (`embed-433b-asset-transfers.js`), host `433b__asset_transfers_summary`
**Slide 11 · Affiliations (13)** — `433b_s3__affiliations` (Y/N) + 🧩 WIDGET `affiliations-433b-widget` (`embed-433b-affiliations.js`), host `433b__affiliations_summary`
**Slide 12 · Anticipated Income Change (14)** — `433b_s3__income_change_anticipated` (Y/N) · `433b_s3__income_change_detail` (note) · `433b_s3__income_change_amount` ($) · `433b_s3__income_change_when` (txt)
**Slide 13 · Federal Contractor (15)** — `433b_s3__federal_contractor` (Y/N)

*(Slides 6–8 + 12–13 are plain GHL fields — you may combine them onto fewer slides if you prefer; the 3 widget slides (9/10/11) must stay separate.)*

---

## SECTION 4 — Business Assets & Liabilities

**Slide 14 · Cash & Safe (16)**
| Field | key | type |
|---|---|---|
| Cash on Hand (16a) | `433b__cash_on_hand` | $ |
| Safe on Premises? (16b) | `433b__safe_on_premises` | Y/N |
| Safe — Contents | `433b__safe_contents` | txt |

| Slide | Section/Line | 🧩 Widget (id / embed) | host `*_summary` field |
|---|---|---|---|
| **15 · Bank Accounts** | 17a–17d | `bank-433b-widget` / `embed-433b-bank-accounts.js` | `433b__bank_accounts_summary` |
| **16 · Accounts/Notes Receivable** | 18a–18f | `ar-433b-widget` / `embed-433b-accounts-receivable.js` | `433b__accounts_receivable_summary` |
| **17 · Investments** | 19a–19c | `investments-433b-widget` / `embed-433b-investments.js` | `433b__investments_summary` |
| **18 · Digital Assets** | 20b–20e | `digital-433b-widget` / `embed-433b-digital-assets.js` | `433b__digital_assets_summary` **+ also add the plain field `433b__digital_asset_keyholders` (txt, 20a)** |
| **19 · Available Credit** | 21a–21b | `credit-433b-widget` / `embed-433b-available-credit.js` | `433b__available_credit_summary` |
| **20 · Real Property** | 22a–22e | `realprop-433b-widget` / `embed-433b-real-property.js` | `433b__real_property_summary` |
| **21 · Vehicles** | 23a–23e | `vehicle-433b-widget` / `embed-433b-vehicles.js` | `433b__vehicles_summary` |
| **22 · Business Equipment + Intangibles** | 24a–24g | `bizassets-433b-widget` / `embed-433b-business-assets.js` | `433b__business_equipment_summary` **+** `433b__intangible_assets_summary` (**both on this slide**) |
| **23 · Business Liabilities** | 25a–25c | `liabilities-433b-widget` / `embed-433b-business-liabilities.js` | `433b__business_liabilities_summary` |

---

## SECTION 5 — Monthly Income / Expenses
🧮 Paste `embed-433b-income-expense-calc.js` **once** (on the income slide). It sums the line items live and writes the 3 `*_auto` TEXT totals on submit. The line items stay **$ (MONETARY)** — the client types them; the `*_auto` totals must be **TEXT**.

**Slide 24 · Monthly Income (26–36)**
| Field | key | type |
|---|---|---|
| Gross Receipts from Sales/Services (26) | `433b_income__gross_receipts` | $ |
| Gross Rental Income (27) | `433b_income__gross_rental` | $ |
| Interest Income (28) | `433b_income__interest` | $ |
| Dividends (29) | `433b_income__dividends` | $ |
| Cash Receipts (30) | `433b_income__cash_receipts` | $ |
| Other Income (31–35) | `433b_income__other` | $ |
| Other Income — Specify | `433b_income__other_description` | txt (not summed) |
| **Total Monthly Income (36)** | `433b_income__total_monthly_auto` | **auto/TEXT** |

**Slide 25 · Monthly Expenses (37–49)**
| Field | key | type |
|---|---|---|
| Materials Purchased (37) | `433b_expense__materials` | $ |
| Inventory Purchased (38) | `433b_expense__inventory` | $ |
| Gross Wages & Salaries (39) | `433b_expense__wages` | $ |
| Rent (40) | `433b_expense__rent` | $ |
| Supplies (41) | `433b_expense__supplies` | $ |
| Utilities / Telephone (42) | `433b_expense__utilities_telephone` | $ |
| Vehicle Gasoline / Oil (43) | `433b_expense__vehicle_gas_oil` | $ |
| Repairs & Maintenance (44) | `433b_expense__repairs` | $ |
| Insurance (45) | `433b_expense__insurance` | $ |
| Current Taxes (46) | `433b_expense__current_taxes` | $ |
| Other Expenses (47) | `433b_expense__other` | $ |
| Other Expenses — Specify | `433b_expense__other_description` | txt (not summed) |
| Allowable Installment Payments (48, *IRS use — usually blank*) | `433b_expense__installment_payments` | $ (summed) |
| **Total Monthly Expenses (49)** | `433b_expense__total_monthly_auto` | **auto/TEXT** |

**Slide 26 · Net Income (50)** *(or place this field on the expenses slide — wherever you want the net shown)*
| Field | key | type |
|---|---|---|
| **Net Income (50)** = Income − Expenses | `433b_line_50__net_income_auto` | **auto/TEXT** |

---

## CERTIFICATION

**Slide 27 · Certification**
| Field | key | type |
|---|---|---|
| Signature | `433b__signature_base64` | note (base64; usually a signature element) |
| Certifier — Print Name | `433b__certifier_name` | txt |
| Certifier — Title | `433b__certifier_title` | txt |
| Certification Date | `433b__certification_date` | date |
| Statement Period — From | `433b__period_start` | date |
| Statement Period — To | `433b__period_end` | date |
| Accounting Method (Cash/Accrual) | `433b__accounting_method` | RADIO |

---

## Not a client slide field
- `433b__form_submission_date` (date) — **automation/meta only**; set by a workflow on submit, don't put it on a slide (or add it as a hidden field your workflow stamps).

## ⚠️ One thing to confirm while building (Section 1 identity)
`name` / `ein` / `principal_industry` / `address` / `city` / `state` / `postalCode` / `phone` / `website` are the **Company object's own fields** (not `433b__*`). When you target the business object, the GHL survey builder should expose them — add them so the survey captures/updates the Company identity. (The 433-B custom fields `433b__*` definitely write — that's what the Schedule C survey + the smoke test proved.) If the builder doesn't surface a native field, capture that line into the linked Company another way (e.g. set on create/link).
