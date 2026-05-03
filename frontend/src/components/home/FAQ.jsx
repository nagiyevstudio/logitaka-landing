import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const items = t('landing.faq.items', { returnObjects: true }) || [];

  return (
    <section id="faq">
      <div className="section-inner">
        <div className="section-eyebrow">
          <span className="section-kicker">06</span>
          <span className="section-kicker-line" aria-hidden="true"></span>
        </div>
        <h2 className="section-title medium reveal">{t('landing.faq.title')}</h2>
        
        <div className="faq-list">
          {items.map((item, i) => (
            <details className="faq-item" key={i} open={i === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
