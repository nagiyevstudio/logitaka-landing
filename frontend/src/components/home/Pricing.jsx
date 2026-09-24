import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();
  const cards = t('landing.pricing.cards', { returnObjects: true }) || [];
  const popularBadge = t('landing.pricing.popularBadge');
  const disclaimer = t('landing.pricing.disclaimer');
  const enterprise = t('landing.pricing.enterprise', { returnObjects: true }) || {};

  return (
    <section id="pricing">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">09 // PRICING</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.pricing.title')}</h2>
          {disclaimer && (
            <div className="pricing-disclaimer-pill reveal" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              color: '#f59e0b',
              fontSize: '0.8rem',
              fontWeight: 500,
              marginTop: '12px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }}></span>
              {disclaimer}
            </div>
          )}
        </div>
        
        <div className="pricing-grid" style={{ marginTop: '28px' }}>
          {cards.map((card, i) => {
            const isFeatured = i === 1; // PRO is featured
            const btnClass = isFeatured ? 'button button-solid' : 'button button-ghost';
            
            return (
              <article className={`pricing-card is-${card.label.toLowerCase()} ${isFeatured ? 'is-featured' : ''} reveal`} key={i}>
                {isFeatured && <span className="pricing-badge">{popularBadge}</span>}
                <div className="panel-index">{card.label}</div>
                <h3 className="pricing-name">{card.name}</h3>
                
                <div className="pricing-price-wrapper">
                  <div className="pricing-price-block">
                    <p className="pricing-price">{card.price}</p>
                    {card.period && <span className="pricing-period">{card.period}</span>}
                  </div>
                  {card.trial && (
                    <div className="pricing-trial-badge" style={{ color: 'var(--color-primary, #10b981)', fontSize: '0.82rem', marginTop: '0.25rem', fontWeight: 600 }}>
                      {card.trial}
                    </div>
                  )}
                </div>
                
                <p className="pricing-copy">{card.body}</p>
                
                {card.features && (
                  <ul className="pricing-features-list">
                    {card.features.map((feature, idx) => {
                      const isFirstHighlight = i > 0 && idx === 0;
                      return (
                        <li key={idx} className={`pricing-feature-item ${isFirstHighlight ? 'is-highlighted-feature' : ''}`}>
                          <svg className="pricing-feature-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="pricing-feature-text">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
                
                <div className="pricing-card-footer">
                  <a className={btnClass} href={card.href ? `${card.href}?plan=${card.label.toLowerCase()}` : '#final-cta'}>
                    {card.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Enterprise & Corporate Customization Callout */}
        {enterprise && enterprise.title && (
          <div className="pricing-enterprise-banner reveal" style={{ marginTop: '40px' }}>
            <div className="enterprise-banner-glow"></div>
            <div className="pricing-enterprise-content">
              <div className="enterprise-badge">
                <svg className="enterprise-badge-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="2" width="20" height="8" rx="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
                ENTERPRISE & CLOUD
              </div>
              <h3 className="pricing-enterprise-title">{enterprise.title}</h3>
              <p className="pricing-enterprise-desc">{enterprise.description}</p>
              <div style={{ marginTop: '16px' }}>
                <a href="mailto:enterprise@logitaka.com" className="button button-ghost" style={{ fontSize: '0.8rem', height: '42px' }}>
                  {enterprise.cta}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
