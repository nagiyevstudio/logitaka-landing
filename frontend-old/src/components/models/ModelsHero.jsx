import { useTranslation } from 'react-i18next';

const ModelsHero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-pill">
          <span className="pill-dot"></span>
          <span>{t('models_page.hero.pill')}</span>
        </div>
        <h1 className="hero-h" dangerouslySetInnerHTML={{ __html: t('models_page.hero.title') }}></h1>
        <p className="hero-p">{t('models_page.hero.description1')}</p>
        <p className="hero-p">{t('models_page.hero.description2')}</p>
      </div>
    </section>
  );
};

export default ModelsHero;
