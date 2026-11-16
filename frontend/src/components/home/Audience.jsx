import { useTranslation } from 'react-i18next';

const Audience = () => {
  const { t } = useTranslation();
  const items = t('landing.audience.items', { returnObjects: true }) || [];

  return (
    <section id="audience">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">{t('landing.kickers.audience')}</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <h2 className="section-title medium reveal">{t('landing.audience.title')}</h2>
        
        <div className="cards-grid wide" style={{ marginTop: '24px' }}>
          {items.map((item, i) => (
            <article className="panel reveal" key={i}>
              <div className="panel-index">0{i + 1}</div>
              <h3 className="panel-title">{item.title}</h3>
              <p className="panel-copy">{item.body}</p>
            </article>
          ))}
        </div>
        
        <p className="section-copy reveal" style={{ maxWidth: '72ch', fontWeight: 500 }}>
          {t('landing.audience.closing')}
        </p>
      </div>
    </section>
  );
};

export default Audience;
