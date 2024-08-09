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
      <div className="header-content-wrapper">
        <div className="header-content first">
        </div>
        <div className="header-content">
          <h1>Mr. Ankesh Khare</h1>
          <p> :- M.Tech in Artificial Intelligence (CSE) from Defence Institute of Advanced Technology, Pune (2023, NIRF Ranking: 57th). <br/><br/>
 :- IEEE and ACM student memberships. <br/><br/>
 :- Published papers on AI and malnourishment detection at ICCST 2023 and 7th International Conference 2023 in Denmark. <br/><br/>
 :- Winner of Underwater Robotics project event at IIT Kharagpur. <br /><br/>
 :- M.Tech project: "Garbh – AI-based device for detecting infant malnourishment."</p>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
