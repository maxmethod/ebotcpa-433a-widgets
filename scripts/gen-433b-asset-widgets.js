const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const tpl = fs.readFileSync(path.join(ROOT, 'investments.html'), 'utf8');

// ============================================================================
// 433-B asset/list repeater widgets — generated from the SAME config-driven engine
// as the 433-A widgets (investments.html). Only the CONFIG block, <title>, container
// id and the key comment change per file. Writes the business-object LARGE_TEXT
// "433b__*_summary" fields (folder 3t6f2NkRurqaRD3ET9om, loc iQ5GwlNz7ISfYopdpBUG).
//
//   • Financial classes have a $ total (totalCol + totalLabel).
//   • Pure-list classes set noTotal:true — no meaningful $ total on the form.
//   • The "−" in "(FMV − loans)" total labels is U+2212 (matches the 433-A engine /
//     asset433.ts byte-for-byte — do NOT replace with a hyphen).
//
// Two form-adjacent pairs are combined onto one widget (same survey slide, like the
// 433-A Credit+Life widget): payment-acceptance (processors + cards, §1) and
// business-assets (tangible 24a–d + intangible 24e–g). The Section-3 Y/N-gated lists
// (related-party loans, asset transfers, affiliations) stay SEPARATE so each can sit
// on its own gated slide without the "all sections render together" constraint.
//
// Run:  node scripts/gen-433b-asset-widgets.js
// ============================================================================
const WIDGETS = {
  // ── Financial classes (engine direct; $ total) ──────────────────────────────
  '433b-bank-accounts.html': {
    title: '433-B — Bank Accounts Repeater', container: 'bank-433b-widget', keyComment: '433b__bank_accounts_summary',
    config: {
      containerId: 'bank-433b-widget', configGlobal: 'BANK_433B_CONFIG',
      sections: [{
        key: '433b__bank_accounts_summary', id: 'Pagy05v49y6KIuOpt0GT', title: 'Bank Accounts',
        subtitle: 'Business checking, savings, money market, and online / stored-value accounts — list every institution (IRS Form 433-B, line 17).',
        addLabel: 'Add a bank / account', addBtn: 'Add account', gateWarn: 'Enter the institution name before adding.', emptyNote: 'No accounts added yet.',
        totalLabel: 'Total cash in banks', totalCol: 'balance',
        columns: [
          { id: 'institution', label: 'Bank / institution name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
          { id: 'type', label: 'Type of account', kind: 'text', ph: 'Checking, Savings, MMA…', slabel: 'Type', role: 'meta' },
          { id: 'acct', label: 'Account number', kind: 'text', ph: 'Acct. no', slabel: 'Acct' },
          { id: 'asof', label: 'Balance as of (date)', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'As of' },
          { id: 'balance', label: 'Account balance', kind: 'money', slabel: 'Balance', role: 'amount' }
        ]
      }]
    }
  },
  '433b-accounts-receivable.html': {
    title: '433-B — Accounts/Notes Receivable Repeater', container: 'ar-433b-widget', keyComment: '433b__accounts_receivable_summary',
    config: {
      containerId: 'ar-433b-widget', configGlobal: 'AR_433B_CONFIG', colMin: '320px',
      sections: [{
        key: '433b__accounts_receivable_summary', id: 'sEeTTyxscC5L31XR7gSh', title: 'Accounts / Notes Receivable',
        subtitle: 'Accounts and notes receivable, including factored receivables and any grant or contract amounts due (IRS Form 433-B, line 18).',
        addLabel: 'Add a receivable', addBtn: 'Add receivable', gateWarn: 'Enter the name before adding.', emptyNote: 'No receivables added yet.',
        totalLabel: 'Outstanding balance', totalCol: 'amount',
        columns: [
          { id: 'name', label: 'Name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
          { id: 'status', label: 'Status (age, factored, other)', kind: 'text', ph: 'e.g. 90 days, factored', slabel: 'Status', role: 'meta' },
          { id: 'datedue', label: 'Date due', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Due' },
          { id: 'invoice', label: 'Invoice / grant / contract no.', kind: 'text', ph: 'Reference no', slabel: 'Invoice' },
          { id: 'contact', label: 'Contact name', kind: 'text', ph: 'Name', slabel: 'Contact' },
          { id: 'phone', label: 'Phone', kind: 'text', ph: '(000) 000-0000', slabel: 'Phone' },
          { id: 'amount', label: 'Amount due', kind: 'money', slabel: 'Amount', role: 'amount' }
        ]
      }]
    }
  },
  '433b-investments.html': {
    title: '433-B — Investments Repeater', container: 'investments-433b-widget', keyComment: '433b__investments_summary',
    config: {
      containerId: 'investments-433b-widget', configGlobal: 'INVESTMENTS_433B_CONFIG',
      sections: [{
        key: '433b__investments_summary', id: 'aZz6KIIVMQUxRwD943zC', title: 'Investments',
        subtitle: 'Stocks, bonds, mutual funds, stock options, certificates of deposit, and other business investments (IRS Form 433-B, line 19).',
        addLabel: 'Add an investment', addBtn: 'Add investment', gateWarn: 'Enter the company name before adding.', emptyNote: 'No investments added yet.',
        totalLabel: 'Total investments', totalCol: 'equity',
        columns: [
          { id: 'name', label: 'Company name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
          { id: 'phone', label: 'Phone', kind: 'text', ph: '(000) 000-0000', slabel: 'Phone', role: 'meta' },
          { id: 'collateral', label: 'Used as collateral on a loan? (Yes/No)', kind: 'text', ph: 'Yes / No', slabel: 'Collateral' },
          { id: 'value', label: 'Current value', kind: 'money', slabel: 'Value' },
          { id: 'loan', label: 'Loan balance', kind: 'money', slabel: 'Loan' },
          { id: 'equity', label: 'Equity', kind: 'calc', sub: ['value', 'loan'], floor: true, slabel: 'Equity', role: 'amount' }
        ]
      }]
    }
  },
  '433b-digital-assets.html': {
    title: '433-B — Digital Assets Repeater', container: 'digital-433b-widget', keyComment: '433b__digital_assets_summary',
    config: {
      containerId: 'digital-433b-widget', configGlobal: 'DIGITAL_433B_CONFIG', colMin: '320px',
      sections: [{
        key: '433b__digital_assets_summary', id: 'SNFKj5NSrvbWYXPOmQzV', title: 'Digital Assets',
        subtitle: 'Virtual currency (cryptocurrency), NFTs, and other digital assets held by the business (IRS Form 433-B, line 20). List individuals with access to keys/wallets in the separate field on this page.',
        addLabel: 'Add a digital asset', addBtn: 'Add digital asset', gateWarn: 'Enter the digital asset before adding.', emptyNote: 'No digital assets added yet.',
        totalLabel: 'Total equity of digital assets', totalCol: 'equity',
        columns: [
          { id: 'asset', label: 'Digital asset, # of units & address', kind: 'text', ph: 'e.g. 1.5 BTC, wallet address', gate: true, role: 'name' },
          { id: 'location', label: 'Location (exchange acct / self-hosted wallet)', kind: 'text', ph: 'Exchange or wallet', slabel: 'Location', role: 'meta' },
          { id: 'acct', label: 'Account # (custodian / broker)', kind: 'text', ph: 'Acct. no', slabel: 'Acct' },
          { id: 'collateral', label: 'Used as collateral? (Yes/No)', kind: 'text', ph: 'Yes / No', slabel: 'Collateral' },
          { id: 'value', label: 'Current value (USD)', kind: 'money', slabel: 'Value' },
          { id: 'value_asof', label: 'Current value as of (date)', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Value as of' },
          { id: 'loan', label: 'Loan balance', kind: 'money', slabel: 'Loan' },
          { id: 'equity', label: 'Equity', kind: 'calc', sub: ['value', 'loan'], floor: true, slabel: 'Equity', role: 'amount' }
        ]
      }]
    }
  },
  '433b-available-credit.html': {
    title: '433-B — Available Credit Repeater', container: 'credit-433b-widget', keyComment: '433b__available_credit_summary',
    config: {
      containerId: 'credit-433b-widget', configGlobal: 'CREDIT_433B_CONFIG',
      sections: [{
        key: '433b__available_credit_summary', id: '4ftsjKqYOo5woTOmcg0Q', title: 'Available Credit',
        subtitle: 'All lines of credit and business-issued credit cards (IRS Form 433-B, line 21).',
        addLabel: 'Add a line of credit', addBtn: 'Add credit line', gateWarn: 'Enter the creditor name before adding.', emptyNote: 'No credit lines added yet.',
        totalLabel: 'Total available credit', totalCol: 'available',
        columns: [
          { id: 'institution', label: 'Creditor name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
          { id: 'acct', label: 'Account no.', kind: 'text', ph: 'Acct. no', slabel: 'Acct', role: 'meta' },
          { id: 'limit', label: 'Credit limit', kind: 'money', slabel: 'Limit' },
          { id: 'owed', label: 'Amount owed', kind: 'money', slabel: 'Owed' },
          { id: 'asof', label: 'Amounts as of (date)', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'As of' },
          // available is NOT floored — it can legitimately go negative (owed > limit) → accounting parens.
          // (Form 433-B line 21 prints no "21c total" row; the "— Total available credit" line is a UI/fleet convenience.)
          { id: 'available', label: 'Available credit', kind: 'calc', sub: ['limit', 'owed'], slabel: 'Available', role: 'amount' }
        ]
      }]
    }
  },
  '433b-real-property.html': {
    title: '433-B — Real Property Repeater', container: 'realprop-433b-widget', keyComment: '433b__real_property_summary',
    config: {
      containerId: 'realprop-433b-widget', configGlobal: 'REALPROP_433B_CONFIG', colMin: '320px',
      sections: [{
        key: '433b__real_property_summary', id: 'C8fC9QDi5qM7jZg2uURo', title: 'Real Property',
        subtitle: 'Real property the business owns, is purchasing, leases, or holds an interest in (IRS Form 433-B, line 22).',
        addLabel: 'Add a property', addBtn: 'Add property', gateWarn: 'Enter a property description before adding.', emptyNote: 'No real property added yet.',
        totalLabel: 'Total equity (FMV − loans)', totalCol: 'equity',
        columns: [
          { id: 'description', label: 'Property description', kind: 'text', ph: 'e.g. Office building, warehouse', gate: true, role: 'name' },
          { id: 'location', label: 'Location (street, city, state, ZIP, county)', kind: 'text', ph: 'Full address & county', slabel: 'Location', role: 'meta' },
          { id: 'lender', label: 'Lender / lessor / landlord (name, address, phone)', kind: 'text', ph: 'Name, address, phone', slabel: 'Lender' },
          { id: 'purchasedate', label: 'Purchase / lease date', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Purchased' },
          { id: 'finalpayment', label: 'Date of final payment', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Final pmt' },
          { id: 'fmv', label: 'Current fair market value', kind: 'money', slabel: 'FMV' },
          { id: 'loan', label: 'Current loan balance', kind: 'money', slabel: 'Loan' },
          { id: 'payment', label: 'Monthly payment', kind: 'money', slabel: 'Monthly' },
          { id: 'equity', label: 'Equity', kind: 'calc', sub: ['fmv', 'loan'], floor: true, slabel: 'Equity', role: 'amount' }
        ]
      }]
    }
  },
  '433b-vehicles.html': {
    title: '433-B — Vehicles Repeater', container: 'vehicle-433b-widget', keyComment: '433b__vehicles_summary',
    config: {
      containerId: 'vehicle-433b-widget', configGlobal: 'VEHICLE_433B_CONFIG', colMin: '320px',
      sections: [{
        key: '433b__vehicles_summary', id: 'ZshS8PfRoKE7x5QcCICO', title: 'Vehicles',
        subtitle: 'Company vehicles — cars, trucks, trailers, and equipment vehicles, owned or leased (IRS Form 433-B, line 23).',
        addLabel: 'Add a vehicle', addBtn: 'Add vehicle', gateWarn: 'Enter the year, make & model before adding.', emptyNote: 'No vehicles added yet.',
        totalLabel: 'Total equity (FMV − loans)', totalCol: 'equity',
        columns: [
          { id: 'desc', label: 'Year, make & model', kind: 'text', ph: 'e.g. 2019 Ford F-150', gate: true, role: 'name' },
          { id: 'mileage', label: 'Mileage', kind: 'text', ph: 'e.g. 84,000', slabel: 'Mileage', role: 'meta' },
          { id: 'license', label: 'License / tag no.', kind: 'text', ph: 'Tag no', slabel: 'License' },
          { id: 'vin', label: 'VIN', kind: 'text', ph: 'Vehicle identification no', slabel: 'VIN' },
          { id: 'lender', label: 'Lender / lessor (name, address, phone)', kind: 'text', ph: 'Name, address, phone', slabel: 'Lender' },
          { id: 'purchasedate', label: 'Purchase / lease date', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Purchased' },
          { id: 'finalpayment', label: 'Date of final payment', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Final pmt' },
          { id: 'fmv', label: 'Current fair market value', kind: 'money', slabel: 'FMV' },
          { id: 'loan', label: 'Current loan balance', kind: 'money', slabel: 'Loan' },
          { id: 'payment', label: 'Monthly payment', kind: 'money', slabel: 'Monthly' },
          { id: 'equity', label: 'Equity', kind: 'calc', sub: ['fmv', 'loan'], floor: true, slabel: 'Equity', role: 'amount' }
        ]
      }]
    }
  },
  // Combined: Business Equipment (24a–d, tangible) + Intangible Assets (24e–g) — same survey slide,
  // mirroring the 433-A Credit+Life two-section widget. KEEP both sections on ONE step.
  '433b-business-assets.html': {
    title: '433-B — Business Equipment & Intangible Assets Repeater', container: 'bizassets-433b-widget',
    keyComment: '433b__business_equipment_summary + 433b__intangible_assets_summary',
    config: {
      containerId: 'bizassets-433b-widget', configGlobal: 'BIZASSETS_433B_CONFIG', colMin: '320px',
      sections: [
        {
          key: '433b__business_equipment_summary', id: 'mwuIUgGhsoPUuC8eW55H', title: 'Business Equipment & Tangible Assets',
          subtitle: 'Machinery, equipment, merchandise inventory, and other tangible business assets (IRS Form 433-B, lines 24a–24d).',
          addLabel: 'Add equipment / tangible asset', addBtn: 'Add asset', gateWarn: 'Enter an asset description before adding.', emptyNote: 'No business equipment added yet.',
          totalLabel: 'Total equity (FMV − loans)', totalCol: 'equity',
          columns: [
            { id: 'description', label: 'Asset description', kind: 'text', ph: 'e.g. CNC machine, delivery fleet', gate: true, role: 'name' },
            { id: 'location', label: 'Location (street, city, state, ZIP, county)', kind: 'text', ph: 'Where it is kept', slabel: 'Location', role: 'meta' },
            { id: 'lender', label: 'Lender / lessor (name, address, phone)', kind: 'text', ph: 'Name, address, phone', slabel: 'Lender' },
            { id: 'purchasedate', label: 'Purchase / lease date', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Purchased' },
            { id: 'finalpayment', label: 'Date of final payment', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Final pmt' },
            { id: 'fmv', label: 'Current fair market value', kind: 'money', slabel: 'FMV' },
            { id: 'loan', label: 'Current loan balance', kind: 'money', slabel: 'Loan' },
            { id: 'payment', label: 'Monthly payment', kind: 'money', slabel: 'Monthly' },
            { id: 'equity', label: 'Equity', kind: 'calc', sub: ['fmv', 'loan'], floor: true, slabel: 'Equity', role: 'amount' }
          ]
        },
        {
          key: '433b__intangible_assets_summary', id: '0sD3HiNLmaWWpWeTVTXe', title: 'Intangible Assets',
          subtitle: 'Intangible assets — licenses, patents, domain names, trademarks, goodwill (IRS Form 433-B, lines 24e–24g).',
          addLabel: 'Add an intangible asset', addBtn: 'Add intangible', gateWarn: 'Enter a description before adding.', emptyNote: 'No intangible assets added yet.',
          totalLabel: 'Total equity', totalCol: 'equity',
          columns: [
            { id: 'description', label: 'Intangible asset description (license, patent, domain, goodwill…)', kind: 'text', ph: 'Describe the intangible asset', gate: true, role: 'name' },
            { id: 'equity', label: 'Equity', kind: 'money', slabel: 'Equity', role: 'amount' }
          ]
        }
      ]
    }
  },
  '433b-business-liabilities.html': {
    title: '433-B — Business Liabilities Repeater', container: 'liabilities-433b-widget', keyComment: '433b__business_liabilities_summary',
    config: {
      containerId: 'liabilities-433b-widget', configGlobal: 'LIAB_433B_CONFIG', colMin: '320px',
      sections: [{
        key: '433b__business_liabilities_summary', id: 'trZUrE8iXHsPvsfYmleE', title: 'Business Liabilities',
        subtitle: 'Outstanding business liabilities (secured and unsecured) and the monthly payment on each (IRS Form 433-B, line 25).',
        addLabel: 'Add a liability', addBtn: 'Add liability', gateWarn: 'Enter a liability description before adding.', emptyNote: 'No liabilities added yet.',
        totalLabel: 'Total payments', totalCol: 'payment',
        columns: [
          { id: 'description', label: 'Liability description', kind: 'text', ph: 'e.g. Equipment loan, line of credit', gate: true, role: 'name' },
          { id: 'securedunsecured', label: 'Secured or unsecured', kind: 'text', ph: 'Secured / Unsecured', slabel: 'Type', role: 'meta' },
          { id: 'creditor', label: 'Creditor name, address & phone', kind: 'text', ph: 'Name, address, phone', slabel: 'Creditor' },
          { id: 'datepledged', label: 'Date pledged', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Pledged' },
          { id: 'finalpayment', label: 'Date of final payment', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Final pmt' },
          { id: 'balance', label: 'Balance owed', kind: 'money', slabel: 'Balance' },
          { id: 'payment', label: 'Payment amount', kind: 'money', slabel: 'Payment', role: 'amount' }
        ]
      }]
    }
  },
  // ── Pure-list classes (noTotal: no $ total on the form) ──────────────────────
  // Combined: Payment Processors (§1 line 5) + Credit Cards Accepted (§1 line 6) — same slide.
  '433b-payment-acceptance.html': {
    title: '433-B — Payment Processors & Credit Cards Repeater', container: 'payment-433b-widget',
    keyComment: '433b__payment_processors_summary + 433b__credit_cards_summary',
    config: {
      containerId: 'payment-433b-widget', configGlobal: 'PAYMENT_433B_CONFIG',
      sections: [
        {
          key: '433b__payment_processors_summary', id: 'ldKHHNXWbhf6t0PKQuy0', title: 'Payment Processors', noTotal: true,
          subtitle: 'Credit-card payment processors and virtual-currency / internet merchant accounts the business uses (IRS Form 433-B, line 5).',
          addLabel: 'Add a payment processor', addBtn: 'Add processor', gateWarn: 'Enter the processor name before adding.', emptyNote: 'No payment processors added yet.',
          columns: [
            { id: 'name', label: 'Processor name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
            { id: 'acct', label: 'Account number', kind: 'text', ph: 'Acct. no', slabel: 'Acct', role: 'meta' }
          ]
        },
        {
          key: '433b__credit_cards_summary', id: 'oDNElyzSXpRiwGFMWfzB', title: 'Credit Cards Accepted', noTotal: true,
          subtitle: 'Types of credit cards the business accepts (IRS Form 433-B, line 6).',
          addLabel: 'Add a credit card type', addBtn: 'Add card type', gateWarn: 'Enter the type of card before adding.', emptyNote: 'No credit card types added yet.',
          columns: [
            { id: 'type', label: 'Type of card (Visa, Mastercard…)', kind: 'text', ph: 'e.g. Visa, Mastercard, Amex', gate: true, role: 'name' },
            { id: 'merchant', label: 'Merchant account number', kind: 'text', ph: 'Merchant acct. no', slabel: 'Merchant', role: 'meta' },
            { id: 'bank', label: 'Issuing bank name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', slabel: 'Bank' },
            { id: 'phone', label: 'Phone', kind: 'text', ph: '(000) 000-0000', slabel: 'Phone' }
          ]
        }
      ]
    }
  },
  '433b-personnel.html': {
    title: '433-B — Business Personnel Repeater', container: 'personnel-433b-widget', keyComment: '433b__business_personnel_summary',
    config: {
      containerId: 'personnel-433b-widget', configGlobal: 'PERSONNEL_433B_CONFIG', colMin: '320px',
      sections: [{
        key: '433b__business_personnel_summary', id: '5YzDLqEDBHYU93oiGORI', title: 'Business Personnel', noTotal: true,
        subtitle: 'Partners, officers, major shareholders, and others responsible for the business (IRS Form 433-B, line 7).',
        addLabel: 'Add a person', addBtn: 'Add person', gateWarn: 'Enter the full name before adding.', emptyNote: 'No personnel added yet.',
        columns: [
          { id: 'name', label: 'Full name', kind: 'text', ph: 'First & last name', gate: true, role: 'name' },
          { id: 'title', label: 'Title', kind: 'text', ph: 'e.g. President, Partner', slabel: 'Title', role: 'meta' },
          { id: 'address', label: 'Home address (street, city, state, ZIP)', kind: 'text', ph: 'Full home address', slabel: 'Address' },
          { id: 'payrolltax', label: 'Responsible for depositing payroll taxes? (Yes/No)', kind: 'text', ph: 'Yes / No', slabel: 'Payroll tax' },
          { id: 'tin', label: 'Taxpayer ID number', kind: 'text', ph: 'SSN / ITIN / EIN', slabel: 'TIN' },
          { id: 'homephone', label: 'Home phone', kind: 'text', ph: '(000) 000-0000', slabel: 'Home' },
          { id: 'workphone', label: 'Work / cell phone', kind: 'text', ph: '(000) 000-0000', slabel: 'Work' },
          { id: 'ownership', label: 'Ownership % & shares/interest', kind: 'text', ph: 'e.g. 40% / 400 shares', slabel: 'Ownership' },
          { id: 'salary', label: 'Annual salary / draw', kind: 'text', ph: 'e.g. $120,000', slabel: 'Salary' }
        ]
      }]
    }
  },
  '433b-related-party-loans.html': {
    title: '433-B — Related-Party Loans Repeater', container: 'loans-433b-widget', keyComment: '433b__related_party_loans_summary',
    config: {
      containerId: 'loans-433b-widget', configGlobal: 'LOANS_433B_CONFIG',
      sections: [{
        key: '433b__related_party_loans_summary', id: 'Swuynk7vx4JmBZsT44MT', title: 'Related-Party Loans', noTotal: true,
        subtitle: 'Loans the business made to (or received from) officers, partners, shareholders, or other related parties (IRS Form 433-B, line 11).',
        addLabel: 'Add a related-party loan', addBtn: 'Add loan', gateWarn: 'Enter the borrower name before adding.', emptyNote: 'No related-party loans added yet.',
        columns: [
          { id: 'name', label: 'Borrower name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
          { id: 'dateloan', label: 'Date of loan', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Loan date', role: 'meta' },
          { id: 'balance', label: 'Current balance', kind: 'money', slabel: 'Balance', role: 'amount' },
          { id: 'asof', label: 'Balance as of (date)', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'As of' },
          { id: 'paydate', label: 'Payment date', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Pay date' },
          { id: 'payment', label: 'Payment amount', kind: 'money', slabel: 'Payment' }
        ]
      }]
    }
  },
  '433b-asset-transfers.html': {
    title: '433-B — Asset Transfers Repeater', container: 'transfers-433b-widget', keyComment: '433b__asset_transfers_summary',
    config: {
      containerId: 'transfers-433b-widget', configGlobal: 'TRANSFERS_433B_CONFIG',
      sections: [{
        key: '433b__asset_transfers_summary', id: 'bzYvfKPjrfF3BpeULCCL', title: 'Asset Transfers', noTotal: true,
        subtitle: 'Assets transferred, by or for the business, for less than full value within the past 10 years (IRS Form 433-B, line 12).',
        addLabel: 'Add an asset transfer', addBtn: 'Add transfer', gateWarn: 'Enter the asset transferred before adding.', emptyNote: 'No asset transfers added yet.',
        columns: [
          { id: 'asset', label: 'Asset transferred', kind: 'text', ph: 'Describe the asset', gate: true, role: 'name' },
          { id: 'value', label: 'Value at time of transfer', kind: 'money', slabel: 'Value', role: 'amount' },
          { id: 'datetransferred', label: 'Date transferred', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Date' },
          { id: 'towhom', label: 'To whom / where transferred', kind: 'text', ph: 'Name & relationship', slabel: 'To', role: 'meta' }
        ]
      }]
    }
  },
  '433b-affiliations.html': {
    title: '433-B — Affiliations Repeater', container: 'affiliations-433b-widget', keyComment: '433b__affiliations_summary',
    config: {
      containerId: 'affiliations-433b-widget', configGlobal: 'AFFIL_433B_CONFIG',
      sections: [{
        key: '433b__affiliations_summary', id: 'gWwgi2YYXfJFXTgU5KX3', title: 'Affiliations', noTotal: true,
        subtitle: 'Other businesses the company is affiliated with — subsidiaries, parent, or sister companies (IRS Form 433-B, line 13).',
        addLabel: 'Add an affiliation', addBtn: 'Add affiliation', gateWarn: 'Enter the related business name before adding.', emptyNote: 'No affiliations added yet.',
        columns: [
          { id: 'name', label: 'Related business name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
          { id: 'ein', label: 'Related business EIN', kind: 'text', ph: 'XX-XXXXXXX', slabel: 'EIN', role: 'meta' }
        ]
      }]
    }
  },
  // ── Section 3 detail repeaters (write the existing _detail LARGE_TEXT fields) ──
  '433b-lawsuit.html': {
    title: '433-B — Lawsuit Detail Repeater', container: 'lawsuit-433b-widget', keyComment: '433b_s3__lawsuit_detail',
    config: {
      containerId: 'lawsuit-433b-widget', configGlobal: 'LAWSUIT_433B_CONFIG', colMin: '320px',
      sections: [{
        key: '433b_s3__lawsuit_detail', id: '78CDwQe1HY2JfEEPvO76', title: 'Lawsuits', noTotal: true,
        subtitle: 'Each lawsuit the business is a party to (IRS Form 433-B, line 9).',
        addLabel: 'Add a lawsuit', addBtn: 'Add lawsuit', gateWarn: 'Enter the plaintiff before adding.', emptyNote: 'No lawsuits added yet.',
        columns: [
          { id: 'plaintiff', label: 'Plaintiff', kind: 'text', ph: 'Plaintiff name', gate: true, role: 'name' },
          { id: 'defendant', label: 'Defendant', kind: 'text', ph: 'Defendant name', slabel: 'Defendant', role: 'meta' },
          { id: 'location', label: 'Location of filing (court)', kind: 'text', ph: 'Court / jurisdiction', slabel: 'Location' },
          { id: 'represented', label: 'Represented by', kind: 'text', ph: 'Attorney name & firm', slabel: 'Counsel' },
          { id: 'docket', label: 'Docket / case no.', kind: 'text', ph: 'Case number', slabel: 'Docket' },
          { id: 'amount', label: 'Amount of suit', kind: 'money', slabel: 'Amount', role: 'amount' },
          { id: 'completion', label: 'Possible completion date', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Completion' },
          { id: 'subject', label: 'Subject of suit', kind: 'text', ph: 'What the suit is about', slabel: 'Subject' }
        ]
      }]
    }
  },
  '433b-bankruptcy.html': {
    title: '433-B — Bankruptcy Detail Repeater', container: 'bankruptcy-433b-widget', keyComment: '433b_s3__bankruptcy_detail',
    config: {
      containerId: 'bankruptcy-433b-widget', configGlobal: 'BANKRUPTCY_433B_CONFIG', colMin: '320px',
      sections: [{
        key: '433b_s3__bankruptcy_detail', id: 'cajANacZoQg6Y1DeiR53', title: 'Bankruptcy Filings', noTotal: true,
        subtitle: 'Each bankruptcy the business has filed (IRS Form 433-B, line 10).',
        addLabel: 'Add a bankruptcy filing', addBtn: 'Add filing', gateWarn: 'Enter the date filed before adding.', emptyNote: 'No bankruptcy filings added yet.',
        columns: [
          { id: 'datefiled', label: 'Date filed', kind: 'text', ph: 'MM/DD/YYYY', gate: true, role: 'name' },
          { id: 'datedismissed', label: 'Date dismissed', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Dismissed', role: 'meta' },
          { id: 'datedischarged', label: 'Date discharged', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Discharged' },
          { id: 'petition', label: 'Petition no.', kind: 'text', ph: 'Petition number', slabel: 'Petition' },
          { id: 'district', label: 'District of filing', kind: 'text', ph: 'Court district', slabel: 'District' }
        ]
      }]
    }
  }
};

const reConfig = /var CONFIG = \{[\s\S]*?\n  \};/;
if (!reConfig.test(tpl)) throw new Error('CONFIG block not found in template investments.html');
let n = 0;
for (const [file, w] of Object.entries(WIDGETS)) {
  const cfgJs = 'var CONFIG = ' + JSON.stringify(w.config, null, 2).replace(/\n/g, '\n  ') + ';';
  let out = tpl.replace(reConfig, cfgJs);
  out = out.replace(/<title>.*<\/title>/, '<title>' + w.title + '</title>');
  out = out.replace(/#investments-433a-widget#investments-433a-widget/g, '#' + w.container + '#' + w.container);
  out = out.replace(/Writes LARGE_TEXT field by clean key: 433a__investments_summary/, 'Writes LARGE_TEXT field(s) by clean key: ' + w.keyComment);
  out = out.replace(/Header text matches Form 433-A \(Rev\. 6-2026\) Section 4 — Personal Asset Information\./,
    'Header text matches IRS Form 433-B (Rev. 6-2026) — Collection Information Statement for Businesses. Writes the BUSINESS (Company) object fields.');
  fs.writeFileSync(path.join(ROOT, file), out);
  n++;
  console.log('wrote', file, '(' + (out.length / 1024).toFixed(1) + ' KB)');
}
console.log('\n' + n + ' 433-B widget file(s) generated.');
