import { useTranslation } from 'react-i18next';
import TalkDemo from './TalkDemo';

const TalkSection = () => {
  const { t } = useTranslation();
  const steps = t('landing.talk.steps', { returnObjects: true }) || [];
  const chips = t('landing.talk.chips', { returnObjects: true }) || [];

  return (
    <section id="talk">
      <div className="section-inner split-grid">
        {/* Left: sticky text column */}
        <div className="talk-text">
          <div className="section-eyebrow">
            <span className="section-kicker">01.5</span>
            <span className="section-kicker-line" aria-hidden="true"></span>
          </div>
          <h2 className="section-title medium reveal">{t('landing.talk.title')}</h2>
          <p className="talk-subtitle reveal">{t('landing.talk.subtitle')}</p>

          <div className="talk-steps reveal">
            {steps.map((step, i) => (
              <div className="talk-step" key={i}>
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

        {/* Right: animated demo */}
        <TalkDemo />
      </div>
    </section>
  );
};

export default TalkSection;