import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PopularCourses from '../components/PopularCourses';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <PopularCourses />
    </div>
  );
};

export default Home;
