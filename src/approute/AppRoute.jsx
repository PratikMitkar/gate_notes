import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';

const AppRoute = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/gate_notes/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoute;
