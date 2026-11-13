(() => {
  'use strict';
  const D = window.PORTFOLIO_DATA;
  const main = document.getElementById('main');
  const railButtons = [...document.querySelectorAll('[data-lang]')];
  let lang = 'ko';
  try { lang = localStorage.getItem('portfolioLang') === 'en' ? 'en' : 'ko'; } catch (_) {}
  let filter = 'all';
  const T = () => D.ui[lang];
  const pt = p => p[lang];
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const route = () => decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
  const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>`;
  const hasEmail = () => typeof D.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D.email.trim());
  const image = (im, imageClass='', eager=false) => `<img class="${imageClass}" src="${esc(im.src)}" alt="${esc(im[lang])}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
  const escapeCSS = x => esc(x || '#e9e7df');
  const sectionTitle = (no,a,b) => `<div class="section-heading"><span class="eyebrow">${esc(no)}</span><h2>${esc(a)} <em>${esc(b)}</em></h2></div>`;

  function projectVisual(p, variant='card') {
    const wide = p.style === 'wide';
    const imgs = wide && variant === 'card' ? p.images.slice(0,2) : p.images.slice(0,1);
    return `<div class="project-preview project-preview--${wide?'wide':'poster'} project-preview--${variant}" style="--preview-bg:${escapeCSS(p.coverBg)}">
      <span class="preview-index mono">SELECTED WORK / ${esc(p.number)}</span>
      <div class="preview-artwork">${imgs.map(im=>image(im,'preview-image',false)).join('')}</div>
      <span class="preview-kind mono">${wide?'WEB / DIGITAL':(p.categories.includes('print')?'PRINT / DESIGN':'VISUAL / DESIGN')}</span>
    </div>`;
  }
  function header() {
    document.documentElement.lang = lang;
    railButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
    document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=T()[el.dataset.i18n]);
    document.getElementById('footer-note').textContent = T().footerNote;
    document.title = (lang==='ko'?'시각디자이너 포트폴리오':'Visual Designer Portfolio')+' — Selected Works';
  }
  function card(p, idx) {
    const k=pt(p);
    return `<a class="project-card project-card--${idx%4}" href="#/project/${encodeURIComponent(p.id)}" aria-label="${esc(k.title)} — ${esc(T().viewProject)}">
      <div class="project-card__visual">${projectVisual(p)}<span class="card-arrow" aria-hidden="true">↗</span></div>
      <div class="project-card__meta"><span class="mono">${esc(p.number)} / ${esc(k.subtitle)}</span><div class="card-title-line"><h3>${esc(k.title)}</h3><span aria-hidden="true">↗</span></div><p>${esc(k.summary)}</p></div>
    </a>`;
  }
  function home() {
    const t=T(), email=hasEmail()?D.email.trim():null;
    return `<div class="page page--home">
      <section class="hero wrap" aria-labelledby="hero-title"><div class="hero-top"><span class="eyebrow">${esc(t.eyebrow)}</span><span class="hero-edition mono">ED. 001 — PORTFOLIO</span></div>
        <h1 id="hero-title" class="hero-title"><span>${esc(t.hero1)}</span><span>${esc(t.hero2)}<i class="hero-asterisk">✳</i></span><span class="hero-title-final">${esc(t.hero3)}<span class="hero-period">.</span></span></h1>
        <div class="hero-foot"><div class="hero-rule"></div><p>${esc(t.lead)}</p><a class="text-link" href="#/works">${esc(t.explore)} ${arrow}</a></div>
        <div class="hero-bottom"><span class="mono">VISUAL DESIGN  /  DIGITAL & PRINT</span><span class="mono">${esc(t.scroll)} &nbsp; ↓</span></div>
      </section>
      <section class="works wrap" id="works" aria-labelledby="works-heading"><div class="section-top">${sectionTitle(t.worksEyebrow,t.worksTitle,t.worksTitleItalic)}<p>${esc(t.worksDesc)}</p></div>
        <div class="filters" role="group" aria-label="Project category"><button class="filter" data-filter="all">${esc(t.all)}</button><button class="filter" data-filter="campaign">${esc(t.categoryCampaign)}</button><button class="filter" data-filter="content">${esc(t.categoryContent)}</button><button class="filter" data-filter="digital">${esc(t.categoryDigital)}</button><button class="filter" data-filter="print">${esc(t.categoryPrint)}</button></div>
        <div class="project-grid" id="project-grid"></div>
        <div class="works-end"><span class="mono">END OF SELECTED WORKS / 06 PROJECTS</span><span class="asterisk">✳</span></div>
      </section>
      <section class="about" id="about"><div class="wrap about-grid"><div>${sectionTitle(t.aboutEyebrow,t.aboutTitle,t.aboutTitleItalic)}<p class="about-lead">${esc(t.aboutLead)}</p></div><div class="about-info"><p>${esc(t.aboutText)}</p><dl><div><dt>${esc(t.aboutExperience)}</dt><dd>${esc(t.aboutExperienceValue)}</dd></div><div><dt>${esc(t.aboutFocus)}</dt><dd>${esc(t.aboutFocusValue)}</dd></div><div><dt>${esc(t.aboutTools)}</dt><dd>${esc(t.aboutToolsValue)}</dd></div></dl></div></div></section>
      <section class="contact wrap" id="contact"><span class="eyebrow">${esc(t.contactEyebrow)}</span><h2>${esc(t.contactTitle)}<br><em>${esc(t.contactTitleItalic)}</em></h2><div class="contact-foot"><p>${esc(t.contactDesc)}</p>${email?`<a class="contact-button" href="mailto:${esc(email)}">${esc(t.mailto)} ${arrow}</a>`:`<span class="contact-button contact-button--inactive">${esc(t.emailPending)}</span>`}</div><span class="contact-notice mono">${email?esc(email):'EMAIL / leeel980913@gmail.com'}</span></section>
    </div>`;
  }
  function meta(label,value) { return `<div><span class="mono">${esc(label)}</span><p>${esc(value)}</p></div>`; }
  function detail(p) {
    const t=T(), k=pt(p), next=D.projects[(D.projects.indexOf(p)+1)%D.projects.length], nk=pt(next);
    const gallery=p.images.map((im,i)=>`<figure class="gallery-item"><a href="${esc(im.src)}" target="_blank" rel="noopener" title="${esc(im[lang])}">${image(im,'gallery-image',i===0)}</a><figcaption class="mono">${String(i+1).padStart(2,'0')} / ${esc(im[lang])} <span aria-hidden="true">↗</span></figcaption></figure>`).join('');
    return `<div class="page page--detail wrap">
      <div class="detail-top"><a href="#/works" class="text-link back-link">← &nbsp;${esc(t.back)}</a><span class="eyebrow">PROJECT / ${esc(p.number)}</span></div>
      <div class="detail-intro"><div><span class="eyebrow">${esc(k.subtitle)}</span><h1>${esc(k.title)}<span class="hero-period">.</span></h1></div><p>${esc(k.summary)}</p></div>
      <div class="detail-cover">${projectVisual(p,'hero')}</div>
      <div class="detail-info"><div class="detail-meta">
          ${meta(t.client,k.client)}${meta(t.role,k.role)}${meta(t.media,k.media)}${meta(t.year,p.year || t.missingYear)}
        </div><div class="detail-story"><section><h2>01 — ${esc(t.overview)}</h2><p>${esc(k.overview)}</p></section><section><h2>02 — ${esc(t.approach)}</h2><p>${esc(k.approach)}</p></section><section><h2>03 — ${esc(t.deliverables)}</h2><p>${esc(k.deliverables)}</p></section></div></div>
      <div class="detail-gallery"><div class="gallery-heading"><h2>${esc(t.galleryTitle)}</h2><p>${esc(t.galleryNote)}</p></div><div class="gallery-grid gallery-grid--real">${gallery}</div></div>
      <a href="#/project/${encodeURIComponent(next.id)}" class="next-project"><span class="mono">${esc(t.next)} / ${esc(next.number)}</span><strong>${esc(nk.title)}</strong><span>↗</span></a>
    </div>`;
  }
  function updateFilter() {
    document.querySelectorAll('[data-filter]').forEach(b=>{const chosen=b.dataset.filter===filter;b.classList.toggle('is-selected',chosen);b.setAttribute('aria-pressed',String(chosen));});
    const list=filter==='all'?D.projects:D.projects.filter(p=>p.categories.includes(filter));
    const grid=document.getElementById('project-grid'); if(grid)grid.innerHTML=list.map(card).join('');
  }
  function render() {
    header(); const r=route();
    if(r[0]==='project'&&D.projects.some(p=>p.id===r[1])) {main.innerHTML=detail(D.projects.find(p=>p.id===r[1]));window.scrollTo(0,0);}
    else {main.innerHTML=home();updateFilter();if(r[0]){const target=document.getElementById(r[0]);if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));}else window.scrollTo(0,0);}
    main.setAttribute('data-view',r[0]==='project'?'detail':'home');
  }
  document.addEventListener('click',e=>{
    const lb=e.target.closest('[data-lang]');if(lb){lang=lb.dataset.lang;try{localStorage.setItem('portfolioLang',lang)}catch(_){}render();return;}
    const fb=e.target.closest('[data-filter]');if(fb){filter=fb.dataset.filter;updateFilter();}
  });
  window.addEventListener('hashchange',render);
  render();
})();
