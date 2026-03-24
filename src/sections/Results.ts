import { Container, SectionHeading } from '../components'
import { resultNotes, resultStats } from '../data/site'

export const Results = (): string => `
  <section class="section results-section" id="results">
    ${Container(`
      <div class="results-shell">
        <div class="results-copy">
          ${SectionHeading({
            eyebrow: 'Resultados',
            title: 'La experiencia publicada por CreArt muestra una operacion amplia, activa y sostenida en el tiempo.',
            description:
              'Mas que promesas abstractas, aqui la senal esta en la trayectoria: clientes, campanas, webs y ads desplegados en multiples frentes del negocio.',
          })}
          <div class="results-notes" data-reveal="fade-up">
            ${resultNotes.map((item) => `<p>${item}</p>`).join('')}
          </div>
        </div>
        <div class="stats-grid">
          ${resultStats
            .map(
              (stat) => `
                <article class="stat-card" data-reveal="fade-up">
                  <strong>${stat.value}</strong>
                  <span>${stat.label}</span>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    `)}
  </section>
`
