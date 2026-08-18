import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const loopSteps = t('landing.hero.loop', { returnObjects: true }) || [];

  return (
    <section className="hero" id="hero">
      <div className="section-inner split-grid">
        {/* Left Column: Headline and Actions */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true"></span>
            <span id="hero-kicker">{t('landing.hero.kicker')}</span>
          </div>
          <h1 className="hero-headline">{t('landing.hero.headline')}</h1>
          <p className="hero-subheadline">{t('landing.hero.subheadline')}</p>

          {/* 3-Step Micro-Loop */}
          {Array.isArray(loopSteps) && loopSteps.length > 0 && (
            <div className="hero-loop reveal">
              {loopSteps.map((item, idx) => (
                <div className="hero-loop-step" key={idx}>
                  <div className="hero-loop-header">
                    <span className="hero-loop-num">{idx + 1}</span>
                    <span className="hero-loop-name">{item.step}</span>
                  </div>
                  <span className="hero-loop-desc">{item.desc}</span>
                  {idx < loopSteps.length - 1 && (
                    <span className="hero-loop-arrow" aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="hero-actions reveal">
            <a href="https://app.logitaka.com/app/login" className="button button-solid">
              {t('landing.hero.ctaPrimary')}
            </a>
            <a href="#talk" className="button button-ghost">
              {t('landing.hero.ctaSecondary')}
            </a>
          </div>
        </div>

        {/* Right Column: Premium Mockup Image */}
        <div className="hero-visual-column">
          <div className="hero-image-wrapper">
            <img 
              src="/assets/hero-talk-dark.png" 
              alt="Logitaka Talk fullscreen voice workspace — post-call speech assembling into structured draft cards" 
              className="hero-mockup-image hero-mockup-dark" 
            />
            <img 
              src="/assets/hero-talk-light.png" 
              alt="Logitaka Talk fullscreen voice workspace — post-call speech assembling into structured draft cards" 
              className="hero-mockup-image hero-mockup-light" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

