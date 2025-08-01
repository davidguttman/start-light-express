require('dotenv').config()
const express = require('express')
const config = require('./config')
const mongoose = require('./lib/mongo')
const autoCatch = require('./lib/auto-catch')
const widgetsRouter = require('./api/widgets')
const authTestRouter = require('./api/auth-test')
const healthpoint = require('healthpoint')
const authMiddleware = require('./middleware')
const { setupDevServer, shutdownBudoServer } = require('./lib/client-setup')

const app = express()

// Middleware
app.use(express.json())

// Health check endpoint
app.get('/health', healthpoint(function (callback) {
  mongoose.checkHealth()
    .then(() => callback(null))
    .catch(err => callback(err))
}))

// API routes
app.use('/api/widgets', authMiddleware, widgetsRouter)
app.use('/api/auth', authMiddleware, authTestRouter)

// Error handling middleware
app.use((err, req, res, next) => {
  // Log error
  if (process.env.NODE_ENV !== 'test') {
    console.error('Unhandled error:', err)
  }
  
  // Handle validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }
  
  // Handle other errors
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' })
})

// Graceful shutdown handling
process.on('SIGINT', async () => {
  console.log('Received SIGINT, shutting down gracefully...')
  
  if (budoServerRef) {
    await shutdownBudoServer(budoServerRef)
  }
  
  process.exit(0)
})

process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, shutting down gracefully...')
  
  if (budoServerRef) {
    await shutdownBudoServer(budoServerRef)
  }
  
  process.exit(0)
})

// Global reference to budo server for graceful shutdown
let budoServerRef = null

// Only start the server if this file is run directly
if (require.main === module) {
  const port = config.port
  
  // Setup client development/production serving
  setupDevServer(app).then(({ budoServer }) => {
    budoServerRef = budoServer
    
    app.listen(port, () => {
      console.log('Server started on port:', port)
      if (budoServer) {
        console.log('Development mode: Client requests proxied to budo server')
      } else {
        console.log('API-only mode: No client serving (production CDN or test environment)')
      }
    })
  }).catch(err => {
    console.error('Failed to setup client server:', err)
    process.exit(1)
  })
}

module.exports = app 