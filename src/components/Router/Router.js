// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from '../LoginRegister/LoginRegister';

function Routerpage() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginRegister" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default Routerpage;
