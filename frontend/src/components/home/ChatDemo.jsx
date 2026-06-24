import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ChatDemo = () => {
  const { t } = useTranslation();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);

  const scenariosData = [
    {
      model: "Gemini 3.1 Pro",
      name: t('landing.chatDemo.scenarios.0.name'),
      messages: t('landing.chatDemo.messages.s0', { returnObjects: true })
    },
    {
      model: "Claude Sonnet 4.6",
      name: t('landing.chatDemo.scenarios.1.name'),
      messages: t('landing.chatDemo.messages.s1', { returnObjects: true })
    },
    {
      model: "GPT 5.5",
      name: t('landing.chatDemo.scenarios.2.name'),
      messages: t('landing.chatDemo.messages.s2', { returnObjects: true })
    }
  ];

  const STEP_DELAY = 800;
  const TOTAL_DURATION = 7000;

  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const handleScenarioSelect = (idx) => {
    setCurrentScenario(idx);
    setProgress(0);
    setVisibleMessages([]);
  };

  useEffect(() => {
    // Reveal messages sequentially
    const messages = scenariosData[currentScenario].messages || [];
    setVisibleMessages([]);

    const timeouts = messages.map((_, i) => {
      return setTimeout(() => {
        setVisibleMessages(prev => [...prev, i]);
      }, i * STEP_DELAY + 100);
    });

    // Start progress bar
    if (progressRef.current) clearInterval(progressRef.current);

    // We add a tiny timeout so the progress bar resets properly
    timerRef.current = setTimeout(() => {
      progressRef.current = setInterval(() => {
        setProgress(p => {
          const np = p + (100 / (TOTAL_DURATION / 100));
          if (np >= 100) {
            clearInterval(progressRef.current);
            setCurrentScenario((prev) => (prev + 1) % scenariosData.length);
            return 0;
          }
          return np;
        });
      }, 100);
    }, 50);

    return () => {
      timeouts.forEach(clearTimeout);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentScenario, t]);

  const currentData = scenariosData[currentScenario];

  return (
    <div className="demo-wrap reveal" aria-hidden="true">
      <div className="demo-header">
        <div className="demo-scenarios">
          {scenariosData.map((sc, idx) => (
            <button
              key={idx}
              className={`scenario-btn ${idx === currentScenario ? 'active' : ''}`}
              onClick={() => handleScenarioSelect(idx)}
            >
              {sc.name}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-body">
        {Array.isArray(currentData.messages) && currentData.messages.map((msg, i) => {
          const isVisible = visibleMessages.includes(i);
          if (msg.type === "user") {
            return (
              <div key={i} className={`msg ${isVisible ? 'visible' : ''}`}>
                <div className="msg-label" style={{ textAlign: 'right' }}>{t('landing.chatDemo.roles.user')}</div>
                <div className="msg-user">
                  <div className="msg-user-bubble">{msg.text}</div>
                </div>
              </div>
            );
          } else if (msg.type === "sys") {
            return (
              <div key={i} className={`msg ${isVisible ? 'visible' : ''}`}>
                <div className="msg-label">{t('landing.chatDemo.roles.agent')}</div>
                <div className="msg-sys">
                  <div className="msg-sys-bubble">
                    <span className="msg-sys-icon">{msg.icon}</span>
                    <span>{msg.text}</span>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={i} className={`msg ${isVisible ? 'visible' : ''}`}>
                <div className="msg-label">{t('landing.chatDemo.roles.agent')}</div>
                <div className="msg-agent">
                  <div className="msg-agent-bubble">{msg.text}</div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="demo-footer">
        <div className="dots">
          {scenariosData.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === currentScenario ? 'active' : ''}`}
              onClick={() => handleScenarioSelect(idx)}
            />
          ))}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
              transition: progress === 0 ? 'none' : 'width 0.1s linear'
            }}
          />
        </div>
        <div className="model-tag">{currentData.model}</div>
      </div>
    </div>
  );
};

export default ChatDemo;
