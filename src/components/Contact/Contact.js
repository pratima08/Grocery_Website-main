// ContactPage.js
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import "./Contact.css"; // Use this for custom styling
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [contactData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };
  // Form validation
  const validateForm = () => {
    if (!contactData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!contactData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!contactData.subject.trim()) {
      setError("Subject is required");
      return false;
    }
    if (!contactData.message.trim()) {
      setError("Message is required");
      return false;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:2024/api/users/contact",
        contactData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Important for handling cookies
        }
      );

      if (response.data.success) {
        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Show success message or redirect
      }
      navigate("/main");
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during contact"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>
          Whether you have a question, feedback, or need support, we're just a
          message away.
        </h1>
      </header>

      <section className="map-section">
        <iframe
          title="Location Map"
          src="https://maps.google.com/maps?q=london%20eye&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </section>

      <section className="faq-section">
        <div className="leftside">
          <h3>Frequently Asked Questions (FAQ)</h3>
          <div className="faq-item">
            <p>
              Venenatis duis tristique accumsan netus enim in posuere torquent
              ut ullamcorper integer aliquam a mi curae elementum. Maecenas
              iaculis viverra tellus ridiculus a sed vestibulum.
            </p>
          </div>
        </div>
        <div className="rightside">
          <section className="contact-details">
            <div className="showroom-info">
              <h3>Our Showroom</h3>
              <p>551 Water Color Green Ball St, New York, NY 2041, USA</p>
              <p>+09000 000 34 35</p>
              <p>+09000 000 34 36</p>
            </div>

            <div className="quick-help">
              <h3>Quick Help</h3>
              <button className="whatsapp-link">
                <a href="https://wa.me/000000000">
                  <FaWhatsapp /> Whatsapp Customer Services
                </a>
              </button>
              <p>You can ask anything you want to know about our products</p>
              <p>help@themecom.com</p>
            </div>
          </section>
        </div>
      </section>
      <div className="contactform">
        <div className="detailsFaq">
          <details>
            <summary>How long/days will delivery take?</summary>
            <p>It generally takes between 3-5 business days for delivery.</p>
          </details>
          <details>
            <summary>What exactly happens after ordering?</summary>
            <p>
              Your order is processed, and you’ll receive an email confirmation
              with details.
            </p>
          </details>
          <details>
            <summary>Is refund possible?</summary>
            <p>Yes, you can request a refund within 30 days of purchase.</p>
          </details>
          <details>
            <summary>Delivery charges for orders from the Online Shop?</summary>
            <p>
              Delivery charges vary depending on your location and will be
              calculated at checkout.
            </p>
          </details>
          <details>
            <summary>Delivery charges for orders from the Online Shop?</summary>
            <p>
              Delivery charges vary depending on your location and will be
              calculated at checkout.
            </p>
          </details>
          <section className="social-media">
            <h3>Social Media Accounts</h3>
            <div className="social-icons">
              <a href="https://facebook.com">
                <FaFacebook />
              </a>
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
              <a href="https://twitter.com">
                <FaTwitter />
              </a>
              <a href="https://pinterest.com">
                <FaPinterest />
              </a>
              <a href="https://youtube.com">
                <FaYoutube />
              </a>
            </div>
          </section>
        </div>
        <div className="contact">
          <section className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <h5>YOUR NAME</h5>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={contactData.name}
                onChange={handleChange}
              />
              <h5>YOUR EMAIL</h5>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={contactData.email}
                onChange={handleChange}
              />
              <h5>SUBJECT</h5>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={contactData.subject}
                onChange={handleChange}
              />
              <h5>YOUR MESSAGE(OPTIONAL)</h5>
              <textarea
                name="message"
                placeholder="Your Message (Optional)"
                required
                value={contactData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" disabled={loading}>
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
