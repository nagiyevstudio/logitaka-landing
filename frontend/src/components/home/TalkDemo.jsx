import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Timing constants (ms) ─────────────────────────────── */
const CHAR_DELAY     = 40;    // typing speed
const CARD_DELAY     = 900;   // delay between card appearances
const CORRECTION_DELAY = 800;
const PROJECT_RESOLVE_DELAY = 700;
const SLOT_FILL_DELAY = 600;
const SUMMARY_DELAY  = 700;
const APPLY_DELAY    = 1200;
const APPLIED_PAUSE  = 2000;
const RESET_PAUSE    = 1000;

const TOTAL_LOOP_EST = 14000; // rough estimate for timer

const TRANSCRIPT =
  'Call the designer tomorrow at 3, and move the SMM task to Friday in Logitaka';

/* ─── Component ─────────────────────────────────────────── */
const TalkDemo = () => {
  const [phase, setPhase] = useState(0);
  // 0 = idle, 1 = typing, 2 = task card, 3 = event card, 4 = correction card
  // 5 = project resolves, 6 = slot fills, 7 = summary, 8 = apply, 9 = applied, 10 = pause

  const [typedLen, setTypedLen] = useState(0);
  const [timer, setTimer] = useState(180); // 3:00 in seconds
  const [counter, setCounter] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const timeoutRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const mountedRef = useRef(true);

  /* Detect prefers-reduced-motion */
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(mq.matches);
      const handler = (e) => setReduceMotion(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  /* Cleanup on unmount */
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  /* Timer countdown — starts at phase 1 */
  useEffect(() => {
    if (phase >= 1 && phase <= 8 && !reduceMotion) {
      timerIntervalRef.current = setInterval(() => {
        setTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
      return () => clearInterval(timerIntervalRef.current);
    }
  }, [phase, reduceMotion]);

  /* Counter logic */
  useEffect(() => {
    if (phase === 3) setCounter(2);
    if (phase === 4) setCounter(3);
  }, [phase]);

  /* Phase progression */
  const advance = useCallback((nextPhase, delay) => {
    if (!mountedRef.current || reduceMotion) return;
    timeoutRef.current = setTimeout(() => {
      if (mountedRef.current) setPhase(nextPhase);
    }, delay);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    switch (phase) {
      case 0: {
        // Reset everything, then start typing
        setTypedLen(0);
        setTimer(180);
        setCounter(0);
        const t = setTimeout(() => {
          if (mountedRef.current) setPhase(1);
        }, RESET_PAUSE);
        return () => clearTimeout(t);
      }
      case 1: {
        // Typing: advance character by character
        if (typedLen < TRANSCRIPT.length) {
          const t = setTimeout(() => {
            if (mountedRef.current) setTypedLen((l) => l + 1);
          }, CHAR_DELAY);
          return () => clearTimeout(t);
        } else {
          // Typing done → show task card
          advance(2, 500);
        }
        break;
      }
      case 2: {
        advance(3, CARD_DELAY);
        break;
      }
      case 3: {
        advance(4, CARD_DELAY);
        break;
      }
      case 4: {
        // Correction card shown → resolve project
        advance(5, CORRECTION_DELAY);
        break;
      }
      case 5: {
        // Project resolves → fill slot
        advance(6, PROJECT_RESOLVE_DELAY);
        break;
      }
      case 6: {
        // Slot filled → summary
        advance(7, SLOT_FILL_DELAY);
        break;
      }
      case 7: {
        // Summary shown → apply
        advance(8, SUMMARY_DELAY);
        break;
      }
      case 8: {
        // Apply pulsing → applied
        advance(9, APPLY_DELAY);
        break;
      }
      case 9: {
        // Applied state → pause → reset
        advance(10, APPLIED_PAUSE);
        break;
      }
      case 10: {
        // Full reset
        advance(0, RESET_PAUSE);
        break;
      }
      default:
        break;
    }
  }, [phase, typedLen, reduceMotion, advance]);

  /* ─── Static state for reduced motion ─────────────── */
  if (reduceMotion) {
    return (
      <div className="talk-demo-wrap reveal">
        <div
          className="talk-demo-frame"
          role="img"
          aria-label="Logitaka Talk demo: voice transcript assembles structured draft cards — task, event, and correction — across projects, then applies them with one confirm."
        >
          {/* Top bar */}
          <div className="talk-demo-topbar">
            <div className="talk-demo-close" />
            <div className="talk-demo-brand">
              Talk
              <span className="talk-demo-pulse" style={{ animation: 'none' }} />
            </div>
            <div className="talk-demo-sound">🔊</div>
          </div>

          {/* Transcript */}
          <div className="talk-demo-transcript">
            <span className="talk-demo-transcript-text">{TRANSCRIPT}</span>
          </div>

          {/* Cards */}
          <div className="talk-demo-cards">
            {/* Logitaka frame with task + event */}
            <div className="talk-project-frame solid">
              <div className="talk-project-label">Logitaka</div>
              <div className="talk-draft-card visible">
                <div className="talk-card-type">Task</div>
                <div className="talk-card-title">Move SMM task to Friday</div>
              </div>
              <div className="talk-draft-card visible">
                <div className="talk-card-type">Event</div>
                <div className="talk-card-title">Call the designer</div>
                <span className="talk-card-time-chip">15:00</span>
              </div>
            </div>

            {/* Correction card */}
            <div className="talk-draft-card visible">
              <div className="talk-card-type">Correction</div>
              <div className="talk-correction">
                <span className="talk-correction-old">Thu</span>
                <span className="talk-correction-arrow">→</span>
                <span className="talk-correction-new">Fri</span>
              </div>
            </div>

            {/* Batch summary */}
            <div className="talk-batch-summary visible">
              3 changes · 1 project
            </div>
          </div>

          {/* Bottom bar */}
          <div className="talk-demo-bottombar">
            <div className="talk-demo-stop"><div className="talk-demo-stop-inner" /></div>
            <div className="talk-waveform">
              <span className="talk-waveform-bar" style={{ animation: 'none' }} />
              <span className="talk-waveform-bar" style={{ animation: 'none' }} />
              <span className="talk-waveform-bar" style={{ animation: 'none' }} />
              <span className="talk-waveform-bar" style={{ animation: 'none' }} />
              <span className="talk-waveform-bar" style={{ animation: 'none' }} />
            </div>
            <div className="talk-demo-timer">2:14</div>
            <div className="talk-demo-counter">3 / 8</div>
            <div className="talk-demo-apply active" style={{ animation: 'none' }}>Apply</div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Animated state ─────────────────────────────────── */
  const fmtTimer = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const showCard = (minPhase) => phase >= minPhase;
  const isApplied = phase >= 9;

  return (
    <div className="talk-demo-wrap reveal">
      <div
        className="talk-demo-frame"
        role="img"
        aria-label="Logitaka Talk demo: voice transcript assembles structured draft cards — task, event, and correction — across projects, then applies them with one confirm."
      >
        {/* Top bar */}
        <div className="talk-demo-topbar">
          <div className="talk-demo-close" />
          <div className="talk-demo-brand">
            Talk
            {phase >= 1 && phase < 9 && <span className="talk-demo-pulse" />}
          </div>
          <div className="talk-demo-sound">🔊</div>
        </div>

        {/* Transcript strip */}
        <div className="talk-demo-transcript">
          {phase >= 1 && (
            <>
              <span className="talk-demo-transcript-text">
                {TRANSCRIPT.slice(0, typedLen)}
              </span>
              {typedLen < TRANSCRIPT.length && phase === 1 && (
                <span className="talk-demo-cursor" />
              )}
            </>
          )}
        </div>

        {/* Cards area */}
        <div className="talk-demo-cards">
          {/* Logitaka frame — solid from start, but project resolves at phase 5 */}
          <div className="talk-project-frame solid">
            <div className="talk-project-label">Logitaka</div>

            {/* Task card */}
            <div className={`talk-draft-card ${showCard(2) ? (isApplied ? 'applied' : 'visible') : ''}`}>
              {isApplied ? (
                <div className="talk-card-inner">
                  <span className="talk-applied-check">✓ Applied</span>
                  <span className="talk-card-title">Move SMM task to Friday</span>
                </div>
              ) : showCard(2) ? (
                <>
                  <div className="talk-card-type">Task</div>
                  <div className="talk-card-title">Move SMM task to Friday</div>
                  {phase >= 6 && (
                    <div className="talk-card-meta">
                      Date: <span className={`talk-card-slot ${phase >= 6 ? 'filled' : ''}`}>Fri</span>
                    </div>
                  )}
                </>
              ) : null}
            </div>

            {/* Event card */}
            <div className={`talk-draft-card ${showCard(3) ? (isApplied ? 'applied' : 'visible') : ''}`}>
              {isApplied ? (
                <div className="talk-card-inner">
                  <span className="talk-applied-check">✓ Applied</span>
                  <span className="talk-card-title">Call the designer</span>
                  <span className="talk-card-time-chip">15:00</span>
                </div>
              ) : showCard(3) ? (
                <>
                  <div className="talk-card-type">Event</div>
                  <div className="talk-card-title">Call the designer</div>
                  <span className="talk-card-time-chip">15:00</span>
                </>
              ) : null}
            </div>
          </div>

          {/* Dashed Project ? frame that resolves to Logitaka */}
          {phase < 5 && (
            <div className="talk-project-frame dashed">
              <div className="talk-project-label">Project ?</div>
            </div>
          )}

          {/* Correction card */}
          <div className={`talk-draft-card ${showCard(4) ? (isApplied ? 'applied' : 'visible') : ''}`}>
            {isApplied ? (
              <div className="talk-card-inner">
                <span className="talk-applied-check">✓ Applied</span>
                <div className="talk-correction">
                  <span className="talk-correction-old">Thu</span>
                  <span className="talk-correction-arrow">→</span>
                  <span className="talk-correction-new">Fri</span>
                </div>
              </div>
            ) : showCard(4) ? (
              <>
                <div className="talk-card-type">Correction</div>
                <div className="talk-correction">
                  <span className="talk-correction-old">Thu</span>
                  <span className="talk-correction-arrow">→</span>
                  <span className="talk-correction-new">Fri</span>
                </div>
              </>
            ) : null}
          </div>

          {/* Batch summary */}
          <div className={`talk-batch-summary ${phase >= 7 ? 'visible' : ''}`}>
            3 changes · 1 project
          </div>
        </div>

        {/* Bottom bar */}
        <div className="talk-demo-bottombar">
          <div className="talk-demo-stop"><div className="talk-demo-stop-inner" /></div>
          <div className="talk-waveform">
            <span className="talk-waveform-bar" />
            <span className="talk-waveform-bar" />
            <span className="talk-waveform-bar" />
            <span className="talk-waveform-bar" />
            <span className="talk-waveform-bar" />
          </div>
          <div className="talk-demo-timer">{fmtTimer(timer)}</div>
          <div className="talk-demo-counter">{counter} / 8</div>
          <div className={`talk-demo-apply ${phase >= 8 ? 'active' : ''}`}>
            Apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkDemo;