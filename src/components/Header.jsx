import React, { useState } from 'react';
import './Header.css';
import bgImage from '../assets/bg_img.jpg'; // Adjust the path as necessary

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="header" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="nav-container">
        <h1 className="logo">Logo</h1>
        <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
        <div className="nav-toggle" onClick={handleNavToggle}>
          &#x22EE; {/* 3 vertical dots */}
        </div>
      </div>
      <div className="header-content">
        <h1>Be a GATE Qualified Student</h1>
        <p>Beginners to Qualifier Courses by Sir</p>
        <button className="sign-up-btn">Sign-up today</button>
      </div>
    </header>
  );
};

export default Header;
