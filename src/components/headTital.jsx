import React from 'react';
import './headTital.css';

const HeadTital = ({ backgroundImage, title , subtext}) => {
  return (
    <header 
      className="header1" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="header1-content">
        <h1 className="header-title">{title}</h1>
        <p>{subtext}</p>
      </div>
    </header>
  );
};

export default HeadTital;
