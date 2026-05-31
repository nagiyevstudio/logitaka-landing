import React from 'react';
import { useTranslation } from 'react-i18next';

const DevFlow = () => {
  const { t } = useTranslation();
  const df = t('landing.devFlow', { returnObjects: true });

  if (!df || !df.s1) return null;

  return (
    <div className="df-root reveal" aria-hidden="true">
      <div className="df-flow">

        {/* Row 1: Logitaka -> Git -> IDE */}
        <div className="df-two-col">
          <div className="df-box logitaka">
            <div className="df-step-num">01</div>
            <div className="df-icon">💬</div>
            <div className="df-label">{df.s1.label}</div>
            <div className="df-sub">{df.s1.sub}</div>
          </div>
          
          <div className="df-arrow-h" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path d="M4 8h16M14 3l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '9px', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{df.actionPush}</span>
          </div>

          <div className="df-git-box">
            <div className="df-git-icon">⎇</div>
            <div className="df-git-label">{df.gitInst.label}</div>
            <div className="df-git-sub">{df.gitInst.sub}</div>
          </div>

          <div className="df-arrow-h" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path d="M4 8h16M14 3l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '9px', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{df.actionPull}</span>
          </div>

          <div className="df-box">
            <div className="df-step-num">02</div>
            <div className="df-icon">🖥️</div>
            <div className="df-label">{df.s2.label}</div>
            <div className="df-sub">{df.s2.sub}</div>
          </div>
        </div>

        {/* Vertical arrows bridge */}
        <div className="df-v-bridge" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 140px minmax(0, 1fr)', gap: 0, padding: '0' }}>
          <div></div>
          <div></div>
          <div className="df-arrow-v" style={{ justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                <path d="M8 4v16M3 14l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: '9px', color: 'var(--muted)' }}>{df.actionExec}</span>
            </div>
          </div>
        </div>

        {/* Row 2: Report <- Git <- Agent execution */}
        <div className="df-two-col" style={{ direction: 'rtl' }}>
          <div className="df-box logitaka" style={{ direction: 'ltr' }}>
            <div className="df-step-num">05</div>
            <div className="df-icon">📋</div>
            <div className="df-label">{df.s5.label}</div>
            <div className="df-sub">{df.s5.sub}</div>
          </div>

          <div className="df-arrow-h" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px', direction: 'ltr' }}>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path d="M20 8H4M10 3L4 8l6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '9px', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{df.actionRead}</span>
          </div>

          <div className="df-git-box" style={{ direction: 'ltr' }}>
            <div className="df-git-icon">⎇</div>
            <div className="df-git-label">{df.gitCode.label}</div>
            <div className="df-git-sub">{df.gitCode.sub}</div>
          </div>

          <div className="df-arrow-h" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px', direction: 'ltr' }}>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path d="M20 8H4M10 3L4 8l6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '9px', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{df.actionPush}</span>
          </div>

          <div className="df-box" style={{ direction: 'ltr' }}>
            <div className="df-step-num">03–04</div>
            <div className="df-icon">🤖</div>
            <div className="df-label">{df.s34.label}</div>
            <div className="df-sub">{df.s34.sub}</div>
          </div>
        </div>

        {/* Down arrow on Logitaka side */}
        <div className="df-v-bridge" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 140px minmax(0, 1fr)', gap: 0 }}>
          <div className="df-arrow-v" style={{ justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                <path d="M8 4v16M3 14l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: '9px', color: 'var(--muted)' }}>{df.actionReady}</span>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Row 3: Discussion */}
        <div className="df-v-bridge" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 140px minmax(0, 1fr)', gap: 0 }}>
          <div className="df-box logitaka">
            <div className="df-step-num">06</div>
            <div className="df-icon">🔁</div>
            <div className="df-label">{df.s6.label}</div>
            <div className="df-sub">{df.s6.sub}</div>
          </div>
          <div></div>
          <div></div>
        </div>
        
        {/* Mobile View for Row 3 */}
        <div style={{ display: 'none' }} className="mobile-row3">
          <div className="df-arrow-v" style={{ justifyContent: 'center' }}>
             <svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ transform: 'rotate(0deg)' }}>
                <path d="M8 4v16M3 14l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>
          <div className="df-box logitaka">
            <div className="df-step-num">06</div>
            <div className="df-icon">🔁</div>
            <div className="df-label">{df.s6.label}</div>
            <div className="df-sub">{df.s6.sub}</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DevFlow;
