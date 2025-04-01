const test = require('tape')
const express = require('express')
const supertest = require('supertest')
const config = require('../config')
const authMiddleware = require('../middleware/auth')

const app = express()
app.use('/test', authMiddleware, (req, res) => {
  res.json({ user: req.user })
})

test('auth middleware - no token', async (t) => {
  const res = await supertest(app)
    .get('/test')
    .expect(401)
  
  t.equal(res.body.error, 'No bearer token provided')
  t.end()
})

test('auth middleware - invalid token', async (t) => {
  const res = await supertest(app)
    .get('/test')
    .set('Authorization', 'Bearer invalid-token')
    .expect(401)
  
  t.equal(res.body.error, 'Invalid token')
  t.end()
})

test('auth middleware - non-whitelisted email', async (t) => {
  // Mock authentic-service verify to return a non-whitelisted user
  const originalVerify = config.auth.verify
  config.auth.verify = (token, cb) => {
    cb(null, { email: 'not@whitelisted.com' })
  }

  const res = await supertest(app)
    .get('/test')
    .set('Authorization', 'Bearer valid-token')
    .expect(403)
  
  t.equal(res.body.error, 'Email not whitelisted')
  
  // Restore original verify
  config.auth.verify = originalVerify
  t.end()
})

test('auth middleware - whitelisted email', async (t) => {
  // Mock authentic-service verify to return a whitelisted user
  const originalVerify = config.auth.verify
  config.auth.verify = (token, cb) => {
    cb(null, { email: config.whitelist[0] })
  }

  const res = await supertest(app)
    .get('/test')
    .set('Authorization', 'Bearer valid-token')
    .expect(200)
  
  t.equal(res.body.user.email, config.whitelist[0])
  
  // Restore original verify
  config.auth.verify = originalVerify
  t.end()
}) 