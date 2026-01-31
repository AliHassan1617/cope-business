import { useState } from 'react';
import PublicLayout from './PublicLayout';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'support@copebusiness.com',
      link: 'mailto:support@copebusiness.com',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (234) 567-890',
      link: 'tel:+12345678900',
    },
    {
      icon: '📍',
      title: 'Address',
      content: '123 Business Ave, New York, NY 10001',
      link: '#',
    },
    {
      icon: '⏰',
      title: 'Hours',
      content: '24/7 Support Available',
      link: '#',
    },
  ];

  return (
    <PublicLayout>
      {/* Page Header */}
      <section className="contact-header">
        <div className="section-container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="section-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="contact-info-card">
                <div className="contact-icon">{info.icon}</div>
                <h4 className="contact-title">{info.title}</h4>
                <p className="contact-content">{info.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="section-container">
          <div className="contact-form-grid">
            <div className="form-wrapper">
              <h2 className="form-title">Send us a Message</h2>
              {submitted && (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows="6"
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="form-benefits">
              <h3 className="benefits-title">Why reach out to us?</h3>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4 className="benefit-name">Quick Response</h4>
                    <p className="benefit-description">
                      We respond to all inquiries within 24 hours.
                    </p>
                  </div>
                </li>
                <li className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4 className="benefit-name">Expert Help</h4>
                    <p className="benefit-description">
                      Our team has expertise in digital marketing.
                    </p>
                  </div>
                </li>
                <li className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4 className="benefit-name">Personalized Support</h4>
                    <p className="benefit-description">
                      We provide tailored solutions for your needs.
                    </p>
                  </div>
                </li>
                <li className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4 className="benefit-name">Always Available</h4>
                    <p className="benefit-description">
                      24/7 support for your convenience.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find quick answers to common questions
            </p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">What's the best way to contact you?</h4>
              <p className="faq-answer">
                You can reach us via email, phone, or the contact form above. We typically respond within 24 hours.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Do you offer phone support?</h4>
              <p className="faq-answer">
                Yes! Call us at +1 (234) 567-890. Our support team is available 24/7 to assist you.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">How can I report an issue?</h4>
              <p className="faq-answer">
                Please contact our support team with details of your issue. We'll investigate and get back to you promptly.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Do you offer a free consultation?</h4>
              <p className="faq-answer">
                Absolutely! Contact us to schedule a free 30-minute consultation with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="section-container">
          <h2 className="cta-title">Can't find what you're looking for?</h2>
          <p className="cta-text">
            Check out our support center or start a live chat with our team.
          </p>
          <div className="cta-buttons">
            <a href="/login" className="cta-secondary">
              Visit Support Center
            </a>
            <a href="#chat" className="cta-primary-large">
              Start Live Chat
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
