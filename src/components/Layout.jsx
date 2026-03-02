import React from 'react';

const tabs = [
  { id: 'overview', label: 'Portfolio Overview' },
  { id: 'holdings-summary', label: 'Holdings – Summary' },
  { id: 'holdings-performance', label: 'Holdings – Performance' }
];

export default function Layout({ activeTab, onTabChange, children }) {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', minHeight: '100vh', backgroundColor: '#f5f5f7' }}>
      <header style={{ padding: '12px 24px', backgroundColor: '#111827', color: '#f9fafb' }}>
        <h1 style={{ margin: 0, fontSize: 20 }}>Portfolio Sandbox</h1>
        <p style={{ margin: 0, fontSize: 12, opacity: 0.8 }}>Canonical Spec v1 – Sandbox</p>
      </header>
      <nav style={{ display: 'flex', gap: 8, padding: '8px 24px', borderBottom: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              padding: '8px 12px',
              borderRadius: 6,
              border: '1px solid ' + (activeTab === tab.id ? '#3b82f6' : '#e5e7eb'),
              backgroundColor: activeTab === tab.id ? '#eff6ff' : '#ffffff',
              cursor: 'pointer',
              fontSize: 13
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <main style={{ padding: '16px 24px' }}>{children}</main>
    </div>
  );
}
