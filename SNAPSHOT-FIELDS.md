# Snapshot / account fields

For the assets widget to render and save, the GHL account (sub-account or snapshot) needs the items below. The widget matches each field by its **clean key** (Unique Key, which GHL renders in the field's `name` / `data-q` on the form), so the keys must match exactly, and each field must be added to the **same form step** the widget sits on.

## Custom value (optional)

| Custom value key | Type | Purpose |
| --- | --- | --- |
| `brand_primary_color` | text (hex, e.g. `#1A2744`) | Widget accent color. Falls back to ebotCPA navy if unset. |

## Custom fields (required — already created for ebotCPA)

| Field name | Clean key | Type | Field ID (ebotCPA) |
| --- | --- | --- | --- |
| 433A - Bank Accounts Summary | `433a__bank_accounts_summary` | LARGE_TEXT | `SLdP6JMDArIVsH1BzS4U` |
| 433A - Vehicles Summary | `433a__vehicles_summary` | LARGE_TEXT | `3WLe3j6kPEC9W9lJqVLC` |

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
