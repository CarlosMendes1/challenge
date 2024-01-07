import React from 'react';
import './App.css';
import LoginSignup from './components/Login/LoginSignup';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<LoginSignup />} />
          <Route path="/dashboard"  element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
