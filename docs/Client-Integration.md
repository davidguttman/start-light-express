# Client Integration Guide

This guide details the plan to integrate a client-side application with the existing start-light-express server, following modern SPA patterns with clean route separation.

## Architecture Overview

### Route Separation Strategy

The integration uses a clean separation between server and client routes:

```
/                     --> Client app (serves index.html)
/health               --> Server health check (special case, no /api prefix)
/api/widgets/*        --> Server API (CRUD operations)  
/api/auth/*           --> Server API (auth testing)
/#/widgets            --> Client route (widget management UI)
/#/settings           --> Client route (settings page)
/assets/*             --> Static assets (CSS, images, fonts, etc.)
```

### Key Benefits

- **Clean separation**: Server owns `/api/*` and `/health`, client owns hash routes `/#/*`
- **Static asset support**: Root paths available for `/assets/*`, `/favicon.ico`, etc.
- **Health check accessibility**: `/health` remains easily accessible for monitoring
- **Hash routing**: Client uses `/#/route` pattern, no server routing conflicts
- **Future-proof**: Adding new API endpoints automatically works

### Request Flow

```
Browser Request --> Express Server
                         |
              /api/* or /health --> Server Routes (API/Health)
                         |
                 Everything else --> Development: Budo Dev Server
                                |
                                --> Production: Static Files + SPA Fallback
```

## Implementation Phases

### PHASE 1: API Route Restructuring

#### 1.1 Server Route Changes

**Current structure:**
```javascript
app.use('/widgets', authMiddleware, widgetsRouter)
app.use('/auth', authMiddleware, authTestRouter)
app.get('/health', healthpoint(...))
```

**New structure:**
```javascript
app.get('/health', healthpoint(...))  // Special case - no /api prefix
app.use('/api/widgets', authMiddleware, widgetsRouter)
app.use('/api/auth', authMiddleware, authTestRouter)
```

#### 1.2 Test Updates

Update test files to use new API paths:
- `test/api/widgets.test.js` - Change to `/api/widgets`
- `test/auth.test.js` - Change to `/api/auth/*`
- `test/api/health.test.js` - Keep as `/health` (no change)

#### 1.3 Documentation Updates

Update `docs/API.md` with new route paths and OpenAPI documentation.

### PHASE 2: Client Infrastructure Setup

#### 2.1 Directory Structure

```
client/
├── index.js          # Main entry point with hash routing
├── widgets.js        # Widget management UI
├── settings.js       # Settings page
├── welcome.js        # Welcome/home page
├── state.js          # State management
└── style/
    └── index.js      # CSS imports

dist/                 # Built assets (production)
├── index.js          # Bundled JavaScript
├── index.html        # Main HTML file
└── assets/           # Static assets
    ├── style.css
    └── images/
```

#### 2.2 Dependencies

Add to main `package.json`:

```json
{
  "dependencies": {
    "nanohtml": "^1.10.0",
    "nanomorph": "^5.4.3", 
    "http-hash": "^2.0.1",
    "insert-css": "^2.0.0",
    "lodash.set": "^4.3.2",
    "wildemitter": "^1.2.1"
  },
  "devDependencies": {
    "budo": "^11.7.0",
    "browserify": "^17.0.0",
    "terser": "^5.13.1",
    "http-proxy-middleware": "^2.0.6",
    "get-port": "^6.1.2"
  }
}
```

#### 2.3 Hash-Based Routing

**File: `client/index.js`**
```javascript
const hash = require('http-hash')()
const widgets = require('./widgets')
const settings = require('./settings')
const welcome = require('./welcome')

// Hash-based routes
hash.set('/widgets', widgets)
hash.set('/settings', settings)
hash.set('/', welcome)  // Default route

// Handle hash changes
window.addEventListener('hashchange', function () {
  const route = hash.get(window.location.hash.slice(2)) // Remove /#/
  // Render new route
})
```

### PHASE 3: Development Tooling

#### 3.1 Client Setup Module

**File: `lib/client-setup.js`**

