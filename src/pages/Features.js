import React from 'react';
import '../styles/Features.css';

const Features = () => {
  return (
    <div className="features">
      <section className="features-hero">
        <h1>Platform Features</h1>
        <p>Discover the tools that will help you master trading</p>
      </section>
      
      <section className="features-grid">
        <div className="feature-card">
          <h3>Market Analysis</h3>
          <p>Advanced charting tools and technical indicators for in-depth market analysis.</p>
        </div>
        <div className="feature-card">
          <h3>Portfolio Management</h3>
          <p>Track and manage your virtual portfolio with real-time updates.</p>
        </div>
        <div className="feature-card">
          <h3>Risk Assessment</h3>
          <p>Learn risk management through practical simulations.</p>
        </div>
        <div className="feature-card">
          <h3>Trading Strategies</h3>
          <p>Test different trading strategies in a risk-free environment.</p>
        </div>
      </section>
    </div>
  );
};

export default Features;