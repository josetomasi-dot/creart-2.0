import { Container, SectionHeading } from '../components'
import { processSteps } from '../data/site'

export const Process = (): string => `
  <section class="section" id="process">
    ${Container(`
      <div class="split-panel split-panel--process">
        <div class="split-panel__intro">
          ${SectionHeading({
            eyebrow: 'Metodo',
            title: 'Una forma de trabajo cercana, flexible y orientada a objetivos reales.',
            description:
              'El sitio oficial de CreArt insiste en algo clave: entender el negocio del cliente, integrarse al equipo, medir, analizar y corregir sobre la marcha.',
          })}
        </div>
        <div class="process-grid">
          ${processSteps
            .map(
              (item) => `
                <article class="process-card" data-reveal="fade-up">
                  <span class="process-card__step">${item.step}</span>
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
