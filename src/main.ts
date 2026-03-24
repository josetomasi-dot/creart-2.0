import './styles/index.css'
import { createApp } from './app'
import { initScrollReveal } from './hooks/use-scroll-reveal'
import { initStickyHeader } from './hooks/use-sticky-header'

const mountNode = document.querySelector<HTMLDivElement>('#app')

if (!mountNode) {
  throw new Error('No se encontro el nodo #app para montar la homepage.')
}

mountNode.innerHTML = createApp()

initStickyHeader()
initScrollReveal()

const yearNode = document.querySelector<HTMLElement>('[data-current-year]')

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString()
}
