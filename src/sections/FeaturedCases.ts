import { Container, SectionHeading } from '../components'
import { featuredCases } from '../data/site'

export const FeaturedCases = (): string => `
  <section class="section featured-section" id="featured-cases">
    ${Container(`
      ${SectionHeading({
        eyebrow: 'Casos destacados',
        title: 'Una muestra del tipo de proyectos que CreArt publica dentro de su experiencia 360.',
        description:
          'El portfolio oficial combina landing pages, webs corporativas, salas de venta, stands, catalogos, avisos y campanas para marcas del rubro inmobiliario y digital.',
      })}
      <div class="featured-cases">
        ${featuredCases
          .map(
            (item) => `
              <article class="case-card case-card--${item.accent}" data-reveal="fade-up">
                <div class="case-card__visual">
                  <span class="case-card__index">${item.index}</span>
                  <div class="case-card__placeholder">
                    <div class="case-card__grid"></div>
                    <div class="case-card__frame"></div>
                    <div class="case-card__chipset">
                      <span>Strategy</span>
                      <span>Design</span>
                      <span>Commerce</span>
                    </div>
                    <div class="case-card__editorial-line"></div>
                    <span>${item.category}</span>
                    <strong>${item.title}</strong>
                  </div>
                </div>
                <div class="case-card__body">
                  <span class="content-card__meta">${item.category}</span>
                  <h3>${item.title}</h3>
                  <p>${item.summary}</p>
                  <p class="case-card__impact">${item.impact}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    `)}
  </section>
`
