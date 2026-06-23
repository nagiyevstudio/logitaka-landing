import { useTranslation } from 'react-i18next';

const ModelTeaser = ({ hideCta = false }) => {
  const { t, i18n } = useTranslation();
  const bullets = t('landing.modelTeaser.bullets', { returnObjects: true }) || [];

  return (
    <section id="model-teaser">
      <div className="section-inner split-grid">
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.modelTeaser.title')}</h2>
          <p className="section-copy reveal">{t('landing.modelTeaser.subtitle')}</p>
          <ul className="bullet-list reveal">
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          {!hideCta && (
            <div className="reveal">
              <a href="/pro#models" className="button button-solid">
                {t('landing.modelTeaser.cta')}
              </a>
            </div>
          )}
        </div>
        <div className="model-teaser-visual reveal">
          <div className="teaser-visual-arrow">↓</div>
          <article className="teaser-card teaser-card-light">
            <div className="teaser-card-title">{t('landing.modelTeaser.card1.title')}</div>
            <div className="teaser-card-desc">{t('landing.modelTeaser.card1.desc')}</div>
            <div className="teaser-card-badge">{t('landing.modelTeaser.card1.badge')}</div>
          </article>
          <article className="teaser-card teaser-card-dark">
            <div className="teaser-card-title">{t('landing.modelTeaser.card2.title')}</div>
            <div className="teaser-card-desc">{t('landing.modelTeaser.card2.desc')}</div>
            <div className="teaser-card-badge">{t('landing.modelTeaser.card2.badge')}</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ModelTeaser;
