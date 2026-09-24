import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const loopSteps = t('landing.hero.loop', { returnObjects: true }) || [];
  const stats = t('landing.hero.stats', { returnObjects: true }) || [];

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
                    <span className="hero-loop-name">{item.title}</span>
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
            <a href="#how-it-works" className="button button-ghost">
              {t('landing.hero.ctaSecondary')}
            </a>
          </div>

          {/* Hero Key Metrics */}
          {Array.isArray(stats) && stats.length > 0 && (
            <div className="hero-metrics reveal">
              {stats.map((s, idx) => (
                <div className="hero-metric-item" key={idx}>
                  <span className="hero-metric-value">{s.value}</span>
                  <span className="hero-metric-label">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Live Workspace Visual / Video Container */}
        <div className="hero-visual-column">
          <div className="hero-image-wrapper">
            <div className="hero-video-badge">
              <span className="hero-eyebrow-dot" aria-hidden="true"></span>
              <span>{t('landing.hero.videoBadge')}</span>
            </div>
            
            {/* HTML5 video element with fallback to high-res workspace screenshots */}
            <video 
              className="hero-mockup-video" 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="/assets/hero-talk-dark.png"
            >
              <source src="/assets/hero-demo.webm" type="video/webm" />
              <source src="/assets/hero-demo.mp4" type="video/mp4" />
              <img 
                src="/assets/hero-talk-dark.png" 
                alt="Logitaka live workspace — real-time multi-project speech and document routing" 
                className="hero-mockup-image hero-mockup-dark" 
              />
            </video>
            <img 
              src="/assets/hero-talk-light.png" 
              alt="Logitaka live workspace — real-time multi-project speech and document routing" 
              className="hero-mockup-image hero-mockup-light" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
