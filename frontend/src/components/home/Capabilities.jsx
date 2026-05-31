import { useTranslation } from 'react-i18next';

const Capabilities = () => {
  const { t } = useTranslation();
  const items = t('landing.capabilities.items', { returnObjects: true }) || [];

  return (
    <section id="capabilities">
      <div className="section-inner">
        <h2 className="section-title medium reveal">{t('landing.capabilities.title')}</h2>
        
        <div className="cards-grid wide">
          {items.map((item, i) => (
            <article className="panel reveal" key={i}>
              <div className="panel-index">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="panel-title">{item.title}</h3>
              <p className="panel-copy">{item.body}</p>
            </article>
          ))}
        </div>
        
        <p className="section-copy reveal">{t('landing.capabilities.closing')}</p>
      </div>
    </section>
  );
};

export default Capabilities;
