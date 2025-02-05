
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TimeTableUpload from './pages/TimeTableUpload.jsx';
import LoginForm from './pages/Loginform.jsx';
import ForgotPass from './pages/ForgotPass.jsx';
import Otp from './pages/Otp.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TimeTableUpload />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/forgotpass/otp" element={<Otp />} />
       
      </Routes>
    </Router>
  );
};

export default App;
