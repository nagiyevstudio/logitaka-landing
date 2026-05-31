import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const cards = t('landing.pricing.cards', { returnObjects: true }) || [];
  const betaNote = t('landing.pricing.betaNote');
  const popularBadge = t('landing.pricing.popularBadge');

  return (
    <section id="pricing">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">05</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <h2 className="section-title medium reveal">{t('landing.pricing.title')}</h2>
        
        <div className="pricing-grid">
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
                </div>
                
                <p className="pricing-copy">{card.body}</p>
                
                {card.features && (
                  <ul className="pricing-features-list">
                    {card.features.map((feature, idx) => {
                      const isFirstHighlight = i > 0 && idx === 0;
                      return (
                        <li key={idx} className={`pricing-feature-item ${isFirstHighlight ? 'is-highlighted-feature' : ''}`}>
                          {isFirstHighlight ? (
                            <svg className="pricing-feature-icon highlighted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="17 6 9 17 4 12"></polyline>
                              <polyline points="22 6 14 17"></polyline>
                            </svg>
                          ) : (
                            <svg className="pricing-feature-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                          <span className="pricing-feature-text">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
                
                <div className="pricing-card-footer">
                  <a className={btnClass} href={card.href ? `${card.href}${card.href.includes('?') ? '&' : '?'}plan=${card.label.toLowerCase()}` : '#final-cta'}>
                    {card.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bridge to PRO Page */}
        {t('landing.pricing.proBridge') && t('landing.pricing.proBridge') !== 'landing.pricing.proBridge' && (
          <div className="pricing-pro-bridge reveal">
            <a href={i18n.language === 'az' ? '/pro' : `/${i18n.language}/pro`} className="pro-bridge-link">
              <span>{t('landing.pricing.proBridge')}</span>
              <svg className="pro-bridge-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        )}

        {/* Enterprise & Corporate Customization Callout */}
        <div className="pricing-enterprise-banner reveal">
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
            <h3 className="pricing-enterprise-title">{t('landing.pricing.enterprise.title')}</h3>
            <p className="pricing-enterprise-desc">{t('landing.pricing.enterprise.description')}</p>
          </div>
          <div className="pricing-enterprise-action">
            <a className="button button-solid" href="mailto:admin@logitaka.com">
              {t('landing.pricing.enterprise.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

