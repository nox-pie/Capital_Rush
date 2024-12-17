import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>LEARN HOW TO GROW YOUR MONEY WITH CAPITAL RUSH</h1>
        <p>Experience financial markets like never before</p>
        <Link to="/simulate" className="cta-button">Start Trading</Link>
      </section>
      
      <section className="benefits">
        <h2>Why Choose Capital Rush?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Risk-Free Learning</h3>
            <p>Practice trading without risking real money</p>
          </div>
          <div className="benefit-card">
            <h3>Real-Time Simulation</h3>
            <p>Experience market dynamics in real-time</p>
          </div>
          <div className="benefit-card">
            <h3>Data Analytics</h3>
            <p>Access powerful tools for market analysis</p>
          </div>
          <div className="benefit-card">
            <h3>Educational Resources</h3>
            <p>Learn from comprehensive tutorials and guides</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;