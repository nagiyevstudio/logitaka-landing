import { useTranslation } from 'react-i18next';

const ModelChoice = () => {
  const { t } = useTranslation();
  const points = t('landing.models.points', { returnObjects: true }) || [];
  const selector = t('landing.models.selector', { returnObjects: true }) || {};
  const rows = Array.isArray(selector.rows) ? selector.rows : [];

  return (
    <section id="models">
      <div className="section-inner split-grid" style={{ alignItems: 'center' }}>
        <div className="section-text">
          <div className="section-eyebrow">
            <span className="section-kicker">{t('landing.kickers.models')}</span>
            <span className="section-kicker-line" aria-hidden="true"></span>
          </div>
          <h2 className="section-title medium reveal">{t('landing.models.title')}</h2>
          <p className="section-copy reveal">{t('landing.models.subtitle')}</p>
          <ul className="bullet-list reveal">
            {points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>

        {/* Mock of the in-app model selector with balance multipliers */}
        <div className="reveal" style={{
          width: '100%',
          maxWidth: '420px',
          justifySelf: 'center',
          background: 'var(--surface)',
          border: '1px solid var(--line-strong)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>{selector.title}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '12px' }}>{selector.caption}</div>
          <div style={{ display: 'grid', gap: '4px' }}>
            {rows.map((row, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '9px 12px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                background: i === 0 ? 'var(--surface-dim)' : 'transparent',
                border: i === 0 ? '1px solid var(--line)' : '1px solid transparent'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {row.name}
                  {row.promo && (
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                      {row.promo}
                    </span>
                  )}
                </span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: row.tone === 'high' ? '#f59e0b' : 'var(--accent)' }}>
                  {row.rate}
                </span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--faint)' }}>
            {selector.footnote}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelChoice;
