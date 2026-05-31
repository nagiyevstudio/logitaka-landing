import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';

const Privacy = () => {
  const { i18n } = useTranslation();
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      const lang = i18n.language || 'az';
      try {
        const response = await fetch(`/locales/${lang}/privacy.json`);
        const data = await response.json();
        setContent(data.content);
      } catch (e) {
        console.error('Failed to load privacy content', e);
      }
    };
    loadContent();
  }, [i18n.language]);

  return (
    <main className="content-inner legal-content">
      <Helmet>
        <title>Privacy Policy — Logitaka</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
};

export default Privacy;
