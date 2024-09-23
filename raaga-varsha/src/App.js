import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;