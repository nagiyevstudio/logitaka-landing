/* ─── INDEX PAGE LOGIC ─────────────────────────────────────── */
(function () {
  const dom = {
    navLinks: document.getElementById('nav-links'),
    languageSwitcher: document.getElementById('language-switcher'),
    themeToggle: document.getElementById('theme-toggle'),
    brandTagline1: document.getElementById('brand-tagline-1'),
    brandTagline2: document.getElementById('brand-tagline-2'),
    heroKicker: document.getElementById('hero-kicker'),
    heroHeadline: document.getElementById('hero-headline'),
    heroSubheadline: document.getElementById('hero-subheadline'),
    heroVisualCards: document.getElementById('hero-visual-cards'),
    statsBar: document.getElementById('stats-bar'),
    problemTitle: document.getElementById('problem-title'),
    problemGrid: document.getElementById('problem-grid'),
    problemClosing: document.getElementById('problem-closing'),
    transformationTitle: document.getElementById('transformation-title'),
    transformationBody1: document.getElementById('transformation-body-1'),
    transformationBody2: document.getElementById('transformation-body-2'),
    transformationCoreLabel: document.getElementById('transformation-core-label'),
    transformationCoreBody: document.getElementById('transformation-core-body'),
    transformationListLabel: document.getElementById('transformation-list-label'),
    transformationList: document.getElementById('transformation-list'),
    capabilitiesTitle: document.getElementById('capabilities-title'),
    capabilitiesGrid: document.getElementById('capabilities-grid'),
    capabilitiesClosing: document.getElementById('capabilities-closing'),
    contextLabel: document.getElementById('context-label'),
    contextTitle: document.getElementById('context-title'),
    contextCopy: document.getElementById('context-copy'),
    contextClosing: document.getElementById('context-closing'),
    contextModelsLabel: document.getElementById('context-models-label'),
    contextModels: document.getElementById('context-models'),
    contextVisualPlaceholder: document.getElementById('context-visual-placeholder'),
    modelTeaserTitle: document.getElementById('model-teaser-title'),
    modelTeaserSubtitle: document.getElementById('model-teaser-subtitle'),
    modelTeaserBullets: document.getElementById('model-teaser-bullets'),
    modelTeaserCta: document.getElementById('model-teaser-cta'),
    teaserCard1Title: document.getElementById('teaser-card1-title'),
    teaserCard1Desc: document.getElementById('teaser-card1-desc'),
    teaserCard1Badge: document.getElementById('teaser-card1-badge'),
    teaserCard2Title: document.getElementById('teaser-card2-title'),
    teaserCard2Desc: document.getElementById('teaser-card2-desc'),
    teaserCard2Badge: document.getElementById('teaser-card2-badge'),
    audienceTitle: document.getElementById('audience-title'),
    audienceGrid: document.getElementById('audience-grid'),
    audienceClosing: document.getElementById('audience-closing'),
    devTeamLabel: document.getElementById('dev-team-label'),
    devTeamTitle: document.getElementById('dev-team-title'),
    devTeamCopy: document.getElementById('dev-team-copy'),
    devTeamClosing: document.getElementById('dev-team-closing'),
    devTeamVisualLabel: document.getElementById('dev-team-visual-label'),
    devTeamPoints: document.getElementById('dev-team-points'),
    devTeamVisualSlot: document.getElementById('dev-team-visual-slot'),
    pricingTitle: document.getElementById('pricing-title'),
    pricingGrid: document.getElementById('pricing-grid'),
    valueStackLabel: document.getElementById('value-stack-label'),
    valueStackTitle: document.getElementById('value-stack-title'),
    valueStackSubtitle: document.getElementById('value-stack-subtitle'),
    valueStackRows: document.getElementById('value-stack-rows'),
    vsTotalLabel: document.getElementById('vs-total-label'),
    vsTotalUsd: document.getElementById('vs-total-usd'),
    vsTotalAzn: document.getElementById('vs-total-azn'),
    vsDisclaimer: document.getElementById('vs-disclaimer'),
    vsLabel: document.getElementById('vs-label'),
    vsOldLabel: document.getElementById('vs-old-label'),
    vsOldPrice: document.getElementById('vs-old-price'),
    vsNewLabel: document.getElementById('vs-new-label'),
    vsNewPrice: document.getElementById('vs-new-price'),
    vsNewSub: document.getElementById('vs-new-sub'),
    vsBadgeText: document.getElementById('vs-badge-text'),
    faqTitle: document.getElementById('faq-title'),
    faqList: document.getElementById('faq-list'),
    finalCtaTitle: document.getElementById('final-cta-title'),
    finalCtaBody: document.getElementById('final-cta-body'),
    finalCtaPrimary: document.getElementById('final-cta-primary'),
    finalCtaNotice: document.getElementById('final-cta-notice'),
    footerTagline: document.getElementById('footer-tagline'),
    footerNavList: document.getElementById('footer-nav-list'),
    footerLegalList: document.getElementById('footer-legal-list'),
    footerCopyright: document.getElementById('footer-copyright'),
    siteHeader: document.getElementById('site-header'),
  };

  let state = { locale: null, theme: null, messages: null };

  // Header scroll shadow
  const headerObserver = new IntersectionObserver(
    ([entry]) => { dom.siteHeader.classList.toggle('scrolled', !entry.isIntersecting); },
    { threshold: 0 }
  );
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;pointer-events:none';
  document.body.prepend(sentinel);
  headerObserver.observe(sentinel);

  // Reveal on scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  function observeRevealElements() { document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el)); }

  function renderNav(items) { dom.navLinks.innerHTML = items.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join(''); }
  function renderBulletList(c, items) { c.innerHTML = items.map(i => `<li>${i}</li>`).join(''); }
  function renderParagraphs(c, items) { c.innerHTML = items.map(i => `<p>${i}</p>`).join(''); }

  function renderHero(m) {
    dom.heroKicker.textContent = m.hero.kicker;
    dom.heroHeadline.textContent = m.hero.headline;
    dom.heroSubheadline.textContent = m.hero.subheadline;
    dom.statsBar.innerHTML = m.hero.stats.map(s => `<div class="stat-item"><span class="stat-value">${s.value}</span><span class="stat-label">${s.label}</span></div>`).join('');
    dom.heroVisualCards.innerHTML = m.hero.visualCards.map((item, i) => `
      <article class="visual-flow-card">
        <div class="vfc-label">${String(i + 1).padStart(2, '0')} / ${item.title}</div>
        <div class="vfc-body">${item.body}</div>
        <div class="vfc-dots"><span class="vfc-dot ${i===0?'active':''}"></span><span class="vfc-dot ${i===1?'active':''}"></span><span class="vfc-dot ${i===2?'active':''}"></span></div>
      </article>`).join('');
  }

  function renderPanels(c, items) {
    c.innerHTML = items.map((item, i) => `<article class="panel reveal"><div class="panel-index">${String(i+1).padStart(2,'0')}</div><h3 class="panel-title">${item.title}</h3><p class="panel-copy">${item.body}</p></article>`).join('');
  }

  function renderModelTeaser(t) {
    dom.modelTeaserTitle.textContent = t.title; dom.modelTeaserSubtitle.textContent = t.subtitle; dom.modelTeaserCta.textContent = t.cta;
    renderBulletList(dom.modelTeaserBullets, t.bullets);
    dom.teaserCard1Title.textContent = t.card1.title; dom.teaserCard1Desc.textContent = t.card1.desc; dom.teaserCard1Badge.textContent = t.card1.badge;
    dom.teaserCard2Title.textContent = t.card2.title; dom.teaserCard2Desc.textContent = t.card2.desc; dom.teaserCard2Badge.textContent = t.card2.badge;
  }

  function renderValueStack(vs) {
    dom.valueStackLabel.textContent = vs.label; dom.valueStackTitle.textContent = vs.title; dom.valueStackSubtitle.textContent = vs.subtitle;
    dom.valueStackRows.innerHTML = vs.services.map(s => `<div class="vst-row"><div class="vst-name">${s.name}<span class="vst-provider">${s.provider}</span></div><span class="vst-price-usd">${s.priceUSD}${vs.perMonth}</span><span class="vst-price-azn">${s.priceAZN}</span></div>`).join('');
    dom.vsTotalLabel.textContent = vs.totalLabel; dom.vsTotalUsd.textContent = vs.totalUSD; dom.vsTotalAzn.textContent = vs.totalAZN; dom.vsDisclaimer.textContent = vs.disclaimer;
    dom.vsLabel.textContent = vs.vsLabel; dom.vsOldLabel.textContent = vs.totalLabel; dom.vsOldPrice.textContent = vs.totalAZN;
    dom.vsNewLabel.textContent = vs.logitakaLabel; dom.vsNewPrice.textContent = vs.logitakaPrice; dom.vsNewSub.textContent = vs.perMonth; dom.vsBadgeText.textContent = vs.logitakaLabel;
  }

  function renderPricing(pr) {
    dom.pricingGrid.innerHTML = pr.cards.map((card, i) => {
      const isCustom = i === pr.cards.length - 1;
      const betaHtml = !isCustom ? `<p class="pricing-beta-note">${pr.betaNote}</p>` : '';
      const btnClass = i === 1 ? 'button button-solid' : 'button button-ghost';
      return `<article class="pricing-card ${i===1?'is-featured':''} reveal"><span class="pricing-badge">${pr.popularBadge}</span><div class="panel-index">${card.label}</div><h3 class="pricing-name">${card.name}</h3><p class="pricing-price">${card.price}</p><p class="pricing-copy">${card.body}</p><div class="pricing-card-footer">${betaHtml}<a class="${btnClass}" href="${card.href||'#final-cta'}">${card.cta}</a></div></article>`;
    }).join('');
  }

  function renderFaq(items) {
    dom.faqList.innerHTML = items.map((item, i) => `<details class="faq-item" ${i===0?'open':''}><summary><span>${item.question}</span><span class="faq-toggle" aria-hidden="true">+</span></summary><div class="faq-answer">${item.answer}</div></details>`).join('');
  }

  function renderLanguageSwitcher(active) {
    dom.languageSwitcher.innerHTML = SUPPORTED_LOCALES.map(l => `<button class="control-button ${l===active?'is-active':''}" type="button" data-locale="${l}">${l.toUpperCase()}</button>`).join('');
    dom.languageSwitcher.querySelectorAll('[data-locale]').forEach(b => b.addEventListener('click', () => switchLanguage(b.getAttribute('data-locale'))));
  }

  function render(messages) {
    state.messages = messages;
    document.documentElement.lang = state.locale;
    document.title = messages.meta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', messages.meta.description);
    renderNav(messages.ui.nav);
    renderLanguageSwitcher(state.locale);
    applyTheme(state.theme || getInitialTheme());
    dom.brandTagline1.textContent = messages.ui.brandTagline;
    dom.brandTagline2.textContent = messages.ui.brandTagline;
    renderHero(messages);
    dom.problemTitle.textContent = messages.problem.title;
    renderPanels(dom.problemGrid, messages.problem.items);
    dom.problemClosing.textContent = messages.problem.closing;
    dom.transformationTitle.textContent = messages.transformation.title;
    dom.transformationBody1.textContent = messages.transformation.body[0];
    dom.transformationBody2.textContent = messages.transformation.body[1];
    dom.transformationCoreLabel.textContent = messages.transformation.coreLabel;
    dom.transformationCoreBody.textContent = messages.transformation.coreBody;
    dom.transformationListLabel.textContent = messages.transformation.listLabel;
    renderBulletList(dom.transformationList, messages.transformation.list);
    dom.capabilitiesTitle.textContent = messages.capabilities.title;
    renderPanels(dom.capabilitiesGrid, messages.capabilities.items);
    dom.capabilitiesClosing.textContent = messages.capabilities.closing;
    dom.contextLabel.textContent = messages.context.label;
    dom.contextTitle.textContent = messages.context.title;
    renderParagraphs(dom.contextCopy, messages.context.body);
    dom.contextClosing.textContent = messages.context.closing;
    dom.contextModelsLabel.textContent = messages.context.modelsLabel;
    dom.contextModels.textContent = messages.context.models.join(', ');
    renderModelTeaser(messages.modelTeaser);
    if (messages.ui.imagePlaceholders.context.match(/\.(png|jpg|jpeg|svg|webp)$/i)) {
      dom.contextVisualPlaceholder.innerHTML = `<img src="${messages.ui.imagePlaceholders.context}" alt="" style="width:100%;height:auto;display:block;">`;
      dom.contextVisualPlaceholder.style.padding = '0';
    } else { dom.contextVisualPlaceholder.textContent = messages.ui.imagePlaceholders.context; dom.contextVisualPlaceholder.style.padding = '16px'; }
    dom.audienceTitle.textContent = messages.audience.title;
    renderPanels(dom.audienceGrid, messages.audience.items);
    dom.audienceClosing.textContent = messages.audience.closing;
    dom.devTeamLabel.textContent = messages.devTeam.label;
    dom.devTeamTitle.textContent = messages.devTeam.title;
    renderParagraphs(dom.devTeamCopy, messages.devTeam.body);
    dom.devTeamClosing.textContent = messages.devTeam.closing;
    dom.devTeamVisualLabel.textContent = messages.devTeam.visualLabel;
    renderBulletList(dom.devTeamPoints, messages.devTeam.points);
    if (messages.ui.imagePlaceholders.dev.match(/\.(png|jpg|jpeg|svg|webp)$/i)) {
      dom.devTeamVisualSlot.innerHTML = `<img src="${messages.ui.imagePlaceholders.dev}" alt="" style="width:100%;height:auto;display:block;">`;
      dom.devTeamVisualSlot.style.border = 'none'; dom.devTeamVisualSlot.style.background = 'transparent';
    } else { dom.devTeamVisualSlot.textContent = messages.ui.imagePlaceholders.dev; }
    dom.pricingTitle.textContent = messages.pricing.title;
    renderPricing(messages.pricing);
    renderValueStack(messages.valueStack);
    dom.faqTitle.textContent = messages.faq.title;
    renderFaq(messages.faq.items);
    dom.finalCtaTitle.textContent = messages.finalCta.title;
    dom.finalCtaBody.textContent = messages.finalCta.body;
    dom.finalCtaPrimary.textContent = messages.finalCta.primary;
    dom.finalCtaNotice.innerHTML = messages.finalCta.notice;
    dom.footerTagline.textContent = messages.footer.tagline;
    dom.footerCopyright.textContent = messages.footer.copyright;
    dom.footerNavList.innerHTML = messages.footer.nav.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join('');
    dom.footerLegalList.innerHTML = messages.footer.legal.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join('');
    requestAnimationFrame(() => observeRevealElements());
  }

  async function loadLocale(locale) {
    const target = SUPPORTED_LOCALES.includes(locale) ? locale : 'az';
    const isLocalized = SUPPORTED_LOCALES.some(l => window.location.pathname.includes(`/${l}/`));
    const prefix = isLocalized ? '../' : './';
    const res = await fetch(`${prefix}locales/${target}.json`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load locale: ${target}`);
    const messages = await res.json();
    state.locale = target;
    localStorage.setItem(STORAGE_KEYS.locale, target);
    render(messages);
  }

  dom.themeToggle.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  (async function init() {
    state.theme = getInitialTheme();
    try { await loadLocale(getInitialLocale()); }
    catch (e) { console.error(e); await loadLocale('az'); }
  })();
})();