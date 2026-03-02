import React, { useState } from 'react';
import Layout from './components/Layout.jsx';
import PortfolioOverview from './components/PortfolioOverview.jsx';
import HoldingsSummaryView from './components/HoldingsSummaryView.jsx';
import HoldingsPerformanceView from './components/HoldingsPerformanceView.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleChipClick = chip => {
    if (chip.targetView === 'HoldingsSummary') {
      setActiveTab('holdings-summary');
    } else if (chip.targetView === 'HoldingsPerformance') {
      setActiveTab('holdings-performance');
    }
  };

  let content = null;
  if (activeTab === 'overview') {
    content = <PortfolioOverview onChipClick={handleChipClick} />;
  } else if (activeTab === 'holdings-summary') {
    content = <HoldingsSummaryView />;
  } else if (activeTab === 'holdings-performance') {
    content = <HoldingsPerformanceView />;
  }

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {content}
    </Layout>
  );
}
