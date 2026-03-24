import { Container, SectionHeading } from '../components'
import { whyCreartPrinciples } from '../data/site'

export const WhyCreart = (): string => `
  <section class="section" id="why-creart">
    ${Container(`
      <div class="split-panel split-panel--asymmetric">
        <div class="split-panel__intro">
          ${SectionHeading({
            eyebrow: 'La agencia',
            title: 'Una agencia boutique que entiende el negocio inmobiliario y actua con foco comercial.',
            description:
              'Segun su sitio oficial, CreArt lleva mas de 25 anos creando soluciones de marketing para inmobiliarias, combinando cercania, experiencia especializada y una mirada 360.',
          })}
        </div>
        <div class="feature-stack feature-stack--editorial">
          ${whyCreartPrinciples
            .map(
              (item) => `
                <article class="glass-card glass-card--feature" data-reveal="fade-up">
                  <h3>${item.title}</h3>
                  <p>${item.copy}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    `)}
  </section>
`
