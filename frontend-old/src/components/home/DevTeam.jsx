import { useTranslation } from 'react-i18next';
import DevFlow from './DevFlow';

const DevTeam = () => {
  const { t } = useTranslation();
  const body = t('landing.devTeam.body', { returnObjects: true }) || [];
  const points = t('landing.devTeam.points', { returnObjects: true }) || [];

  return (
    <section id="dev-team">
      <div className="section-inner split-grid dev-team-grid">
        <DevFlow />
        <div className="section-text">
          <div className="panel reveal">
            <div className="muted-label">{t('landing.devTeam.label')}</div>
            <h2 className="section-title medium">{t('landing.devTeam.title')}</h2>
            <div className="section-text">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="section-copy">{t('landing.devTeam.closing')}</p>
          </div>
          <div className="quote-panel reveal">
            <div className="muted-label">{t('landing.devTeam.visualLabel')}</div>
            <ul className="bullet-list">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevTeam;
