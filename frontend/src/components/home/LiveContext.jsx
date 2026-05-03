import { useTranslation } from 'react-i18next';
import ContextCard from './ContextCard';

const LiveContext = () => {
  const { t } = useTranslation();
  const body = t('landing.context.body', { returnObjects: true }) || [];
  const models = t('landing.context.models', { returnObjects: true }) || [];

  return (
    <section id="context">
      <div className="section-inner split-grid">
        <div className="panel reveal">
          <div className="muted-label">{t('landing.context.label')}</div>
          <h2 className="section-title medium">{t('landing.context.title')}</h2>
          <div className="section-text">
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="section-copy">{t('landing.context.closing')}</p>
          <p className="context-models-line">
            <span className="muted-label">{t('landing.context.modelsLabel')}</span>
            &#8194;
            <span>{models.join(', ')}</span>
          </p>
        </div>
        <ContextCard />
      </div>
    </section>
  );
};

export default LiveContext;
