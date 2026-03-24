export const initStickyHeader = (): void => {
  const header = document.querySelector<HTMLElement>('[data-site-header]')

  if (!header) {
    return
  }

  const toggleHeaderState = (): void => {
    header.classList.toggle('is-scrolled', window.scrollY > 12)
  }

  toggleHeaderState()
  window.addEventListener('scroll', toggleHeaderState, { passive: true })
}
