import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import Dashboard from './component/Dashboard';
import MainLayout from './component/MainLayout';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [LogData, setLogData] = useState({}); 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration regData={setLogData} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mainlayout" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>

      <h2>{JSON.stringify(LogData)}</h2>
    </>
  );
}

export default App;

