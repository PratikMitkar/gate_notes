import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import BooksPage from '../pages/BooksPage';
import BookDetail from '../pages/BookDetail';
import PdfViewer from '../components/PdfViewer';
import TeamPage from '../pages/TeamPage';

const AppRoute = () => {
  return (
    <Router basename="/gate_notes">
      <Layout>
        <Routes>
          <Route path="/gate_notes/" element={<Home />} />
          <Route path="/gate_notes/books" element={<BooksPage />} />
          <Route path="/gate_notes/book/:bookName" element={<BookDetail />} />
          <Route path="/gate_notes/book/:bookName/:unitName" element={<PdfViewer />} />
          <Route path="/gate_notes/team" element={<TeamPage />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoute;
