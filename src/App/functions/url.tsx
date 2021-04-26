import { name } from '../../app-info.json';

export function goTo(href: string) {
  if (typeof window.history.pushState != 'undefined') {
    window.history.pushState({ href }, name, href)
  } else {
    window.location.assign(href)
  }
  return new Promise<string>(res => res(href))
}

window.addEventListener('beforeunload', ev => {
  ev.preventDefault()
  console.log(ev)
})