import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const getCostColor = (cost) => {
  if (!cost) return 'var(--text)';
  const cleanCost = cost.replace(/\s/g, '');
  return { 
    '$': 'var(--faint)', 
    '$$': '#16a34a', 
    '$$$': '#d97706', 
    '$$$$': '#ea580c', 
    '$$$$$': '#b91c1c' 
  }[cleanCost] || 'var(--text)';
};

const AdvisorWidget = () => {
  const { t } = useTranslation();
  const data = t('models_page.advisorData', { returnObjects: true }) || [];
  const taskLabels = t('models_page.advisor.taskLabels', { returnObjects: true }) || {};
  const contourLabels = t('models_page.advisor.contourLabels', { returnObjects: true }) || {};
  const labels = t('models_page.labels', { returnObjects: true }) || {};

  const [selCatId, setSelCatId] = useState(data[0]?.categoryId || '');
  const [selRoleId, setSelRoleId] = useState(data[0]?.roles[0]?.roleId || '');

  const selCat = data.find(c => c.categoryId === selCatId);
  const selRole = selCat?.roles.find(r => r.roleId === selRoleId);

  const handleSetCategory = (id) => {
    setSelCatId(id);
    const cat = data.find(c => c.categoryId === id);
    if (cat) setSelRoleId(cat.roles[0].roleId);
  };

  return (
    <section id="advisor">
      <div className="wrap">
        <div className="advisor-container reveal">
          <div className="advisor-header">
            <h2 className="advisor-title">{t('models_page.advisor.title')}</h2>
            <p className="advisor-subtitle">{t('models_page.advisor.subtitle')}</p>
          </div>
          
          <div className="advisor-tabs">
            {data.map(c => (
              <button 
                key={c.categoryId}
                className={`tab-btn ${c.categoryId === selCatId ? 'active' : ''}`} 
                onClick={() => handleSetCategory(c.categoryId)}
              >
                {c.categoryLabel}
              </button>
            ))}
          </div>
          
          <div className="advisor-roles">
            {selCat?.roles.map(r => (
              <button 
                key={r.roleId}
                className={`role-chip ${r.roleId === selRoleId ? 'active' : ''}`} 
                onClick={() => setSelRoleId(r.roleId)}
              >
                {r.roleLabel}
              </button>
            ))}
          </div>
          
          {selRole && (
            <div className="advisor-results" key={selRoleId}>
              <div className="rationale-box">{selRole.rationale}</div>
              <span className="results-section-label">{labels.byTaskType}</span>
              <div className="results-grid">
                {Object.entries(selRole.tasks).map(([k, task]) => (
                  <div className="adv-card" key={k}>
                    <div className="adv-card-header">
                      <span className="adv-card-label">{taskLabels[k] || k}</span>
                      <span className="cost-indicator" style={{ color: getCostColor(task.cost) }}>{task.cost}</span>
                    </div>
                    <span className="adv-card-model">{task.model}</span>
                  </div>
                ))}
              </div>
              <span className="results-section-label">{labels.insideLogitaka}</span>
              <div className="results-subgrid">
                {Object.entries(selRole.contours).filter(([_, c]) => c).map(([k, contour]) => (
                  <div className="adv-card" key={k}>
                    <div className="adv-card-header">
                      <span className="adv-card-label">{contourLabels[k] || k}</span>
                      <span className="cost-indicator" style={{ color: getCostColor(contour.cost) }}>{contour.cost}</span>
                    </div>
                    <span className="adv-card-model">{contour.model}</span>
                    <p className="adv-card-desc">{contour.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvisorWidget;
