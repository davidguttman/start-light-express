// ES Module entry point for the client application
import './style/index.js'
import hash from 'http-hash'
import html from 'nanohtml'
import morph from 'nanomorph'

import welcome from './views/welcome.js'
import widgets from './views/widgets.js'
import settings from './views/settings.js'
import * as auth from './auth.js'
import * as routeGuard from './route-guard.js'
import createNavigation from './views/navigation.js'
import createUserInfo from './views/user-info.js'

const router = hash()

document.title = 'Start Light Express'

// Set up hash-based routes
router.set('/', welcome)
router.set('/widgets', widgets)
router.set('/settings', settings)
router.set('/login', auth.createLogin)
router.set('/signup', auth.createSignup)
router.set('/confirm', auth.createConfirm)
router.set('/change-password-request', auth.createChangePasswordRequest)
router.set('/change-password', auth.createChangePassword)

// Initial navigation
const mainEl = main()
document.body.appendChild(mainEl)

function main () {
  // Initialize auth state on app load
  auth.initAuthState()
  // Handle hash changes
  window.addEventListener('hashchange', update)

  let tree = render({
    routeContent: html`<div>Loading...</div>`,
    authState: auth.getAuthState(),
    currentHash: window.location.hash
  })

  update()

  return tree

  function update () {
    const authState = auth.getAuthState()
    const currentHash = window.location.hash

    // Get current route (remove # from hash)
    const routeHash = currentHash.slice(1) || '/'

    // Apply route guarding
    const allowedRoute = routeGuard.guardRoute(routeHash, authState)

    // If route was redirected, update the hash
    if (allowedRoute !== routeHash) {
      window.location.hash = allowedRoute
      return // Navigate will be called again by hashchange event
    }

    const route = router.get(allowedRoute)

    // Get route content
    let routeContent
    if (route && route.handler) {
      // Check if user is trying to access protected content without auth
      if (routeGuard.isProtectedRoute(allowedRoute) && !authState.isLoggedIn) {
        routeContent = routeGuard.createAuthRequiredElement(allowedRoute)
      } else {
        routeContent = route.handler({ ...route.params, splat: route.splat })
      }
    } else {
      // 404 page using nanohtml
      routeContent = html`
        <div class="content">
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="#/" class="btn">Go Home</a>
        </div>
      `
    }

    tree = morph(tree, render({ routeContent, authState, currentHash }))
  }

  function render ({ routeContent, authState, currentHash }) {
    // Create app tree using nanohtml with route content included
    return html`
      <div class="app">
        ${createNavigation({
          authState,
          currentHash,
          onLogout: auth.handleLogout
        })}
        <div class="container">
          ${createUserInfo(authState)}
          <div class="main-content">${routeContent}</div>
        </div>
      </div>
    `
  }
}
