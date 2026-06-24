import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TIER_COLORS = { base:'#14b8a6', eco:'#16a34a', mid:'#d97706', pro:'#ff4500', heavy:'#b91c1c' };
const MODEL_COLORS = {
  deepseek: '#14b8a6', // Same color as Mistral Large 3 (base tier)
  grok: '#22c55e',     // Green
  gemini_flash: '#d97706' // Same color as Qwen 3.7 Max (mid tier)
};

const PriceChart = () => {
  const { t } = useTranslation();
  const models = t('models_page.compareModels', { returnObjects: true }) || [];
  const legend = t('models_page.price.legend', { returnObjects: true }) || {};
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  const sortedModels = [...models].sort((a, b) => a.cost - b.cost);
  const maxCost = 14.6;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="price">
      <div className="wrap">
        <div className="eyebrow">
          <span className="kicker">{t('models_page.price.eyebrow')}</span>
          <span className="kicker-rule"></span>
        </div>
        <h2 className="section-h">{t('models_page.price.title')}</h2>
        <p className="section-p">{t('models_page.price.description')}</p>
        
        <div className={`chart-wrap reveal ${isVisible ? 'is-visible' : ''}`} ref={chartRef}>
          <div className="price-rows">
            {sortedModels.map((m, i) => (
              <div className="price-row" key={m.id}>
                <div className="price-label">
                  <div className="price-name">{m.name}</div>
                  <div className="price-multiplier">{m.multiplier}</div>
                </div>
                <div className="bar-track">
                  <div 
                    className="bar-fill" 
                    style={{ 
                      background: MODEL_COLORS[m.id] || TIER_COLORS[m.tier],
                      width: isVisible ? `${(m.cost / maxCost) * 100}%` : '0%',
                      transitionDelay: `${i * 90}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="chart-legend">
            {Object.entries(legend).map(([tier, label]) => (
              <div className="legend-item" key={tier}>
                <span className="legend-dot" style={{ background: TIER_COLORS[tier] }}></span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceChart;
