import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const stats = t('landing.hero.stats', { returnObjects: true }) || [];

  return (
    <section className="hero" id="hero">
      <div className="section-inner split-grid">
        {/* Left Column: Headline and Actions */}
        <div className="hero-content">
          <span className="hero-kicker" id="hero-kicker">{t('landing.hero.kicker')}</span>
          <h1 className="hero-headline">{t('landing.hero.headline')}</h1>
          <p className="hero-subheadline">{t('landing.hero.subheadline')}</p>

          <div className="hero-actions">
            <a href="https://app.logitaka.com/app/login?plan=pro" className="button button-solid">
              {t('landing.hero.ctaPrimary')}
            </a>
            <a href="#how-it-works" className="button button-ghost">
              {t('landing.hero.ctaSecondary')}
            </a>
          </div>

          {/* Hero Key Metrics */}
          {Array.isArray(stats) && stats.length > 0 && (
            <div className="hero-metrics">
              {stats.map((s, idx) => (
                <div className="hero-metric-item" key={idx}>
                  <span className="hero-metric-value">{s.value}</span>
                  <span className="hero-metric-label">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: product demo video (muted loop, works in both themes) */}
        <div className="hero-visual-column">
          <div className="hero-image-wrapper">
            <div className="hero-video-badge">
              <span className="hero-eyebrow-dot" aria-hidden="true"></span>
              <span>{t('landing.hero.videoBadge')}</span>
            </div>
            <video
              className="hero-mockup-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/assets/hero-poster.png"
              aria-label={t('landing.hero.imageAlt')}
            >
              <source src="/assets/hero-demo.webm" type="video/webm" />
              <source src="/assets/hero-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
