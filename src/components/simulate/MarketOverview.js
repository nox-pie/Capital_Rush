import React from 'react';
import { marketData } from '../../data/marketData';

const MarketOverview = () => {
  return (
    <div className="market-overview">
      <h3>Market Overview</h3>
      <div className="market-grid">
        {marketData.map(item => (
          <div key={item.symbol} className="market-item">
            <div className="symbol-info">
              <strong>{item.symbol}</strong>
              <span>${item.price}</span>
            </div>
            <span className={`change ${item.change >= 0 ? 'positive' : 'negative'}`}>
              {item.change >= 0 ? '+' : ''}{item.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;