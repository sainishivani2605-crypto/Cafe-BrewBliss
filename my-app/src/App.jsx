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
    <div className="app-container">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="logo" className="navbar-logos" />
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-buttons">
          <button
            onClick={() => navigate("/register")}
            className="cart-btn"
            style={{ marginRight: "10px" }}
          >
            Register
          </button>

          <button
            onClick={() => navigate("/admin")}
            className="cart-btn"
          >
            Login
          </button>
        </div>
      </nav>

      {/* --- PAGES CONTENT --- */}
      <div className="page-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-info">
          <p>📍 Model Town, New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ brewbliss@gmail.com</p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Brew Bliss Cafe | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;