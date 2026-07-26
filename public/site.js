(() => {
  const initializeMenu = () => {
    const header = document.querySelector('[data-site-header]')
    const toggle = header?.querySelector('[data-menu-toggle]')
    const navigation = header?.querySelector('[data-mobile-nav]')
    const label = header?.querySelector('[data-menu-label]')
    const openIcon = header?.querySelector('.mobile-menu-open-icon')
    const closeIcon = header?.querySelector('.mobile-menu-close-icon')

    if (!header || !toggle || !navigation || !label || !openIcon || !closeIcon) {
      return false
    }

    const setOpen = (open) => {
      header.dataset.menuOpen = String(open)
      toggle.setAttribute('aria-expanded', String(open))
      navigation.hidden = !open
      label.textContent = open ? 'Close menu' : 'Open menu'
      openIcon.classList.toggle('hidden', open)
      closeIcon.classList.toggle('hidden', !open)
    }

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true')
    })

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false)
    })

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false)
    })

    return true
  }

  if (initializeMenu()) return

  const observer = new MutationObserver(() => {
    if (initializeMenu()) observer.disconnect()
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })
})()
