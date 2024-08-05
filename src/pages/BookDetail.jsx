import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './BookDetail.module.css';
import booksData from '../assets/books.json'; // Adjust the path as necessary

const BookDetail = () => {
  const { bookName } = useParams();
  const book = booksData.books.find(book => book.name === bookName);

  if (!book) {
    return <div>Book not found</div>;
  }

  const bookCover = `/gate_notes/books/${bookName}/cover.png`;

  return (
    <div className={styles.bookDetailContainer}>
      <img src={bookCover} alt={`${bookName} Cover`} className={styles.bookCover} />
      <h2>{bookName}</h2>
      <div className={styles.unitList}>
        {book.units.map((unit, index) => (
          <div key={index} className={styles.unit}>
            <h3>{unit}</h3>
            <a href={`/gate_notes/books/${bookName}/${unit}.pdf`} target="_blank" rel="noopener noreferrer">
              Open PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetail;
