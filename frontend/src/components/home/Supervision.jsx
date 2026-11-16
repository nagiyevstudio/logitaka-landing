import { useTranslation } from 'react-i18next';

const Supervision = () => {
  const { t } = useTranslation();
  const features = t('landing.supervision.features', { returnObjects: true }) || [];
  const b = t('landing.demo.brief');

  return (
    <section id="supervision">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">{t('landing.kickers.supervision')}</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.supervision.title')}</h2>
          <p className="section-copy reveal">{t('landing.supervision.subtitle')}</p>
        </div>

        <div className="split-grid" style={{ alignItems: 'center', marginTop: '32px' }}>
          {/* Left Column: Supervision Modules */}
          <div className="supervision-list" style={{ display: 'grid', gap: '20px' }}>
            {features.map((item, idx) => (
              <div className="panel reveal" key={idx} style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h3 className="panel-title" style={{ fontSize: '1.25rem', margin: 0 }}>
                    {item.name}
                  </h3>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    padding: '3px 8px', 
                    borderRadius: '4px', 
                    background: item.badge?.toLowerCase() === 'premium' ? 'rgba(255, 69, 0, 0.15)' : 'var(--surface-dim)',
                    color: item.badge?.toLowerCase() === 'premium' ? 'var(--accent)' : 'var(--muted)',
                    border: '1px solid var(--line)',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.badge}
                  </span>
                </div>
                <p className="panel-copy" style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Mockup of Telegram Brief on Mobile */}
          <div className="supervision-visual reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="telegram-mockup" style={{
              width: '100%',
              maxWidth: '380px',
              background: 'var(--surface)',
              border: '1px solid var(--line-strong)',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.35)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid var(--line)', paddingBottom: '14px', marginBottom: '16px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}>
                  L
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{b.bot}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{b.when}</div>
                </div>
              </div>

              {/* Message Bubble that fits on 1 screen */}
              <div style={{
                background: 'var(--surface-dim)',
                border: '1px solid var(--line)',
                borderRadius: '14px',
                padding: '16px',
                fontSize: '0.86rem',
                lineHeight: 1.6,
                color: 'var(--text)'
              }}>
                <div style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '6px' }}>
                  {b.greeting}
                </div>
                
                <div style={{ marginTop: '10px' }}>
                  <strong>{b.doneLabel}</strong><br />
                  {b.done[0]}<br />
                  {b.done[1]}
                </div>

                <div style={{ marginTop: '12px' }}>
                  <strong>{b.todayLabel}</strong><br />
                  {b.today[0]}<br />
                  {b.today[1]}
                </div>

                <div style={{ marginTop: '12px', borderTop: '1px dashed var(--line)', paddingTop: '10px' }}>
                  <span style={{ color: '#f59e0b', fontWeight: 600 }}>{b.riskLabel}</span><br />
                  {b.risk}
                </div>
              </div>

              <div style={{ marginTop: '14px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--faint)' }}>
                {b.footnote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supervision;
