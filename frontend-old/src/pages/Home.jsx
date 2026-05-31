import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import Hero from '../components/home/Hero';
import Problem from '../components/home/Problem';
import HowItWorks from '../components/home/HowItWorks';
import Capabilities from '../components/home/Capabilities';
import LiveContext from '../components/home/LiveContext';
import ModelTeaser from '../components/home/ModelTeaser';
import Audience from '../components/home/Audience';
import DevTeam from '../components/home/DevTeam';
import ValueStack from '../components/home/ValueStack';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

import { useLocation } from 'react-router-dom';

const Home = () => {
  const { t, i18n } = useTranslation();
  const { hash } = useLocation();
  
  // Re-run reveal observer when language changes or on mount
  useReveal(i18n.language);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>{t('landing.meta.title')}</title>
        <meta name="description" content={t('landing.meta.description')} />
      </Helmet>
      <Hero />
      <Problem />
      <HowItWorks />
      <Capabilities />
      <LiveContext />
      <ModelTeaser />
      <Audience />
      <DevTeam />
      <ValueStack />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default Home;
