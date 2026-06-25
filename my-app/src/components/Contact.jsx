import React from 'react';
import { Link } from "react-router-dom";
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="page-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Drop us a message below.</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message or Feedback" rows="5" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <p>📍 Katra, Jammu & Kashmir,182320</p>
          <p>📞 +91 96977 11500</p>
          <p>✉️ support@brewbliss.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;