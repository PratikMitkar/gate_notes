import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import BooksPage from '../pages/BooksPage';
import BookDetail from '../pages/BookDetail';

const AppRoute = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/gate_notes/" element={<Home />} />
          <Route path="/gate_notes/books" element={<BooksPage />} />
          <Route path="/gate_notes/book/:bookName" element={<BookDetail />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoute;
