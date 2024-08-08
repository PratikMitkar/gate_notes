import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PdfReader from '../components/PdfViewer';
import styles from './BookDetail.module.css';
import booksData from '../assets/books.json';

const BookDetail = () => {
  const { bookName } = useParams();
  const book = booksData.books.find(book => book.name === bookName);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showUnits, setShowUnits] = useState(false);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className={styles.bookDetailContainer}>
      <div className={styles.unitListContainer}>
        <img src={`/gate_notes/books/${bookName}/cover.png`} alt={`${bookName} Cover`} className={styles.bookCover} />
        <h2 className={styles.bookTitle}>{bookName}</h2>
        <div className={styles.unitListToggle} onClick={() => setShowUnits(!showUnits)}>
          {showUnits ? 'Hide Units' : 'Show Units'}
        </div>
        {showUnits && (
          <div className={styles.unitList}>
            {book.units.map((unit, index) => (
              <div
                key={index}
                className={`${styles.unit} ${selectedUnit === unit ? styles.activeUnit : ''}`}
                onClick={() => setSelectedUnit(unit)}
              >
                <h3>{unit}</h3>
                <button onClick={() => setSelectedUnit(unit)} className={styles.openPdfBtn}>
                  Open PDF
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.pdfReaderContainer}>
        {selectedUnit ? (
          <PdfReader file={`/gate_notes/books/${bookName}/${selectedUnit}.pdf`} />
        ) : (
          <div className={styles.placeholder}>Select a unit to view the PDF</div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
