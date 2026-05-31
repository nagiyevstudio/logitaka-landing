import { useTranslation } from 'react-i18next';

const ProHero = () => {
  const { t } = useTranslation();

  return (
    <section className="pro-hero" id="pro-hero">
      <div className="section-inner split-grid">
        {/* Left Column: Title and Description */}
        <div className="pro-hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true"></span>
            <span>{t('pro_page.hero.pill')}</span>
          </div>
          <h1 className="hero-headline">{t('pro_page.hero.title')}</h1>
          <p className="hero-subheadline">{t('pro_page.hero.description')}</p>
        </div>

        {/* Right Column: Square Placeholder Image */}
        <div className="pro-hero-visual">
          <div className="pro-image-wrapper">
            <img 
              src="/assets/pro-placeholder.png" 
              alt="Logitaka Pro Dashboard Mockup" 
              className="pro-mockup-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProHero;
