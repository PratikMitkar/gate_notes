import React from 'react';
import './PopularCourses.css';
import notes from '../assets/hand_reetan.jpg';
import video_lectures from '../assets/video_lectures.jpg';
import vidlec from '../assets/v_lectures.jpg';
import books from '../assets/books.jpg';
import { Link } from 'react-router-dom';

const courses = [
  { title: 'handreturn Notes', imgSrc: notes, procidto: '/gate_notes/books' },
  { title: 'Video Lectures', imgSrc: video_lectures, procidto: '/gate_notes/books' },
  { title: 'Live Lectures', imgSrc: vidlec, procidto: '/gate_notes/books' },
  { title: 'Books', imgSrc: books, procidto: '/gate_notes/books' },
];

const PopularCourses = () => {
  return (
    <div className="popular-courses">
      <h2> -: Services :-</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <Link to={course.procidto} key={index} className="course-card">
            <img src={course.imgSrc} alt={course.title} />
            <h3>{course.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
