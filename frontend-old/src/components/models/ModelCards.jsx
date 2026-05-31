import { useTranslation } from 'react-i18next';

const ModelCards = () => {
  const { t } = useTranslation();
  const models = t('models_page.models', { returnObjects: true }) || [];
  const labels = t('models_page.labels', { returnObjects: true }) || {};

  return (
    <section id="models">
      <div className="wrap">
        <div className="eyebrow">
          <span className="kicker">{t('models_page.intro.eyebrow')}</span>
          <span className="kicker-rule"></span>
        </div>
        <h2 className="section-h">{t('models_page.intro.title')}</h2>
        <p className="section-p">{t('models_page.intro.description')}</p>
        
        <div className="models-grid">
          {models.map((m, i) => (
            <div className="model-card reveal" key={m.id} data-tier={m.tier}>
              <div className="card-top">
                <div className="model-meta">
                  <span className="model-provider">{m.provider}</span>
                  <h3 className="model-name">{m.name}</h3>
                </div>
                <span className="tier-tag" data-tier={m.tier}>{m.tierLabel}</span>
              </div>
              <p className="model-about">{m.about}</p>
              <div>
                <div className="chips-label">{labels.strengths}</div>
                <div className="chips">
                  {m.strengths.map((s, idx) => (
                    <span className="chip" key={idx}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="logitaka-note">
                <div className="logitaka-note-label">{labels.insideLogitaka}</div>
                {m.logitaka}
              </div>
              <div className="excessive-note">
                <div className="excessive-label">{labels.excessiveWhen}</div>
                {m.excessive}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelCards;
