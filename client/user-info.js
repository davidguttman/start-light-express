import html from 'nanohtml'

export default function createUserInfo(authState) {
  if (!authState.isLoggedIn) {
    return html`<div></div>`
  }
  
  return html`
    <div class="user-email">${authState.email}</div>
  `
}