const config = require('../config')

function authMiddleware(req, res, next) {
  // Use authentic-service parseRequest function to handle token verification
  config.auth(req, res, (err, user) => {
    if (err) {
      // Handle different error types from authentic-service
      const statusCode = err.statusCode || 401
      return res.status(statusCode).json({ error: err.message || 'Authentication failed' })
    }

    if (!user || !user.email) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    if (!config.whitelist.includes(user.email)) {
      return res.status(403).json({ error: 'Email not whitelisted' })
    }

    req.user = user
    next()
  })
}

module.exports = authMiddleware 