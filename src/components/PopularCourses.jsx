import React from 'react';
import './PopularCourses.css';
import notes from '../assets/hand_reetan.jpg';
import video_lectures from '../assets/video_lectures.jpg';
import vidlec from '../assets/v_lectures.jpg';
import books from '../assets/books.jpg';
import { Link } from 'react-router-dom';

const courses = [
  { title: 'notes', duration: '3 weeks', imgSrc: notes, procidto: '/gate_notes/books' },
  { title: 'video lectures', duration: '4 weeks', imgSrc: video_lectures, procidto: '/gate_notes/books' },
  { title: 'live lectures', duration: '4 weeks', imgSrc: vidlec, procidto: '/gate_notes/books' },
  { title: 'books', duration: '4 weeks', imgSrc: books, procidto: '/gate_notes/books' },
];

const PopularCourses = () => {
  return (
    <div className="popular-courses">
      <h2>Our Popular Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <Link to={course.procidto} key={index} className="course-card">
            <img src={course.imgSrc} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.duration}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
