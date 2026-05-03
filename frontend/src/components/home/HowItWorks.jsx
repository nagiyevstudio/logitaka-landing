import { useTranslation } from 'react-i18next';
import ChatDemo from './ChatDemo';

const HowItWorks = () => {
  const { t } = useTranslation();
  const body = t('landing.transformation.body', { returnObjects: true }) || [];
  const list = t('landing.transformation.list', { returnObjects: true }) || [];

  return (
    <section id="how-it-works">
      <div className="section-inner split-grid">
        <div className="section-text">
          <div className="section-eyebrow">
            <span className="section-kicker">02</span>
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
        
        <div className="transformation-visual-slot">
          <ChatDemo />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
