import { useTranslation } from 'react-i18next';

const Assistants = () => {
  const { t } = useTranslation();
  const items = t('landing.assistants.items', { returnObjects: true }) || [];
  const chat = t('landing.assistants.chat', { returnObjects: true }) || {};

  return (
    <section id="assistants">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">{t('landing.kickers.assistants')}</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.assistants.title')}</h2>
          <p className="section-copy reveal">{t('landing.assistants.subtitle')}</p>
        </div>

        <div className="split-grid" style={{ alignItems: 'start', marginTop: '32px' }}>
          {/* Left Column: assistant surfaces */}
          <div style={{ display: 'grid', gap: '16px' }}>
            {items.map((item, idx) => (
              <div className="panel reveal" key={idx} style={{ padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                  <h3 className="panel-title" style={{ fontSize: '1.15rem', margin: 0 }}>
                    {item.name}
                  </h3>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: 'var(--surface-dim)',
                    color: 'var(--muted)',
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

          {/* Right Column: mock Global Assistant email exchange */}
          <div className="reveal" style={{
            background: 'var(--surface)',
            border: '1px solid var(--line-strong)',
            borderRadius: '20px',
            padding: '22px',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '12px', marginBottom: '16px' }}>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{chat.header}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{chat.context}</div>
            </div>

            <div style={{ display: 'grid', gap: '12px', fontSize: '0.9rem', lineHeight: 1.6 }}>
              <div style={{
                justifySelf: 'end',
                background: 'var(--surface-dim)',
                border: '1px solid var(--line)',
                borderRadius: '14px 14px 4px 14px',
                padding: '10px 14px',
                maxWidth: '88%'
              }}>
                {chat.question}
              </div>

              <div style={{
                border: '1px solid var(--line)',
                borderRadius: '14px 14px 14px 4px',
                padding: '12px 14px',
                maxWidth: '94%'
              }}>
                <div>{chat.answer}</div>
                {Array.isArray(chat.points) && (
                  <ul style={{ margin: '8px 0 0', paddingLeft: '18px' }}>
                    {chat.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                )}
                <div style={{ marginTop: '10px' }}>{chat.offer}</div>
              </div>

              <div style={{
                justifySelf: 'end',
                background: 'var(--surface-dim)',
                border: '1px solid var(--line)',
                borderRadius: '14px 14px 4px 14px',
                padding: '10px 14px',
                maxWidth: '88%'
              }}>
                {chat.followUp}
              </div>

              <div style={{
                border: '1px dashed var(--line-strong)',
                borderRadius: '12px',
                padding: '12px 14px'
              }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '6px' }}>
                  {chat.draftLabel}
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>{chat.draft}</div>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, padding: '5px 10px', borderRadius: '6px', background: 'var(--accent)', color: 'white' }}>
                    {chat.send}
                  </span>
                  <span style={{ fontSize: '0.78rem', padding: '5px 10px', borderRadius: '6px', border: '1px solid var(--line)' }}>
                    {chat.edit}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '14px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--faint)' }}>
              {chat.footnote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistants;
