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

  function getThemePref() {
    try {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === 'dark' || saved === 'light' || saved === 'system') return saved
    } catch {
      /* ignore */
    }
    return 'light'
  }

  function getSystemTheme() {
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  }

  function getTheme() {
    const pref = getThemePref()
    if (pref === 'system') return getSystemTheme()
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'dark' || attr === 'light') return attr
    return pref === 'dark' ? 'dark' : 'light'
  }

  function logoSrc(theme) {
    return theme === 'dark' ? './brand/logo-horizontal-light.svg' : './brand/logo-horizontal-dark.svg'
  }

  function iconSrc(theme) {
    return theme === 'dark' ? './brand/logo-icon-light.svg' : './brand/logo-icon-dark.svg'
  }

  function applyTheme(pref) {
    const nextPref = pref === 'dark' || pref === 'light' || pref === 'system' ? pref : 'light'
    try {
      localStorage.setItem(THEME_KEY, nextPref)
    } catch {
      /* ignore */
    }
    const resolved = nextPref === 'system' ? getSystemTheme() : nextPref
    document.documentElement.setAttribute('data-theme', resolved)
    const src = logoSrc(resolved)
    const icon = iconSrc(resolved)
    document.querySelectorAll('.brand-logo-img').forEach((img) => {
      img.src = src
    })
    document.querySelectorAll('[data-brand-icon]').forEach((img) => {
      img.src = icon
    })
    const sel = document.querySelector('[data-theme-select]')
    if (sel && sel.value !== nextPref) sel.value = nextPref
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = resolved === 'dark' ? '#0d1520' : '#f3f6fa'
  }

  function brand(compact) {
    const size = compact ? 28 : 36
    const src = logoSrc(getTheme())
    return `<a class="brand" href="./index.html" data-i18n-aria="nav.brandHome" aria-label="${t('nav.brandHome')}">
      <img class="brand-logo-img" src="${src}" alt="mikduck" height="${size}" width="auto" />
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
    const locale = i18n?.getLocale?.() || 'id'
    return `<label class="pref-select">
      <span class="visually-hidden" data-i18n="common.lang">${t('common.lang')}</span>
      <select data-lang-select aria-label="${t('common.lang')}">
        <option value="id"${locale === 'id' ? ' selected' : ''}>🇮🇩 Indonesia</option>
        <option value="en"${locale === 'en' ? ' selected' : ''}>🇬🇧 English</option>
      </select>
    </label>`
  }

  function themeSwitch() {
    const pref = getThemePref()
    return `<label class="pref-select">
      <span class="visually-hidden" data-i18n="common.theme">${t('common.theme')}</span>
      <select data-theme-select aria-label="${t('common.theme')}">
        <option value="light"${pref === 'light' ? ' selected' : ''}>☀ ${t('common.light')}</option>
        <option value="dark"${pref === 'dark' ? ' selected' : ''}>☾ ${t('common.dark')}</option>
        <option value="system"${pref === 'system' ? ' selected' : ''}>💻 ${t('common.system')}</option>
      </select>
    </label>`
  }

  function bindLangSwitch(root = document) {
    root.querySelectorAll('[data-lang-select]').forEach((sel) => {
      sel.addEventListener('change', () => {
        const lang = sel.value
        if (lang && i18n) i18n.setLocale(lang)
      })
    })
  }

  function bindThemeSwitch(root = document) {
    root.querySelectorAll('[data-theme-select]').forEach((sel) => {
      sel.addEventListener('change', () => {
        applyTheme(sel.value)
      })
    })
    try {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', () => {
        if (getThemePref() === 'system') applyTheme('system')
      })
    } catch {
      /* ignore */
    }
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
            <a href="https://github.com/nazruldev/mikduck" rel="noopener noreferrer" target="_blank">GitHub</a>
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
