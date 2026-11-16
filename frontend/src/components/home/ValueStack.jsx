import { useTranslation } from 'react-i18next';

const ValueStack = () => {
  const { t } = useTranslation();
  const services = t('landing.valueStack.services', { returnObjects: true }) || [];
  const perMonth = t('landing.valueStack.perMonth');

  return (
    <section id="economics">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">{t('landing.kickers.valueStack')}</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.valueStack.title')}</h2>
          <p className="section-copy reveal">{t('landing.valueStack.subtitle')}</p>
        </div>
        
        <div className="value-stack-grid reveal" style={{ marginTop: '24px' }}>
          <div>
            <div className="value-stack-table">
              <div className="vst-header">
                <span>{t('landing.valueStack.colTool')}</span>
                <span>{t('landing.valueStack.colPrice')}</span>
              </div>
              <div id="value-stack-rows">
                {services.map((s, i) => (
                  <div className="vst-row" key={i}>
                    <div className="vst-name">
                      {s.name}
                      <span className="vst-provider">{s.provider}</span>
                    </div>
                    <span className="vst-price-usd">{s.priceUSD}{perMonth}</span>
                  </div>
                ))}
              </div>
              <div className="vst-total-row">
                <span className="vst-total-label">{t('landing.valueStack.totalLabel')}</span>
                <span className="vst-total-usd">{t('landing.valueStack.totalUSD')}{perMonth}</span>
              </div>
            </div>
            {t('landing.valueStack.disclaimer') && (
              <p className="vst-disclaimer" style={{ fontSize: '0.78rem', color: 'var(--faint)', marginTop: '12px' }}>
                {t('landing.valueStack.disclaimer')}
              </p>
            )}
          </div>
          
          <div className="value-stack-panel">
            <div className="vsp-vs">{t('landing.valueStack.vsLabel')}</div>
            <div className="vsp-savings">
              <div className="vsp-savings-old">
                <span className="vsp-old-label">{t('landing.valueStack.totalLabel')}</span>
                <span className="vsp-old-price">{t('landing.valueStack.totalUSD')}</span>
              </div>
              <div className="vsp-divider"></div>
              <div className="vsp-savings-new">
                <span className="vsp-new-label">{t('landing.valueStack.logitakaLabel')}</span>
                <span className="vsp-new-price">{t('landing.valueStack.logitakaPrice')}</span>
                <span className="vsp-new-sub">{perMonth}</span>
              </div>
            </div>
            <div className="vsp-badge">
              <span className="vsp-badge-icon">&#10003;</span>
              <span>{t('landing.valueStack.badge')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
