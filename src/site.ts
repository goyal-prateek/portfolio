type ThreeIslands = typeof import('./three-islands')

const AVATAR_LOAD_DELAY_MS = 2500

const initializedMenus = new WeakSet<Element>()
const initializedPointerCards = new WeakSet<Element>()
const initializedAvatarRoots = new WeakSet<Element>()
const initializedSkillsRoots = new WeakSet<Element>()

let threeIslandsPromise: Promise<ThreeIslands> | undefined

function loadThreeIslands() {
  threeIslandsPromise ??= import('./three-islands')
  return threeIslandsPromise
}

function initializeMenu() {
  const header = document.querySelector('[data-site-header]')
  const toggle = header?.querySelector<HTMLElement>('[data-menu-toggle]')
  const navigation = header?.querySelector<HTMLElement>('[data-mobile-nav]')
  const label = header?.querySelector<HTMLElement>('[data-menu-label]')
  const openIcon = header?.querySelector<HTMLElement>('.mobile-menu-open-icon')
  const closeIcon = header?.querySelector<HTMLElement>('.mobile-menu-close-icon')

  if (
    !header ||
    !toggle ||
    !navigation ||
    !label ||
    !openIcon ||
    !closeIcon ||
    initializedMenus.has(header)
  ) {
    return
  }

  initializedMenus.add(header)

  const setOpen = (open: boolean) => {
    ;(header as HTMLElement).dataset.menuOpen = String(open)
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
    if ((event.target as Element).closest('a')) setOpen(false)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false)
  })
}

function initializePointerGlow() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  document.querySelectorAll<HTMLElement>('[data-pointer-glow]').forEach((card) => {
    if (initializedPointerCards.has(card)) return
    initializedPointerCards.add(card)

    let frameId = 0
    let pointerX = 0
    let pointerY = 0
    let bounds = card.getBoundingClientRect()

    const paintGlow = () => {
      const x = ((pointerX - bounds.left) / bounds.width) * 100
      const y = ((pointerY - bounds.top) / bounds.height) * 100

      card.style.setProperty('--glow-x', `${Math.max(0, Math.min(100, x))}%`)
      card.style.setProperty('--glow-y', `${Math.max(0, Math.min(100, y))}%`)
      card.style.setProperty('--glow-opacity', '1')
      frameId = 0
    }

    card.addEventListener('pointerenter', () => {
      bounds = card.getBoundingClientRect()
    })

    card.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return
      pointerX = event.clientX
      pointerY = event.clientY
      if (!frameId) frameId = requestAnimationFrame(paintGlow)
    })

    card.addEventListener('pointerleave', () => {
      if (frameId) cancelAnimationFrame(frameId)
      frameId = 0
      card.style.setProperty('--glow-opacity', '0.7')
    })
  })
}

function initializeAvatar3d() {
  document.querySelectorAll<HTMLElement>('[data-avatar-3d-root]').forEach((root) => {
    if (initializedAvatarRoots.has(root)) return
    initializedAvatarRoots.add(root)

    let started = false
    let loadTimer = 0

    const start = () => {
      if (started) return
      started = true
      window.clearTimeout(loadTimer)
      loadThreeIslands().then(({ mountAvatar3d }) => mountAvatar3d(root))
    }

    const scheduleLoad = () => {
      loadTimer = window.setTimeout(start, AVATAR_LOAD_DELAY_MS)
    }

    if (document.readyState === 'complete') {
      scheduleLoad()
    } else {
      window.addEventListener('load', scheduleLoad, { once: true })
    }
  })
}

function initializeSkills3d() {
  document.querySelectorAll<HTMLElement>('[data-skills-3d-root]').forEach((root) => {
    if (initializedSkillsRoots.has(root)) return
    initializedSkillsRoots.add(root)

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        loadThreeIslands().then(({ mountSkills3d }) => mountSkills3d(root))
      },
      { rootMargin: '240px 0px', threshold: 0.01 },
    )

    observer.observe(root)
  })
}

function initializeSite() {
  initializeMenu()
  initializePointerGlow()
  initializeAvatar3d()
  initializeSkills3d()
}

initializeSite()

const observer = new MutationObserver(initializeSite)
observer.observe(document.documentElement, { childList: true, subtree: true })

window.setTimeout(() => observer.disconnect(), 5000)
