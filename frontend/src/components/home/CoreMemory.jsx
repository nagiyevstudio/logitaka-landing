import { useTranslation } from 'react-i18next';
import ContextCard from './ContextCard';

const CoreMemory = () => {
  const { t } = useTranslation();
  const cards = t('landing.memory.cards', { returnObjects: true }) || [];

  return (
    <section id="memory">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">03 // PRACTICE ARCHITECTURE</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.memory.title')}</h2>
          <p className="section-copy reveal">{t('landing.memory.subtitle')}</p>
        </div>

        <div className="split-grid" style={{ alignItems: 'start', marginTop: '24px' }}>
          {/* Left Column: 3 Architectural Pillars */}
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
            {cards.map((card, i) => (
              <article className="panel reveal" key={i} style={{ padding: '24px' }}>
                <div className="panel-tag" style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  color: 'var(--accent)', 
                  marginBottom: '10px' 
                }}>
                  {card.tag}
                </div>
                <h3 className="panel-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                  {card.title}
                </h3>
                <p className="panel-copy" style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {card.body}
                </p>
              </article>
            ))}
          </div>

          {/* Right Column: Interactive Context & Decision Card */}
          <div className="memory-card-column">
            <ContextCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreMemory;
