import React from 'react';
import './About.css';
import img_temp from '../assets/temp_img.png'
const About = () => {
  return (
    <div className="magazine-container">
      <div className="image-container">
        <img
          src={img_temp}
          alt="Magazine Cover"
          className="magazine-cover"
        />
      </div>
      <div className="details-container">
        <h2>Volume 3</h2>
        <p>
          SANTA BARBARA | EDIBLE FLOWERS & INSECTS | ALBAN | METICLOBUS INK | 
          CAUSEWAY COAST | REYKJAVIK
        </p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

export default About;
