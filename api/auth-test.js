import express from 'express'
const router = express.Router()
import authMiddleware from '../middleware/auth.js'
import autoCatch from '../lib/auto-catch.js'

// TODO: Remove this route before production
router.get('/authTest', authMiddleware, autoCatch(async (req, res) => {
  // Simulate some async operation
  await new Promise(resolve => setTimeout(resolve, 100))
  
  res.json({
    message: 'Auth successful',
    user: req.user
  })
}))

// Example of error handling
router.get('/errorTest', authMiddleware, autoCatch(async (req, res) => {
  throw new Error('Test error')
}))

export default router 