```javascript
const budo = require('budo')
const { createProxyMiddleware } = require('http-proxy-middleware')

async function setupDevServer(app) {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    // Development: Budo server with proxy
    const getPortModule = await import('get-port')
    const getPort = getPortModule.default
    const budoPort = await getPort()
    
    return new Promise((resolve, reject) => {
      const budoServer = budo('client/index.js', {
        live: true,
        port: budoPort,
        dir: 'dist',
        pushstate: true
      })

      budoServer.on('connect', (ev) => {
        // Simple proxy configuration
        app.use('/', (req, res, next) => {
          // Skip /api routes and /health
          if (req.path.startsWith('/api') || req.path === '/health') {
            return next()
          }
          
          // Proxy everything else to budo server
          const proxy = createProxyMiddleware({
            target: `http://localhost:${ev.port}`,
            changeOrigin: true,
            ws: true
          })
          proxy(req, res, next)
        })

        resolve({ budoServer })
      })

      budoServer.on('error', reject)
    })
  } else {
    // Production: Static file serving
    app.use(express.static('dist'))
    
    // SPA fallback - serve index.html for non-API routes
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api') || req.path === '/health') {
        return next()
      }
      res.sendFile(path.join(__dirname, '../dist', 'index.html'))
    })
    
    return Promise.resolve({ budoServer: null })
  }
}

module.exports = setupDevServer
```

#### 3.2 Server Integration

**File: `server.js` - Add client setup**

```javascript
const setupDevServer = require('./lib/client-setup')

// Store reference for graceful shutdown
let clientSetup = null

// Setup dev server before middleware
if (require.main === module) {
  const port = config.port

  setupDevServer(app).then((setup) => {
    clientSetup = setup
    
    app.listen(port, () => {
      console.log('Server started on port:', port)
    })
  }).catch(err => {
    console.error('Failed to setup dev server:', err)
    process.exit(1)
  })

  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('Shutting down...')
    if (clientSetup && clientSetup.budoServer && clientSetup.budoServer.close) {
      clientSetup.budoServer.close()
    }
    process.exit(0)
  })
}
```

### PHASE 4: Production Build Pipeline

#### 4.1 Build Scripts

Add to main `package.json`:

```json
{
  "scripts": {
    "build": "browserify client/index.js | terser -mc > dist/index.js",
    "build:dev": "browserify client/index.js > dist/index.js",
    "dev": "NODE_ENV=development node server.js"
  }
}
```

#### 4.2 Production Workflow

1. **Build**: `npm run build` creates optimized bundle in `dist/`
2. **Deploy**: Production server serves static files from `dist/`
3. **SPA Fallback**: Non-API routes serve `index.html` for client routing

### PHASE 5: Testing and Validation

#### 5.1 Environment Compatibility

- **Test**: `NODE_ENV=test` skips client setup entirely
- **Development**: Budo dev server with live reload and proxy
- **Production**: Static file serving with SPA fallback

#### 5.2 Validation Checklist

- [ ] All existing API tests pass with new `/api` prefixed routes
- [ ] Health check remains accessible at `/health`
- [ ] Client app loads and hash routing works
- [ ] Development live reload functions correctly
- [ ] Production build serves static files properly
- [ ] API endpoints remain fully functional
- [ ] Authentication middleware works with new routes

## Client Application Architecture

### API Integration

Client makes requests to server API:

```javascript
// Client-side API calls
fetch('/api/widgets')           // Get all widgets
fetch('/api/widgets/123')       // Get specific widget  
fetch('/api/auth/authTest')     // Test authentication
fetch('/health')                // Check server health (no /api prefix)
```

### Component Structure

Following the reference pattern with:
- **nanohtml** for templating
- **nanomorph** for efficient DOM updates
- **http-hash** for client-side routing
- **wildemitter** for state management

### Hash Route Examples

- `/#/` - Home/welcome page
- `/#/widgets` - Widget management interface  
- `/#/settings` - Settings page
- `/#/widgets/123` - Edit specific widget

## Migration Strategy

### Incremental Implementation

1. **Start with API restructuring** - Move existing routes behind `/api` prefix
2. **Add basic client infrastructure** - Set up build process and basic app
3. **Implement development tooling** - Add budo and proxy configuration
4. **Test integration** - Ensure all existing functionality works
5. **Enhance client features** - Add widget management UI and additional routes

### Risk Mitigation

- **Test each phase independently** before proceeding
- **Maintain rollback capability** at each step  
- **Validate existing tests pass** after each change
- **Keep client app minimal initially** to reduce complexity

This approach provides a modern, maintainable architecture while preserving all existing functionality and testing patterns.