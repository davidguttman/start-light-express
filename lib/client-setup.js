const express = require('express')
const path = require('path')
const budo = require('budo')
const http = require('http')
const { createProxyMiddleware } = require('http-proxy-middleware')

/**
 * Setup client development server
 * 
 * Development: Starts budo server and proxies non-API routes
 * Production: No client setup - static assets served by CDN
 * Test: Skips client setup entirely
 * 
 * @param {express.Application} app - Express app instance
 * @returns {Promise<{budoServer: Object|null}>} - Returns budo server reference for cleanup
 */
async function setupDevServer(app) {
  if (process.env.NODE_ENV === 'test') {
    // Skip client setup in test environment
    console.log('Skipping client setup in test environment')
    return { budoServer: null }
  }

  if (process.env.NODE_ENV === 'production') {
    console.log('Production mode: Static assets served by CDN, no client setup needed')
    return { budoServer: null }
  }

  console.log('Setting up development server with budo and proxy')
  return setupDevelopmentServer(app)
}


/**
 * Setup development server with budo and proxy middleware
 * 
 * @param {express.Application} app - Express app instance
 * @returns {Promise<{budoServer: Object}>} - Returns budo server for cleanup
 */
async function setupDevelopmentServer(app) {
  // Dynamic import for get-port (ESM module)
  const getPortModule = await import('get-port')
  const getPort = getPortModule.default
  
  // Find available port for budo server
  const budoPort = await getPort()
  console.log(`Found available port for budo: ${budoPort}`)
  
  return new Promise((resolve, reject) => {
    console.log('Starting budo dev server...')
    
    const budoServer = budo('client/index.js', {
      live: false, // Disable live reload
      stream: process.stdout,
      port: budoPort,
      portfind: false, // Use the port we found
      pushstate: false,
      serve: 'index.js', // Serve the bundle as index.js
      dir: 'dist', // Serve from dist directory where index.html lives
      browserify: {
        debug: true, // Enable source maps in development
        transform: ['localenvify'] // Include localenvify transform
      }
    })

    budoServer.on('connect', (ev) => {
      console.log(`Budo server running at http://localhost:${ev.port}`)
      
      // Create proxy middleware to forward requests to budo server
      const proxy = createProxyMiddleware({
        target: `http://localhost:${ev.port}`,
        changeOrigin: true,
        logLevel: 'silent'
      })
      
      // Add proxy middleware for all non-API routes
      app.use((req, res, next) => {
        // Skip /api routes and /health - let server handle these
        if (req.path.startsWith('/api') || req.path === '/health') {
          return next()
        }
        
        console.log(`Proxying ${req.method} ${req.path} to budo server`)
        proxy(req, res, next)
      })

      console.log('Proxy middleware configured:')
      console.log('  - /api/* → Express server (API routes)')
      console.log('  - /health → Express server (health check)')
      console.log(`  - /* → Budo server (http://localhost:${ev.port})`)

      resolve({ budoServer })
    })

    budoServer.on('error', (err) => {
      console.error('Budo server error:', err)
      reject(err)
    })

    // Handle budo server updates
    budoServer.on('update', (buffer) => {
      console.log('Client bundle updated:', buffer.length, 'bytes')
    })
  })
}

/**
 * Gracefully shutdown budo server
 * 
 * @param {Object} budoServer - Budo server instance
 * @returns {Promise<void>}
 */
async function shutdownBudoServer(budoServer) {
  if (budoServer && budoServer.close) {
    return new Promise((resolve) => {
      console.log('Shutting down budo server...')
      budoServer.close(() => {
        console.log('Budo server closed')
        resolve()
      })
    })
  }
}

module.exports = {
  setupDevServer,
  shutdownBudoServer
}