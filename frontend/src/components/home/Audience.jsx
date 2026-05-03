import { useTranslation } from 'react-i18next';

const Audience = () => {
  const { t } = useTranslation();
  const items = t('landing.audience.items', { returnObjects: true }) || [];

  return (
    <section id="audience">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">04</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <h2 className="section-title medium reveal">{t('landing.audience.title')}</h2>
        
        <div className="cards-grid wide">
          {items.map((item, i) => (
            <article className="panel reveal" key={i}>
              <div className="panel-index">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="panel-title">{item.title}</h3>
              <p className="panel-copy">{item.body}</p>
            </article>
          ))}
        </div>
        
        <p className="section-copy reveal">{t('landing.audience.closing')}</p>
      </div>
    </section>
  );
};

export default Audience;
