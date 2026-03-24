import { Container } from '../components'
import { credibilityLogos } from '../data/site'

export const ClientStrip = (): string => `
  <section class="client-strip section section--compact" aria-label="Credibilidad">
    ${Container(`
      <div class="client-strip__inner" data-reveal="fade-up">
        <div class="client-strip__intro">
          <span class="client-strip__label">Clientes y marcas visibles en la experiencia publicada por CreArt.</span>
          <p>La especializacion inmobiliaria se refleja en una cartera donde conviven desarrollo web, marketing digital, piezas comerciales y experiencia de venta.</p>
        </div>
        <div class="client-strip__list">
          ${credibilityLogos.map((client) => `<span>${client}</span>`).join('')}
        </div>
      </div>
    `)}
  </section>
`
