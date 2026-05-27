import { useTranslation } from 'react-i18next';

const ValueStack = () => {
  const { t } = useTranslation();
  const services = t('landing.valueStack.services', { returnObjects: true }) || [];
  const perMonth = t('landing.valueStack.perMonth');

  return (
    <section id="value-stack">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">{t('landing.valueStack.label')}</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <h2 className="section-title medium reveal">{t('landing.valueStack.title')}</h2>
        <p className="section-copy reveal">{t('landing.valueStack.subtitle')}</p>
        
        <div className="value-stack-grid reveal">
          <div>
            <div className="value-stack-table">
              <div className="vst-header">
                <span>Service</span>
                <span>USD</span>
                <span>₼</span>
              </div>
              <div id="value-stack-rows">
                {services.map((s, i) => (
                  <div className="vst-row" key={i}>
                    <div className="vst-name">
                      {s.name}
                      <span className="vst-provider">{s.provider}</span>
                    </div>
                    <span className="vst-price-usd">{s.priceUSD}{perMonth}</span>
                    <span className="vst-price-azn">{s.priceAZN}</span>
                  </div>
                ))}
              </div>
              <div className="vst-total-row">
                <span className="vst-total-label">{t('landing.valueStack.totalLabel')}</span>
                <span className="vst-total-usd">{t('landing.valueStack.totalUSD')}</span>
                <span className="vst-total-azn">{t('landing.valueStack.totalAZN')}</span>
              </div>
            </div>
            <p className="vst-disclaimer">{t('landing.valueStack.disclaimer')}</p>
          </div>
          
          <div className="value-stack-panel">
            <div className="vsp-vs">{t('landing.valueStack.vsLabel')}</div>
            <div className="vsp-savings">
              <div className="vsp-savings-old">
                <span className="vsp-old-label">{t('landing.valueStack.totalLabel')}</span>
                <span className="vsp-old-price">{t('landing.valueStack.totalAZN')}</span>
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
              <span>{t('landing.valueStack.logitakaLabel')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
