import { Container } from '../components'
import { navItems } from '../data/site'

export const Header = (): string => {
  const navigation = navItems
    .map((item) => `<a href="${item.href}" class="nav-link">${item.label}</a>`)
    .join('')

  return `
    <header class="site-header" data-site-header>
      ${Container(`
        <div class="header-shell">
          <a href="#" class="brand-mark" aria-label="CreArt home">
            <span class="brand-mark__icon">CA</span>
            <span class="brand-mark__text-wrap">
              <span class="brand-mark__text">CreArt</span>
              <span class="brand-mark__caption">Agencia boutique de marketing inmobiliario, digital y 360.</span>
            </span>
          </a>
          <nav class="desktop-nav" aria-label="Principal">
            ${navigation}
          </nav>
          <a href="#contact" class="button button--ghost">Agenda una reunion</a>
        </div>
      `)}
    </header>
  `
}
