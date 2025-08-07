// ES Module entry point for the client application
import './style/index.js'
import hash from 'http-hash'
import html from 'nanohtml'
import morph from 'nanomorph'

import welcome from './welcome.js'
import widgets from './widgets.js'
import settings from './settings.js'
import * as auth from './auth.js'
import * as routeGuard from './route-guard.js'
import createNavigation from './navigation.js'
import createUserInfo from './user-info.js'

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

// Global app container for reactive updates
let appContainer = null

function navigate() {
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
  
  // Create app tree using nanohtml with route content included
  const newTree = html`
    <div class="app">
      ${createNavigation(authState, currentHash, auth.handleLogout)}
      <div class="container">
        ${createUserInfo(authState)}
        <div class="main-content">
          ${routeContent}
        </div>
      </div>
    </div>
  `
  
  if (!appContainer) {
    // Initial render - clear body and mount app
    document.body.innerHTML = ''
    document.body.appendChild(newTree)
    appContainer = newTree
  } else {
    // Update existing app using nanomorph
    morph(appContainer, newTree)
  }
}

// Initialize auth state on app load
auth.initAuthState()

// Handle hash changes
window.addEventListener('hashchange', navigate)

// Initial navigation
navigate()