# Snapshot / account fields

For the assets widget to render and save, the GHL account (sub-account or snapshot) needs the items below. The widget matches each field by its **clean key** (Unique Key, which GHL renders in the field's `name` / `data-q` on the form), so the keys must match exactly, and each field must be added to the **same form step** the widget sits on.

## Custom value (optional)

| Custom value key | Type | Purpose |
| --- | --- | --- |
| `brand_primary_color` | text (hex, e.g. `#1A2744`) | Widget accent color. Falls back to ebotCPA navy if unset. |

## Custom fields (required — already created for ebotCPA)

All are **LARGE_TEXT** on the **contact** object.

| Field name | Clean key | Field ID (ebotCPA) |
| --- | --- | --- |
| 433A - Bank Accounts Summary | `433a__bank_accounts_summary` | `SLdP6JMDArIVsH1BzS4U` |
| 433A - Investments Summary | `433a__investments_summary` | `9JjOHb32stOg2zCvov4I` |
| 433A - Digital Assets Summary | `433a__digital_assets_summary` | `3U5eEC5JOMX6ntFeJbD3` |
| 433A - Available Credit Summary | `433a__available_credit_summary` | `QnIPB4NvDBxIv93lih9u` |
| 433A - Life Insurance Summary | `433a__life_insurance_summary` | `kkCR13vK8bT8pfA7tAxl` |
| 433A - Real Property Summary | `433a__real_property_summary` | `WD5dZRBhDV5NXF2txPrn` |
| 433A - Vehicles Summary | `433a__vehicles_summary` | `3WLe3j6kPEC9W9lJqVLC` |
| 433A - Personal Assets Summary | `433a__personal_assets_summary` | `vtTHUfgmQIxyzKUigu6L` |

> The field IDs are informational only — the widget never uses them. It writes by clean key so the same build is portable to any account that has fields with these keys.

## Stored format

One row per line, pipe-delimited (matches the existing 433-A webhook/PDF):

```
# 433a__bank_accounts_summary
Wells Fargo | Checking | $2,500
Chase | Savings |

# 433a__vehicles_summary
2019 Ford F-150 | Value: $28,000 | Loan: $15,500.50
```
