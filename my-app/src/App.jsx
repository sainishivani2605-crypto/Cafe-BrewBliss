import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import logoImg from './logo.jpeg';

function App() {
  const navigate = useNavigate();
  return (
    <div>

      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="logo" className="navbar-logo" />
          <span>BREW BLISS CAFE</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
       <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <button onClick={() => navigate("/register")} className='buttn'>Register</button>
        <button onClick={() => navigate("/admin")} className='buttn'>
        Login
        </button>
        </ul>
      </nav>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

    </div>
  );
}

export default App;

