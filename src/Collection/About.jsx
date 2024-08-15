import React, { useState, useEffect } from 'react';
import './About.css';
import img_temp from '../assets/temp_img.png';
import img_temp1 from '../assets/img_doc_1.jpg';
import img_temp2 from '../assets/img_doc_2.jpg';
import img_temp3 from '../assets/img_doc_3.jpg';
import img_temp4 from '../assets/img_doc_4.jpg';
import img_temp5 from '../assets/img_doc_5.jpg';

const About = () => {
  const images = [img_temp, img_temp1, img_temp2,img_temp, img_temp3, img_temp4, img_temp5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="magazine-container">
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt="Magazine Cover"
          className="magazine-cover"
        />
      </div>
      <div className="details-container">
        <h2>"Life of the Education"</h2>
        <p>
        शिक्षा ही हमारे जीवन को बदल सकती है, हम कहां जन्म लेते हैं ( गरीबी में , मुश्किलों में , परेशानियों में ), ये हम तय नहीं कर सकते, लेकिन शिक्षा के कारण हम हमारी जिंदगी को सुधार सकते हैं, अच्छी जगह ले जा सकते हैं, अपने सपने पूरे कर सकते हैं, और एक बेहतर जिंदगी जी सकते है ..        </p>
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
