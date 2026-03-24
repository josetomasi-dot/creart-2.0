import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { ClientStrip } from './sections/ClientStrip'
import { FeaturedCases } from './sections/FeaturedCases'
import { WhyCreart } from './sections/WhyCreart'
import { Services } from './sections/Services'
import { Process } from './sections/Process'
import { Results } from './sections/Results'
import { ContactCTA } from './sections/ContactCTA'
import { Footer } from './sections/Footer'

export const createApp = (): string => `
  ${Header()}
  <main>
    ${Hero()}
    ${ClientStrip()}
    ${FeaturedCases()}
    ${WhyCreart()}
    ${Services()}
    ${Process()}
    ${Results()}
    ${ContactCTA()}
  </main>
  ${Footer()}
`
