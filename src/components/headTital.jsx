import React from 'react';
import './headTital.css';

const HeadTital = ({ backgroundImage, title }) => {
  return (
    <header 
      className="header1" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="header1-content">
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  );
};

export default HeadTital;
