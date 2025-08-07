const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')

/**
 * Setup client development server
 * 
 * Development: Starts Vite server and proxies non-API routes
 * Production: No client setup - static assets served from dist
 * Test: Skips client setup entirely
 * 
 * @param {express.Application} app - Express app instance
 * @returns {Promise<{viteServer: Object|null}>} - Returns Vite server reference for cleanup
 */
async function setupDevServer(app) {
  if (process.env.NODE_ENV === 'test') {
    // Skip client setup in test environment
    console.log('Skipping client setup in test environment')
    return { viteServer: null }
  }

  if (process.env.NODE_ENV === 'production') {
    console.log('Production mode: Static assets served by CDN (no local static serving)')
    // In production, static assets are served by CDN on different host
    // Express only handles API routes
    return { viteServer: null }
  }

  console.log('Setting up development server with Vite and proxy')
  return setupDevelopmentServer(app)
}

/**
 * Setup development server with Vite and proxy middleware
 * 
 * @param {express.Application} app - Express app instance
 * @returns {Promise<{viteServer: Object}>} - Returns Vite server for cleanup
 */
async function setupDevelopmentServer(app) {
  // Dynamic import for Vite (ESM module)
  const { createServer } = await import('vite')
  
  // Create Vite dev server
  const viteServer = await createServer({
    // Use the vite.config.mjs file
    server: { middlewareMode: false }
  })
  
  // Start Vite dev server
  await viteServer.listen()
  const viteInfo = viteServer.config.server
  const vitePort = viteInfo.port || 5173
  
  console.log(`Vite dev server running at http://localhost:${vitePort}`)
  
  // Create proxy middleware to forward requests to Vite server
  const proxy = createProxyMiddleware({
    target: `http://localhost:${vitePort}`,
    changeOrigin: true,
    logLevel: 'silent'
  })
  
  // Return proxy middleware to be registered by caller
  const proxyMiddleware = (req, res, next) => {
    console.log(`[PROXY] ${req.method} ${req.path} - checking routing`)
    
    // Skip /api routes and /health - let server handle these
    if (req.path.startsWith('/api') || req.path === '/health') {
      console.log(`[PROXY] Skipping ${req.path} - handled by Express`)
      return next()
    }
    
    console.log(`[PROXY] Proxying ${req.method} ${req.path} to Vite server`)
    proxy(req, res, next)
  }
  
  // Don't register middleware here - return it to be registered by server.js
  // app.use(proxyMiddleware)

  console.log('Proxy middleware configured:')
  console.log('  - /api/* → Express server (API routes)')
  console.log('  - /health → Express server (health check)')
  console.log(`  - /* → Vite server (http://localhost:${vitePort})`)

  return { viteServer, proxyMiddleware }
}

/**
 * Gracefully shutdown Vite server
 * 
 * @param {Object} viteServer - Vite server instance
 * @returns {Promise<void>}
 */
async function shutdownViteServer(viteServer) {
  if (viteServer && viteServer.close) {
    console.log('Shutting down Vite server...')
    await viteServer.close()
    console.log('Vite server closed')
  }
}

module.exports = {
  setupDevServer,
  shutdownViteServer
}