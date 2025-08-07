import qs from 'querystring'
import AuthenticUI from 'authentic-ui'
import html from 'nanohtml'

// Initialize authentic UI with environment variable (will be configured by Vite)
// VITE_AUTHENTIC_SERVER must be set in environment variables
if (!import.meta.env.VITE_AUTHENTIC_SERVER) {
  throw new Error('VITE_AUTHENTIC_SERVER environment variable is required')
}

const aui = AuthenticUI({
  server: import.meta.env.VITE_AUTHENTIC_SERVER, // Required: Set VITE_AUTHENTIC_SERVER in environment
  prefix: '/auth', // Use default authentic prefix
  googleSignIn: true, // Enable Google Sign-In
  styles: false, // Disable default styles to use our own
  links: {
    signup: '#/signup',
    login: '#/login',
    changePasswordRequest: '#/change-password-request'
  },
  titles: {
    signup: 'Create your account',
    login: 'Sign in to your account',
    changePasswordRequest: 'Reset your password'
  }
})

console.log('Authentic UI initialized with server:', import.meta.env.VITE_AUTHENTIC_SERVER)

// Auth state management
let authState = {
  isLoggedIn: false,
  email: null,
  authToken: null
}

// Initialize auth state from localStorage or authentic-ui
function initAuthState() {
  const token = aui.authToken()
  const email = aui.email()
  
  console.log('initAuthState called - token:', token ? 'present' : 'missing', 'email:', email)
  
  if (token && email) {
    authState = {
      isLoggedIn: true,
      email: email,
      authToken: token
    }
    console.log('Auth state updated - user is logged in:', email)
  } else {
    console.log('No valid auth token/email found')
  }
}

// Get current auth state
function getAuthState() {
  return { ...authState }
}

// Login handler
function handleLogin(err, result) {
  if (err) {
    console.error('Login error:', err)
    return
  }
  
  // Update auth state
  authState = {
    isLoggedIn: true,
    email: aui.email(),
    authToken: aui.authToken()
  }
  
  console.log('User logged in:', authState.email)
  
  // Redirect to main content
  window.location.hash = '/widgets'
}

// Clear auth state (for expired sessions)
function clearAuthState() {
  aui.logout()
  authState = {
    isLoggedIn: false,
    email: null,
    authToken: null
  }
  console.log('Auth state cleared')
}

// Logout handler
function handleLogout() {
  clearAuthState()
  
  console.log('User logged out')
  // Redirect to home and trigger navigation re-render
  window.location.hash = '/'
  
  // Manually trigger hashchange event to ensure navigation updates
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

// Create login component
function createLogin() {
  const container = document.createElement('div')
  container.className = 'auth-container'
  
  // Check for error message from 401 handling
  const authError = sessionStorage.getItem('authError')
  if (authError) {
    const errorDiv = document.createElement('div')
    errorDiv.className = 'auth-error'
    errorDiv.textContent = authError
    container.appendChild(errorDiv)
    
    // Clear the error after displaying it
    sessionStorage.removeItem('authError')
  }
  
  const loginEl = aui.login(handleLogin)
  container.appendChild(loginEl)
  
  return container
}

// Create signup component
function createSignup() {
  const container = document.createElement('div')
  container.className = 'auth-container'
  
  const signupEl = aui.signup({
    confirmUrl: window.location.origin + '#/confirm',
    subject: 'Welcome to Start Light Express!',
    bodyTemplate: '<p>Please click the link to confirm your account:</p><p><a href="<%= confirmUrl %>"><%= confirmUrl %></a></p>'
  })
  container.appendChild(signupEl)
  
  return container
}

// Create confirm component
function createConfirm() {
  const container = document.createElement('div')
  container.className = 'auth-container'
  
  const query = qs.parse(window.location.search.slice(1))
  
  if (!query.email || !query.confirmToken) {
    const errorEl = html`
      <div class="content">
        <h2>Invalid Confirmation Link</h2>
        <p>This confirmation link appears to be invalid or expired.</p>
        <a href="#/signup" class="btn">Try Signing Up Again</a>
      </div>
    `
    container.appendChild(errorEl)
    return container
  }
  
  const confirmEl = aui.confirm({
    email: query.email,
    confirmToken: query.confirmToken
  }, handleLogin)
  
  container.appendChild(confirmEl)
  
  return container
}

// Create change password request component
function createChangePasswordRequest() {
  const container = document.createElement('div')
  container.className = 'auth-container'
  
  const changeOpts = {
    changeUrl: window.location.origin + '#/change-password',
    subject: 'Reset Your Password',
    bodyTemplate: '<p>Please click the link to reset your password:</p><p><a href="<%= changeUrl %>">Reset Password</a></p><p>If the link does not work, copy and paste this URL: <%= changeUrl %></p>'
  }

  console.log('changeOpts', changeOpts)

  const changePasswordRequestEl = aui.changePasswordRequest(changeOpts)
  container.appendChild(changePasswordRequestEl)
  
  return container
}

// Create change password component
function createChangePassword() {
  const container = document.createElement('div')
  container.className = 'auth-container'
  
  const query = qs.parse(window.location.search.slice(1))
  
  if (!query.email || !query.changeToken) {
    const errorEl = html`
      <div class="content">
        <h2>Invalid Password Reset Link</h2>
        <p>This password reset link appears to be invalid or expired.</p>
        <a href="#/change-password-request" class="btn">Request New Reset Link</a>
      </div>
    `
    container.appendChild(errorEl)
    return container
  }
  
  const changePasswordEl = aui.changePassword({
    email: query.email,
    changeToken: query.changeToken
  }, handleLogin)
  
  container.appendChild(changePasswordEl)
  
  return container
}

// Initialize auth state on module load
initAuthState()

export {
  getAuthState,
  initAuthState,
  clearAuthState,
  handleLogout,
  createLogin,
  createSignup,
  createConfirm,
  createChangePasswordRequest,
  createChangePassword
}