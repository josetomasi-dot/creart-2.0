import { Container } from '../components'
import { contactEmail } from '../data/site'

export const Footer = (): string => `
  <footer class="site-footer">
    ${Container(`
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <a href="#" class="brand-mark brand-mark--footer">
            <span class="brand-mark__icon">CA</span>
            <span class="brand-mark__text-wrap">
              <span class="brand-mark__text">CreArt</span>
              <span class="brand-mark__caption">Agencia de publicidad 360 y especialista en marketing inmobiliario.</span>
            </span>
          </a>
          <p>Mas de 25 anos acompanando proyectos con marketing digital, desarrollo web, branding y soluciones comerciales para el rubro inmobiliario.</p>
        </div>
        <div class="site-footer__meta">
          <a href="mailto:${contactEmail}">${contactEmail}</a>
          <span>Santiago, Chile</span>
          <span data-current-year></span>
        </div>
      </div>
    `)}
  </footer>
`
