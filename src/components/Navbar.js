import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="https://www.capitalrush.io/_next/image?url=%2Flogo.png&w=640&q=75" alt="Capital Rush" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/features" className="nav-link">Features</Link>
        <Link to="/learn" className="nav-link">Learn</Link>
        <Link to="/simulate" className="nav-link">Simulate</Link>
      </div>
    </nav>
  );
};

export default Navbar;