import { useTranslation } from 'react-i18next';

const SocialProof = () => {
  const { t } = useTranslation();
  const testimonials = t('landing.socialProof.testimonials', { returnObjects: true }) || [];
  const stats = t('landing.socialProof.stats', { returnObjects: true }) || [];

  return (
    <section className="social-proof-section" id="social-proof">
      <div className="section-inner">
        {/* Stats Band */}
        <div className="stats-band reveal">
          {stats.map((s, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="testimonials-grid reveal">
          {testimonials.map((item, idx) => (
            <div className="panel quote-card" key={idx}>
              <p className="quote-text">"{item.quote}"</p>
              <div className="quote-author">
                <span className="author-name">{item.name}</span>
                <span className="author-role">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
