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
        <h2>"Life of the Education"</h2>
        <p>
        शिक्षा ही हमारे जीवन को बदल सकती है, हम कहां जन्म लेते हैं, ये हम तय नहीं कर सकते, लेकिन शिक्षा के कारण हम हमारी जिंदगी को सुधार सकते हैं, अच्छी जगह ले जा सकते हैं, अपने सपने पूरे कर सकते हैं,

        </p>
        <p>
        For the Betterment of Students...
        </p>
        <h3 className='name'>
        Ankesh Khare
        </h3>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

export default About;
