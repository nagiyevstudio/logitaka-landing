import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import ModelsHero from '../components/models/ModelsHero';
import ModelCards from '../components/models/ModelCards';
import PriceChart from '../components/models/PriceChart';
import CapabilityMatrix from '../components/models/CapabilityMatrix';
import Scenarios from '../components/models/Scenarios';
import AdvisorWidget from '../components/models/AdvisorWidget';

const Models = () => {
  const { t, i18n } = useTranslation();
  
  // Re-run reveal observer when language changes or on mount
  useReveal(i18n.language);

  return (
    <div className="models-page">
      <Helmet>
        <title>{t('models_page.meta.title')}</title>
      </Helmet>
      <ModelsHero />
      <hr className="divider" />
      <ModelCards />
      <hr className="divider" />
      <PriceChart />
      <hr className="divider" />
      <CapabilityMatrix />
      <hr className="divider" />
      <Scenarios />
      <hr className="divider" />
      <AdvisorWidget />
    </div>
  );
};

export default Models;
