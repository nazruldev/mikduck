(() => {
  const i18n = window.MikduckI18n
  const t = (key) => (i18n ? i18n.t(key) : key)
  const THEME_KEY = 'mikduck_site_theme'
  const FAB_POS_KEY = 'mikduck_fab_pos'

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

  function ensureHugeicons() {
    if (document.querySelector('link[data-hugeicons]')) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = './vendor/hugeicons/icons.css'
    link.setAttribute('data-hugeicons', '')
    document.head.appendChild(link)
  }

  function hi(name, extra = '') {
    return `<i class="hgi hgi-stroke hgi-${name}${extra ? ` ${extra}` : ''}" aria-hidden="true"></i>`
  }

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
    // Same as app MikduckBrand: dark UI → white logo (*-dark.png), light UI → blue logo (*-light.png)
    return theme === 'dark' ? './brand/logo-horizontal-dark.png' : './brand/logo-horizontal-light.png'
  }

  function iconSrc(theme) {
    return theme === 'dark' ? './brand/logo-icon-dark.png' : './brand/logo-icon-light.png'
  }

  function syncThemeUi(pref) {
    const resolved = pref === 'system' ? getSystemTheme() : pref === 'dark' ? 'dark' : 'light'
    const fab = document.querySelector('[data-site-fab]')
    if (!fab) return
    fab.dataset.theme = resolved
    const thumb = fab.querySelector('[data-theme-thumb]')
    if (thumb) {
      thumb.style.transform = resolved === 'dark' ? 'translateX(100%)' : 'translateX(0)'
    }
    const label = fab.querySelector('[data-theme-label]')
    if (label) {
      label.textContent = resolved === 'dark' ? t('common.dark') : t('common.light')
    }
    const langBtn = fab.querySelector('[data-lang-toggle]')
    if (langBtn) {
      const locale = i18n?.getLocale?.() || 'id'
      langBtn.setAttribute('aria-label', t('common.lang'))
      langBtn.dataset.locale = locale
      const badge = langBtn.querySelector('[data-lang-badge]')
      if (badge) badge.textContent = locale.toUpperCase()
    }
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
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = resolved === 'dark' ? '#0d1520' : '#f3f6fa'
    syncThemeUi(nextPref)
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

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n))
  }

  function loadFabPos() {
    try {
      const raw = localStorage.getItem(FAB_POS_KEY)
      if (!raw) return null
      const pos = JSON.parse(raw)
      if (typeof pos?.left === 'number' && typeof pos?.top === 'number') return pos
    } catch {
      /* ignore */
    }
    return null
  }

  function saveFabPos(left, top) {
    try {
      localStorage.setItem(FAB_POS_KEY, JSON.stringify({ left, top }))
    } catch {
      /* ignore */
    }
  }

  function defaultFabPos(fab) {
    const rect = fab.getBoundingClientRect()
    return {
      left: Math.max(12, window.innerWidth - rect.width - 16),
      top: Math.max(12, window.innerHeight - rect.height - 16),
    }
  }

  function placeFab(fab, left, top, persist = true) {
    const rect = fab.getBoundingClientRect()
    const maxL = window.innerWidth - rect.width - 12
    const maxT = window.innerHeight - rect.height - 12
    const l = clamp(left, 12, Math.max(12, maxL))
    const tp = clamp(top, 12, Math.max(12, maxT))
    fab.style.left = `${l}px`
    fab.style.top = `${tp}px`
    fab.style.right = 'auto'
    fab.style.bottom = 'auto'
    if (persist) saveFabPos(l, tp)
  }

  function dodgeFabFromDownload(fab) {
    const targets = document.querySelectorAll('[data-dl-fmt], .dl-action, .store-card')
    if (!targets.length) {
      fab.classList.remove('is-pass-through')
      return
    }
    const fr = fab.getBoundingClientRect()
    const overlaps = (r) =>
      !(fr.right < r.left || fr.left > r.right || fr.bottom < r.top || fr.top > r.bottom)
    let hit = false
    for (const el of targets) {
      const r = el.getBoundingClientRect()
      if (r.width <= 0 || r.height <= 0) continue
      if (overlaps(r)) {
        hit = true
        break
      }
    }
    fab.classList.toggle('is-pass-through', hit)
    if (!hit) return

    const margin = 16
    const w = fab.offsetWidth
    const h = fab.offsetHeight
    const candidates = [
      { left: window.innerWidth - w - margin, top: window.innerHeight - h - margin },
      { left: margin, top: window.innerHeight - h - margin },
      { left: window.innerWidth - w - margin, top: margin },
      { left: margin, top: margin },
    ]
    const stillHits = (left, top) => {
      const box = { left, top, right: left + w, bottom: top + h }
      for (const el of targets) {
        const r = el.getBoundingClientRect()
        if (r.width <= 0 || r.height <= 0) continue
        if (!(box.right < r.left || box.left > r.right || box.bottom < r.top || box.top > r.bottom)) {
          return true
        }
      }
      return false
    }
    for (const c of candidates) {
      const l = clamp(c.left, 12, Math.max(12, window.innerWidth - w - 12))
      const t = clamp(c.top, 12, Math.max(12, window.innerHeight - h - 12))
      if (!stillHits(l, t)) {
        placeFab(fab, l, t, false)
        fab.classList.remove('is-pass-through')
        return
      }
    }
  }

  function bindFabDrag(fab) {
    const handle = fab.querySelector('[data-fab-drag]')
    if (!handle) return
    let dragging = false
    let moved = false
    let startX = 0
    let startY = 0
    let originL = 0
    let originT = 0

    const onMove = (clientX, clientY) => {
      if (!dragging) return
      const dx = clientX - startX
      const dy = clientY - startY
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true
      placeFab(fab, originL + dx, originT + dy)
    }

    const end = () => {
      if (!dragging) return
      dragging = false
      fab.classList.remove('is-dragging')
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', end)
      window.removeEventListener('pointercancel', end)
    }

    const onPointerMove = (e) => onMove(e.clientX, e.clientY)

    handle.addEventListener('pointerdown', (e) => {
      if (e.button != null && e.button !== 0) return
      e.preventDefault()
      const rect = fab.getBoundingClientRect()
      dragging = true
      moved = false
      startX = e.clientX
      startY = e.clientY
      originL = rect.left
      originT = rect.top
      fab.classList.add('is-dragging')
      handle.setPointerCapture?.(e.pointerId)
      window.addEventListener('pointermove', onPointerMove)
      window.addEventListener('pointerup', end)
      window.addEventListener('pointercancel', end)
    })

    handle.addEventListener('click', (e) => {
      if (moved) {
        e.preventDefault()
        e.stopPropagation()
      }
    })
  }

  function bindThemeSlider(fab) {
    const track = fab.querySelector('[data-theme-track]')
    const thumb = fab.querySelector('[data-theme-thumb]')
    if (!track || !thumb) return

    const setFromRatio = (ratio) => {
      applyTheme(ratio >= 0.5 ? 'dark' : 'light')
    }

    const pointerRatio = (clientX) => {
      const rect = track.getBoundingClientRect()
      if (rect.width <= 0) return getTheme() === 'dark' ? 1 : 0
      return clamp((clientX - rect.left) / rect.width, 0, 1)
    }

    let sliding = false

    const onMove = (e) => {
      if (!sliding) return
      const ratio = pointerRatio(e.clientX)
      thumb.style.transform = `translateX(${ratio * 100}%)`
      fab.dataset.theme = ratio >= 0.5 ? 'dark' : 'light'
    }

    const end = (e) => {
      if (!sliding) return
      sliding = false
      fab.classList.remove('is-sliding')
      setFromRatio(pointerRatio(e.clientX))
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', end)
      window.removeEventListener('pointercancel', end)
    }

    const start = (e) => {
      if (e.button != null && e.button !== 0) return
      e.preventDefault()
      e.stopPropagation()
      sliding = true
      fab.classList.add('is-sliding')
      onMove(e)
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup', end)
      window.addEventListener('pointercancel', end)
    }

    track.addEventListener('pointerdown', start)
    thumb.addEventListener('pointerdown', start)

    fab.querySelector('[data-theme-light]')?.addEventListener('click', (e) => {
      e.stopPropagation()
      applyTheme('light')
    })
    fab.querySelector('[data-theme-dark]')?.addEventListener('click', (e) => {
      e.stopPropagation()
      applyTheme('dark')
    })
  }

  function mountFab() {
    if (document.querySelector('[data-site-fab]')) return
    const locale = i18n?.getLocale?.() || 'id'
    const resolved = getTheme()
    const fab = document.createElement('div')
    fab.className = 'site-fab'
    fab.setAttribute('data-site-fab', '')
    fab.dataset.theme = resolved
    fab.innerHTML = `
      <button type="button" class="site-fab-drag" data-fab-drag aria-label="Drag">
        ${hi('drag-drop-vertical')}
      </button>
      <button type="button" class="site-fab-lang" data-lang-toggle data-locale="${locale}" aria-label="${t('common.lang')}">
        ${hi('language-circle')}
        <span class="site-fab-lang-badge" data-lang-badge>${locale.toUpperCase()}</span>
      </button>
      <div class="theme-slider" role="group" aria-label="${t('common.theme')}">
        <button type="button" class="theme-slider-ico" data-theme-light aria-label="${t('common.light')}">
          ${hi('sun-03')}
        </button>
        <div class="theme-slider-track" data-theme-track>
          <span class="theme-slider-thumb" data-theme-thumb></span>
        </div>
        <button type="button" class="theme-slider-ico" data-theme-dark aria-label="${t('common.dark')}">
          ${hi('moon-02')}
        </button>
        <span class="visually-hidden" data-theme-label>${resolved === 'dark' ? t('common.dark') : t('common.light')}</span>
      </div>
    `
    document.body.appendChild(fab)

    const saved = loadFabPos()
    requestAnimationFrame(() => {
      if (saved && Number.isFinite(saved.left) && Number.isFinite(saved.top)) {
        placeFab(fab, saved.left, saved.top)
      } else {
        const pos = defaultFabPos(fab)
        placeFab(fab, pos.left, pos.top, false)
      }
      dodgeFabFromDownload(fab)
    })

    fab.querySelector('[data-lang-toggle]')?.addEventListener('click', () => {
      const cur = i18n?.getLocale?.() || 'id'
      const next = cur === 'id' ? 'en' : 'id'
      if (i18n) i18n.setLocale(next)
      syncThemeUi(getThemePref())
    })

    bindFabDrag(fab)
    bindThemeSlider(fab)
    syncThemeUi(getThemePref())

    const onViewportChange = () => {
      const rect = fab.getBoundingClientRect()
      if (fab.style.left) placeFab(fab, rect.left, rect.top, false)
      dodgeFabFromDownload(fab)
    }
    window.addEventListener('resize', onViewportChange)
    window.addEventListener('scroll', onViewportChange, { passive: true })

    window.addEventListener('mikduck:locale', () => syncThemeUi(getThemePref()))
  }

  ensureHugeicons()

  const chrome = document.querySelector('[data-site-chrome]')
  if (chrome) {
    const solid = document.body.dataset.page !== 'home' ? ' is-solid' : ''
    chrome.outerHTML = `
    <header class="site-header${solid}" data-elevate>
      <div class="wrap header-inner">
        ${brand(false)}
        <nav class="nav" data-i18n-aria="nav.main" aria-label="${t('nav.main')}">${navLinks(NAV)}</nav>
        <div class="header-actions">
          <a class="btn btn-sm btn-ghost-nav" href="./app-demo/" target="_blank" rel="noopener noreferrer">
            <span class="live-dot" aria-hidden="true"></span>
            <span data-i18n="nav.demo">${t('nav.demo')}</span>
          </a>
          <a class="btn btn-sm btn-primary" href="./download.html" data-i18n="nav.downloadCta">${t('nav.downloadCta')}</a>
          <button class="nav-toggle" type="button" data-i18n-aria="nav.menu" aria-label="${t('nav.menu')}" aria-expanded="false" data-nav-toggle>
            ${hi('menu-01')}
          </button>
        </div>
      </div>
      <div class="mobile-nav" data-mobile-nav>
        ${navLinks([...NAV, { id: 'demo', href: './app-demo/', key: 'nav.demo' }, ...MORE])}
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
        <p class="footer-copy">© 2026 mikduck · <a href="https://www.gnu.org/licenses/agpl-3.0.html" rel="noopener noreferrer" target="_blank">AGPL-3.0</a> · <a href="mailto:mikduck@nusadev.online">mikduck@nusadev.online</a> · <span data-i18n="footer.madeIn">Made in Indonesia</span> 🇮🇩</p>
      </div>
    </footer>`
  }

  applyTheme(getTheme())
  mountFab()
  if (i18n) i18n.applyI18n(document)

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', () => {
      if (getThemePref() === 'system') applyTheme('system')
    })
  } catch {
    /* ignore */
  }
})()
