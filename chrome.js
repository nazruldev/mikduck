(() => {
  const i18n = window.MikduckI18n
  const t = (key) => (i18n ? i18n.t(key) : key)
  const THEME_KEY = 'mikduck_site_theme'

  const NAV = [
    { id: 'home', href: './index.html', key: 'nav.home' },
    { id: 'download', href: './download.html', key: 'nav.download' },
    { id: 'changelog', href: './changelog.html', key: 'nav.changelog' },
    { id: 'partners', href: './partners.html', key: 'nav.partners' },
    { id: 'sponsors', href: './sponsors.html', key: 'nav.sponsors' },
    { id: 'faq', href: './faq.html', key: 'nav.faq' },
  ]

  const MORE = [
    { id: 'timeline', href: './timeline.html', key: 'nav.timeline' },
    { id: 'pengajuan', href: './pengajuan.html', key: 'nav.pengajuan' },
    { id: 'coffee', href: './coffee.html', key: 'nav.coffee' },
  ]

  function getTheme() {
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'dark' || attr === 'light') return attr
    try {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === 'dark' || saved === 'light') return saved
    } catch {
      /* ignore */
    }
    return 'light'
  }

  function logoSrc(theme) {
    // dark ink on light bg · light ink on dark bg
    return theme === 'dark' ? './brand/logo-horizontal-light.svg' : './brand/logo-horizontal-dark.svg'
  }

  function applyTheme(theme) {
    const next = theme === 'dark' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      /* ignore */
    }
    const src = logoSrc(next)
    document.querySelectorAll('.brand-logo-img').forEach((img) => {
      img.src = src
    })
    document.querySelectorAll('[data-set-theme]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-set-theme') === next)
      btn.setAttribute('aria-pressed', btn.getAttribute('data-set-theme') === next ? 'true' : 'false')
    })
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = next === 'dark' ? '#0d1520' : '#f3f6fa'
  }

  function brand(compact) {
    const size = compact ? 28 : 36
    const src = logoSrc(getTheme())
    return `<a class="brand" href="./index.html" data-i18n-aria="nav.brandHome" aria-label="${t('nav.brandHome')}">
      <img class="brand-logo-img" src="${src}" alt="mikduck" height="${size}" />
    </a>`
  }

  function navLinks(list) {
    return list
      .map(
        (item) =>
          `<a href="${item.href}" data-nav="${item.id}" data-i18n="${item.key}">${t(item.key)}</a>`,
      )
      .join('')
  }

  function langSwitch() {
    return `<div class="lang-switch" role="group" data-i18n-aria="common.lang" aria-label="${t('common.lang')}">
      <button type="button" class="lang-btn" data-set-lang="id" aria-pressed="false">ID</button>
      <button type="button" class="lang-btn" data-set-lang="en" aria-pressed="false">EN</button>
    </div>`
  }

  function themeSwitch() {
    const theme = getTheme()
    return `<div class="theme-switch" role="group" data-i18n-aria="common.theme" aria-label="${t('common.theme')}">
      <button type="button" class="theme-btn${theme === 'light' ? ' is-active' : ''}" data-set-theme="light" aria-pressed="${theme === 'light' ? 'true' : 'false'}" data-i18n="common.light">${t('common.light')}</button>
      <button type="button" class="theme-btn${theme === 'dark' ? ' is-active' : ''}" data-set-theme="dark" aria-pressed="${theme === 'dark' ? 'true' : 'false'}" data-i18n="common.dark">${t('common.dark')}</button>
    </div>`
  }

  function bindLangSwitch(root = document) {
    root.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-set-lang')
        if (lang && i18n) i18n.setLocale(lang)
      })
    })
  }

  function bindThemeSwitch(root = document) {
    root.querySelectorAll('[data-set-theme]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-set-theme')
        if (theme) applyTheme(theme)
      })
    })
  }

  const chrome = document.querySelector('[data-site-chrome]')
  if (chrome) {
    const solid = document.body.dataset.page !== 'home' ? ' is-solid' : ''
    chrome.outerHTML = `
    <header class="site-header${solid}" data-elevate>
      <div class="wrap header-inner">
        ${brand(false)}
        <nav class="nav" data-i18n-aria="nav.main" aria-label="${t('nav.main')}">${navLinks(NAV)}</nav>
        <div class="header-actions">
          ${langSwitch()}
          ${themeSwitch()}
          <a class="btn btn-sm btn-ghost-nav" href="./demo.html" target="_blank" rel="noopener noreferrer">
            <span class="live-dot" aria-hidden="true"></span>
            <span data-i18n="nav.demo">${t('nav.demo')}</span>
          </a>
          <a class="btn btn-sm btn-primary" href="./download.html" data-i18n="nav.downloadCta">${t('nav.downloadCta')}</a>
          <button class="nav-toggle" type="button" data-i18n-aria="nav.menu" aria-label="${t('nav.menu')}" aria-expanded="false" data-nav-toggle>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      <div class="mobile-nav" data-mobile-nav>
        ${navLinks([...NAV, { id: 'demo', href: './demo.html', key: 'nav.demo' }, ...MORE])}
      </div>
    </header>`
  }

  const foot = document.querySelector('[data-site-footer]')
  if (foot) {
    foot.outerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            ${brand(true)}
            <p data-i18n="footer.tagline">${t('footer.tagline')}</p>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer.product">${t('footer.product')}</h4>
            <a href="./download.html" data-i18n="nav.download">${t('nav.download')}</a>
            <a href="./changelog.html" data-i18n="nav.changelog">${t('nav.changelog')}</a>
            <a href="./timeline.html" data-i18n="nav.timeline">${t('nav.timeline')}</a>
            <a href="./faq.html" data-i18n="nav.faq">${t('nav.faq')}</a>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer.community">${t('footer.community')}</h4>
            <a href="./partners.html" data-i18n="footer.partners">${t('footer.partners')}</a>
            <a href="./sponsors.html" data-i18n="footer.sponsors">${t('footer.sponsors')}</a>
            <a href="./pengajuan.html" data-i18n="nav.pengajuan">${t('nav.pengajuan')}</a>
            <a href="./coffee.html" data-i18n="nav.coffee">${t('nav.coffee')}</a>
            <a href="https://github.com/mikduck/mikduck" rel="noopener noreferrer" target="_blank">GitHub</a>
          </div>
        </div>
        <p class="footer-copy">© 2026 mikduck · MIT License</p>
      </div>
    </footer>`
  }

  applyTheme(getTheme())
  bindLangSwitch()
  bindThemeSwitch()
  if (i18n) i18n.applyI18n(document)
})()
