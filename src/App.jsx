// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TimeTableUpload from './pages/TimeTableUpload.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TimeTableUpload />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;