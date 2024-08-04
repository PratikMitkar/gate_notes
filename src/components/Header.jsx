import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Be a GATE Qualified Student</h1>
        <p>Beginners to Qualifier Courses by Sir</p>
        <button className="sign-up-btn">Sign-up today</button>
      </div>
    </header>
  );
};

export default Header;
