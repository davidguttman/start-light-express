require('./style')
const hash = require('http-hash')()

const welcome = require('./welcome')
const widgets = require('./widgets')
const settings = require('./settings')
const auth = require('./auth')
const routeGuard = require('./route-guard')

document.title = 'Start Light Express'

// Set up hash-based routes
hash.set('/', welcome)
hash.set('/widgets', widgets)
hash.set('/settings', settings)
hash.set('/login', auth.createLogin)
hash.set('/signup', auth.createSignup)
hash.set('/confirm', auth.createConfirm)
hash.set('/change-password-request', auth.createChangePasswordRequest)
hash.set('/change-password', auth.createChangePassword)

function navigate() {
  // Clear previous content
  document.body.innerHTML = ''
  
  // Create header with navigation
  const header = document.createElement('div')
  header.className = 'header'
  
  const authState = auth.getAuthState()
  const currentHash = window.location.hash
  
  header.innerHTML = `
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <a href="#/" ${currentHash === '#/' || currentHash === '' ? 'class="active"' : ''}>Home</a>
        </div>
        <div class="nav-center">
          ${authState.isLoggedIn ? `
            <a href="#/widgets" ${currentHash === '#/widgets' ? 'class="active"' : ''}>Widgets</a>
            <a href="#/settings" ${currentHash === '#/settings' ? 'class="active"' : ''}>Settings</a>
          ` : ''}
        </div>
        <div class="nav-right">
          ${authState.isLoggedIn ? `
            <button onclick="window.auth.handleLogout()" class="logout-btn">Logout</button>
          ` : `
            <a href="#/login" ${currentHash === '#/login' ? 'class="active"' : ''} class="auth-btn">Sign In / Up</a>
          `}
        </div>
      </nav>
    </div>
  `
  
  // Create main container
  const container = document.createElement('div')
  container.className = 'container'
  
  // Add user email in top-right corner if logged in
  if (authState.isLoggedIn) {
    const userEmail = document.createElement('div')
    userEmail.className = 'user-email'
    userEmail.textContent = authState.email
    container.appendChild(userEmail)
  }
  
  // Get current route (remove # from hash)
  const routeHash = currentHash.slice(1) || '/'
  
  // Apply route guarding  
  const allowedRoute = routeGuard.guardRoute(routeHash, authState)
  
  // If route was redirected, update the hash
  if (allowedRoute !== routeHash) {
    window.location.hash = allowedRoute
    return // Navigate will be called again by hashchange event
  }
  
  const route = hash.get(allowedRoute)
  
  if (route && route.handler) {
    // Check if user is trying to access protected content without auth
    if (routeGuard.isProtectedRoute(allowedRoute) && !authState.isLoggedIn) {
      const el = routeGuard.createAuthRequiredElement(allowedRoute)
      container.appendChild(el)
    } else {
      const el = route.handler({ ...route.params, splat: route.splat })
      container.appendChild(el)
    }
  } else {
    // 404 page
    container.innerHTML = `
      <div class="content">
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="#/" class="btn">Go Home</a>
      </div>
    `
  }
  
  // Append elements to body
  document.body.appendChild(header)
  document.body.appendChild(container)
}

// Initialize auth state on app load
auth.initAuthState()

// Expose auth module globally for logout button
window.auth = auth

// Handle hash changes
window.addEventListener('hashchange', navigate)

// Initial navigation
navigate()