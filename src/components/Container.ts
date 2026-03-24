export const Container = (content: string, className = ''): string => {
  const classes = ['container', className].filter(Boolean).join(' ')

  return `<div class="${classes}">${content}</div>`
}
