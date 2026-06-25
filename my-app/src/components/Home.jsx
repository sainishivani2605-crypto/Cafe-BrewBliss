
import "../App.css";
import React from 'react';
import backgr from "../assets/Backgroundimg.jpg";
function Home() {
  return (
    <div className="home-container">
    <main className="main-content" style={{ backgroundImage: `url(${backgr})` }}>
      <div className="signboard" >
        <h1 className="title">BREW BLISS CAFE</h1>
        <div className="divider" />
        <p className="subtitle">Premium Boutique & Cafe</p>
      </div>
    
    </main>
  
    <footer className="cafe-footer">
        <div className="footer-info">
          <p>📍 <b>Location:</b> Katra,J&k, Reasi, Near Central Park</p>
          <p>📞 <b>Phone:</b> +91 9697711500</p>
          <p>✉️ <b>Email:</b> support@brewblisscafe.com</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 BREW BLISS CAFE. All Rights Reserved.</p>
        </div>
      </footer>
 </div>
  );
}

export default Home;