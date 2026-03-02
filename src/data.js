export const dummyAsOf = '2026-03-01 16:00 HKT';

export const portfolioOverviewMetrics = {
  totalValueHKD: 12000000,
  cashHKD: 1500000,
  loansHKD: 4000000,
  ltvPct: 33.3
};

export const allocationSummary = {
  assetClass: [
    { label: 'Equities', current: 60, target: 55 },
    { label: 'Bonds', current: 25, target: 30 },
    { label: 'Alternatives', current: 10, target: 10 },
    { label: 'Cash', current: 5, target: 5 }
  ]
};

export const whatMattersNowChips = [
  {
    id: 'equity-vs-target',
    label: 'Equity allocation 60% vs target 55%',
    targetView: 'HoldingsSummary'
  },
  {
    id: 'ltv-vs-maintenance',
    label: 'Current LTV 33% vs maintenance 80%',
    targetView: 'HoldingsPerformance'
  },
  {
    id: 'income-mom',
    label: "This month’s income HKD 28,000 vs last month HKD 24,000",
    targetView: 'HoldingsPerformance'
  }
];

export const positions = [
  {
    id: 1,
    account: 'IBKR HKD',
    ticker: '0700.HK',
    isin: 'KYG875721634',
    name: 'Tencent Holdings Ltd',
    assetClass: 'Equity',
    subAssetClass: 'Large Cap',
    country: 'China',
    currency: 'HKD',
    sector: 'Communication Services',
    size: 300,
    investmentObjective: 'Growth',
    notes: 'Core China tech',
    lastPrice: 320,
    quantity: 300,
    mvTrading: 96000,
    mvHKD: 96000,
    pctPortfolioHKD: 8.0,
    avgCost: 290,
    totalCost: 87000,
    incomeToDate: 2600,
    unrealizedExclIncome: 9000,
    unrealizedInclIncome: 11600,
    unrealizedPctInclIncome: 13.3,
    annualizedReturnPct: 14.8,
    contributionPct: 0.9
  },
  {
    id: 2,
    account: 'IBKR USD',
    ticker: 'AAPL',
    isin: 'US0378331005',
    name: 'Apple Inc',
    assetClass: 'Equity',
    subAssetClass: 'Large Cap',
    country: 'United States',
    currency: 'USD',
    sector: 'Technology',
    size: 200,
    investmentObjective: 'Growth',
    notes: '',
    lastPrice: 190,
    quantity: 200,
    mvTrading: 38000,
    mvHKD: 296400,
    pctPortfolioHKD: 2.5,
    avgCost: 160,
    totalCost: 32000,
    incomeToDate: 800,
    unrealizedExclIncome: 6000,
    unrealizedInclIncome: 6800,
    unrealizedPctInclIncome: 21.3,
    annualizedReturnPct: 18.5,
    contributionPct: 0.7
  },
  {
    id: 3,
    account: 'HSBC HKD',
    ticker: '0005.HK',
    isin: 'GB0005405286',
    name: 'HSBC Holdings PLC',
    assetClass: 'Equity',
    subAssetClass: 'Dividend',
    country: 'United Kingdom',
    currency: 'HKD',
    sector: 'Financials',
    size: 1000,
    investmentObjective: 'Income',
    notes: 'Dividend anchor',
    lastPrice: 62,
    quantity: 1000,
    mvTrading: 62000,
    mvHKD: 62000,
    pctPortfolioHKD: 5.1,
    avgCost: 55,
    totalCost: 55000,
    incomeToDate: 4800,
    unrealizedExclIncome: 7000,
    unrealizedInclIncome: 11800,
    unrealizedPctInclIncome: 21.5,
    annualizedReturnPct: 12.1,
    contributionPct: 0.6
  }
];
