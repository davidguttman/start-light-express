# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with nodemon (auto-restarts on changes)
- `npm start` - Start production server
- `npm test` - Run all tests using tape framework
- `npm test <relative-path>` - Run specific test file (e.g., `npm test api/widgets.test.js`)
- `NODE_ENV=test node test/index.js <relative-path>` - Run specific test with explicit environment

## Testing Architecture

This project uses a custom tape-based testing setup:
- **Test runner**: `test/index.js` - Dynamically loads test files and handles cleanup
- **Framework**: Tape for lightweight, TAP-compliant testing
- **HTTP testing**: Supertest for API endpoint testing
- **Database**: In-memory MongoDB via mongodb-memory-server for tests
- **Timeout**: Tests auto-fail after 10 seconds
- **Cleanup**: Automatic cleanup runs after all tests complete

Test files follow the pattern `*.test.js` and are auto-discovered. The test environment automatically switches to mock implementations for MongoDB and authentication.

## Architecture Overview

### Environment-Based Module Loading
The application uses conditional module loading based on `NODE_ENV`:
- **Authentication**: `middleware/index.js` loads `auth-test.js` for tests, `auth.js` for production
- **Database**: `lib/mongo/index.js` loads `mock-mongo.js` for tests, `mongo.js` for production

### Key Components
- **Server**: `server.js` - Express app with health checks, auth middleware, and error handling
- **Configuration**: `config/index.js` - Environment-based config with productionize logging
- **Authentication**: Uses `authentic-service` with Google Cloud integration
- **Database**: Mongoose with MongoDB, automatic mock switching for tests
- **Error Handling**: `lib/auto-catch.js` - Async error wrapper for route handlers
- **API Routes**: `api/widgets.js` (CRUD operations), `api/auth-test.js` (auth testing)
- **Models**: `models/widget.js` - Mongoose schema definitions

### API Structure
- All routes under `/widgets` and `/auth` require authentication
- Health check at `/health` includes MongoDB connectivity check
- Error middleware handles ValidationError (400) and generic errors (500)

## Configuration

Environment variables are loaded via dotenv. See `.env.example` for required variables:
- `PORT` - Server port (default: 3000)
- `MONGO_URI` - MongoDB connection string
- `MONGO_DB_NAME` - Database name
- `GOOGLE_PROJECT_ID` - For productionize logging
- `GOOGLE_APPLICATION_CREDENTIALS` - Service account key path
- `AUTHENTIC_SERVER` - Authentication server URL
- `WHITELIST` - Comma-separated list of authorized emails

## Code Style

Follows standard.js conventions:
- No semicolons
- 2 spaces indentation
- Single quotes
- No var (use const/let)
- Arrow functions preferred
- Object shorthand
- Functional approach (no classes)