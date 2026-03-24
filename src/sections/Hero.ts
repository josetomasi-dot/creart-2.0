import { Container, Eyebrow } from '../components'
import { credibilityStats } from '../data/site'

export const Hero = (): string => `
  <section class="hero section">
    ${Container(`
      <div class="hero-layout">
        <div class="hero-copy">
          ${Eyebrow('CreArt / Agencia boutique')}
          <div class="hero-copy__stack">
            <p class="hero-kicker" data-reveal="fade-up">Marketing inmobiliario, marketing digital y soluciones 360 con foco comercial.</p>
            <h1 data-reveal="fade-up">Experiencia que evoluciona en el tiempo para marcas y proyectos que necesitan vender mejor.</h1>
            <p class="hero-copy__lead" data-reveal="fade-up">
              CreArt es una agencia boutique con mas de 25 anos de experiencia, especializada en marketing inmobiliario y en soluciones digitales pensadas para impulsar crecimiento, visibilidad y conversion.
            </p>
          </div>
          <div class="hero-actions" data-reveal="fade-up">
            <a href="#contact" class="button button--primary">Agenda una reunion</a>
            <a href="#featured-cases" class="button button--secondary">Ver portfolio destacado</a>
          </div>
          <ul class="hero-metrics" data-reveal="fade-up">
            ${credibilityStats
              .map(
                (item) => `
                  <li>
                    <strong>${item.value}</strong>
                    <span>${item.label}</span>
                  </li>
                `,
              )
              .join('')}
          </ul>
        </div>
        <aside class="hero-visual" data-reveal="fade-up">
          <div class="hero-frame">
            <div class="hero-frame__topline">
              <span>CreArt 360</span>
              <span>MKT inmobiliario + digital</span>
            </div>
            <div class="hero-frame__canvas">
              <div class="hero-composition hero-composition--tall">
                <div class="hero-composition__grid"></div>
                <div class="hero-composition__orb"></div>
                <div class="hero-composition__panel">
                  <span>Agencia</span>
                  <strong>Ideas con proposito para conectar, destacar y convertir.</strong>
                </div>
              </div>
              <div class="hero-composition hero-composition--headline">
                <div class="hero-composition__lines"></div>
                <span>MKT inmobiliario</span>
                <strong>Especializacion real en proyectos, tiempos comerciales y captacion.</strong>
              </div>
              <div class="hero-composition hero-composition--wide">
                <div class="hero-composition__stripe"></div>
                <div class="hero-composition__editorial">
                  <span>MKT digital</span>
                  <p>Meta, Google, SEO, automatizacion, contenido y medicion para generar leads calificados.</p>
                </div>
              </div>
              <div class="hero-composition hero-composition--note">
                <div class="hero-composition__lines"></div>
                <span>Solucion 360</span>
                <p>Desde branding y web hasta salas de venta, audiovisual y piezas comerciales bajo una misma mirada.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    `)}
  </section>
`
