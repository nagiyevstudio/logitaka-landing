import { useTranslation } from 'react-i18next';

const Obligations = () => {
  const { t } = useTranslation();

  const mockObligations = [
    { name: 'ElevenLabs Speech API', account: 'ops@practice.io', amount: '$44/mo', due: 'In 3 days', status: 'Active', badgeColor: '#10b981' },
    { name: 'EU Dedicated Server (Hetzner)', account: 'infra@practice.io', amount: '$89/mo', due: 'Oct 12', status: 'Active', badgeColor: '#10b981' },
    { name: 'ChatGPT Team Subscription', account: 'team@practice.io', amount: '$60/mo', due: 'Oct 18', status: 'Reviewing', badgeColor: '#f59e0b' },
    { name: 'Client Prototyping Sandbox', account: 'sandbox@client.com', amount: '$29/mo', due: 'Cancelled', status: 'Purged', badgeColor: 'var(--muted)' }
  ];

  return (
    <section id="commitments">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">06 // MENTAL BANDWIDTH</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>

        <div className="split-grid" style={{ alignItems: 'center' }}>
          <div className="section-text">
            <h2 className="section-title medium reveal">{t('landing.commitments.title')}</h2>
            <p className="section-copy reveal">{t('landing.commitments.subtitle')}</p>
            <p className="section-copy reveal" style={{ marginTop: '12px' }}>{t('landing.commitments.body')}</p>
          </div>

          {/* Visual Table of Obligations */}
          <div className="commitments-visual reveal">
            <div className="panel" style={{ padding: '24px', background: 'var(--surface)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)' }}>
                  RECURRING OBLIGATIONS & SERVICES
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--faint)' }}>Pulse alert 7d ahead</span>
              </div>

              <div style={{ display: 'grid', gap: '12px' }}>
                {mockObligations.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'var(--surface-dim)',
                    border: '1px solid var(--line)',
                    fontSize: '0.86rem'
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text)' }}>{item.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.account}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text)' }}>{item.amount}</div>
                      <div style={{ fontSize: '0.72rem', color: item.badgeColor, fontWeight: 500 }}>
                        {item.due} · {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '14px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--faint)' }}>
                Included across all plans · Does not clutter your external calendar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Obligations;
