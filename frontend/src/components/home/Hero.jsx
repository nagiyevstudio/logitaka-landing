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
            <a href="#pricing" className="button button-solid">
              {t('landing.hero.ctaPrimary')}
            </a>
            <a href="#how-it-works" className="button button-ghost">
              {t('landing.hero.ctaSecondary')}
            </a>
          </div>
        </div>

        {/* Right Column: Premium Mockup Image Placeholder */}
        <div className="hero-visual-column">
          <div className="hero-image-wrapper">
            <img 
              src="/assets/hero-placeholder.png" 
              alt="Logitaka App Mockup" 
              className="hero-mockup-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
