import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  const stats = t('landing.hero.stats', { returnObjects: true }) || [];
  const visualCards = t('landing.hero.visualCards', { returnObjects: true }) || [];

  return (
    <section className="hero" id="hero">
      <div className="section-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true"></span>
            <span id="hero-kicker">{t('landing.hero.kicker')}</span>
          </div>
          <h1 className="hero-headline">{t('landing.hero.headline')}</h1>
          <p className="hero-subheadline">{t('landing.hero.subheadline')}</p>
        </div>

        <div className="stats-bar">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-visual-panel">
          <div className="hero-visual-inner">
            {visualCards.map((card, i) => (
              <article className="visual-flow-card" key={i}>
                <div className="vfc-label">
                  {String(i + 1).padStart(2, '0')} / {card.title}
                </div>
                <div className="vfc-body">{card.body}</div>
                <div className="vfc-dots">
                  <span className={`vfc-dot ${i === 0 ? 'active' : ''}`}></span>
                  <span className={`vfc-dot ${i === 1 ? 'active' : ''}`}></span>
                  <span className={`vfc-dot ${i === 2 ? 'active' : ''}`}></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
