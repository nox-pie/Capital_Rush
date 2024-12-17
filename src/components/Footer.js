import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Capital Rush</h4>
          <p>An interactive financial simulation platform for learning and practicing trading skills.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/learn">Learning Center</a></li>
            <li><a href="/simulate">Trading Simulator</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@capitalrush.io</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Capital Rush. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;