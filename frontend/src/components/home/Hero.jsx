import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

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
              alt="Logitaka Talk fullscreen voice workspace — live speech assembling into structured draft cards" 
              className="hero-mockup-image hero-mockup-dark" 
            />
            <img 
              src="/assets/hero-talk-light.png" 
              alt="Logitaka Talk fullscreen voice workspace — live speech assembling into structured draft cards" 
              className="hero-mockup-image hero-mockup-light" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
