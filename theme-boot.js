(() => {
  const KEY = 'mikduck_site_theme'
  try {
    const saved = localStorage.getItem(KEY)
    const theme = saved === 'dark' || saved === 'light' ? saved : 'light'
    document.documentElement.setAttribute('data-theme', theme)
  } catch {
    document.documentElement.setAttribute('data-theme', 'light')
  }
})()
