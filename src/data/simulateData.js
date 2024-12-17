export const orderTypes = [
  { value: 'market', label: 'Market Order' },
  { value: 'limit', label: 'Limit Order' },
];

export const portfolioData = {
  balance: 100000,
  profitLoss: 1250,
  holdings: [
    { symbol: 'AAPL', shares: 10, value: 1550.00, change: 2.5 },
    { symbol: 'GOOGL', shares: 5, value: 2750.00, change: -1.2 },
    { symbol: 'MSFT', shares: 15, value: 3100.00, change: 1.8 },
    { symbol: 'AMZN', shares: 8, value: 2800.00, change: 0.5 },
  ],
};

export const marketData = [
  { symbol: 'AAPL', price: 155.00, change: 2.5 },
  { symbol: 'GOOGL', price: 550.00, change: -1.2 },
  { symbol: 'MSFT', price: 206.67, change: 1.8 },
  { symbol: 'AMZN', price: 350.00, change: 0.5 },
  { symbol: 'META', price: 280.00, change: -0.8 },
  { symbol: 'TSLA', price: 242.50, change: 3.2 },
];