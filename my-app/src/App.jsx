import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Yahan se Router hata diya
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import logoImg from './logo.jpeg'; 

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="BREW BLISS CAFE Logo" className="navbar-logo" />
          <span> BREW BLISS CAFE </span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;