import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ContextCard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Small delay to trigger animation
    const timer = setTimeout(() => {
      setProgress(40);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const pd = t('landing.contextCard', { returnObjects: true });
  if (!pd || !pd.overview) return null;

  return (
    <div className="pc-root reveal" aria-hidden="true">
      <div className="pc-card">
        <div className="pc-topbar">
          <div className="pc-project-name">
            {pd.project}
            <span className="pc-badge">{pd.badge}</span>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>
            {pd.subtitle}
          </div>
        </div>
        
        <div className="pc-tabs">
          <div 
            className={`pc-tab ${activeTab === 'overview' ? 'active' : ''}`} 
            onClick={() => setActiveTab('overview')}
          >
            {pd.tabs.overview}
          </div>
          <div 
            className={`pc-tab ${activeTab === 'decisions' ? 'active' : ''}`} 
            onClick={() => setActiveTab('decisions')}
          >
            {pd.tabs.decisions}
          </div>
          <div 
            className={`pc-tab ${activeTab === 'history' ? 'active' : ''}`} 
            onClick={() => setActiveTab('history')}
          >
            {pd.tabs.history}
          </div>
        </div>

        {/* OVERVIEW TAB */}
        <div className={`pc-panel pc-body ${activeTab === 'overview' ? 'active' : ''}`}>
          <div className="pc-section">
            <div className="pc-section-label">{pd.labels.status}</div>
            <div className="pc-status-row">
              <div className="pc-status-text">{pd.overview.statusText}</div>
              <div className="pc-progress-bar">
                <div className="pc-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="pc-pct">40%</div>
            </div>
          </div>
          <div className="pc-divider"></div>
          
          <div className="pc-section">
            <div className="pc-section-label">{pd.labels.tasks}</div>
            <div className="pc-tasks">
              {pd.overview.tasks.map((task, idx) => (
                <div className="pc-task" key={idx}>
                  <div className={`pc-task-check ${task.done ? 'done' : ''}`}></div>
                  <span className={`pc-task-text ${task.done ? 'done' : ''}`}>{task.text}</span>
                  <span className={`pc-task-due ${task.urgent ? 'urgent' : ''}`}>{task.due}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pc-divider"></div>
          
          <div className="pc-section">
            <div className="pc-section-label">{pd.labels.questions}</div>
            <div className="pc-questions">
              {pd.overview.questions.map((q, idx) => (
                <div className="pc-question" key={idx}>
                  <span className="pc-q-icon">?</span>{q}
                </div>
              ))}
            </div>
          </div>
          
          <div className="pc-model-row">
            <span style={{ fontSize: '10px', color: 'var(--muted)' }}>{pd.labels.models}</span>
            <span className="pc-model-chip">{pd.labels.chipReasons}</span>
            <span className="pc-model-chip">{pd.labels.chipIsolated}</span>
          </div>
        </div>

        {/* DECISIONS TAB */}
        <div className={`pc-panel pc-body ${activeTab === 'decisions' ? 'active' : ''}`}>
          <div className="pc-section">
            <div className="pc-section-label">{pd.labels.decisions}</div>
            <div className="pc-decisions" style={{ display: 'grid', gap: '10px' }}>
              {pd.decisions.map((dec, idx) => (
                <div className="pc-decision" key={idx} style={{ 
                  display: 'grid', 
                  gap: '6px', 
                  padding: '12px 14px', 
                  background: 'var(--surface-dim)', 
                  borderRadius: '8px', 
                  border: '1px solid var(--line)' 
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <div className="pc-decision-text" style={{ fontWeight: 650, color: 'var(--text)', fontSize: '0.88rem', lineHeight: 1.4 }}>
                      {dec.text}
                    </div>
                    <span className="pc-decision-date" style={{ fontSize: '0.72rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                      {dec.date}
                    </span>
                  </div>
                  {dec.why && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.4 }}>
                      <strong style={{ color: 'var(--text)' }}>{pd.labels.why}</strong> {dec.why}
                    </div>
                  )}
                  {dec.impact && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent)', lineHeight: 1.4 }}>
                      <strong>{pd.labels.impact}</strong> {dec.impact}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HISTORY TAB */}
        <div className={`pc-panel pc-body ${activeTab === 'history' ? 'active' : ''}`}>
          <div className="pc-section">
            <div className="pc-section-label">{pd.labels.history}</div>
            <div className="pc-timeline">
              {pd.history.map((item, idx) => (
                <div className="pc-tl-item" key={idx}>
                  <div className="pc-tl-left">
                    <div className={`pc-tl-dot ${idx === 0 ? 'current' : ''}`}></div>
                    <div className="pc-tl-line"></div>
                  </div>
                  <div>
                    <div className="pc-tl-date">{item.date}</div>
                    <div className="pc-tl-content">
                      <strong>{item.title}</strong>{item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContextCard;
