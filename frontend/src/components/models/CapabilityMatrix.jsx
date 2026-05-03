import { useTranslation } from 'react-i18next';

const SCORES = {
  qwen: [5, 4, 5, 4, 3, 1],
  glm: [5, 3, 5, 4, 3, 2],
  mistral: [4, 3, 5, 4, 4, 1],
  kimi: [3, 2, 3, 4, 5, 2],
  deepseek: [4, 3, 4, 5, 5, 2],
  grok: [5, 4, 4, 4, 4, 3],
  gemini: [4, 5, 3, 5, 5, 4],
  sonnet: [3, 5, 4, 4, 4, 4],
  opus: [2, 4, 2, 5, 5, 5],
  gpt: [2, 3, 4, 5, 5, 5]
};

const CapabilityMatrix = () => {
  const { t } = useTranslation();
  const models = t('models_page.models', { returnObjects: true }) || [];
  const cols = t('models_page.matrix.cols', { returnObjects: true }) || [];
  const modelLabel = t('models_page.labels.model');

  return (
    <section id="capabilities">
      <div className="wrap">
        <div className="eyebrow">
          <span className="kicker">{t('models_page.matrix.eyebrow')}</span>
          <span className="kicker-rule"></span>
        </div>
        <h2 className="section-h">{t('models_page.matrix.title')}</h2>
        <p className="section-p">{t('models_page.matrix.description')}</p>

        <div className="matrix-wrap reveal">
          <div className="matrix-scroll">
            <table>
              <thead>
                <tr>
                  <th>{modelLabel}</th>
                  {cols.map((c, i) => <th key={i}>{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {models.map(m => (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    {(SCORES[m.id] || []).map((s, idx) => (
                      <td key={idx}>
                        <div className="dots">
                          {[1, 2, 3, 4, 5].map(v => (
                            <span className={`dot ${v <= s ? 'on' : 'off'}`} key={v}></span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityMatrix;
