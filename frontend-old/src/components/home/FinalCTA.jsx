import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section id="final-cta">
      <div className="section-inner">
        <div className="cta-panel reveal">
          <div className="section-text">
            <h2 className="section-title medium">{t('landing.finalCta.title')}</h2>
            <p>{t('landing.finalCta.body')}</p>
          </div>
          <div className="cta-actions">
            <a className="button button-solid" href="https://app.logitaka.com/app/login">
              {t('landing.finalCta.primary')}
            </a>
            <p className="cta-notice" dangerouslySetInnerHTML={{ __html: t('landing.finalCta.notice') }}></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
