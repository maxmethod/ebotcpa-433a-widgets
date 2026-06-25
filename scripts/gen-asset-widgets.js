const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const tpl = fs.readFileSync(path.join(ROOT, 'investments.html'), 'utf8');

const WIDGETS = {
  'digital-assets.html': {
    title: '433-A — Digital Assets Repeater', container: 'digital-assets-433a-widget', keyComment: '433a__digital_assets_summary',
    config: {
      containerId: 'digital-assets-433a-widget', configGlobal: 'DIGITAL_433A_CONFIG',
      sections: [{
        key: '433a__digital_assets_summary', title: 'Digital Assets',
        subtitle: 'Virtual currency (cryptocurrency), non-fungible tokens (NFTs), and smart contracts — e.g. Bitcoin, Ethereum, Litecoin, Ripple.',
        addLabel: 'Add a digital asset', addBtn: 'Add digital asset', gateWarn: 'Enter the type of digital asset before adding.', emptyNote: 'No digital assets added yet.',
        totalLabel: 'Total value (USD)', totalCol: 'value',
        columns: [
          { id: 'type', label: 'Type of digital asset', kind: 'text', ph: 'e.g. Bitcoin, NFT', gate: true, role: 'name' },
          { id: 'name', label: 'Name (wallet / exchange / DCE)', kind: 'text', ph: 'e.g. Coinbase, Ledger', slabel: 'Name', role: 'meta' },
          { id: 'email', label: 'Email used to set up', kind: 'text', ph: 'email@example.com', slabel: 'Email' },
          { id: 'location', label: 'Location of asset', kind: 'text', ph: 'Mobile wallet, Online, Hardware', slabel: 'Location' },
          { id: 'amount', label: 'Amount held (units)', kind: 'text', ph: 'e.g. 0.5 BTC, 12 ETH', slabel: 'Amount' },
          { id: 'value', label: 'Value (USD)', kind: 'money', slabel: 'Value', role: 'amount' }
        ]
      }]
    }
  },
  'available-credit.html': {
    title: '433-A — Available Credit & Life Insurance Repeater', container: 'credit-433a-widget', keyComment: '433a__available_credit_summary + 433a__life_insurance_summary',
    config: {
      containerId: 'credit-433a-widget', configGlobal: 'CREDIT_433A_CONFIG',
      sections: [
        {
          key: '433a__available_credit_summary', title: 'Available Credit',
          subtitle: 'All lines of credit and bank-issued credit cards.',
          addLabel: 'Add a line of credit', addBtn: 'Add credit line', gateWarn: 'Enter the credit institution before adding.', emptyNote: 'No credit lines added yet.',
          totalLabel: 'Total available credit', totalCol: 'available',
          columns: [
            { id: 'institution', label: 'Credit institution name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
            { id: 'acct', label: 'Account number', kind: 'text', ph: 'Acct. no', slabel: 'Acct' },
            { id: 'limit', label: 'Credit limit', kind: 'money', slabel: 'Limit' },
            { id: 'owed', label: 'Amount owed', kind: 'money', slabel: 'Owed' },
            { id: 'available', label: 'Available credit', kind: 'calc', sub: ['limit', 'owed'], slabel: 'Available', role: 'amount' }
          ]
        },
        {
          key: '433a__life_insurance_summary', title: 'Life Insurance',
          subtitle: 'Policies in which you own or have an interest that carry a cash value.',
          addLabel: 'Add a life insurance policy', addBtn: 'Add policy', gateWarn: 'Enter the insurance company before adding.', emptyNote: 'No life insurance policies added yet.',
          totalLabel: 'Total available cash (cash value − loans)', totalCol: 'availcash',
          columns: [
            { id: 'company', label: 'Insurance company name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
            { id: 'policy', label: 'Policy number', kind: 'text', ph: 'Policy no', slabel: 'Policy' },
            { id: 'owner', label: 'Owner of policy', kind: 'text', ph: 'Name', slabel: 'Owner', role: 'meta' },
            { id: 'cashvalue', label: 'Current cash value', kind: 'money', slabel: 'Cash value' },
            { id: 'loanbal', label: 'Outstanding loan balance', kind: 'money', slabel: 'Loan' },
            { id: 'availcash', label: 'Available cash', kind: 'calc', sub: ['cashvalue', 'loanbal'], floor: true, slabel: 'Available cash', role: 'amount' }
          ]
        }
      ]
    }
  },
  'real-property.html': {
    title: '433-A — Real Property Repeater', container: 'real-property-433a-widget', keyComment: '433a__real_property_summary',
    config: {
      containerId: 'real-property-433a-widget', configGlobal: 'REALPROP_433A_CONFIG', colMin: '320px',
      sections: [{
        key: '433a__real_property_summary', title: 'Real Property',
        subtitle: 'Houses, condos, co-ops, time shares, land, etc. you own, are purchasing, or hold an interest in (including life estates).',
        addLabel: 'Add a property', addBtn: 'Add property', gateWarn: 'Enter a property description before adding.', emptyNote: 'No real property added yet.',
        totalLabel: 'Total equity (FMV − loans)', totalCol: 'equity',
        columns: [
          { id: 'description', label: 'Property description', kind: 'text', ph: 'e.g. Primary residence — single family', gate: true, role: 'name' },
          { id: 'titleholders', label: 'Title holder(s) & how title is held', kind: 'text', ph: 'e.g. John & Jane Doe, joint tenancy', slabel: 'Title' },
          { id: 'location', label: 'Location (street, city, state, ZIP, county)', kind: 'text', ph: 'Full address & county', slabel: 'Location', role: 'meta' },
          { id: 'lender', label: 'Lender / contract holder (name, address, phone)', kind: 'text', ph: 'Name, address, phone', slabel: 'Lender' },
          { id: 'purchasedate', label: 'Purchase date', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Purchased' },
          { id: 'fmv', label: 'Current fair market value', kind: 'money', slabel: 'FMV' },
          { id: 'loan', label: 'Current loan balance', kind: 'money', slabel: 'Loan' },
          { id: 'payment', label: 'Amount of monthly payment', kind: 'money', slabel: 'Monthly' },
          { id: 'finalpayment', label: 'Date of final payment', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Final pmt' },
          { id: 'equity', label: 'Equity', kind: 'calc', sub: ['fmv', 'loan'], floor: true, slabel: 'Equity', role: 'amount' }
        ]
      }]
    }
  },
  'personal-assets.html': {
    title: '433-A — Personal Assets Repeater', container: 'personal-assets-433a-widget', keyComment: '433a__personal_assets_summary',
    config: {
      containerId: 'personal-assets-433a-widget', configGlobal: 'PERSONAL_433A_CONFIG',
      sections: [{
        key: '433a__personal_assets_summary', title: 'Personal Assets',
        subtitle: 'Furniture, personal effects, artwork, jewelry, collections (coins, guns, etc.), antiques; and intangibles (licenses, domain names, patents, copyrights).',
        addLabel: 'Add a personal asset', addBtn: 'Add asset', gateWarn: 'Enter a property description before adding.', emptyNote: 'No personal assets added yet.',
        totalLabel: 'Total equity (FMV − loans)', totalCol: 'equity',
        columns: [
          { id: 'description', label: 'Property description', kind: 'text', ph: 'e.g. Jewelry, artwork, equipment', gate: true, role: 'name' },
          { id: 'location', label: 'Location (street, city, state, ZIP, county)', kind: 'text', ph: 'Where it is kept', slabel: 'Location', role: 'meta' },
          { id: 'lender', label: 'Lender / lessor (name, address, phone)', kind: 'text', ph: 'Name, address, phone', slabel: 'Lender' },
          { id: 'purchasedate', label: 'Purchase / lease date', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Purchased' },
          { id: 'fmv', label: 'Current fair market value', kind: 'money', slabel: 'FMV' },
          { id: 'loan', label: 'Current loan balance', kind: 'money', slabel: 'Loan' },
          { id: 'payment', label: 'Amount of monthly payment', kind: 'money', slabel: 'Monthly' },
          { id: 'finalpayment', label: 'Date of final payment', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Final pmt' },
          { id: 'equity', label: 'Equity', kind: 'calc', sub: ['fmv', 'loan'], floor: true, slabel: 'Equity', role: 'amount' }
        ]
      }]
    }
  },
  // Bank + Vehicles converted FROM the old standalone pre-engine widgets TO the
  // config-driven engine (v3.4.0) — full IRS line 13 / line 19 column sets, and they
  // now inherit every engine hardening (flush-on-next, dynamic fallback, sanitize,
  // strict parseMoney). Container ids + clean keys are unchanged, so embeds don't move.
  'bank-accounts.html': {
    title: '433-A — Bank Accounts Repeater', container: 'bank-433a-widget', keyComment: '433a__bank_accounts_summary',
    config: {
      containerId: 'bank-433a-widget', configGlobal: 'BANK_433A_CONFIG',
      sections: [{
        key: '433a__bank_accounts_summary', title: 'Cash & Bank Accounts',
        subtitle: 'Checking, savings, money market, online/stored-value accounts — list every institution (IRS Form 433-A, line 13).',
        addLabel: 'Add a bank / account', addBtn: 'Add account', gateWarn: 'Enter the institution name before adding.', emptyNote: 'No accounts added yet.',
        totalLabel: 'Total cash in banks', totalCol: 'balance',
        columns: [
          { id: 'institution', label: 'Bank / institution name & address', kind: 'text', ph: 'Name, street, city, state, ZIP', gate: true, role: 'name' },
          { id: 'acct', label: 'Account number', kind: 'text', ph: 'Acct. no', slabel: 'Acct' },
          { id: 'type', label: 'Type of account', kind: 'text', ph: 'Checking, Savings, MMA…', slabel: 'Type', role: 'meta' },
          { id: 'asof', label: 'Balance as of (date)', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'As of' },
          { id: 'balance', label: 'Account balance', kind: 'money', slabel: 'Balance', role: 'amount' }
        ]
      }]
    }
  },
  'vehicles.html': {
    title: '433-A — Vehicles Repeater', container: 'vehicle-433a-widget', keyComment: '433a__vehicles_summary',
    config: {
      containerId: 'vehicle-433a-widget', configGlobal: 'VEHICLE_433A_CONFIG',
      sections: [{
        key: '433a__vehicles_summary', title: 'Vehicles',
        subtitle: 'Cars, boats, RVs, motorcycles, trailers, etc. — owned or leased (IRS Form 433-A, line 19).',
        addLabel: 'Add a vehicle', addBtn: 'Add vehicle', gateWarn: 'Enter the year, make & model before adding.', emptyNote: 'No vehicles added yet.',
        totalLabel: 'Total equity (FMV − loans)', totalCol: 'equity',
        columns: [
          { id: 'desc', label: 'Year, make & model', kind: 'text', ph: 'e.g. 2019 Ford F-150', gate: true, role: 'name' },
          { id: 'yearpurchased', label: 'Year purchased', kind: 'text', ph: 'YYYY', slabel: 'Yr purchased' },
          { id: 'leaseown', label: 'Leased or owned', kind: 'text', ph: 'Lease / Own', slabel: 'Lease/Own', role: 'meta' },
          { id: 'fmv', label: 'Current market value', kind: 'money', slabel: 'FMV' },
          { id: 'loan', label: 'Current loan balance', kind: 'money', slabel: 'Loan' },
          { id: 'payment', label: 'Monthly lease / loan amount', kind: 'money', slabel: 'Monthly' },
          { id: 'finalpayment', label: 'Date of final payment', kind: 'text', ph: 'MM/DD/YYYY', slabel: 'Final pmt' },
          { id: 'equity', label: 'Equity', kind: 'calc', sub: ['fmv', 'loan'], floor: true, slabel: 'Equity', role: 'amount' }
        ]
      }]
    }
  }
};

const reConfig = /var CONFIG = \{[\s\S]*?\n  \};/;
for (const [file, w] of Object.entries(WIDGETS)) {
  const cfgJs = 'var CONFIG = ' + JSON.stringify(w.config, null, 2).replace(/\n/g, '\n  ') + ';';
  let out = tpl.replace(reConfig, cfgJs);
  out = out.replace(/<title>.*<\/title>/, '<title>' + w.title + '</title>');
  out = out.replace(/#investments-433a-widget#investments-433a-widget/g, '#' + w.container + '#' + w.container);
  out = out.replace(/Writes LARGE_TEXT field by clean key: 433a__investments_summary/, 'Writes LARGE_TEXT field(s) by clean key: ' + w.keyComment);
  if (!reConfig.test(tpl)) throw new Error('CONFIG block not found in template');
  fs.writeFileSync(path.join(ROOT, file), out);
  console.log('wrote', file, '(' + (out.length/1024).toFixed(1) + ' KB)');
}
