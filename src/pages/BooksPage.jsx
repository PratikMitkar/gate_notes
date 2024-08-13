import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BooksPage.module.css';
import booksData from '../assets/books.json'; 
import bg from '../assets/bg_img.png'
import Header from '../components/headTital';

const BooksPage = () => {
  return (
    <div>
            <Header
              backgroundImage={bg} 
              title= 'books' 
              />
      <div className={styles.homeContainer}>

      <div className={styles.bookList}>
        {booksData.books.map((book, index) => (
          <Link to={`/gate_notes/book/${book.name}`} key={index} className={styles.book}>
            <img 
              src={`/gate_notes/books/${book.name}/cover.png`} 
              alt={`${book.name} cover`} 
              className={styles.bookCover} 
            />
            <span className={styles.bookName}>{book.name}</span>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BooksPage;
