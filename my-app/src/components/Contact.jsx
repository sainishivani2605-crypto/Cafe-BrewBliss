import React, { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
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
          <p className="social-text">
            Stay connected with Brew Bliss Cafe for exciting offers, new menu launches and coffee updates.
          </p>
        </div>

        {/* Card 3: Contact Form */}
        <div className="contact-card">
          <h2>📩 Send us a Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="contact-input"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="contact-input"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="contact-input"
              required
            ></textarea>

            <button
              type="submit"
              className="contact-btn"
              style={{ width: "100%" }}
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;