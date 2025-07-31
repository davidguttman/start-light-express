# System Architecture

## Overview
This Express.js starter template is designed as a lightweight, production-ready foundation with environment-aware bootstrapping and pluggable components. Key design principles:

* **Environment-based module loading** – Different implementations for test vs production
* **Authentication flexibility** – Real auth service in prod, mocked in tests  
* **Database abstraction** – MongoDB in prod, in-memory for tests
* **Centralized error handling** – Consistent error responses across all endpoints
* **Health monitoring** – Built-in health checks and observability

## High-Level Architecture

```
┌─────────────┐    HTTP     ┌──────────────────┐
│   Clients   │ ──────────► │   Express App    │
└─────────────┘             │    server.js     │
                            ├──────────────────┤
                            │   Middleware     │
                            │ • Auth           │
                            │ • Error Handler  │
                            ├──────────────────┤
                            │   API Routes     │
                            │ • /widgets       │
                            │ • /auth          │
                            │ • /health        │
                            ├──────────────────┤
                            │   Models         │
                            │ • Widget Schema  │
                            └──────────────────┘
                                     │
                          ┌──────────┴──────────┐
                      Production:          Test:
                      MongoDB            In-Memory DB
                      Real Auth          Mock Auth
```

## Environment-Based Module Loading

The application uses conditional module loading based on `NODE_ENV`:

| Component | Production | Test |
|-----------|------------|------|
| **Database** | `lib/mongo/mongo.js` - Real MongoDB | `lib/mongo/mock-mongo.js` - In-memory |
| **Authentication** | `middleware/auth.js` - Authentic service | `middleware/auth-test.js` - Mock user |
| **Middleware** | `middleware/index.js` switches based on NODE_ENV |

### Module Loading Pattern

```javascript
// middleware/index.js
module.exports = process.env.NODE_ENV === 'test' 
  ? [authTestMiddleware] 
  : [authMiddleware]

// lib/mongo/index.js  
module.exports = process.env.NODE_ENV === 'test'
  ? require('./mock-mongo')
  : require('./mongo')
```

This pattern enables:
- **Hermetic testing** - Tests run in isolation with mocked dependencies
- **Production reliability** - Real services in production
- **Development flexibility** - Easy switching between modes

## Request Lifecycle

1. **Request enters Express** - `server.js` creates the app instance
2. **JSON parsing** - `express.json()` middleware processes request body
3. **Authentication** - Environment-specific auth middleware validates request
4. **Route matching** - Express routes to appropriate API handler
5. **Business logic** - Route handlers process requests with auto-catch error wrapping
6. **Response** - JSON response sent to client
7. **Error handling** - Global error middleware catches and formats any errors

## Error Handling Strategy

The application uses a centralized error handling approach:

```javascript
// Global error middleware in server.js
app.use((err, req, res, next) => {
  // Log errors (except in test environment)
  if (process.env.NODE_ENV !== 'test') {
    console.error('Unhandled error:', err)
  }
  
  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }
  
  // Handle all other errors
  res.status(err.status || 500).json({ 
    error: err.message || 'Internal Server Error' 
  })
})
```

## Key Components

### Server (`server.js`)
- Express application setup and configuration
- Middleware registration and route mounting
- Conditional server startup (only when run directly)
- Global error handling

### Configuration (`config/index.js`)
- Environment variable loading via dotenv
- Default values for development
- Productionize logging setup
- Authentic service configuration

### Authentication System
- **Production**: `authentic-service` integration with Google Cloud
- **Test**: Simple mock that sets `req.user`
- **Whitelist**: Email-based authorization

### Database Layer
- **Production**: Full MongoDB with Mongoose
- **Test**: In-memory MongoDB via `mongodb-memory-server`
- **Models**: Mongoose schemas with validation

### Error Handling (`lib/auto-catch.js`)
Async error wrapper that catches promise rejections:

```javascript
function autoCatch(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res, next)
    } catch (err) {
      if (!res.headersSent) {
        next(err)
      }
    }
  }
}
```

## API Structure

- **Health Check**: `GET /health` - Includes MongoDB connectivity check
- **Widget CRUD**: All routes under `/widgets` require authentication
- **Auth Testing**: Routes under `/auth` for authentication testing
- **Error Responses**: Consistent JSON error format across all endpoints

## Observability

- **Health Endpoint**: `/health` returns application and database status
- **Structured Logging**: Via productionize with Google Cloud integration
- **Error Tracking**: All errors logged with context (except in tests)
- **Environment Awareness**: Different logging levels per environment