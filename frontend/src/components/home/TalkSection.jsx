import { useTranslation } from 'react-i18next';

const TalkSection = () => {
  const { t } = useTranslation();
  const steps = t('landing.talk.steps', { returnObjects: true }) || [];
  const chips = t('landing.talk.chips', { returnObjects: true }) || [];

  return (
    <section id="how-it-works">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">{t('landing.kickers.talk')}</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.talk.title')}</h2>
          <p className="talk-subtitle reveal">{t('landing.talk.subtitle')}</p>
        </div>

        {/* The demo video in the hero shows this flow; here the steps get the full width */}
        <div className="talk-steps talk-steps-grid reveal">
          {steps.map((step, i) => (
            <div className="talk-step panel" key={i}>
              <div className="talk-step-number">{i + 1}</div>
              <div className="talk-step-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="talk-chips reveal">
          {chips.map((chip, i) => (
            <span className="talk-chip" key={i}>{chip}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalkSection;
