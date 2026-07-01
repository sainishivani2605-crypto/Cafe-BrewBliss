import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page">
      {/* Top Beautiful Banner */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you ☕</p>
      </div>

      {/* Main Contact Grid Container */}
      <div className="contact-container">
        
        {/* Card 1: Contact Details */}
        <div className="contact-card">
          <h2>📍 Contact Details</h2>
          <p><strong>Address:</strong><br />Brew Bliss Cafe,<br />Model Town, New Delhi, India</p>
          <p><strong>Phone:</strong><br />+91 98765 43210</p>
          <p><strong>Email:</strong><br />brewbliss@gmail.com</p>
        </div>

        {/* Card 2: Social Media Info */}
        <div className="contact-card">
          <h2>🌐 Follow Us</h2>
          <p>Facebook: Brew bliss</p>
          <p>Instagram: BREW BLISS CAFE</p>
          <p>Twitter: brew bliss cafe</p>
          <p>YouTube: Brew bliss cafe</p>
          <p className="social-text">Stay connected with Brew Bliss Cafe for exciting offers, new menu launches and coffee updates.</p>
        </div>

        {/* Card 3: Proper Message Form */}
        <div className="contact-card">
          <h2>📩 Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" className="contact-input" required />
            <input type="email" placeholder="Enter your email" className="contact-input" required />
            <textarea placeholder="Write your message here..." rows="5" className="contact-input" required></textarea>
            <button type="submit" className="contact-btn" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;