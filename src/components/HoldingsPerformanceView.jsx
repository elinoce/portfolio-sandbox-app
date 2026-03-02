import React from 'react';
import { positions } from '../data.js';
import Table from './Table.jsx';

export default function HoldingsPerformanceView() {
  const columns = [
    { key: 'ticker', label: 'Ticker / ISIN' },
    { key: 'name', label: 'Asset Name' },
    { key: 'lastPrice', label: 'Last Price', align: 'right', render: r => r.lastPrice.toFixed(2) },
    {
      key: 'quantity',
      label: 'Quantity',
      align: 'right',
      render: r => r.quantity.toLocaleString()
    },
    {
      key: 'mvHKD',
      label: 'Market Value (HKD)',
      align: 'right',
      render: r => r.mvHKD.toLocaleString()
    },
    {
      key: 'pctPortfolioHKD',
      label: '% of Portfolio',
      align: 'right',
      render: r => `${r.pctPortfolioHKD.toFixed(1)}%`
    },
    {
      key: 'avgCost',
      label: 'Avg Cost / Unit',
      align: 'right',
      render: r => r.avgCost.toFixed(2)
    },
    {
      key: 'totalCost',
      label: 'Total Cost',
      align: 'right',
      render: r => r.totalCost.toLocaleString()
    },
    {
      key: 'unrealizedExclIncome',
      label: 'Unrealized P&L excl income',
      align: 'right',
      render: r => r.unrealizedExclIncome.toLocaleString()
    },
    {
      key: 'unrealizedInclIncome',
      label: 'Unrealized P&L incl income',
      align: 'right',
      render: r => r.unrealizedInclIncome.toLocaleString()
    },
    {
      key: 'unrealizedPctInclIncome',
      label: 'Unrealized P&L %',
      align: 'right',
      render: r => {
        const v = r.unrealizedPctInclIncome;
        const color = v > 0 ? '#16a34a' : v < 0 ? '#dc2626' : '#6b7280';
        return <span style={{ color }}>{v.toFixed(1)}%</span>;
      }
    },
    {
      key: 'incomeToDate',
      label: 'Income to Date',
      align: 'right',
      render: r => r.incomeToDate.toLocaleString()
    },
    {
      key: 'annualizedReturnPct',
      label: 'Annualized Return %',
      align: 'right',
      render: r => `${r.annualizedReturnPct.toFixed(1)}%`
    },
    {
      key: 'contributionPct',
      label: 'Contribution to portfolio return',
      align: 'right',
      render: r => `${r.contributionPct.toFixed(2)}%`
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h2 style={{ fontSize: 16, margin: '4px 0' }}>Holdings – Performance view</h2>
      <Table columns={columns} rows={positions} getRowKey={r => r.id} />
    </div>
  );
}
