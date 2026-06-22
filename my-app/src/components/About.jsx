import React from 'react';

function About() {
  return (
    <div className="page-container">
      <div className="about-section">
        <h2>About Brew Bliss Cafe</h2>
        <p className="about-text">
          Welcome to  Brew Bliss Cafe, where luxury meets comfort. Founded with a passion 
          for artisanal coffee and premium aesthetic experiences, we blend the finest handpicked 
          coffee beans with a cozy boutique atmosphere. Whether you are here to shop our premium 
          collection or relax with a perfect cup of latte, we ensure every moment is blissful.
        </p>
      </div>

      <div className="reviews-section">
        <h3>What Our Customers Say</h3>
        <div className="reviews-grid">
          <div className="review-card">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p className="review-text">"The hazelnut latte is absolute heaven! Love the boutique vibe."</p>
            <h4 className="customer-name">- Riya Sharma</h4>
          </div>
          <div className="review-card">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p className="review-text">"Beautiful aesthetic and perfect place to relax. Highly recommended!"</p>
            <h4 className="customer-name">- Aarav Mehta</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;