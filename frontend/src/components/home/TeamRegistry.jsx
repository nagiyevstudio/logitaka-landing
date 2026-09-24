import { useTranslation } from 'react-i18next';

const TeamRegistry = () => {
  const { t } = useTranslation();
  const points = t('landing.team.points', { returnObjects: true }) || [];

  return (
    <section id="team">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">05 // FRICTIONLESS DELEGATION</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <div className="section-text">
          <h2 className="section-title medium reveal">{t('landing.team.title')}</h2>
          <p className="section-copy reveal">{t('landing.team.subtitle')}</p>
        </div>

        <div className="cards-grid reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '28px' }}>
          {points.map((p, idx) => (
            <article className="panel" key={idx} style={{ padding: '28px' }}>
              <div className="panel-index" style={{ color: 'var(--accent)' }}>0{idx + 1}</div>
              <h3 className="panel-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{p.title}</h3>
              <p className="panel-copy" style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamRegistry;
