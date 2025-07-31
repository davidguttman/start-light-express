const html = require('nanohtml')
const morph = require('nanomorph')

const state = require('./state')()

module.exports = function ({ name }) {
  const tree = render()
  state.on('*', key => morph(tree, render()))
  state.set({ name })
  return tree
}

function render () {
  return html`
    <div class="content">
      <h1>Welcome to Start Light Express${state.name ? ` ${state.name}` : ''}!</h1>
      <p>This is a lightweight Express.js starter template with client-side integration.</p>
      
      <h2>Features</h2>
      <ul>
        <li>Express server with MongoDB integration</li>
        <li>Authentication middleware</li>
        <li>Widget CRUD API at <code>/api/widgets</code></li>
        <li>Health monitoring at <code>/health</code></li>
        <li>Client-side routing with hash-based navigation</li>
        <li>Development server with live reload</li>
      </ul>

      <h2>API Endpoints</h2>
      <p>The server provides the following API endpoints:</p>
      <ul>
        <li><strong>GET /health</strong> - Health check and database connectivity</li>
        <li><strong>GET /api/widgets</strong> - List all widgets</li>
        <li><strong>POST /api/widgets</strong> - Create a new widget</li>
        <li><strong>GET /api/widgets/:id</strong> - Get widget by ID</li>
        <li><strong>PUT /api/widgets/:id</strong> - Update widget</li>
        <li><strong>DELETE /api/widgets/:id</strong> - Delete widget</li>
        <li><strong>GET /api/auth/authTest</strong> - Test authentication</li>
        <li><strong>GET /api/auth/errorTest</strong> - Test error handling</li>
      </ul>

      <h2>Navigation</h2>
      <p>Use the navigation above to explore:</p>
      <ul>
        <li><strong>Home</strong> - This welcome page</li>
        <li><strong>Widgets</strong> - Manage widgets (CRUD interface)</li>
        <li><strong>Settings</strong> - Application settings</li>
      </ul>
    </div>
  `
}