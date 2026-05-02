/* ─── MODELS PAGE LOGIC ────────────────────────────────────── */
(function () {
  // ── LOCALIZATION ──────────────────────────────────────
  let state = {
    locale: localStorage.getItem(STORAGE_KEYS.locale) || 'ru',
    messages: null
  };

  async function loadLocale(lang) {
    try {
      const response = await fetch(`./locales/models_${lang}.json`);
      if (!response.ok) throw new Error(`Locale ${lang} not found`);
      state.messages = await response.json();
      state.locale = lang;
      localStorage.setItem(STORAGE_KEYS.locale, lang);
      renderAll();
    } catch (err) {
      console.error('Localization error:', err);
      if (lang !== 'ru') loadLocale('ru');
    }
  }

  function setLanguage(lang) { loadLocale(lang); }
  window.setLanguage = setLanguage;

  function renderAll() {
    const m = state.messages;
    if (!m) return;

    // Meta
    document.getElementById('meta-title').textContent = m.meta.title;

    // UI
    document.getElementById('ui-brandTagline').textContent = m.ui.brandTagline;
    document.getElementById('ui-brandTagline2').textContent = m.ui.brandTagline;
    document.getElementById('themeToggle').title = m.ui.themeToggle;

    // Hero
    document.getElementById('hero-pill').textContent = m.hero.pill;
    document.getElementById('hero-title').innerHTML = m.hero.title;
    document.getElementById('hero-description1').textContent = m.hero.description1;
    document.getElementById('hero-description2').textContent = m.hero.description2;

    // Intro
    document.getElementById('intro-eyebrow').textContent = m.intro.eyebrow;
    document.getElementById('intro-title').textContent = m.intro.title;
    document.getElementById('intro-description').textContent = m.intro.description;

    // Price
    document.getElementById('price-eyebrow').textContent = m.price.eyebrow;
    document.getElementById('price-title').textContent = m.price.title;
    document.getElementById('price-description').textContent = m.price.description;

    // Matrix
    document.getElementById('matrix-eyebrow').textContent = m.matrix.eyebrow;
    document.getElementById('matrix-title').textContent = m.matrix.title;
    document.getElementById('matrix-description').textContent = m.matrix.description;

    // Scenarios
    document.getElementById('scenarios-eyebrow').textContent = m.scenarios.eyebrow;
    document.getElementById('scenarios-title').textContent = m.scenarios.title;
    document.getElementById('scenarios-description').textContent = m.scenarios.description;

    // Advisor
    document.getElementById('advisor-title').textContent = m.advisor.title;
    document.getElementById('advisor-subtitle').textContent = m.advisor.subtitle;
    // Footer
    document.getElementById('footer-copyright').textContent = m.footer.copyright;

    // Language buttons
    document.querySelectorAll('#language-switcher .tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.toLowerCase() === state.locale);
      btn.style.cssText = "padding: 5px 12px; font-size: 0.7rem;";
    });

    // Data-driven components
    renderModels(m.models, m.labels);
    renderPriceChart(m.models, m.price.legend);
    renderMatrix(m.models, m.matrix.cols, m.labels.model);
    renderScenarios(m.scenarioItems, m.scenarios.recommendLabel);
    initAdvisor(m.advisorData, m.advisor.taskLabels, m.advisor.contourLabels, m.labels);
  }

  // ── DATA RENDERING ─────────────────────────────────────

  function renderModels(models, labels) {
    const grid = document.getElementById('modelsGrid');
    grid.innerHTML = models.map(m => `
      <div class="model-card reveal" data-tier="${m.tier}">
        <div class="card-top">
          <div class="model-meta">
            <span class="model-provider">${m.provider}</span>
            <h3 class="model-name">${m.name}</h3>
          </div>
          <span class="tier-tag" data-tier="${m.tier}">${m.tierLabel}</span>
        </div>
        <p class="model-about">${m.about}</p>
        <div>
          <div class="chips-label">${labels.strengths}</div>
          <div class="chips">${m.strengths.map(s => `<span class="chip">${s}</span>`).join('')}</div>
        </div>
        <div class="logitaka-note">
          <div class="logitaka-note-label">${labels.insideLogitaka}</div>
          ${m.logitaka}
        </div>
        <div class="excessive-note">
          <div class="excessive-label">${labels.excessiveWhen}</div>
          ${m.excessive}
        </div>
      </div>
    `).join('');
    document.querySelectorAll('.models-grid .reveal').forEach(el => io.observe(el));
  }

  function renderPriceChart(models, legend) {
    const rows = document.getElementById('priceRows');
    rows.innerHTML = models.map(m => `
      <div class="price-row">
        <div class="price-name">${m.name}</div>
        <div class="bar-track">
          <div class="bar-fill" style="background:${getTierColor(m.tier)}" data-w="${(m.cost/14.6)*100}"></div>
        </div>
      </div>
    `).join('');

    const leg = document.getElementById('chartLegend');
    leg.innerHTML = Object.entries(legend).map(([tier, label]) => `
      <div class="legend-item">
        <span class="legend-dot" style="background:${getTierColor(tier)}"></span>
        ${label}
      </div>
    `).join('');

    const chartWrap = document.querySelector('.chart-wrap');
    if (chartWrap) barObserver.observe(chartWrap);
  }

  function getTierColor(t) {
    return { base:'#14b8a6', eco:'#16a34a', mid:'#d97706', pro:'#ff4500', heavy:'#b91c1c' }[t];
  }

  function renderMatrix(models, cols, modelLabel) {
    const table = document.getElementById('capTable');
    const scores = {
      qwen:[4,2,5,4,3,1], glm:[4,2,5,4,3,2], mistral:[4,3,5,4,4,1], kimi:[3,2,3,4,5,2],
      deepseek:[4,2,4,5,5,2], grok:[4,3,4,4,4,3], gemini:[4,5,3,4,5,4], sonnet:[5,4,4,5,5,4],
      opus:[5,5,3,5,5,5], gpt:[5,4,4,5,5,5]
    };

    table.innerHTML = `
      <thead><tr><th>${modelLabel}</th>${cols.map(c => `<th>${c}</th>`).join('')}</tr></thead>
      <tbody>
        ${models.map(m => `
          <tr>
            <td>${m.name}</td>
            ${(scores[m.id]||[]).map(s => `<td><div class="dots">${[1,2,3,4,5].map(v => `<span class="dot ${v<=s?'on':'off'}"></span>`).join('')}</div></td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    `;
  }

  function renderScenarios(items, recLabel) {
    const grid = document.getElementById('scenariosGrid');
    grid.innerHTML = items.map(s => `
      <div class="scenario-card reveal">
        <div class="scenario-icon">${s.icon}</div>
        <h3 class="scenario-title">${s.title}</h3>
        <p class="scenario-desc">${s.desc}</p>
        <div>
          <div class="rec-label">${recLabel}</div>
          <div class="rec-models">${s.models.map(m => `<span class="model-tag">${m}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');
    document.querySelectorAll('.scenarios-grid .reveal').forEach(el => io.observe(el));
  }

  // ── ADVISOR LOGIC ──────────────────────────────────────
  let advisorState = { category: '', role: '', data: null, taskLabels: null, contourLabels: null, labels: null };

  function initAdvisor(data, taskLabels, contourLabels, labels) {
    advisorState.data = data;
    advisorState.taskLabels = taskLabels;
    advisorState.contourLabels = contourLabels;
    advisorState.labels = labels;
    advisorState.category = data[0].categoryId;
    advisorState.role = data[0].roles[0].roleId;
    renderAdvisor();
  }

  window.setCategory = (id) => {
    advisorState.category = id;
    const cat = advisorState.data.find(c => c.categoryId === id);
    advisorState.role = cat.roles[0].roleId;
    renderAdvisor();
  };

  window.setRole = (id) => {
    advisorState.role = id;
    renderAdvisor();
  };

  function getCostColor(cost) {
    if (!cost) return 'var(--text)';
    const cleanCost = cost.replace(/\s/g, '');
    return { '$': 'var(--faint)', '$$': '#16a34a', '$$$': '#d97706', '$$$$': '#ea580c', '$$$$$': '#b91c1c' }[cleanCost] || 'var(--text)';
  }

  function renderAdvisor() {
    const tabsEl = document.getElementById('advisorTabs');
    const rolesEl = document.getElementById('advisorRoles');
    const resultEl = document.getElementById('advisorResult');
    const { data, category: selCat, role: selRole, taskLabels, contourLabels } = advisorState;

    tabsEl.innerHTML = data.map(c => `
      <button class="tab-btn ${c.categoryId === selCat ? 'active' : ''}" onclick="setCategory('${c.categoryId}')">${c.categoryLabel}</button>
    `).join('');

    const cat = data.find(c => c.categoryId === selCat);
    rolesEl.innerHTML = cat.roles.map(r => `
      <button class="role-chip ${r.roleId === selRole ? 'active' : ''}" onclick="setRole('${r.roleId}')">${r.roleLabel}</button>
    `).join('');

    const role = cat.roles.find(r => r.roleId === selRole);
    const taskCards = Object.entries(role.tasks).map(([k, t]) => `
      <div class="adv-card">
        <div class="adv-card-header">
          <span class="adv-card-label">${taskLabels[k] || k}</span>
          <span class="cost-indicator" style="color:${getCostColor(t.cost)}">${t.cost}</span>
        </div>
        <span class="adv-card-model">${t.model}</span>
      </div>
    `).join('');

    const contourCards = Object.entries(role.contours).filter(([_, c]) => c).map(([k, c]) => `
      <div class="adv-card">
        <div class="adv-card-header">
          <span class="adv-card-label">${contourLabels[k] || k}</span>
          <span class="cost-indicator" style="color:${getCostColor(c.cost)}">${c.cost}</span>
        </div>
        <span class="adv-card-model">${c.model}</span>
        <p class="adv-card-desc">${c.desc}</p>
      </div>
    `).join('');

    resultEl.innerHTML = `
      <div class="advisor-results" key="${selRole}">
        <div class="rationale-box">${role.rationale}</div>
        <span class="results-section-label">${advisorState.labels.byTaskType}</span>
        <div class="results-grid">${taskCards}</div>
        <span class="results-section-label">${advisorState.labels.insideLogitaka}</span>
        <div class="results-subgrid">${contourCards}</div>
      </div>
    `;
  }

  // ── OBSERVERS ──────────────────────────────────────────
  let barsFired = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add('in'), idx * 75);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || barsFired) return;
      barsFired = true;
      document.querySelectorAll('.bar-fill').forEach((fill, i) => {
        setTimeout(() => fill.style.width = fill.dataset.w + '%', i * 90);
      });
      barObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  // Observe static .reveal elements (chart, matrix, advisor)
  document.querySelectorAll('.chart-wrap.reveal, .matrix-wrap.reveal, .advisor-container.reveal').forEach(el => io.observe(el));

  // ── INITIALIZATION ─────────────────────────────────────
  loadLocale(state.locale);

  // ── THEME ──────────────────────────────────────────────
  initTheme();
})();