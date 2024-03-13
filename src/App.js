import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//src
import Home from './pages/HomePage';
import HelpPage from './pages/HelpPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/HelpPage" element={<HelpPage/>} />
       
      </Routes>
    </Router>
  );
}

export default App;