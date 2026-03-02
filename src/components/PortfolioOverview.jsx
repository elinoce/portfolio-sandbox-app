import React from 'react';
import {
  portfolioOverviewMetrics,
  allocationSummary,
  whatMattersNowChips,
  dummyAsOf
} from '../data.js';

export default function PortfolioOverview({ onChipClick }) {
  const { totalValueHKD, cashHKD, loansHKD, ltvPct } = portfolioOverviewMetrics;

  const formatHKD = v => `HKD ${v.toLocaleString('en-HK', { maximumFractionDigits: 0 })}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* As of */}
      <div style={{ fontSize: 12, color: '#4b5563' }}>As of {dummyAsOf}</div>

      {/* High-level metrics row */}
      <section style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <MetricCard label="Total portfolio value" value={formatHKD(totalValueHKD)} />
        <MetricCard label="Cash" value={formatHKD(cashHKD)} />
        <MetricCard label="Loans" value={formatHKD(loansHKD)} />
        <MetricCard label="LTV (Loans ÷ Portfolio Value)" value={`${ltvPct.toFixed(1)}%`} />
      </section>

      {/* Quick allocation tiles (asset class only for now) */}
      <section>
        <h3 style={{ margin: '8px 0', fontSize: 14 }}>Quick allocation – By Asset Class</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {allocationSummary.assetClass.map(item => (
            <button
              key={item.label}
              style={{
                minWidth: 160,
                padding: '8px 10px',
                borderRadius: 8,
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 500 }}>{item.label}</div>
              <div style={{ fontSize: 12, color: '#4b5563' }}>
                Current {item.current}% • Target {item.target}%
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* What matters now chips */}
      <section>
        <h3 style={{ margin: '8px 0', fontSize: 14 }}>What matters now</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {whatMattersNowChips.map(chip => (
            <button
              key={chip.id}
              onClick={() => onChipClick(chip)}
              style={{
                padding: '6px 10px',
                borderRadius: 999,
                border: '1px solid #e5e7eb',
                backgroundColor: '#f9fafb',
                fontSize: 12,
                cursor: 'pointer'
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      {/* Simple price source indicator placeholder */}
      <section>
        <h3 style={{ margin: '8px 0', fontSize: 14 }}>Price source status (placeholder)</h3>
        <p style={{ fontSize: 12, color: '#6b7280' }}>
          In this sandbox, all positions are treated as API‑priced. In a fuller version, flags will show API vs Manual.
        </p>
      </section>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div
      style={{
        minWidth: 180,
        padding: '10px 12px',
        borderRadius: 10,
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff'
      }}
    >
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.03, color: '#6b7280' }}>
        {label}
      </div>
      <div style={{ marginTop: 4, fontSize: 16, fontWeight: 600 }}>{value}</div>
    </div>
  );
}
