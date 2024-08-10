import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import bgImage from '../assets/bg_img.png'; // Adjust the path as necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Desktop Navigation */}
      <div className="nav-container desktop-only">
        <h1 className="logo">Logo</h1>
        <nav>
          <Link to="/gate_notes/" className="active">Home</Link>
          <Link to="/gate_notes/team">Team</Link>
          <Link to="/gate_notes/books">Books</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="sidebar-toggle mobile-only" onClick={toggleSidebar}>
        &#9776; {/* Hamburger Icon */}
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to="/gate_notes/" onClick={toggleSidebar}>Home</Link>
        <Link to="/gate_notes/team" onClick={toggleSidebar}>Team</Link>
        <Link to="/gate_notes/books" onClick={toggleSidebar}>Books</Link>
      </div>

      <div className="header-content-wrapper">
        <div className="header-content first">
          {/* Additional content if needed */}
        </div>
        <div className="header-content">
          <h1>Mr. Ankesh Khare</h1>
          <p>
            :- M.Tech in Artificial Intelligence (CSE) from Defence Institute of Advanced Technology, Pune (2023, NIRF Ranking: 57th). <br/><br/>
            :- IEEE and ACM student memberships. <br/><br/>
            :- Published papers on AI and malnourishment detection at ICCST 2023 and 7th International Conference 2023 in Denmark. <br/><br/>
            :- Winner of Underwater Robotics project event at IIT Kharagpur. <br /><br/>
            :- M.Tech project: "Garbh – AI-based device for detecting infant malnourishment."
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
