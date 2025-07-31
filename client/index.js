require('./style')
const hash = require('http-hash')()

const welcome = require('./welcome')
const widgets = require('./widgets')
const settings = require('./settings')

document.title = 'Start Light Express'

// Set up hash-based routes
hash.set('/', welcome)
hash.set('/widgets', widgets)
hash.set('/settings', settings)

function navigate() {
  // Clear previous content
  document.body.innerHTML = ''
  
  // Create header with navigation
  const header = document.createElement('div')
  header.className = 'header'
  header.innerHTML = `
    <div class="container">
      <nav class="nav">
        <a href="#/" ${window.location.hash === '#/' || window.location.hash === '' ? 'class="active"' : ''}>Home</a>
        <a href="#/widgets" ${window.location.hash === '#/widgets' ? 'class="active"' : ''}>Widgets</a>
        <a href="#/settings" ${window.location.hash === '#/settings' ? 'class="active"' : ''}>Settings</a>
      </nav>
    </div>
  `
  
  // Create main container
  const container = document.createElement('div')
  container.className = 'container'
  
  // Get current route (remove # from hash)
  const currentHash = window.location.hash.slice(1) || '/'
  const route = hash.get(currentHash)
  
  if (route && route.handler) {
    const el = route.handler({ ...route.params, splat: route.splat })
    container.appendChild(el)
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

// Handle hash changes
window.addEventListener('hashchange', navigate)

// Initial navigation
navigate()