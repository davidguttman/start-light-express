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
  app.use('/widgets', (req, res, next) => {
    mockAuth(req, res, next)
  }, widgetsRouter)
} else {
  app.use('/widgets', widgetsRouter)
}

// Error handling middleware
app.use((err, req, res, next) => {
  config.logger.error({ err }, 'Unhandled error')
  res.status(500).json({ error: err.message })
})

// Only start the server if this file is run directly
if (require.main === module) {
  const port = config.port
  app.listen(port, () => {
    config.logger.info({ port }, 'Server started')
  })
}

module.exports = app 