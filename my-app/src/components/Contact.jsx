import React from "react";


function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you ☕</p>
      </div>

      <div className="contact-container">

        {/* Contact Details */}
        <div className="contact-card">
          <h2>📍 Contact Details</h2>

          <p>
            <strong>Address:</strong><br />
            Brew Bliss Cafe,<br />
            Model Town, New Delhi, India
          </p>

          <p>
            <strong>Phone:</strong><br />
            +91 98765 43210
          </p>

          <p>
            <strong>Email:</strong><br />
            brewbliss@gmail.com
          </p>
        </div>

        {/* Social Media */}
        <div className="contact-card">
          <h2>🌐 Follow Us</h2>

          <p>📘 Facebook</p>
          <p>📷 Instagram</p>
          <p>🐦 Twitter</p>
          <p>▶️ YouTube</p>

          <p className="social-text">
            Stay connected with Brew Bliss Cafe for exciting offers,
            new menu launches and coffee updates.
          </p>
        </div>

        {/* Newsletter */}
        <div className="contact-card">
          <h2>📩 Newsletter</h2>

          <input
            type="text"
            placeholder="Enter your name"
            className="contact-input"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="contact-input"
          />

          <textarea
            rows="5"
            placeholder="Write your message..."
            className="contact-input"
          ></textarea>

          <button className="contact-btn">
            Send Message
          </button>
        </div>

      </div>

      {/* Footer */}
  
<footer className="cafe-footer">
  <div className="footer-bottom">
    <p>&copy; 2026 BREW BLISS CAFE. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  );
}

export default Contact;