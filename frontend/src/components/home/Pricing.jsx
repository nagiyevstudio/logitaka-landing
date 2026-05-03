import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();
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
            const isFeatured = i === 1;
            const isCustom = i === cards.length - 1;
            const btnClass = i === 1 ? 'button button-solid' : 'button button-ghost';
            
            return (
              <article className={`pricing-card ${isFeatured ? 'is-featured' : ''} reveal`} key={i}>
                <span className="pricing-badge">{popularBadge}</span>
                <div className="panel-index">{card.label}</div>
                <h3 className="pricing-name">{card.name}</h3>
                <p className="pricing-price">{card.price}</p>
                <p className="pricing-copy">{card.body}</p>
                <div className="pricing-card-footer">
                  {!isCustom && <p className="pricing-beta-note">{betaNote}</p>}
                  <a className={btnClass} href={card.href || '#final-cta'}>
                    {card.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
