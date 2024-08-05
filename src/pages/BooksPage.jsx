import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BooksPage.module.css';
import booksData from '../assets/books.json'; // Adjust the path as necessary

const BooksPage = () => {
  return (
    <div className={styles.homeContainer}>
      <h2>Books</h2>
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
  );
};

export default BooksPage;
