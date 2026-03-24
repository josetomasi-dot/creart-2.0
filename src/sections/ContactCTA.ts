import { Container, Eyebrow } from '../components'
import { contactEmail, contactPhone, contactSignals } from '../data/site'

export const ContactCTA = (): string => `
  <section class="section contact-section" id="contact">
    ${Container(`
      <div class="contact-shell" data-reveal="fade-up">
        <div class="contact-copy">
          ${Eyebrow('Contacto')}
          <h2>Hablemos de tu proyecto y veamos que solucion necesita hoy.</h2>
          <p>
            En la pagina oficial de contacto, CreArt invita a escribir para informacion, concertar reunion u otros requerimientos. Si hay un desafio comercial o de marketing por resolver, este es el punto de partida.
          </p>
          <div class="contact-direct">
            <a href="mailto:${contactEmail}">${contactEmail}</a>
            <a href="tel:${contactPhone.replace(/\s+/g, '')}">${contactPhone}</a>
          </div>
          <div class="contact-signals">
            ${contactSignals.map((signal) => `<p>${signal}</p>`).join('')}
          </div>
        </div>
        <form class="contact-form">
          <label class="field">
            <span>Nombre</span>
            <input type="text" name="name" placeholder="Tu nombre" />
          </label>
          <label class="field">
            <span>Email</span>
            <input type="email" name="email" placeholder="tu@empresa.com" />
          </label>
          <label class="field">
            <span>Empresa</span>
            <input type="text" name="company" placeholder="Tu marca o empresa" />
          </label>
          <label class="field field--full">
            <span>Proyecto o desafio</span>
            <textarea name="message" rows="5" placeholder="Cuentanos brevemente el contexto, el objetivo y lo que hoy no esta funcionando."></textarea>
          </label>
          <div class="contact-form__footer">
            <p>Completa el formulario y te responderan a la brevedad, tal como se indica en su pagina oficial de contacto.</p>
            <button type="submit" class="button button--primary">Enviar mensaje</button>
          </div>
        </form>
      </div>
    `)}
  </section>
`
