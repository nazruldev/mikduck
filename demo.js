(() => {
  const THEME_KEY = 'mikduck_demo_theme'
  const root = document.documentElement
  const main = document.getElementById('demo-main')
  const navEl = document.getElementById('demo-nav')
  const aside = document.getElementById('demo-aside')
  const backdrop = document.getElementById('demo-backdrop')
  const menuBtn = document.getElementById('demo-menu-btn')

  const icons = {
    gauge: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>',
    printer: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>',
    store: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M10 12h4v10h-4z"/><path d="M2 7h20"/></svg>',
    wifi: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>',
    network: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',
    radio: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>',
    zap: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    server: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>',
    drive: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M6 16h.01M10 16h.01"/></svg>',
    settings: '<svg class="demo-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>',
    chevron: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
    users: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>',
    plus: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
    activity: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    hard: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M6 16h.01M10 16h.01"/></svg>',
  }

  const nav = [
    { type: 'link', id: 'dashboard', label: 'Dashboard', icon: icons.gauge },
    { type: 'link', id: 'quick-print', label: 'Quick Print', icon: icons.printer },
    { type: 'link', id: 'finance', label: 'Finance', icon: icons.store },
    {
      type: 'group',
      id: 'hotspot',
      label: 'Hotspot',
      icon: icons.wifi,
      open: true,
      children: [
        { id: 'vouchers', label: 'Users / Voucher' },
        { id: 'profiles', label: 'User Profile' },
        { id: 'active', label: 'Hotspot Active' },
        { id: 'cookies', label: 'Cookies' },
      ],
    },
    {
      type: 'group',
      id: 'template',
      label: 'Template',
      icon: icons.store,
      open: false,
      children: [
        { id: 'tpl-login', label: 'Login Page' },
        { id: 'tpl-voucher', label: 'Cetak Voucher' },
      ],
    },
    { type: 'link', id: 'dhcp', label: 'DHCP Leases', icon: icons.network },
    { type: 'link', id: 'queues', label: 'Traffic Queue', icon: icons.radio },
    { type: 'link', id: 'tools', label: 'Tools', icon: icons.zap },
    { type: 'link', id: 'services', label: 'Services', icon: icons.server },
    { type: 'link', id: 'device', label: 'Device', icon: icons.drive },
    {
      type: 'group',
      id: 'settings',
      label: 'Settings',
      icon: icons.settings,
      open: false,
      children: [
        { id: 'settings', label: 'General' },
        { id: 'settings-pref', label: 'Preference' },
      ],
    },
  ]

  /** Dummy state */
  const state = {
    panel: 'dashboard',
    identity: 'WiFi-Demo-Cafe',
    board: 'RB4011iGS+',
    version: 'RouterOS 7.16.2',
    arch: 'arm',
    uptime: '12d 04:18:33',
    cpu: 18,
    ram: 42,
    totalMem: 1073741824,
    usedMem: 450887680,
    cpuHistory: Array.from({ length: 24 }, () => 12 + Math.random() * 40),
    profiles: [
      { name: '3jam', rate: '3M/3M', validity: '3h', price: 5000, shared: 1 },
      { name: '1hari', rate: '5M/5M', validity: '1d', price: 10000, shared: 1 },
      { name: '7hari', rate: '10M/10M', validity: '7d', price: 45000, shared: 2 },
      { name: '1bulan', rate: '15M/15M', validity: '30d', price: 150000, shared: 2 },
      { name: 'default', rate: '1M/1M', validity: '—', price: 0, shared: 1 },
    ],
    vouchers: [
      { code: 'vc-8821', profile: '3jam', status: 'ready', comment: 'vc- batch A' },
      { code: 'vc-9014', profile: '1hari', status: 'used', comment: 'vc- batch A' },
      { code: 'vc-7740', profile: '7hari', status: 'ready', comment: 'vc- batch B' },
      { code: 'vc-3310', profile: '3jam', status: 'ready', comment: 'vc- batch B' },
      { code: 'vc-5522', profile: '1hari', status: 'used', comment: 'vc- walkin' },
      { code: 'vc-1199', profile: '1bulan', status: 'ready', comment: 'vc- member' },
      { code: 'vc-4401', profile: '3jam', status: 'ready', comment: 'vc- batch C' },
      { code: 'vc-6608', profile: '7hari', status: 'used', comment: 'vc- batch C' },
    ],
    active: [
      { user: 'vc-9014', address: '192.168.88.21', mac: '4C:5E:0C:11:22:33', uptime: '01:12:04', profile: '1hari', server: 'hotspot1' },
      { user: 'vc-5522', address: '192.168.88.44', mac: 'A4:B1:C2:33:44:55', uptime: '00:44:18', profile: '1hari', server: 'hotspot1' },
      { user: 'vc-6608', address: '192.168.88.07', mac: 'B8:27:EB:AA:BB:CC', uptime: '02:05:51', profile: '7hari', server: 'hotspot1' },
      { user: 'trial-02', address: '192.168.88.90', mac: 'DC:A6:32:01:02:03', uptime: '00:08:12', profile: 'default', server: 'hotspot1' },
      { user: 'vc-1199', address: '192.168.88.15', mac: 'E4:5F:01:AB:CD:EF', uptime: '05:22:40', profile: '1bulan', server: 'hotspot1' },
      { user: 'bypass-pos', address: '192.168.88.2', mac: '00:11:22:33:44:55', uptime: '3d 01:10:00', profile: '—', server: 'hotspot1' },
    ],
    cookies: [
      { user: 'vc-9014', mac: '4C:5E:0C:11:22:33', expires: '1d 02:00:00' },
      { user: 'vc-5522', mac: 'A4:B1:C2:33:44:55', expires: '18:40:00' },
      { user: 'vc-6608', mac: 'B8:27:EB:AA:BB:CC', expires: '5d 11:00:00' },
    ],
    dhcp: [
      { address: '192.168.88.21', mac: '4C:5E:0C:11:22:33', host: 'android-pixel', status: 'bound' },
      { address: '192.168.88.44', mac: 'A4:B1:C2:33:44:55', host: 'iPhone-12', status: 'bound' },
      { address: '192.168.88.07', mac: 'B8:27:EB:AA:BB:CC', host: 'laptop-kasir', status: 'bound' },
      { address: '192.168.88.90', mac: 'DC:A6:32:01:02:03', host: 'guest-tablet', status: 'bound' },
      { address: '192.168.88.100', mac: 'F0:9F:C2:12:34:56', host: 'cctv-1', status: 'bound' },
    ],
    queues: [
      { name: 'queue-3jam', target: '192.168.88.0/24', maxLimit: '3M/3M', bytes: '1.2 GB' },
      { name: 'queue-1hari', target: '192.168.88.0/24', maxLimit: '5M/5M', bytes: '4.8 GB' },
      { name: 'queue-member', target: '192.168.88.15', maxLimit: '15M/15M', bytes: '12.1 GB' },
    ],
    services: [
      { name: 'www', port: 80, disabled: false },
      { name: 'www-ssl', port: 443, disabled: false },
      { name: 'api', port: 8728, disabled: false },
      { name: 'api-ssl', port: 8729, disabled: true },
      { name: 'winbox', port: 8291, disabled: false },
      { name: 'ssh', port: 22, disabled: false },
      { name: 'ftp', port: 21, disabled: true },
      { name: 'telnet', port: 23, disabled: true },
    ],
    finance: {
      today: 2450000,
      month: 18120000,
      sold: 312,
      hold: 48,
      byProfile: [
        { name: '3jam', value: 6200000 },
        { name: '1hari', value: 7100000 },
        { name: '7hari', value: 3150000 },
        { name: '1bulan', value: 1670000 },
      ],
      txs: [
        { at: '14:22', kind: 'in', category: 'Penjualan Voucher', amount: 10000, note: 'vc-9014' },
        { at: '13:05', kind: 'in', category: 'Penjualan Voucher', amount: 5000, note: 'vc-8821' },
        { at: '11:40', kind: 'out', category: 'Listrik', amount: 150000, note: 'Token PLN' },
        { at: '10:12', kind: 'in', category: 'Top Up', amount: 50000, note: 'Member A' },
        { at: '09:01', kind: 'out', category: 'Internet', amount: 350000, note: 'Invoice ISP' },
      ],
    },
  }

  function formatBytes(n) {
    if (!Number.isFinite(n) || n < 0) return '—'
    const u = ['B', 'KB', 'MB', 'GB']
    let i = 0
    let v = n
    while (v >= 1024 && i < u.length - 1) {
      v /= 1024
      i++
    }
    return `${v.toFixed(i ? 1 : 0)} ${u[i]}`
  }

  function formatRp(n) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(n)
  }

  function getTheme() {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'light' || saved === 'dark') return saved
    return 'dark'
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
    // light theme → dark ink logo; dark theme → light ink logo
    const logo = theme === 'light' ? './brand/logo-horizontal-dark.svg' : './brand/logo-horizontal-light.svg'
    const banner = document.getElementById('banner-logo')
    const app = document.getElementById('app-logo')
    if (banner) banner.src = logo
    if (app) app.src = logo
    document.querySelectorAll('[data-set-theme]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-set-theme') === theme ? 'true' : 'false')
    })
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = theme === 'light' ? '#e0e3e6' : '#0a0c0e'
  }

  function setMobileOpen(open) {
    aside?.classList.toggle('is-open', open)
    backdrop?.classList.toggle('is-open', open)
  }

  function renderNav() {
    if (!navEl) return
    navEl.innerHTML = nav
      .map((item) => {
        if (item.type === 'link') {
          return `<button type="button" class="demo-nav-link${state.panel === item.id ? ' on' : ''}" data-panel="${item.id}">${item.icon}<span>${item.label}</span></button>`
        }
        const childOn = item.children.some((c) => c.id === state.panel)
        const open = item.open || childOn
        return `<div class="demo-nav-group${open ? ' open' : ''}" data-group="${item.id}">
          <button type="button" class="demo-nav-group-btn" data-toggle-group="${item.id}">${item.icon}<span>${item.label}</span>${icons.chevron}</button>
          <div class="demo-nav-children">
            ${item.children
              .map(
                (c) =>
                  `<button type="button" class="demo-nav-link${state.panel === c.id ? ' on' : ''}" data-panel="${c.id}">${c.label}</button>`,
              )
              .join('')}
          </div>
        </div>`
      })
      .join('')
  }

  function sparkSvg(points) {
    const w = 480
    const h = 96
    const max = Math.max(100, ...points)
    const step = w / (points.length - 1)
    const coords = points.map((p, i) => {
      const x = i * step
      const y = h - (p / max) * (h - 8) - 4
      return [x, y]
    })
    const d = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
    const area = `${d} L${w},${h} L0,${h} Z`
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><path d="${area}" fill="rgba(32,168,216,0.2)"/><path d="${d}" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linejoin="round"/></svg>`
  }

  function panelDashboard() {
    const paid = state.active.filter((a) => a.user.startsWith('vc-')).length
    const trial = state.active.filter((a) => a.user.startsWith('trial')).length
    const other = state.active.length - paid - trial
    const usersTotal = state.vouchers.length + 42
    const saldo = state.finance.month - 500000
    return `<div class="demo-stack">
      <div class="demo-grid-3">
        <div class="demo-info"><div class="demo-info-ico">${icons.activity}</div><div><div class="demo-info-label">System</div><div class="demo-info-body"><div>${state.identity}</div><div class="muted">Uptime ${state.uptime} · ${new Date().toLocaleTimeString()}</div></div></div></div>
        <div class="demo-info"><div class="demo-info-ico">${icons.hard}</div><div><div class="demo-info-label">Board</div><div class="demo-info-body"><div>${state.board}</div><div class="muted">${state.version} · ${state.arch}</div></div></div></div>
        <div class="demo-info"><div class="demo-info-ico">${icons.cpu}</div><div><div class="demo-info-label">Resource</div><div class="demo-info-body"><div>CPU ${state.cpu}% · RAM ${state.ram}%</div><div class="muted">${formatBytes(state.usedMem)} / ${formatBytes(state.totalMem)}</div></div></div></div>
      </div>
      <div class="demo-card">
        <div class="demo-card-h"><h3>${icons.store} Keuangan</h3><button type="button" class="demo-btn demo-btn-xs" data-panel="finance">Lihat semua</button></div>
        <div class="demo-card-b">
          <div class="demo-stats-row">
            <div class="demo-stat-tile"><b style="color:var(--color-ok)">${formatRp(state.finance.today)}</b><span>Hari ini</span></div>
            <div class="demo-stat-tile"><b style="color:var(--color-ok)">${formatRp(state.finance.month)}</b><span>Bulan ini</span></div>
            <div class="demo-stat-tile"><b style="color:#d97706">${formatRp(state.finance.hold * 5000)}</b><span>Hold · ${state.finance.hold} voucher</span></div>
            <div class="demo-stat-tile"><b>${formatRp(saldo)}</b><span>Saldo bulan</span></div>
          </div>
        </div>
      </div>
      <div class="demo-grid-12">
        <div class="demo-stack demo-col-8">
          <div class="demo-card">
            <div class="demo-card-h"><h3>${icons.wifi} Hotspot</h3></div>
            <div class="demo-card-b">
              <div class="demo-hot-grid">
                <button type="button" class="demo-hot blue" data-panel="active"><div class="demo-hot-top"><span>Active</span>${icons.users}</div><div class="demo-hot-val" id="stat-active">${state.active.length}</div></button>
                <button type="button" class="demo-hot green" data-panel="vouchers"><div class="demo-hot-top"><span>Users</span>${icons.ticket}</div><div class="demo-hot-val">${usersTotal}</div></button>
                <button type="button" class="demo-hot yellow" data-panel="vouchers"><div class="demo-hot-top"><span>Add User</span>${icons.plus}</div><div class="demo-hot-val">+</div></button>
                <button type="button" class="demo-hot red" data-panel="quick-print"><div class="demo-hot-top"><span>Generate</span>${icons.ticket}</div><div class="demo-hot-val">${state.profiles.length}</div></button>
              </div>
              <div class="demo-badges">
                <span class="demo-badge ok">paid ${paid}</span>
                <span class="demo-badge warn">trial ${trial}</span>
                <span class="demo-badge">other ${other}</span>
                <span class="demo-badge ok">Realtime ON</span>
              </div>
            </div>
          </div>
          <div class="demo-card">
            <div class="demo-card-h"><h3>${icons.cpu} CPU realtime</h3></div>
            <div class="demo-card-b">
              <div class="demo-chart" id="demo-spark">${sparkSvg(state.cpuHistory)}</div>
              <div class="demo-meta">${state.cpuHistory.length} samples · demo tick ~1.8s · last ${new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
        <div class="demo-stack demo-col-4">
          <div class="demo-card">
            <div class="demo-card-h"><h3>Ringkasan</h3></div>
            <div class="demo-card-b bare">
              <table class="demo-table">
                <tbody>
                  <tr><td class="muted">Total user</td><td class="right">${usersTotal}</td></tr>
                  <tr><td class="muted">Berbayar</td><td class="right">${state.vouchers.filter((v) => v.status === 'used').length + 28}</td></tr>
                  <tr><td class="muted">Trial</td><td class="right">6</td></tr>
                  <tr><td class="muted">Bypass</td><td class="right">2</td></tr>
                  <tr><td class="muted">Profile</td><td class="right">${state.profiles.length}</td></tr>
                  <tr><td class="muted">Simple queue</td><td class="right">${state.queues.length}</td></tr>
                  <tr><td class="muted">Queue tree</td><td class="right">1</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="demo-card">
            <div class="demo-card-h"><h3>${icons.users} Hotspot Active</h3><button type="button" class="demo-btn demo-btn-xs" data-panel="active">Show all</button></div>
            <div class="demo-card-b bare">
              <div class="demo-table-wrap">
                <table class="demo-table">
                  <thead><tr><th>User</th><th>Address</th><th>Uptime</th></tr></thead>
                  <tbody>
                    ${state.active
                      .slice(0, 8)
                      .map(
                        (a) =>
                          `<tr><td class="mono">${a.user}</td><td class="muted">${a.address}</td><td class="right">${a.uptime}</td></tr>`,
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  }

  function panelVouchers() {
    return `<div class="demo-card">
      <div class="demo-card-h"><h3>${icons.ticket} Users / Voucher</h3>
        <button type="button" class="demo-btn demo-btn-primary demo-btn-sm" id="demo-gen">Generate 5</button>
      </div>
      <div class="demo-card-b">
        <div class="demo-toolbar">
          <input class="demo-input" id="voucher-q" type="search" placeholder="Cari kode / profile…" />
          <select class="demo-select" id="voucher-filter">
            <option value="all">Semua status</option>
            <option value="ready">Ready</option>
            <option value="used">Used</option>
          </select>
        </div>
        <div class="demo-table-wrap" style="max-height:none">
          <table class="demo-table" id="voucher-table">
            <thead><tr><th>Kode</th><th>Profile</th><th>Status</th><th>Comment</th></tr></thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      <p class="demo-note">Data dummy. Di app asli, user/voucher diambil dari MikroTik hotspot users.</p>
    </div>`
  }

  function panelActive() {
    return `<div class="demo-card">
      <div class="demo-card-h"><h3>${icons.users} Hotspot Active</h3>
        <span class="demo-badge ok">${state.active.length} online</span>
      </div>
      <div class="demo-card-b">
        <div class="demo-toolbar">
          <input class="demo-input" id="active-q" type="search" placeholder="Cari user / IP / MAC…" />
        </div>
        <div class="demo-table-wrap" style="max-height:none">
          <table class="demo-table" id="active-table">
            <thead><tr><th>User</th><th>Address</th><th>MAC</th><th>Profile</th><th>Uptime</th><th>Server</th></tr></thead>
            <tbody>
              ${state.active
                .map(
                  (a) =>
                    `<tr data-q="${`${a.user} ${a.address} ${a.mac} ${a.profile}`.toLowerCase()}"><td class="mono">${a.user}</td><td>${a.address}</td><td class="mono muted">${a.mac}</td><td>${a.profile}</td><td class="right">${a.uptime}</td><td class="muted">${a.server}</td></tr>`,
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`
  }

  function panelProfiles() {
    return `<div class="demo-card">
      <div class="demo-card-h"><h3>User Profile</h3></div>
      <div class="demo-card-b bare">
        <div class="demo-table-wrap" style="max-height:none">
          <table class="demo-table">
            <thead><tr><th>Name</th><th>Rate limit</th><th>Validity</th><th>Shared</th><th class="right">Harga jual</th></tr></thead>
            <tbody>
              ${state.profiles
                .map(
                  (p) =>
                    `<tr><td class="mono">${p.name}</td><td>${p.rate}</td><td>${p.validity}</td><td>${p.shared}</td><td class="right">${p.price ? formatRp(p.price) : '—'}</td></tr>`,
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`
  }

  function panelFinance() {
    const max = Math.max(1, ...state.finance.byProfile.map((x) => x.value))
    return `<div class="demo-stack">
      <div class="demo-stats-row">
        <div class="demo-stat-tile"><b>${formatRp(state.finance.today)}</b><span>Hari ini</span></div>
        <div class="demo-stat-tile"><b>${formatRp(state.finance.month)}</b><span>Bulan ini</span></div>
        <div class="demo-stat-tile"><b>${state.finance.sold}</b><span>Voucher terjual</span></div>
        <div class="demo-stat-tile"><b>${state.finance.hold}</b><span>Stok siap jual</span></div>
      </div>
      <div class="demo-grid-12">
        <div class="demo-card demo-col-8">
          <div class="demo-card-h"><h3>Transaksi (dummy)</h3></div>
          <div class="demo-card-b bare">
            <table class="demo-table">
              <thead><tr><th>Jam</th><th>Jenis</th><th>Kategori</th><th>Catatan</th><th class="right">Nominal</th></tr></thead>
              <tbody>
                ${state.finance.txs
                  .map(
                    (t) =>
                      `<tr><td>${t.at}</td><td>${t.kind === 'in' ? '<span class="demo-badge ok">IN</span>' : '<span class="demo-badge warn">OUT</span>'}</td><td>${t.category}</td><td class="muted">${t.note}</td><td class="right" style="color:${t.kind === 'in' ? 'var(--color-ok)' : 'var(--color-danger)'}">${t.kind === 'in' ? '+' : '−'}${formatRp(t.amount)}</td></tr>`,
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        </div>
        <div class="demo-card demo-col-4">
          <div class="demo-card-h"><h3>Penjualan per profile</h3></div>
          <div class="demo-card-b">
            <div class="demo-bar-list">
              ${state.finance.byProfile
                .map(
                  (p) =>
                    `<div class="demo-bar-row"><span>${p.name}</span><strong>${formatRp(p.value)}</strong><div class="demo-bar-track"><div class="demo-bar-fill" style="width:${(p.value / max) * 100}%"></div></div></div>`,
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
      <p class="demo-note" style="border:1px solid var(--border);background:var(--card)">Angka demo. Di app asli, finance mengikuti comment/profile & transaksi lokal.</p>
    </div>`
  }

  function panelQuickPrint() {
    const slips = state.vouchers.filter((v) => v.status === 'ready').slice(0, 8)
    return `<div class="demo-card">
      <div class="demo-card-h"><h3>${icons.printer} Quick Print</h3>
        <select class="demo-select" id="qp-profile">
          ${state.profiles
            .filter((p) => p.name !== 'default')
            .map((p) => `<option value="${p.name}">${p.name} · ${formatRp(p.price)}</option>`)
            .join('')}
        </select>
        <button type="button" class="demo-btn demo-btn-primary demo-btn-sm" id="qp-gen">Generate 4</button>
      </div>
      <div class="demo-card-b">
        <div class="demo-print-grid" id="qp-grid">
          ${slips
            .map(
              (v) =>
                `<div class="demo-voucher-slip"><div class="head">mikduck WiFi</div><div>Kode</div><div class="code">${v.code}</div><div style="margin-top:.35rem;color:#555">${v.profile}</div></div>`,
            )
            .join('')}
        </div>
      </div>
      <p class="demo-note">Preview slip dummy — cetak sungguhan hanya di aplikasi desktop.</p>
    </div>`
  }

  function simpleTable(title, headers, rowsHtml, note) {
    return `<div class="demo-card">
      <div class="demo-card-h"><h3>${title}</h3></div>
      <div class="demo-card-b bare">
        <div class="demo-table-wrap" style="max-height:none">
          <table class="demo-table"><thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rowsHtml}</tbody></table>
        </div>
      </div>
      ${note ? `<p class="demo-note">${note}</p>` : ''}
    </div>`
  }

  function panelCookies() {
    return simpleTable(
      'Cookies',
      ['User', 'MAC', 'Expires'],
      state.cookies
        .map((c) => `<tr><td class="mono">${c.user}</td><td class="mono muted">${c.mac}</td><td>${c.expires}</td></tr>`)
        .join(''),
      'Dummy hotspot cookies.',
    )
  }

  function panelDhcp() {
    return simpleTable(
      'DHCP Leases',
      ['Address', 'MAC', 'Host', 'Status'],
      state.dhcp
        .map(
          (d) =>
            `<tr><td class="mono">${d.address}</td><td class="mono muted">${d.mac}</td><td>${d.host}</td><td><span class="demo-badge ok">${d.status}</span></td></tr>`,
        )
        .join(''),
    )
  }

  function panelQueues() {
    return simpleTable(
      'Traffic Queue',
      ['Name', 'Target', 'Max limit', 'Bytes'],
      state.queues
        .map((q) => `<tr><td class="mono">${q.name}</td><td>${q.target}</td><td>${q.maxLimit}</td><td class="right">${q.bytes}</td></tr>`)
        .join(''),
    )
  }

  function panelServices() {
    return simpleTable(
      'Services',
      ['Name', 'Port', 'Status'],
      state.services
        .map(
          (s) =>
            `<tr><td class="mono">${s.name}</td><td>${s.port}</td><td>${s.disabled ? '<span class="demo-badge">disabled</span>' : '<span class="demo-badge ok">enabled</span>'}</td></tr>`,
        )
        .join(''),
    )
  }

  function panelDevice() {
    return `<div class="demo-stack">
      <div class="demo-grid-3">
        <div class="demo-info"><div class="demo-info-ico">${icons.hard}</div><div><div class="demo-info-label">Identity</div><div class="demo-info-body"><div>${state.identity}</div><div class="muted">${state.board}</div></div></div></div>
        <div class="demo-info"><div class="demo-info-ico">${icons.cpu}</div><div><div class="demo-info-label">Resource</div><div class="demo-info-body"><div>CPU ${state.cpu}% · RAM ${state.ram}%</div><div class="muted">Uptime ${state.uptime}</div></div></div></div>
        <div class="demo-info"><div class="demo-info-ico">${icons.activity}</div><div><div class="demo-info-label">RouterOS</div><div class="demo-info-body"><div>${state.version}</div><div class="muted">${state.arch}</div></div></div></div>
      </div>
      <div class="demo-card"><div class="demo-card-h"><h3>Device</h3></div><div class="demo-card-b"><p class="demo-meta" style="margin:0">Halaman device di app punya reboot, identity, NTP, dll. Di demo ini hanya ringkasan dummy.</p></div></div>
    </div>`
  }

  function panelTools() {
    return `<div class="demo-card">
      <div class="demo-card-h"><h3>Tools</h3></div>
      <div class="demo-card-b">
        <div class="demo-toolbar">
          <input class="demo-input" value="8.8.8.8" readonly />
          <button type="button" class="demo-btn demo-btn-primary demo-btn-sm" id="demo-ping">Ping</button>
        </div>
        <pre id="ping-out" style="margin:0;padding:.75rem;background:var(--muted);border:1px solid var(--border);font-size:11px;font-family:ui-monospace,monospace;white-space:pre-wrap;min-height:120px">Klik Ping untuk output dummy.</pre>
      </div>
    </div>`
  }

  function panelTemplate(kind) {
    const title = kind === 'tpl-login' ? 'Template Login Page' : 'Template Cetak Voucher'
    return `<div class="demo-card">
      <div class="demo-card-h"><h3>${title}</h3></div>
      <div class="demo-card-b">
        <div class="demo-empty">Preview editor tersedia di aplikasi desktop.<br/>Demo web hanya menampilkan shell navigasi yang sama.</div>
      </div>
    </div>`
  }

  function panelSettings(kind) {
    const pref = kind === 'settings-pref'
    return `<div class="demo-card">
      <div class="demo-card-h"><h3>${pref ? 'Preference' : 'Settings · General'}</h3></div>
      <div class="demo-card-b">
        <div class="demo-stack">
          <label class="demo-meta">Tema aplikasi (demo lokal)</label>
          <div class="pref-group">
            <button type="button" class="pref-btn" data-set-theme="light">Light</button>
            <button type="button" class="pref-btn" data-set-theme="dark">Dark</button>
          </div>
          <p class="demo-meta">Di app asli, preference tersimpan per perangkat bersama bahasa ID/EN.</p>
        </div>
      </div>
    </div>`
  }

  const renderers = {
    dashboard: panelDashboard,
    vouchers: panelVouchers,
    active: panelActive,
    profiles: panelProfiles,
    finance: panelFinance,
    'quick-print': panelQuickPrint,
    cookies: panelCookies,
    dhcp: panelDhcp,
    queues: panelQueues,
    services: panelServices,
    device: panelDevice,
    tools: panelTools,
    'tpl-login': () => panelTemplate('tpl-login'),
    'tpl-voucher': () => panelTemplate('tpl-voucher'),
    settings: () => panelSettings('settings'),
    'settings-pref': () => panelSettings('settings-pref'),
  }

  function renderVoucherRows() {
    const tbody = document.querySelector('#voucher-table tbody')
    if (!tbody) return
    const q = (document.getElementById('voucher-q')?.value || '').trim().toLowerCase()
    const filter = document.getElementById('voucher-filter')?.value || 'all'
    const rows = state.vouchers.filter((v) => {
      if (filter !== 'all' && v.status !== filter) return false
      if (!q) return true
      return `${v.code} ${v.profile} ${v.comment}`.toLowerCase().includes(q)
    })
    tbody.innerHTML = rows.length
      ? rows
          .map(
            (v) =>
              `<tr><td class="mono">${v.code}</td><td>${v.profile}</td><td><span class="demo-pill-status ${v.status}">${v.status}</span></td><td class="muted">${v.comment}</td></tr>`,
          )
          .join('')
      : `<tr><td colspan="4" class="demo-empty">Tidak ada data</td></tr>`
  }

  function bindPanelEvents() {
    document.querySelectorAll('[data-panel]').forEach((el) => {
      if (el.closest('#demo-nav')) return
      el.addEventListener('click', () => showPanel(el.getAttribute('data-panel')))
    })

    document.getElementById('demo-gen')?.addEventListener('click', () => {
      for (let i = 0; i < 5; i++) {
        const n = Math.floor(1000 + Math.random() * 9000)
        state.vouchers.unshift({
          code: `vc-${n}`,
          profile: ['3jam', '1hari', '7hari'][i % 3],
          status: 'ready',
          comment: 'vc- demo gen',
        })
      }
      renderVoucherRows()
    })

    document.getElementById('voucher-q')?.addEventListener('input', renderVoucherRows)
    document.getElementById('voucher-filter')?.addEventListener('change', renderVoucherRows)
    if (document.getElementById('voucher-table')) renderVoucherRows()

    document.getElementById('active-q')?.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase()
      document.querySelectorAll('#active-table tbody tr').forEach((tr) => {
        tr.hidden = q ? !tr.getAttribute('data-q')?.includes(q) : false
      })
    })

    document.getElementById('qp-gen')?.addEventListener('click', () => {
      const profile = document.getElementById('qp-profile')?.value || '3jam'
      const grid = document.getElementById('qp-grid')
      if (!grid) return
      const made = []
      for (let i = 0; i < 4; i++) {
        const n = Math.floor(1000 + Math.random() * 9000)
        const code = `vc-${n}`
        state.vouchers.unshift({ code, profile, status: 'ready', comment: 'vc- quick print' })
        made.push(code)
      }
      grid.innerHTML = made
        .map(
          (code) =>
            `<div class="demo-voucher-slip"><div class="head">mikduck WiFi</div><div>Kode</div><div class="code">${code}</div><div style="margin-top:.35rem;color:#555">${profile}</div></div>`,
        )
        .join('')
    })

    document.getElementById('demo-ping')?.addEventListener('click', () => {
      const out = document.getElementById('ping-out')
      if (!out) return
      out.textContent = 'PING 8.8.8.8 (demo)\n'
      let i = 0
      const tick = setInterval(() => {
        i++
        const ms = (12 + Math.random() * 28).toFixed(1)
        out.textContent += `64 bytes from 8.8.8.8: icmp_seq=${i} ttl=117 time=${ms} ms\n`
        if (i >= 4) {
          clearInterval(tick)
          out.textContent += `\n--- 8.8.8.8 ping statistics (dummy) ---\n4 packets transmitted, 4 received, 0% packet loss`
        }
      }, 400)
    })
  }

  function showPanel(id) {
    if (!id || !renderers[id]) return
    state.panel = id
    renderNav()
    if (main) {
      main.innerHTML = `<section class="demo-panel on">${renderers[id]()}</section>`
      bindPanelEvents()
    }
    setMobileOpen(false)
    window.scrollTo({ top: 0 })
  }

  function tickLive() {
    state.cpuHistory.push(10 + Math.random() * 55)
    state.cpuHistory.shift()
    state.cpu = Math.round(state.cpuHistory[state.cpuHistory.length - 1])
    state.ram = Math.min(78, Math.max(28, state.ram + Math.round(Math.random() * 6 - 3)))

    if (Math.random() > 0.7 && state.active.length > 3) {
      const idx = Math.floor(Math.random() * state.active.length)
      const parts = String(state.active[idx].uptime).split(':')
      if (parts.length === 3) {
        let s = Number(parts[2]) + 2
        let m = Number(parts[1])
        let h = Number(parts[0])
        if (s >= 60) {
          s = 0
          m++
        }
        if (m >= 60) {
          m = 0
          h++
        }
        state.active[idx].uptime = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      }
    }

    if (state.panel === 'dashboard') {
      const spark = document.getElementById('demo-spark')
      const activeEl = document.getElementById('stat-active')
      if (spark) {
        const tmp = document.createElement('div')
        tmp.innerHTML = sparkSvg(state.cpuHistory)
        if (tmp.firstChild) spark.replaceChildren(tmp.firstChild)
      }
      if (activeEl) activeEl.textContent = String(state.active.length)
    }
  }

  // i18n
  const i18n = window.MikduckI18n
  if (i18n) {
    i18n.applyI18n(document)
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-set-lang')
        if (lang) i18n.setLocale(lang)
      })
    })
  }

  // theme
  applyTheme(getTheme())
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-set-theme]')
    if (!btn) return
    applyTheme(btn.getAttribute('data-set-theme'))
  })

  // mobile menu
  menuBtn?.addEventListener('click', () => setMobileOpen(!aside?.classList.contains('is-open')))
  backdrop?.addEventListener('click', () => setMobileOpen(false))

  // nav clicks (delegation)
  navEl?.addEventListener('click', (e) => {
    const t = e.target.closest('[data-panel], [data-toggle-group]')
    if (!t) return
    if (t.hasAttribute('data-toggle-group')) {
      const id = t.getAttribute('data-toggle-group')
      const group = nav.find((n) => n.type === 'group' && n.id === id)
      if (group) {
        group.open = !group.open
        renderNav()
      }
      return
    }
    showPanel(t.getAttribute('data-panel'))
  })

  showPanel('dashboard')
  setInterval(tickLive, 1800)
})()
