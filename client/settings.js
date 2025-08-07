import html from 'nanohtml'
import morph from 'nanomorph'

import createState from './state.js'
import { apiCall } from './api.js'

const state = createState()

export default function (params) {
  const tree = render()
  
  // Load health status on component mount
  loadHealthStatus()
  
  state.on('*', key => morph(tree, render()))
  return tree
}

async function loadHealthStatus() {
  try {
    state.set({ healthLoading: true, healthError: null })
    
    const response = await fetch('/health')
    const health = await response.json()
    
    state.set({ 
      health, 
      healthLoading: false,
      healthStatus: response.ok ? 'healthy' : 'unhealthy'
    })
  } catch (error) {
    console.error('Failed to load health status:', error)
    state.set({ 
      healthError: 'Failed to connect to server',
      healthLoading: false,
      healthStatus: 'error'
    })
  }
}

async function testAuth() {
  try {
    state.set({ authLoading: true, authError: null, authResult: null })
    
    const response = await apiCall('/api/auth/authTest')
    const result = await response.json()
    
    state.set({ 
      authResult: result,
      authLoading: false,
      authStatus: 'success'
    })
  } catch (error) {
    console.error('Auth test failed:', error)
    // Don't set error if it's a session expiry (401) - user will be redirected
    if (error.message !== 'Session expired') {
      state.set({ 
        authError: error.message || 'Authentication failed',
        authLoading: false,
        authStatus: 'error'
      })
    }
  }
}

async function testError() {
  try {
    state.set({ errorTestLoading: true, errorTestError: null, errorTestResult: null })
    
    const response = await apiCall('/api/auth/errorTest')
    const result = await response.json()
    
    // This should always be an error
    state.set({ 
      errorTestResult: result,
      errorTestLoading: false,
      errorTestStatus: 'unexpected' // If we get here, it's unexpected since this should error
    })
  } catch (error) {
    console.error('Error test failed:', error)
    // Don't set error if it's a session expiry (401) - user will be redirected
    if (error.message !== 'Session expired') {
      state.set({ 
        errorTestError: error.message,
        errorTestLoading: false,
        errorTestStatus: 'expected' // Expected behavior for error test
      })
    }
  }
}

function render() {
  return html`
    <div class="content">
      <h1>Settings & Diagnostics</h1>
      
      <h2>Server Health</h2>
      <div class="form-group">
        <button class="btn" onclick=${loadHealthStatus}>
          ${state.healthLoading ? 'Checking...' : 'Check Health'}
        </button>
        
        ${state.healthError ? html`
          <div class="error" style="margin-top: 1rem;">
            <strong>Health Check Failed:</strong> ${state.healthError}
          </div>
        ` : ''}
        
        ${state.health ? html`
          <div class="success" style="margin-top: 1rem;">
            <h3>Health Status: ${state.healthStatus}</h3>
            <pre>${JSON.stringify(state.health, null, 2)}</pre>
          </div>
        ` : ''}
      </div>

      <h2>Authentication Test</h2>
      <div class="form-group">
        <button class="btn" onclick=${testAuth}>
          ${state.authLoading ? 'Testing...' : 'Test Authentication'}
        </button>
        
        ${state.authError ? html`
          <div class="error" style="margin-top: 1rem;">
            <strong>Auth Test Failed:</strong> ${state.authError}
          </div>
        ` : ''}
        
        ${state.authResult ? html`
          <div class="success" style="margin-top: 1rem;">
            <h3>Authentication Successful</h3>
            <pre>${JSON.stringify(state.authResult, null, 2)}</pre>
          </div>
        ` : ''}
      </div>

      <h2>Error Handling Test</h2>
      <div class="form-group">
        <button class="btn btn-secondary" onclick=${testError}>
          ${state.errorTestLoading ? 'Testing...' : 'Test Error Handling'}
        </button>
        
        ${state.errorTestError ? html`
          <div class="error" style="margin-top: 1rem;">
            <strong>Network Error:</strong> ${state.errorTestError}
          </div>
        ` : ''}
        
        ${state.errorTestResult ? html`
          <div class="${state.errorTestStatus === 'expected' ? 'success' : 'error'}" style="margin-top: 1rem;">
            <h3>Error Response (Expected):</h3>
            <pre>${JSON.stringify(state.errorTestResult, null, 2)}</pre>
          </div>
        ` : ''}
      </div>

      <h2>Application Info</h2>
      <div class="widget-item">
        <h3>Client Information</h3>
        <p><strong>Route:</strong> Hash-based routing (/#/route)</p>
        <p><strong>State Management:</strong> wildemitter</p>
        <p><strong>Templating:</strong> nanohtml</p>
        <p><strong>User Agent:</strong> ${navigator.userAgent}</p>
        <p><strong>Current URL:</strong> ${window.location.href}</p>
        <p><strong>Hash:</strong> ${window.location.hash || '(none)'}</p>
      </div>

      <h2>Server Information</h2>
      <div class="widget-item">
        <h3>API Endpoints</h3>
        <ul>
          <li><code>GET /health</code> - Health check</li>
          <li><code>GET /api/widgets</code> - List widgets</li>
          <li><code>POST /api/widgets</code> - Create widget</li>
          <li><code>GET /api/widgets/:id</code> - Get widget</li>
          <li><code>PUT /api/widgets/:id</code> - Update widget</li>
          <li><code>DELETE /api/widgets/:id</code> - Delete widget</li>
          <li><code>GET /api/auth/authTest</code> - Test authentication</li>
          <li><code>GET /api/auth/errorTest</code> - Test error handling</li>
        </ul>
      </div>
    </div>
  `
}