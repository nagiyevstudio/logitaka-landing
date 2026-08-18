import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  const body = t('landing.transformation.body', { returnObjects: true }) || [];
  const list = t('landing.transformation.list', { returnObjects: true }) || [];

  return (
    <section id="how-it-works">
      <div className="section-inner split-grid">
        <div className="section-text">
          <div className="section-eyebrow">
            <span className="section-kicker">03</span>
            <span className="section-kicker-line" aria-hidden="true"></span>
          </div>
          <h2 className="section-title medium reveal">{t('landing.transformation.title')}</h2>
          
          {body.map((p, i) => (
            <p className="reveal" key={i}>{p}</p>
          ))}

          <div className="quote-panel reveal">
            <div className="muted-label">{t('landing.transformation.coreLabel')}</div>
            <p className="section-copy">{t('landing.transformation.coreBody')}</p>
          </div>

          <div className="quote-panel reveal">
            <div className="muted-label">{t('landing.transformation.listLabel')}</div>
            <ul className="bullet-list">
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="transformation-visual-slot reveal">
          <div className="tf-container">
            <div className="tf-step">
              <div className="tf-step-icon">📞</div>
              <div className="tf-step-content">
                <div className="tf-step-header">
                  <span className="tf-step-num">Step 1</span>
                  <span className="tf-step-time">00:00 – Post-Call</span>
                </div>
                <div className="tf-step-title">Client Sync Concluded</div>
                <p className="tf-step-desc">Open Logitaka Talk immediately after Zoom or Google Meet.</p>
              </div>
            </div>

            <div className="tf-connector"><span className="tf-connector-line"></span></div>

            <div className="tf-step">
              <div className="tf-step-icon">🎙️</div>
              <div className="tf-step-content">
                <div className="tf-step-header">
                  <span className="tf-step-num">Step 2</span>
                  <span className="tf-step-time">60 Seconds Voice</span>
                </div>
                <div className="tf-step-title">Speak Agreements & Actions</div>
                <p className="tf-step-desc">Say what was decided, deadlines promised, and client tasks.</p>
              </div>
            </div>

            <div className="tf-connector"><span className="tf-connector-line"></span></div>

            <div className="tf-step">
              <div className="tf-step-icon">📑</div>
              <div className="tf-step-content">
                <div className="tf-step-header">
                  <span className="tf-step-num">Step 3</span>
                  <span className="tf-step-time">Instant Live Parse</span>
                </div>
                <div className="tf-step-title">Review Draft Cards</div>
                <p className="tf-step-desc">Verify deliverables, dates, and client board routing.</p>
              </div>
            </div>

            <div className="tf-connector"><span className="tf-connector-line"></span></div>

            <div className="tf-step highlight">
              <div className="tf-step-icon">⚡</div>
              <div className="tf-step-content">
                <div className="tf-step-header">
                  <span className="tf-step-num">Step 4</span>
                  <span className="tf-step-badge">100% Deterministic</span>
                </div>
                <div className="tf-step-title">Confirm & Apply</div>
                <p className="tf-step-desc">Changes land in the client workspace with zero hallucinations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

