# Server-Side ESM Conversion Plan

## Overview
Convert the Express server from CommonJS (require/module.exports) to ES modules (import/export) while maintaining all functionality and development workflows.

## Implementation Strategy
```
Phase 1: Foundation → Phase 2: Core → Phase 3: Supporting → Phase 4: Validation
    |                    |               |                    |
    v                    v               v                    v
Package.json         server.js      lib/ & api/         Full Testing
Node.js setup        config/        models/             & Cleanup
                     middleware/
```

## Phase 1: Preparation and Foundation Setup

### Step 1: Dependency Analysis
- [ ] Examine package.json for current dependencies
- [ ] Research ESM compatibility for key packages (express, mongoose, tape, etc.)
- [ ] Identify any packages requiring special handling
- [ ] Check for dynamic requires or conditional loading patterns

### Step 2: Package.json Configuration
- [ ] Add `"type": "module"` to package.json
- [ ] Review `"engines"` field for Node.js version compatibility
- [ ] Test basic Node.js startup with ESM enabled
- [ ] Verify this change doesn't break any existing functionality

## Phase 2: Core Application Conversion

### Step 3: server.js Conversion
```javascript
// Before (CommonJS)
const express = require('express')
const config = require('./config')
module.exports = app

// After (ESM)  
import express from 'express'
import config from './config/index.js'
export default app
```
- [ ] Replace all `require()` statements with `import`
- [ ] Replace `module.exports` with `export default`
- [ ] Handle `require.main === module` check using `import.meta.url`
- [ ] Update any `__dirname` usage with `import.meta.url`

### Step 4: config/index.js Conversion
- [ ] Convert environment variable loading to ESM
- [ ] Replace `module.exports` with appropriate export pattern
- [ ] Ensure dotenv integration continues working

### Step 5: middleware/index.js Conversion
- [ ] Convert authentication middleware exports
- [ ] Handle conditional loading (auth.js vs auth-test.js) with dynamic imports
- [ ] Maintain Express middleware interface compatibility

## Phase 3: Supporting Module Conversion

### Step 6: lib/ Directory
- [ ] `lib/mongo/index.js` - Convert database connection logic
- [ ] `lib/mongo/mongo.js` - Convert Mongoose initialization
- [ ] `lib/auto-catch.js` - Convert async error wrapper utility
- [ ] `lib/client-setup.js` - Convert Vite development server integration

### Step 7: api/ Directory  
- [ ] `api/widgets.js` - Convert widget CRUD route handlers
- [ ] `api/auth-test.js` - Convert authentication test routes
- [ ] Ensure Express router exports work with ESM
- [ ] Update imports of models and utilities

### Step 8: models/ Directory
- [ ] `models/widget.js` - Convert Mongoose model definitions
- [ ] Ensure schema exports are ESM compatible
- [ ] Test database connectivity after conversion

## Phase 4: Testing and Integration

### Step 9: Test Environment Updates
- [ ] Convert `test/index.js` to ESM if needed
- [ ] Verify tape framework works with ESM imports
- [ ] Update test files to use `import` instead of `require`
- [ ] Ensure NODE_ENV=test environment switching works
- [ ] Test mongodb-memory-server integration

### Step 10: npm Scripts and Development Workflow
- [ ] Verify `npm run dev` works with ESM
- [ ] Test `npm start` for production mode
- [ ] Confirm `npm test` runs correctly
- [ ] Ensure nodemon works with ESM modules
- [ ] Check Vite integration continues functioning

### Step 11: Final System Validation
- [ ] Run complete test suite
- [ ] Test API endpoints with Playwright/curl
- [ ] Verify authentication flow works
- [ ] Check development server startup
- [ ] Validate production mode functionality
- [ ] Confirm hot reloading works in development

### Step 12: Cleanup and Documentation
- [ ] Remove any temporary workarounds
- [ ] Update inline comments referencing CommonJS
- [ ] Update CLAUDE.md if development patterns changed
- [ ] Commit with clear message: "Convert server to ES modules"

## Critical Dependencies
```
package.json config → All file conversions
       ↓
server.js, config, middleware → lib/, api/, models/
       ↓  
All conversions complete → Testing and validation
```

## Rollback Strategy
- Package.json changes are easily reversible
- Each phase can be tested independently
- Git commits allow selective rollback
- Can fall back to .mjs extensions if "type": "module" causes issues

## Success Criteria
- [ ] Server starts successfully with `npm run dev`
- [ ] All API endpoints function correctly  
- [ ] Test suite passes completely
- [ ] No breaking changes to client integration
- [ ] Development workflow remains intact

## Common ESM Conversion Patterns

### require() to import
```javascript
// CommonJS
const express = require('express')
const { someFunction } = require('./utils')
const config = require('./config')

// ESM
import express from 'express'
import { someFunction } from './utils.js'
import config from './config/index.js'
```

### module.exports to export
```javascript
// CommonJS
module.exports = app
module.exports = { config, utils }
exports.handler = handler

// ESM
export default app
export { config, utils }
export const handler = handler
```

### Conditional requires to dynamic imports
```javascript
// CommonJS
const auth = process.env.NODE_ENV === 'test' 
  ? require('./auth-test') 
  : require('./auth')

// ESM
const auth = process.env.NODE_ENV === 'test'
  ? await import('./auth-test.js')
  : await import('./auth.js')
```

### __dirname replacement
```javascript
// CommonJS
const __dirname = path.dirname(__filename)

// ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url))
```

## Notes
- All import paths must include file extensions (.js)
- Dynamic imports return promises and may need await
- Top-level await is available in modules
- Some Node.js built-ins may need different import syntax