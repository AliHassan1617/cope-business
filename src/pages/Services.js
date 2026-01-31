import { Link } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import './Services.css';

export default function Services() {
  const serviceCategories = [
    {
      id: 1,
      category: 'SEO Services',
      services: [
        {
          icon: '🔍',
          title: 'SEO Audit & Analysis',
          description: 'Comprehensive analysis of your website to identify optimization opportunities.',
          price: '$99',
        },
        {
          icon: '📈',
          title: 'On-Page SEO',
          description: 'Optimize your pages for better search visibility and ranking.',
          price: '$149',
        },
        {
          icon: '🏗️',
          title: 'Technical SEO',
          description: 'Fix technical issues affecting your site\'s search performance.',
          price: '$199',
        },
        {
          icon: '📍',
          title: 'Local SEO',
          description: 'Boost your visibility in local search results.',
          price: '$129',
        },
      ],
    },
    {
      id: 2,
      category: 'Link Building',
      services: [
        {
          icon: '🔗',
          title: 'Tier 1 Backlinks',
          description: 'Premium quality backlinks from high-authority domains.',
          price: '$299',
        },
        {
          icon: '🌐',
          title: 'Web 2.0 Backlinks',
          description: 'Diverse backlinks from Web 2.0 properties.',
          price: '$149',
        },
        {
          icon: '🏢',
          title: 'Directory Submissions',
          description: 'High-quality directory listings for your business.',
          price: '$99',
        },
        {
          icon: '🔄',
          title: 'Link Pyramid Building',
          description: 'Advanced link building with tiered structure.',
          price: '$399',
        },
      ],
    },
    {
      id: 3,
      category: 'Content Services',
      services: [
        {
          icon: '✍️',
          title: 'Blog Posts (500 words)',
          description: 'SEO-optimized blog posts tailored to your niche.',
          price: '$79',
        },
        {
          icon: '📄',
          title: 'Long-form Content (2000+ words)',
          description: 'Comprehensive, in-depth articles for authority building.',
          price: '$199',
        },
        {
          icon: '📋',
          title: 'Article Writing',
          description: 'Professional articles for publishing on top platforms.',
          price: '$129',
        },
        {
          icon: '📝',
          title: 'Press Release Writing',
          description: 'Professionally crafted press releases for news distribution.',
          price: '$149',
        },
      ],
    },
    {
      id: 4,
      category: 'Social Media',
      services: [
        {
          icon: '📱',
          title: 'Social Media Management',
          description: 'Complete social media management and posting.',
          price: '$399/month',
        },
        {
          icon: '📸',
          title: 'Content Creation',
          description: 'Custom designed graphics and visuals for social platforms.',
          price: '$79',
        },
        {
          icon: '👥',
          title: 'Influencer Outreach',
          description: 'Connect with influencers in your industry.',
          price: '$249',
        },
        {
          icon: '📊',
          title: 'Social Media Analytics',
          description: 'Detailed reports and insights on your social performance.',
          price: '$99',
        },
      ],
    },
  ];

  return (
    <PublicLayout>
      {/* Page Header */}
      <section className="services-header">
        <div className="section-container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Choose from our comprehensive range of digital marketing services
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="services-section">
        <div className="section-container">
          {serviceCategories.map((category) => (
            <div key={category.id} className="service-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="services-list">
                {category.services.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-item-icon">{service.icon}</div>
                    <div className="service-item-content">
                      <h3 className="service-item-title">{service.title}</h3>
                      <p className="service-item-description">{service.description}</p>
                    </div>
                    <div className="service-item-price">{service.price}</div>
                    <Link to="/signup" className="service-item-btn">
                      Order Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Services */}
      <section className="why-services">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Services?</h2>
            <p className="section-subtitle">
              Industry-leading quality and customer satisfaction
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h4 className="benefit-title">Proven Results</h4>
              <p className="benefit-text">
                Our services have helped thousands of businesses achieve their goals.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h4 className="benefit-title">Competitive Pricing</h4>
              <p className="benefit-text">
                Best value for money without compromising on quality.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h4 className="benefit-title">Fast Delivery</h4>
              <p className="benefit-text">
                Quick turnaround times to accelerate your results.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h4 className="benefit-title">Expert Team</h4>
              <p className="benefit-text">
                Experienced professionals with industry expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="section-container">
          <h2 className="cta-title">Ready to boost your online presence?</h2>
          <p className="cta-text">
            Start with our services today and see the results.
          </p>
          <Link to="/signup" className="cta-primary-large">
            Get Started Now
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
