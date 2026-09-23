(() => {
  const KEY = 'mikduck_site_theme'
  try {
    const saved = localStorage.getItem(KEY)
    let theme = 'light'
    if (saved === 'dark' || saved === 'light') theme = saved
    else if (saved === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.documentElement.setAttribute('data-theme', theme)
  } catch {
    document.documentElement.setAttribute('data-theme', 'light')
  }
})()
