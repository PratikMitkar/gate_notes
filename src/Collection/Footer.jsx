import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h2>Mr. Ankesh Khare</h2>
          <p>
            Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum
          </p>
          <p><strong>10 (87) 738-3940</strong></p>
          <a href="mailto:contact@it-kol.com">contact@it-kol.com</a>
        </div>
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Drone Mapping</a></li>
            <li><a href="#">Real State</a></li>
            <li><a href="#">Commercial</a></li>
            <li><a href="#">Construction</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter-section">
          <h3>Subscribe Newsletter</h3>
          <p>Subscribe to our newsletter to get updates about our services and offers.</p>
          <div className="newsletter">
            <input
              type="email"
              className="email-input"
              placeholder="Email Address"
            />
            <button className="subscribe-button">→</button>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 All rights reserved | This template is made by <a href="#">Mamun Abdullah</a></p>
      </div>
    </footer>
  );
};

export default Footer;
