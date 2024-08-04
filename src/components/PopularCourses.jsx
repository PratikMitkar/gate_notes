import React from 'react';
import './PopularCourses.css';
import notes from '../assets/hand_reetan.jpg';
import video_lectures from '../assets/video_lectures.jpg';
import vidlec from '../assets/v_lectures.jpg'
import books from '../assets/books.jpg'

const courses = [
  { title: 'notes', duration: '3 weeks', imgSrc: notes },
  { title: 'video lectures', duration: '4 weeks', imgSrc: video_lectures },
  { title: 'live lectures', duration: '4 weeks', imgSrc: vidlec },
  { title: 'books', duration: '4 weeks', imgSrc: books },
];

const PopularCourses = () => {

  return (
    <div className="popular-courses">
      <h2>Our Popular Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.imgSrc} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;