import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PopularCourses from '../components/PopularCourses';
import About from '../Collection/About';

const Home = () => {
  return (
    <div>
      <Header />
      <PopularCourses />
      <About/>

    </div>
  );
};

export default Home;
