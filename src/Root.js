import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.js';
import About from './pages/About';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/author" element={<About />} />
    </Routes>
  </Router>
);

export default Root;
