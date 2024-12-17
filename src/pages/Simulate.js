import React from 'react';
import TradingChart from '../components/simulate/TradingChart';
import OrderForm from '../components/simulate/OrderForm';
import Portfolio from '../components/simulate/Portfolio';
import MarketOverview from '../components/simulate/MarketOverview';
import '../styles/Simulate.css';

const Simulate = () => {
  return (
    <div className="simulate">
      <section className="simulate-header">
        <h1>Trading Simulator</h1>
        <p>Practice trading in a risk-free environment</p>
      </section>

      <div className="trading-dashboard">
        <div className="chart-section">
          <TradingChart />
        </div>
        
        <div className="trading-panel">
          <MarketOverview />
          <OrderForm />
          <Portfolio />
        </div>
      </div>
    </div>
  );
};

export default Simulate;