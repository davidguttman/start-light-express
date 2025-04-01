const authMiddleware = require('./auth')

module.exports = process.env.NODE_ENV === 'test' ? [] : [authMiddleware] 