import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-background">
        <div className="blur-circle blur-1"></div>
        <div className="blur-circle blur-2"></div>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <span className="contact-badge">Custom Invitation Design</span>

          <h1>
            Need a <span className="highlight-red">Custom Design?</span>
          </h1>

          <p className="contact-description">
            Looking for a personalized invitation for your special occasion?
            Our team can create a unique design tailored just for you.
          </p>

          <div className="contact-buttons">
            <a
              href="ravikumarstm333@email.com"
              className="contact-button primary"
            >
              Email Us
            </a>

            <a
              href="tel:+917061042974"
              className="contact-button secondary"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/917061042974"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button whatsapp"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="contact-info">
            <p>+91 7061042974</p>
            <p>ravikumarstm333@@email.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;