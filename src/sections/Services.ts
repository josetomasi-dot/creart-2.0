import { Container, SectionHeading } from '../components'
import { services } from '../data/site'

export const Services = (): string => `
  <section class="section" id="services">
    ${Container(`
      ${SectionHeading({
        eyebrow: 'Servicios',
        title: 'Servicios pensados para acompanar captacion, marca y experiencia comercial en un mismo ecosistema.',
        description:
          'La oferta publicada por CreArt combina marketing digital inmobiliario, desarrollo web, branding, audiovisual y espacios de venta con una mirada integrada.',
      })}
      <div class="services-grid">
        ${services
          .map(
            (service, index) => `
              <article class="service-panel" data-reveal="fade-up">
                <span class="service-panel__index">0${index + 1}</span>
                <div class="service-panel__content">
                  <h3>${service.title}</h3>
                  <p>${service.description}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    `)}
  </section>
`
