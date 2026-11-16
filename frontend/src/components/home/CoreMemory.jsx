import { useTranslation } from 'react-i18next';
import ContextCard from './ContextCard';

const CoreMemory = () => {
  const { t } = useTranslation();
  const cards = t('landing.memory.cards', { returnObjects: true }) || [];
  const recall = t('landing.memory.recall', { returnObjects: true }) || {};

  return (
    <section id="memory">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">{t('landing.kickers.memory')}</span>
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

        {/* Recall: the second half of the loop — asking weeks later */}
        {recall.question && (
          <div className="panel reveal" style={{ padding: '28px', marginTop: '32px' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              marginBottom: '10px'
            }}>
              {recall.tag}
            </div>
            <h3 className="panel-title" style={{ fontSize: '1.35rem', marginBottom: '20px' }}>
              {recall.title}
            </h3>
            <div style={{ display: 'grid', gap: '12px', maxWidth: '760px' }}>
              <div style={{
                justifySelf: 'end',
                background: 'var(--surface-dim)',
                border: '1px solid var(--line)',
                borderRadius: '14px 14px 4px 14px',
                padding: '12px 16px',
                fontSize: '0.95rem',
                maxWidth: '90%'
              }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--faint)', display: 'block', marginBottom: '4px' }}>
                  {recall.when}
                </span>
                {recall.question}
              </div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--line-strong)',
                borderRadius: '14px 14px 14px 4px',
                padding: '14px 16px',
                fontSize: '0.95rem',
                lineHeight: 1.65,
                maxWidth: '90%'
              }}>
                {recall.answer}
                <div style={{ marginTop: '10px', fontSize: '0.75rem', color: 'var(--muted)' }}>
                  ↳ {recall.source}
                </div>
              </div>
            </div>
            <p className="panel-copy" style={{ margin: '20px 0 0', fontSize: '0.92rem', lineHeight: 1.65 }}>
              {recall.body}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreMemory;
