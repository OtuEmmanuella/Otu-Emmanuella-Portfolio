import React from 'react';
import { MdEmail, MdLocationOn, MdSend } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Style/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Reach Out</h3>
            <p>
              <MdEmail className="contact-icon" />
              <a href="mailto:pauledet339@gmail.com">pauledet339@gmail.com</a>
            </p>
            <p>
              <MdLocationOn className="contact-icon" />
              Your Location, City, Country
            </p>
            <div className="social-links">
              <a href="https://github.com/yourusername" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://twitter.com/yourusername" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
          <form method="POST" action="https://getform.io/f/bwngyjla" className="contact-form">
            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="4" required placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message <MdSend className="submit-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
