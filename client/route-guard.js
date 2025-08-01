// Note: auth state will be passed as parameter to avoid circular dependency

// Define protected routes that require authentication
const PROTECTED_ROUTES = [
  '/widgets',
  '/settings'
]

// Define public routes that don't require authentication
const PUBLIC_ROUTES = [
  '/',
  '/login',
  '/signup',
  '/confirm',
  '/change-password-request',
  '/change-password'
]

/**
 * Check if a route requires authentication
 * @param {string} route - The route path (without #)
 * @returns {boolean} - True if route is protected
 */
function isProtectedRoute(route) {
  return PROTECTED_ROUTES.includes(route)
}

/**
 * Check if a route is public (no auth required)
 * @param {string} route - The route path (without #)
 * @returns {boolean} - True if route is public
 */
function isPublicRoute(route) {
  return PUBLIC_ROUTES.includes(route)
}

/**
 * Guard route access based on authentication state
 * @param {string} route - The route path (without #)
 * @param {object} authState - The current authentication state
 * @returns {string} - The allowed route (may redirect to login)
 */
function guardRoute(route, authState = { isLoggedIn: false }) {
  
  // If user is not logged in and trying to access protected route
  if (!authState.isLoggedIn && isProtectedRoute(route)) {
    console.log(`Route ${route} requires authentication, redirecting to login`)
    return '/login'
  }
  
  // If user is logged in and trying to access auth pages, redirect to widgets
  if (authState.isLoggedIn && ['/login', '/signup'].includes(route)) {
    console.log(`User already logged in, redirecting from ${route} to widgets`)
    return '/widgets'
  }
  
  // Allow the route
  return route
}

/**
 * Create a protected route wrapper that shows auth required message
 * @param {string} routeName - Name of the protected route
 * @returns {HTMLElement} - Auth required message element
 */
function createAuthRequiredElement(routeName) {
  const container = document.createElement('div')
  container.className = 'content'
  container.innerHTML = `
    <h2>Authentication Required</h2>
    <p>You need to be logged in to access ${routeName}.</p>
    <div style="margin-top: 1rem;">
      <a href="#/login" class="btn">Log In</a>
      <a href="#/signup" class="btn btn-secondary" style="margin-left: 1rem;">Sign Up</a>
    </div>
  `
  return container
}

module.exports = {
  isProtectedRoute,
  isPublicRoute,
  guardRoute,
  createAuthRequiredElement,
  PROTECTED_ROUTES,
  PUBLIC_ROUTES
}