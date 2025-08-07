import html from 'nanohtml'
import morph from 'nanomorph'

import createState from './state.js'

const state = createState()

export default function createNavigation(authState, currentHash, onLogout) {
  const tree = render(authState, currentHash, onLogout)
  
  // Listen for state changes (if navigation needs reactive updates)
  state.on('*', key => morph(tree, render(authState, currentHash, onLogout)))
  
  return tree
}

function render(authState, currentHash, onLogout) {
  return html`
    <div class="header">
      <div class="container">
        <nav class="nav">
          <div class="nav-left">
            <a href="#/" class=${currentHash === '#/' || currentHash === '' ? 'active' : ''}>Home</a>
          </div>
          <div class="nav-center">
            ${authState.isLoggedIn ? html`
              <a href="#/widgets" class=${currentHash === '#/widgets' ? 'active' : ''}>Widgets</a>
              <a href="#/settings" class=${currentHash === '#/settings' ? 'active' : ''}>Settings</a>
            ` : ''}
          </div>
          <div class="nav-right">
            ${authState.isLoggedIn ? html`
              <button onclick=${onLogout} class="logout-btn">Logout</button>
            ` : html`
              <a href="#/login" class="${currentHash === '#/login' ? 'active ' : ''}auth-btn">Sign In / Up</a>
            `}
          </div>
        </nav>
      </div>
    </div>
  `
}