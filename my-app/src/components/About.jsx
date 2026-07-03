import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
function About() {
  return (
    <div className="about-page">
      {/* 1. Banner Section */}
      <div className="about-banner">
        <h1>☕ About Brew Bliss Cafe</h1>
        <p>Where Every Cup Tells a Story</p>
      </div>
      {/* 2. Intro Section */}
      <div className="page-container" style={{ backgroundColor: 'transparent', height: 'auto' }}>
        <div className="about-section" style={{ textAlign: 'center', margin: '40px auto', maxWidth: '800px' }}>
          <h2>Welcome to Brew Bliss</h2>
          <p className="about-text" style={{ color: '#555', fontSize: '1.1rem', marginTop: '15px' }}>
            Welcome to Brew Bliss Cafe, where luxury meets comfort. Founded with a passion 
            for artisanal coffee and premium aesthetic experiences, we blend the finest handpicked 
            coffee beans with a cozy boutique atmosphere. Whether you are here to shop our premium 
            collection or relax with a perfect cup of latte, we ensure every moment is blissful.
          </p>
        </div>
      </div>
      {/* 3. Our Story Section */}
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700"
            alt="Coffee Shop"
          />
        </div>
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Brew Bliss Cafe is a place where coffee lovers come together to
            enjoy freshly brewed coffee, delicious desserts, and a warm,
            welcoming atmosphere. Every cup is made using premium coffee beans
            and carefully selected ingredients.
          </p>
          <p>
            We believe coffee is more than just a drink—it's an experience.
            Whether you're meeting friends, working on your laptop, or simply
            relaxing, Brew Bliss Cafe is the perfect place for you.
          </p>
          
 
          <Link to="/menu">
            <button className="about-btn">
              Explore Our Menu
            </button>
          </Link>
        </div>
      </div>

     
      <div className="features-section">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>☕ Premium Coffee</h3>
            <p>Freshly roasted coffee beans with rich aroma and authentic taste.</p>
          </div>

          <div className="feature-card">
            <h3>🥐 Fresh Bakery</h3>
            <p>Delicious pastries, cakes, sandwiches, and snacks prepared daily.</p>
          </div>

          <div className="feature-card">
            <h3>😊 Friendly Staff</h3>
            <p>Our experienced baristas are always ready to serve you with a smile.</p>
          </div>

          <div className="feature-card">
            <h3>🌿 Cozy Ambience</h3>
            <p>Comfortable seating, relaxing music, and a peaceful environment.</p>
          </div>

          <div className="feature-card">
            <h3>🚀 Fast Service</h3>
            <p>Quick preparation and excellent customer service every time.</p>
          </div>

          <div className="feature-card">
            <h3>❤️ Made With Love</h3>
            <p>Every coffee and meal is prepared with care to make your visit memorable.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;