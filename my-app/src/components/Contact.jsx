import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  // 1. handleSubmit function define kiya
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page">
      <div className="page-container">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p>We would love to hear from you! Drop us a message below.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            {/* Fix kiya hua textarea */}
            <textarea placeholder="Your Message or Feedback" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-banner">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you ☕</p>
        </div>

        <div className="contact-container">
          <div className="contact-card">
            <h2>📍 Contact Details</h2>
            <p><strong>Address:</strong><br />Brew Bliss Cafe,<br />Model Town, New Delhi, India</p>
            <p><strong>Phone:</strong><br />+91 98765 43210</p>
            <p><strong>Email:</strong><br />brewbliss@gmail.com</p>
          </div>

          <div className="contact-card">
            <h2>🌐 Follow Us</h2>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>YouTube</p>
            <p className="social-text">Stay connected with Brew Bliss Cafe for exciting offers, new menu launches and coffee updates.</p>
          </div>

          <div className="contact-card">
            <h2>📩 Newsletter</h2>
            <input type="text" placeholder="Enter your name" className="contact-input" />
            <input type="email" placeholder="Enter your email" className="contact-input" />
            {/* Fix kiya hua doosra textarea */}
            <textarea placeholder="Write your message..." rows="5" className="contact-input"></textarea>
            <button className="contact-btn">Send Message</button>
          </div>
        </div>
      </div>

      {/* Footer Section - © fix kiya */}
      <footer className="cafe-footer">
        <div className="footer-bottom">
          <p>© 2026 BREW BLISS CAFE. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;