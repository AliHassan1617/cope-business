import PublicLayout from './PublicLayout';
import './About.css';

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Digital marketing expert with 10+ years of industry experience.',
      icon: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator building scalable solutions for marketing teams.',
      icon: '👨‍💻',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Head of Customer Success',
      bio: 'Dedicated to ensuring every client achieves their marketing goals.',
      icon: '👩‍🔬',
    },
    {
      name: 'David Kim',
      role: 'Director of Services',
      bio: 'Oversees quality delivery across all service offerings.',
      icon: '👨‍🏫',
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that impact your business.',
    },
    {
      icon: '🤝',
      title: 'Customer-First',
      description: 'Your success is our success. We prioritize your needs above all.',
    },
    {
      icon: '✨',
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every service is carefully executed.',
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We stay ahead of trends and constantly improve our services.',
    },
    {
      icon: '💪',
      title: 'Transparency',
      description: 'Open communication and honest reporting with all our clients.',
    },
    {
      icon: '🌟',
      title: 'Integrity',
      description: 'We operate with the highest ethical standards in everything we do.',
    },
  ];

  return (
    <PublicLayout>
      {/* Page Header */}
      <section className="about-header">
        <div className="section-container">
          <h1 className="page-title">About CopeBusiness</h1>
          <p className="page-subtitle">
            Empowering businesses with affordable, high-quality digital marketing services
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="story-section">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="story-title">Our Story</h2>
              <p className="story-text">
                CopeBusiness was founded with a simple mission: to democratize access to professional digital marketing services. We realized that small and medium-sized businesses were struggling to compete with larger corporations due to high agency costs.
              </p>
              <p className="story-text">
                So we created a platform that provides access to the same quality of services at a fraction of the cost. Today, we serve over 500 clients worldwide, completing 10,000+ orders and delivering measurable results.
              </p>
              <p className="story-text">
                We're committed to helping businesses of all sizes achieve their digital marketing goals and grow their online presence.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-image-placeholder">
                🌍
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To provide affordable, high-quality digital marketing services that help businesses grow their online presence and achieve their goals.
              </p>
            </div>
            <div className="mission-card">
              <h3 className="mission-title">Our Vision</h3>
              <p className="mission-text">
                To become the world's leading digital marketing service marketplace, trusted by businesses worldwide for quality, transparency, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="values-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="stats-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">By The Numbers</h2>
            <p className="section-subtitle">
              Our impact and growth metrics
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">10,000+</h3>
              <p className="stat-label">Orders Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Satisfaction Rate</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Years in Business</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Services Offered</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">{member.icon}</div>
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="trust-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Trust CopeBusiness?</h2>
            <p className="section-subtitle">
              Proven track record and industry expertise
            </p>
          </div>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4 className="trust-title">Industry Leaders</h4>
              <p className="trust-text">
                Our team has decades of combined experience in digital marketing and online services.
              </p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4 className="trust-title">Proven Results</h4>
              <p className="trust-text">
                Thousands of successful projects with documented case studies and testimonials.
              </p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4 className="trust-title">Transparency</h4>
              <p className="trust-text">
                Clear pricing, honest reporting, and no hidden fees. What you see is what you get.
              </p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4 className="trust-title">Security & Privacy</h4>
              <p className="trust-text">
                Industry-standard security measures to protect your data and business.
              </p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4 className="trust-title">Money-Back Guarantee</h4>
              <p className="trust-text">
                30-60 day guarantee. If you're not satisfied, we'll refund your money.
              </p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4 className="trust-title">24/7 Support</h4>
              <p className="trust-text">
                Our support team is always available to help with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="section-container">
          <h2 className="cta-title">Join our community of successful businesses</h2>
          <p className="cta-text">
            Experience the CopeBusiness difference and watch your business grow.
          </p>
          <a href="/signup" className="cta-primary-large">
            Get Started Today
          </a>
        </div>
      </section>
    </PublicLayout>
  );
}
