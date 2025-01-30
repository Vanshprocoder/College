
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TimeTableUpload from './pages/TimeTableUpload.jsx';
import LoginForm from './pages/Loginform.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TimeTableUpload />} />
        <Route path="/login" element={<LoginForm />} />
       
      </Routes>
    </Router>
  );
};

export default App;