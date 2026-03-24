import { Eyebrow } from './Eyebrow'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps): string => `
  <div class="section-heading">
    <div class="section-heading__top">
      ${Eyebrow(eyebrow)}
      <span class="section-heading__rule" aria-hidden="true"></span>
    </div>
    <div data-reveal="fade-up">
      <h2>${title}</h2>
    </div>
    <p data-reveal="fade-up">${description}</p>
  </div>
`
