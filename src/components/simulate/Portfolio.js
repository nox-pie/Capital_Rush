import React from 'react';
import { mockHoldings } from '../../data/marketData';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3>Portfolio Overview</h3>
      <div className="portfolio-summary">
        <div className="summary-item">
          <span>Balance</span>
          <strong>$100,000</strong>
        </div>
      </div>

      <div className="holdings-list">
        {mockHoldings.map(holding => (
          <div key={holding.symbol} className="holding-item">
            <div className="holding-info">
              <strong>{holding.symbol}</strong>
              <span>{holding.shares} shares</span>
            </div>
            <div className="holding-value">
              <span>${holding.value}</span>
              <span className={holding.change >= 0 ? 'profit' : 'loss'}>
                {holding.change >= 0 ? '+' : ''}{holding.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;