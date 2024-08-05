import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [units, setUnits] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Load books data from local storage or initialize with default data
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  const handleAddOrUpdate = () => {
    const updatedBooks = [...books];

    if (editIndex !== null) {
      // Update book
      updatedBooks[editIndex] = { name: bookName, units: units.split(',').map(unit => unit.trim()) };
      setEditIndex(null);
    } else {
      // Add new book
      updatedBooks.push({ name: bookName, units: units.split(',').map(unit => unit.trim()) });
    }

    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks)); // Save to local storage

    // Reset form
    setBookName('');
    setUnits('');
  };

  const handleEdit = (index) => {
    setBookName(books[index].name);
    setUnits(books[index].units.join(', '));
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks)); // Save to local storage
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <div>
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Units (comma-separated)"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? 'Update Book' : 'Add Book'}
        </button>
      </div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.name} - {book.units.join(', ')}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
