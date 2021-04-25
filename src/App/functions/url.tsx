export function goTo(href: string) {
  if (typeof window.history.pushState != 'undefined') {
    window.history.pushState({ href }, 'Inicio', href)
  } else {
    window.location.assign(href)
  }
  return new Promise<string>(res => res(href))
}