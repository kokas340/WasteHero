import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//src
import Home from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
       
      </Routes>
    </Router>
  );
}

export default App;