import { useTranslation } from 'react-i18next';

const Scenarios = () => {
  const { t } = useTranslation();
  const items = t('models_page.scenarioItems', { returnObjects: true }) || [];
  const recommendLabel = t('models_page.scenarios.recommendLabel');

  return (
    <section id="scenarios">
      <div className="wrap">
        <div className="eyebrow">
          <span className="kicker">{t('models_page.scenarios.eyebrow')}</span>
          <span className="kicker-rule"></span>
        </div>
        <h2 className="section-h">{t('models_page.scenarios.title')}</h2>
        <p className="section-p">{t('models_page.scenarios.description')}</p>
        
        <div className="scenarios-grid">
          {items.map((s, i) => (
            <div className="scenario-card reveal" key={i}>
              <div className="scenario-icon">{s.icon}</div>
              <h3 className="scenario-title">{s.title}</h3>
              <p className="scenario-desc">{s.desc}</p>
              <div>
                <div className="rec-label">{recommendLabel}</div>
                <div className="rec-models">
                  {s.models.map((m, idx) => (
                    <span className="model-tag" key={idx}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scenarios;
