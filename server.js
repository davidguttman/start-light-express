require('dotenv').config()
const express = require('express')
const config = require('./config')
const mongoose = require('./lib/mongo')
const autoCatch = require('./lib/auto-catch')
const widgetsRouter = require('./api/widgets')

const app = express()

// Middleware
app.use(express.json())

// Health check endpoint
app.get('/health', autoCatch(async (req, res) => {
  await mongoose.checkHealth()
  res.json({ status: 'OK' })
}))

// API routes
if (process.env.NODE_ENV === 'test') {
  // In test environment, use mock auth
  const mockAuth = require('./test/helpers/mock-auth')
  app.use('/widgets', mockAuth, widgetsRouter)
} else {
  app.use('/widgets', widgetsRouter)
}

// Error handling middleware
app.use((err, req, res, next) => {
  // Log error
  if (process.env.NODE_ENV !== 'test') {
    config.logger.error({ err }, 'Unhandled error')
  }
  
  // Handle validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }
  
  // Handle other errors
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' })
})

// Only start the server if this file is run directly
if (require.main === module) {
  const port = config.port
  app.listen(port, () => {
    config.logger.info({ port }, 'Server started')
  })
}

module.exports = app 