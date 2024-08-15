import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import bgImage from '../assets/bg_img.png';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Desktop Navigation */}
      <div className="nav-container desktop-only">
      <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
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
          <h1>Asst.Prof. Ankesh Khare</h1>
          <h2>13+ Years of Teaching Experience</h2>
          <p>
            :- M.Tech in Artificial Intelligence (CSE) from Defence Institute of Advanced Technology, Pune (2023, NIRF Ranking: 57th). <br /><br />
            :- Member of IEEE and ACM Student Society. <br /><br />
            :- Published Research Papers on AI and Malnourishment detection at ICCST 2023 International Conferences - IEEE explored Digital library and 7th International Conference 2023 in Denmark, Europe. <br /><br />
            :- Winner of Underwater Robotics National Level Project Competition at IIT Kharagpur. <br /><br />
            :- M.Tech project: "GARBH – AI-based device for detecting infant malnourishment."<br /><br />
            :- GATE Qualified (Computer Science and Engineering)
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
