# Testing Guide

This project uses a custom **tape-based testing framework** with in-memory MongoDB and mock authentication for fast, isolated tests.

## Quick Start

```bash
# Run all tests
npm test

# Run specific test file  
npm test api/widgets.test.js

# Run with explicit environment
NODE_ENV=test node test/index.js mongo.test.js
```

## Testing Architecture

### Test Framework: Tape
- **Lightweight**: TAP-compliant testing with minimal overhead
- **Async-friendly**: Built-in support for promises and async/await
- **No globals**: Explicit test imports and setup

### Test Runner: `test/index.js`
- **Dynamic loading**: Auto-discovers `*.test.js` files
- **Timeout protection**: Tests auto-fail after 10 seconds
- **Cleanup management**: Runs cleanup after all tests complete
- **Environment isolation**: Forces `NODE_ENV=test`

### Database: In-Memory MongoDB
- **mongodb-memory-server**: Spins up real MongoDB in memory
- **Isolation**: Each test gets a clean database state
- **Speed**: No external dependencies or persistence

### Authentication: Mock System
- **Test middleware**: `middleware/auth-test.js` stubs authentication
- **Predictable users**: Consistent test user data
- **No network calls**: Completely offline testing

## Test File Structure

Tests follow the pattern `*.test.js` and mirror the source structure:

```
test/
├── index.js              # Test runner
├── api/
│   ├── health.test.js    # Health endpoint tests
│   └── widgets.test.js   # Widget API tests
├── auth.test.js          # Authentication tests
├── auto-catch.test.js    # Error handling tests
├── mongo.test.js         # Database tests
└── helpers/
    ├── cleanup.js        # Test cleanup utilities
    └── mock-auth.js      # Authentication mocks
```

## Writing Tests

### Basic Test Structure

```javascript
const test = require('tape')
const supertest = require('supertest')
const app = require('../server')

test('GET /health returns 200', async t => {
  const response = await supertest(app)
    .get('/health')
    .expect(200)
  
  t.ok(response.body.status, 'Health status present')
  t.end()
})
```

### API Testing Pattern

```javascript
const test = require('tape')
const supertest = require('supertest')
const app = require('../../server')

test('POST /widgets creates widget', async t => {
  const widgetData = {
    name: 'Test Widget',
    quantity: 5
  }
  
  const response = await supertest(app)
    .post('/widgets')
    .send(widgetData)
    .expect(201)
  
  t.equal(response.body.name, 'Test Widget')
  t.equal(response.body.quantity, 5)
  t.ok(response.body._id, 'ID generated')
  t.ok(response.body.dateCreated, 'Created date set')
  t.end()
})
```

### Database Testing

```javascript
const test = require('tape')
const Widget = require('../models/widget')

test('Widget model validation', async t => {
  // Test valid widget
  const validWidget = new Widget({
    name: 'Valid Widget',
    quantity: 10
  })
  
  const savedWidget = await validWidget.save()
  t.ok(savedWidget._id, 'Widget saved successfully')
  
  // Test invalid widget
  const invalidWidget = new Widget({
    quantity: -1 // Invalid: negative quantity
  })
  
  try {
    await invalidWidget.save()
    t.fail('Should have thrown validation error')
  } catch (err) {
    t.ok(err.name === 'ValidationError', 'Validation error thrown')
  }
  
  t.end()
})
```

### Error Testing

```javascript
const test = require('tape')
const autoCatch = require('../lib/auto-catch')

test('autoCatch handles async errors', async t => {
  const errorHandler = autoCatch(async (req, res, next) => {
    throw new Error('Test error')
  })
  
  const mockReq = {}
  const mockRes = { headersSent: false }
  const mockNext = (err) => {
    t.equal(err.message, 'Test error', 'Error passed to next')
    t.end()
  }
  
  await errorHandler(mockReq, mockRes, mockNext)
})
```

## Test Utilities

### Cleanup Helper (`test/helpers/cleanup.js`)

Ensures clean state between tests:

```javascript
const mongoose = require('../lib/mongo')

async function cleanup() {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.db.dropDatabase()
  }
}

module.exports = cleanup
```

### Mock Authentication (`test/helpers/mock-auth.js`)

Provides test user data:

```javascript
const mockUser = {
  id: 'test-user-123',
  email: 'test@example.com',
  name: 'Test User'
}

module.exports = {
  mockUser,
  mockAuthMiddleware: (req, res, next) => {
    req.user = mockUser
    next()
  }
}
```

## Test Runner Features

### Timeout Protection
```javascript
const TIMEOUT = 10 * 1000

const timeout = setTimeout(() => {
  console.error(`Tests timed out after ${Math.round(TIMEOUT / 1000)}s`)
  process.exit(1)
}, TIMEOUT)
```

### Dynamic Test Loading
```javascript
// Load specific files or auto-discover
const specifiedFiles = process.argv.slice(2).length > 0
  ? process.argv.slice(2)
  : getAllTestFiles()

const filesToTest = specifiedFiles.map(relativeToRequire)

filesToTest.forEach(file => {
  require(file)
})
```

### Automatic Cleanup
```javascript
test('cleanup', async t => {
  console.log('Running final cleanup...')
  try {
    await cleanup()
    console.log('Final cleanup complete')
    clearTimeout(timeout)
    t.end()
  } catch (err) {
    console.error('Final cleanup error:', err)
    t.error(err)
    t.end()
  }
})
```

## Environment Switching

The test environment automatically switches to mock implementations:

### Database Switching
```javascript
// lib/mongo/index.js
module.exports = process.env.NODE_ENV === 'test'
  ? require('./mock-mongo')
  : require('./mongo')
```

### Authentication Switching  
```javascript
// middleware/index.js
module.exports = process.env.NODE_ENV === 'test' 
  ? [authTestMiddleware] 
  : [authMiddleware]
```

## Test Execution Flow

1. **Environment setup**: `NODE_ENV=test` forces test configurations
2. **Test discovery**: Runner finds all `*.test.js` files
3. **Sequential execution**: Tests run one after another (tape default)
4. **Automatic cleanup**: Database cleanup after all tests
5. **Timeout protection**: Tests fail if they run too long
6. **Exit handling**: Clean shutdown with proper exit codes

## Best Practices

- **Isolation**: Each test should be independent
- **Cleanup**: Always clean up resources (database, files, etc.)
- **Assertions**: Use specific assertions rather than generic ones
- **Error testing**: Test both success and failure cases
- **Async handling**: Use `async/await` consistently
- **Descriptive names**: Test names should describe expected behavior

## Common Patterns

### Testing authenticated endpoints:
```javascript
// Authentication is automatically mocked in test environment
const response = await supertest(app)
  .get('/widgets')
  .expect(200) // auth-test middleware provides mock user
```

### Testing error cases:
```javascript
const response = await supertest(app)
  .post('/widgets')
  .send({}) // Missing required fields
  .expect(400)

t.ok(response.body.error, 'Error message present')
```

### Testing database operations:
```javascript
// Database is automatically in-memory in test environment
const widget = new Widget({ name: 'Test', quantity: 1 })
await widget.save() // Saves to in-memory MongoDB
```