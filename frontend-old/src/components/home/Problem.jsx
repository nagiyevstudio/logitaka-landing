import { useTranslation } from 'react-i18next';

const Problem = () => {
  const { t } = useTranslation();
  const items = t('landing.problem.items', { returnObjects: true }) || [];

  return (
    <section id="problem">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">01</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <h2 className="section-title medium reveal">{t('landing.problem.title')}</h2>
        
        <div className="cards-grid wide">
          {items.map((item, i) => (
            <article className="panel reveal" key={i}>
              <div className="panel-index">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="panel-title">{item.title}</h3>
              <p className="panel-copy">{item.body}</p>
            </article>
          ))}
        </div>
        
        <p className="section-copy reveal">{t('landing.problem.closing')}</p>
      </div>
    </section>
  );
};

export default Problem;
