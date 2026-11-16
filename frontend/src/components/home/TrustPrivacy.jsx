import { useTranslation } from 'react-i18next';

const TrustPrivacy = () => {
  const { t } = useTranslation();
  const pillars = t('landing.privacy.pillars', { returnObjects: true }) || [];

  return (
    <section id="trust">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">{t('landing.kickers.privacy')}</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.privacy.title')}</h2>
          <p className="section-copy reveal">{t('landing.privacy.subtitle')}</p>
        </div>

        <div className="cards-grid reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', marginTop: '28px' }}>
          {pillars.map((item, idx) => (
            <article className="panel" key={idx} style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: 'var(--accent)' 
                }}></span>
                <h3 className="panel-title" style={{ fontSize: '1.15rem', margin: 0 }}>
                  {item.title}
                </h3>
              </div>
              <p className="panel-copy" style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPrivacy;
