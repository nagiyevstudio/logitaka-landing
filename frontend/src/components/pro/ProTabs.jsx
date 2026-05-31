import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Tab imports
import Capabilities from '../home/Capabilities.jsx';
import LiveContext from '../home/LiveContext.jsx';
import ModelTeaser from '../home/ModelTeaser.jsx';

import DevTeam from '../home/DevTeam.jsx';

import ModelCards from '../models/ModelCards.jsx';

import PriceChart from '../models/PriceChart.jsx';
import CapabilityMatrix from '../models/CapabilityMatrix.jsx';
import ValueStack from '../home/ValueStack.jsx';

import Scenarios from '../models/Scenarios.jsx';
import AdvisorWidget from '../models/AdvisorWidget.jsx';

const ProTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('pro');
  const [visitedTabs, setVisitedTabs] = useState({ pro: true });
  const [isStuck, setIsStuck] = useState(false);

  // Sync tab with visited state
  useEffect(() => {
    setVisitedTabs((prev) => ({ ...prev, [activeTab]: true }));
  }, [activeTab]);

  // Trigger scroll-reveal observer for newly rendered tab elements
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window === 'undefined') return;
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      const elements = document.querySelectorAll('.pro-tab-panel .reveal:not(.is-visible)');
      elements.forEach((el) => revealObserver.observe(el));
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab, visitedTabs]);

  // Hash synchronization
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['pro', 'premium', 'models', 'compare', 'advisor'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHash(); // on initial mount
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Intersection observer for sticky class
  useEffect(() => {
    const observerEl = document.querySelector('.pro-tabs-observer');
    if (!observerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: [1], rootMargin: '-61px 0px 0px 0px' } // -61px is height of site header
    );

    observer.observe(observerEl);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `#${tabId}`);
    
    // Smooth scroll to top of tabs when switching to avoid visual jump
    const observerEl = document.querySelector('.pro-tabs-observer');
    if (observerEl) {
      const yOffset = -70; // Header height safety margin
      const y = observerEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'pro', label: t('pro_page.tabs.pro') },
    { id: 'premium', label: t('pro_page.tabs.premium') },
    { id: 'models', label: t('pro_page.tabs.models') },
    { id: 'compare', label: t('pro_page.tabs.compare') },
    { id: 'advisor', label: t('pro_page.tabs.advisor') },
  ];

  return (
    <div className="pro-tabs-container">
      {/* Invisible anchor for intersection observer */}
      <div className="pro-tabs-observer" style={{ height: '1px', marginBottom: '-1px' }}></div>

      {/* Sticky Tab Bar */}
      <div className={`pro-tabs-bar-wrapper ${isStuck ? 'is-stuck' : ''}`}>
        <div className="section-inner pro-tabs-bar-inner">
          <nav className="pro-tabs-bar" aria-label="Pro Sections">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`pro-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="pro-tab-panels">
        {/* TAB 1: PRO */}
        <div className={`pro-tab-panel ${activeTab === 'pro' ? 'active' : ''}`} role="tabpanel" style={{ display: activeTab === 'pro' ? 'block' : 'none' }}>
          {visitedTabs.pro && (
            <>
              <Capabilities />
              <hr className="divider" />
              <LiveContext client:visible />
              <hr className="divider" />
              <ModelTeaser hideCta={true} />
            </>
          )}
        </div>

        {/* TAB 2: PREMIUM */}
        <div className={`pro-tab-panel ${activeTab === 'premium' ? 'active' : ''}`} role="tabpanel" style={{ display: activeTab === 'premium' ? 'block' : 'none' }}>
          {visitedTabs.premium && (
            <>
              <DevTeam />
              <section className="premium-details-section">
                <div className="section-inner">
                  <div className="premium-details-grid cards-grid">
                    <div className="panel reveal is-visible">
                      <div className="panel-index">01</div>
                      <h3 className="panel-title">Командный контекст</h3>
                      <p className="panel-copy">
                        Logitaka синхронизирует понимание проектов между всеми участниками команды. Задачи, открытые вопросы и решения видны каждому, исключая «испорченный телефон».
                      </p>
                    </div>
                    <div className="panel reveal is-visible">
                      <div className="panel-index">02</div>
                      <h3 className="panel-title">On-Premise и Private Cloud</h3>
                      <p className="panel-copy">
                        Для компаний со сверхвысокими требованиями безопасности мы разворачиваем Logitaka в их собственном облаке или локальной инфраструктуре с выделенными локальными моделями.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>

        {/* TAB 3: MODELS */}
        <div className={`pro-tab-panel ${activeTab === 'models' ? 'active' : ''}`} role="tabpanel" style={{ display: activeTab === 'models' ? 'block' : 'none' }}>
          {visitedTabs.models && <ModelCards />}
        </div>

        {/* TAB 4: COMPARE */}
        <div className={`pro-tab-panel ${activeTab === 'compare' ? 'active' : ''}`} role="tabpanel" style={{ display: activeTab === 'compare' ? 'block' : 'none' }}>
          {visitedTabs.compare && (
            <>
              <PriceChart client:visible />
              <hr className="divider" />
              <CapabilityMatrix />
              <hr className="divider" />
              <ValueStack />
            </>
          )}
        </div>

        {/* TAB 5: ADVISOR */}
        <div className={`pro-tab-panel ${activeTab === 'advisor' ? 'active' : ''}`} role="tabpanel" style={{ display: activeTab === 'advisor' ? 'block' : 'none' }}>
          {visitedTabs.advisor && (
            <>
              <Scenarios />
              <hr className="divider" />
              <AdvisorWidget client:load />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProTabs;
