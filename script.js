(() => {
  const page = document.body.dataset.page || ''
  const i18n = window.MikduckI18n
  const t = (key, vars) => (i18n ? i18n.t(key, vars) : key)

  let cachedReleases = []
  let cachedPartners = []
  let cachedSite = {}
  let cachedTimeline = []

  document.querySelectorAll('[data-nav]').forEach((el) => {
    if (el.getAttribute('data-nav') === page) el.classList.add('is-active')
  })

  const header = document.querySelector('[data-elevate]')
  const onScroll = () => {
    if (!header) return
    header.classList.toggle('is-elevated', window.scrollY > 8)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const toggle = document.querySelector('[data-nav-toggle]')
  const mobile = document.querySelector('[data-mobile-nav]')
  toggle?.addEventListener('click', () => {
    const open = mobile?.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  })

  const form = document.querySelector('[data-pengajuan-form]')
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const data = new FormData(form)
      const jenis = String(data.get('jenis') || 'Fitur')
      const judul = String(data.get('judul') || '').trim()
      const detail = String(data.get('detail') || '').trim()
      const kontak = String(data.get('kontak') || '').trim()

      const title = encodeURIComponent(`[${jenis}] ${judul}`)
      const body = encodeURIComponent(
        `## ${t('pengajuan.issueJenis')}\n${jenis}\n\n## ${t('pengajuan.issueDetail')}\n${detail}\n\n## ${t('pengajuan.issueKontak')}\n${kontak || '—'}\n`,
      )
      const url = `https://github.com/nazruldev/mikduck/issues/new?title=${title}&body=${body}`

      const ok = form.querySelector('[data-form-ok]')
      ok?.classList.add('is-show')
      window.open(url, '_blank', 'noopener,noreferrer')
      form.reset()
    })
  }

  function observeReveals() {
    const reveals = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window) || !reveals.length) {
      reveals.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    reveals.forEach((el) => io.observe(el))
  }

  async function fetchJson(urls) {
    for (const url of urls) {
      try {
        const res = await fetch(url, { cache: 'no-store' })
        if (!res.ok) continue
        return await res.json()
      } catch {
        /* try next */
      }
    }
    return null
  }

  const GH_RELEASES = 'https://api.github.com/repos/nazruldev/mikduck/releases'
  const GH_RELEASES_PAGE = 'https://github.com/nazruldev/mikduck/releases'

  function mapGithubAssetKey(name) {
    const n = String(name || '').toLowerCase()
    if (n.includes('setup') && n.endsWith('.exe')) return 'win-setup'
    if (n.includes('portable') && n.endsWith('.exe')) return 'win-portable'
    if (n.endsWith('.appimage')) return 'linux-appimage'
    if (n.endsWith('.deb')) return 'linux-deb'
    return null
  }

  function releasesFromGithub(apiList) {
    if (!Array.isArray(apiList)) return []
    return apiList
      .filter((r) => !r.draft)
      .map((r, i) => {
        const version = String(r.tag_name || r.name || '').replace(/^v/i, '')
        const files = {}
        for (const a of r.assets || []) {
          const key = mapGithubAssetKey(a.name)
          if (!key) continue
          files[key] = {
            name: a.name,
            url: a.browser_download_url,
            size: a.size,
          }
        }
        const notes = String(r.body || '')
          .split(/\r?\n/)
          .map((l) => l.replace(/^[-*#\s]+/, '').trim())
          .filter(Boolean)
          .slice(0, 12)
        return {
          version,
          tag: r.tag_name,
          latest: i === 0 && !r.prerelease,
          date: (r.published_at || r.created_at || '').slice(0, 10),
          notes,
          note: notes[0] || '',
          files,
          htmlUrl: r.html_url || GH_RELEASES_PAGE,
        }
      })
  }

  async function loadReleases() {
    const data = await fetchJson(['/api/releases', '/api/releases.json', './data/releases.json'])
    if (Array.isArray(data?.releases) && data.releases.length) return data.releases
    const gh = await fetchJson([GH_RELEASES])
    return releasesFromGithub(gh)
  }

  async function loadPartners() {
    const data = await fetchJson(['/api/partners', '/api/partners.json', './data/partners.json'])
    return Array.isArray(data?.partners) ? data.partners : []
  }

  async function loadSite() {
    return (await fetchJson(['/api/site', '/api/site.json', './data/site.json'])) || {}
  }

  async function loadTimeline() {
    const data = await fetchJson(['/api/timeline', '/api/timeline.json', './data/timeline.json'])
    return Array.isArray(data?.items) ? data.items : []
  }

  function pickLatestRelease(releases) {
    return releases.find((r) => r.latest) || releases[0] || null
  }

  function bindDownload(releases) {
    const panel = document.querySelector('[data-version-panel]')
    if (!panel || !releases.length) return
    const rel = pickLatestRelease(releases)
    if (!rel) return

    const cards = document.querySelectorAll('[data-dl]')

    cards.forEach((card) => {
      const key = card.getAttribute('data-dl')
      const file = rel.files?.[key]
      const label = card.querySelector('[data-dl-label]')
      const meta = card.querySelector('[data-dl-meta]')
      if (!file) {
        card.href = '#'
        card.classList.add('is-disabled')
        card.setAttribute('aria-disabled', 'true')
        if (label) label.textContent = t('common.unavailable')
        if (meta) meta.textContent = `v${rel.version}`
        return
      }
      card.href = file.url
      card.classList.remove('is-disabled')
      card.removeAttribute('aria-disabled')
      if (label) label.textContent = file.name
      if (meta) {
        const fallback = card.getAttribute('data-dl-meta-fallback')
        if (fallback === 'portable') meta.textContent = `${t('download.metaPortable')} · v${rel.version}`
        else if (fallback === 'appimage') meta.textContent = `${t('download.metaAppImage')} · v${rel.version}`
        else meta.textContent = `v${rel.version} · ${rel.tag || `v${rel.version}`}`
      }
    })
  }

  function renderChangelog(releases) {
    const root = document.querySelector('[data-changelog]')
    if (!root) return
    root.replaceChildren()
    if (!releases.length) {
      const empty = document.createElement('p')
      empty.className = 'source-line'
      empty.textContent = t('changelog.empty')
      root.append(empty)
      return
    }
    releases.forEach((rel) => {
      const article = document.createElement('article')
      article.className = 'cl-item'
      article.id = `v${String(rel.version || '').replace(/\./g, '-')}`
      const head = document.createElement('div')
      head.className = 'cl-head'
      const h2 = document.createElement('h2')
      h2.textContent = `v${rel.version}`
      head.append(h2)
      if (rel.latest) {
        const badge = document.createElement('span')
        badge.className = 'badge badge-now'
        badge.textContent = t('common.latest')
        head.append(badge)
      }
      const date = document.createElement('span')
      date.className = 'tl-date'
      date.textContent = rel.date || ''
      head.append(date)
      const ul = document.createElement('ul')
      const items = Array.isArray(rel.notes) && rel.notes.length ? rel.notes : rel.note ? [rel.note] : []
      items.forEach((text) => {
        const li = document.createElement('li')
        li.textContent = text
        ul.append(li)
      })
      if (rel.latest) {
        const link = document.createElement('a')
        link.className = 'btn btn-sm btn-outline'
        link.href = './download.html'
        link.textContent = t('download.downloadLatest', { version: rel.version })
        article.append(head, ul, link)
      } else {
        const hint = document.createElement('p')
        hint.className = 'cl-old-hint'
        hint.textContent = t('download.oldHint')
        article.append(head, ul, hint)
      }
      root.append(article)
    })
  }

  function renderPartners(partners) {
    document.querySelectorAll('[data-partners]').forEach((root) => {
      root.replaceChildren()
      if (!partners.length) {
        const empty = document.createElement('a')
        empty.className = 'partner-card partner-empty'
        empty.href = './sponsors.html'
        const strong = document.createElement('strong')
        strong.textContent = t('partners.emptyTitle')
        const span = document.createElement('span')
        span.textContent = t('partners.emptyBody')
        empty.append(strong, span)
        root.append(empty)
        return
      }
      partners.forEach((p) => {
        const card = document.createElement(p.url ? 'a' : 'div')
        card.className = 'partner-card'
        if (p.url) {
          card.href = p.url
          card.target = '_blank'
          card.rel = 'noopener noreferrer'
        }
        if (p.logoUrl) {
          const img = document.createElement('img')
          img.src = p.logoUrl
          img.alt = p.name
          img.className = 'partner-logo'
          card.append(img)
        }
        const strong = document.createElement('strong')
        strong.textContent = p.name
        card.append(strong)
        if (p.blurb) {
          const span = document.createElement('span')
          span.textContent = p.blurb
          card.append(span)
        }
        root.append(card)
      })
    })
  }

  function applySite(site) {
    const setText = (sel, value) => {
      const el = document.querySelector(sel)
      if (el && value) el.textContent = value
    }
    setText('[data-site-eyebrow]', site.heroEyebrow)
    setText('[data-site-title]', site.heroTitle)
    setText('[data-site-subtitle]', site.heroSubtitle)
    setText('[data-site-meta]', site.heroMeta)
    document.querySelectorAll('[data-site-download]').forEach((a) => {
      if (site.downloadPage) a.setAttribute('href', site.downloadPage)
    })
    document.querySelectorAll('[data-site-coffee]').forEach((a) => {
      if (site.coffeeUrl) a.setAttribute('href', site.coffeeUrl)
    })
    document.querySelectorAll('[data-site-github]').forEach((a) => {
      if (site.githubUrl) a.setAttribute('href', site.githubUrl)
    })
  }

  function renderTimeline(items) {
    const root = document.querySelector('[data-timeline]')
    if (!root) return
    root.replaceChildren()
    if (!items.length) {
      const empty = document.createElement('p')
      empty.className = 'source-line'
      empty.textContent = t('timeline.empty')
      root.append(empty)
      return
    }
    const lang = i18n?.getLocale?.() || 'id'
    const isEn = lang === 'en'
    items.forEach((item) => {
      const status = ['done', 'now', 'next', 'later'].includes(item.status) ? item.status : 'next'
      const article = document.createElement('article')
      article.className = `tl-item ${status === 'later' ? 'next' : status}`

      const meta = document.createElement('div')
      meta.className = 'tl-meta'
      const badge = document.createElement('span')
      const badgeClass =
        status === 'done' ? 'badge-done' : status === 'now' ? 'badge-now' : 'badge-next'
      badge.className = `badge ${badgeClass}`
      badge.textContent = t(`timeline.${status}`)
      const period = document.createElement('span')
      period.className = 'tl-date'
      const periodText =
        (isEn ? item.periodEn : item.periodId) || item.periodId || item.periodEn || ''
      period.textContent = periodText
      meta.append(badge, period)

      const goalRaw = String(item.periodId || item.periodEn || '')
      if (/target donasi|donation goal/i.test(goalRaw)) {
        const goal = document.createElement('span')
        goal.className = 'badge badge-donate'
        goal.textContent = isEn ? 'Donation-gated' : 'Tergantung donasi'
        meta.append(goal)
      }

      const h3 = document.createElement('h3')
      h3.textContent = (isEn ? item.titleEn : item.titleId) || item.titleId || item.titleEn || ''
      const body = document.createElement('p')
      body.textContent = (isEn ? item.bodyEn : item.bodyId) || item.bodyId || item.bodyEn || ''

      const bullets = isEn
        ? item.itemsEn?.length
          ? item.itemsEn
          : item.itemsId || []
        : item.itemsId?.length
          ? item.itemsId
          : item.itemsEn || []
      const ul = document.createElement('ul')
      bullets.forEach((text) => {
        const li = document.createElement('li')
        li.textContent = text
        ul.append(li)
      })

      article.append(meta, h3)
      if (body.textContent) article.append(body)
      if (bullets.length) article.append(ul)
      root.append(article)
    })
  }

  function refreshDynamic() {
    if (i18n) i18n.applyI18n(document)
    bindDownload(cachedReleases)
    renderChangelog(cachedReleases)
    renderPartners(cachedPartners)
    applySite(cachedSite)
    renderTimeline(cachedTimeline)
  }

  function initHeroCompare() {
    const root = document.querySelector('[data-hero-compare]')
    if (!root) return

    const overlay = root.querySelector('.hero-compare-overlay')
    const knob = root.querySelector('[data-compare-knob]')
    if (!overlay || !knob) return

    let dragging = false

    const syncWidth = () => {
      root.style.setProperty('--compare-w', `${root.clientWidth}px`)
    }

    const setPos = (clientX) => {
      const rect = root.getBoundingClientRect()
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
      const pct = Math.round(ratio * 1000) / 10
      root.style.setProperty('--pos', `${pct}%`)
      knob.setAttribute('aria-valuenow', String(Math.round(pct)))
    }

    const onPointerDown = (e) => {
      dragging = true
      root.classList.add('is-dragging')
      try {
        root.setPointerCapture(e.pointerId)
      } catch {
        /* ignore */
      }
      setPos(e.clientX)
    }

    const onPointerMove = (e) => {
      if (!dragging) return
      setPos(e.clientX)
    }

    const onPointerUp = () => {
      dragging = false
      root.classList.remove('is-dragging')
    }

    root.addEventListener('pointerdown', onPointerDown)
    root.addEventListener('pointermove', onPointerMove)
    root.addEventListener('pointerup', onPointerUp)
    root.addEventListener('pointercancel', onPointerUp)
    root.addEventListener('lostpointercapture', () => {
      dragging = false
      root.classList.remove('is-dragging')
    })

    knob.addEventListener('keydown', (e) => {
      const now = Number(knob.getAttribute('aria-valuenow') || 50)
      let next = now
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = now - 3
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = now + 3
      if (e.key === 'Home') next = 0
      if (e.key === 'End') next = 100
      if (next === now) return
      e.preventDefault()
      next = Math.min(100, Math.max(0, next))
      root.style.setProperty('--pos', `${next}%`)
      knob.setAttribute('aria-valuenow', String(next))
    })

    syncWidth()
    window.addEventListener('resize', syncWidth)
    if ('ResizeObserver' in window) {
      new ResizeObserver(syncWidth).observe(root)
    }
  }

  initHeroCompare()

  window.addEventListener('mikduck:locale', () => {
    refreshDynamic()
  })

  Promise.all([loadReleases(), loadPartners(), loadSite(), loadTimeline()])
    .then(([releases, partners, site, timeline]) => {
      cachedReleases = releases
      cachedPartners = partners
      cachedSite = site
      cachedTimeline = timeline
      refreshDynamic()
    })
    .finally(() => observeReveals())
})()
