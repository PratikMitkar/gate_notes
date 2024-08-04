import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="What do you want to learn..." />
      <button className="explore-btn">Explore Courses</button>
    </div>
  );
};

export default SearchBar;
