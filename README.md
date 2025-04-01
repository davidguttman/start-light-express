# Node/Express Starter

A production-ready Node.js/Express starter with MongoDB, authentication, and logging.

## Features

- Express server with JSON body parsing
- MongoDB with Mongoose
- Authentication via Authentic service
- Logging with productionize (Google Cloud Logging in production)
- Standard.js code style
- Tape for testing
- OpenAPI documentation
- Health check endpoint
- CRUD API example (Widgets)

## Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Configure your environment variables:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/
MONGO_DB_NAME=example
GOOGLE_PROJECT_ID=your-project-id
GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials.json
AUTHENTIC_SERVER=your-authentic-server
WHITELIST=email1@example.com,email2@example.com
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Testing

Run tests with:
```bash
npm test
```

Tests use:
- Tape for test framework
- Supertest for HTTP testing
- mongodb-memory-server for database testing
- Mocked authentication

## Production

1. Set environment variables for production
2. Start the server:
```bash
npm start
```

## Logging

Logging is handled by productionize:
- In production: Google Cloud Logging
- In development: Console logging
- Structured JSON logging with metadata

## Authentication

Authentication is handled by Authentic service:
- Bearer token validation
- Email whitelist
- User object attached to request

## API Documentation

OpenAPI documentation is included in route files.
Available endpoints:
- GET /health - Health check
- GET /widgets - List widgets
- POST /widgets - Create widget
- GET /widgets/:id - Get widget
- PUT /widgets/:id - Update widget
- DELETE /widgets/:id - Delete widget

## Project Structure

```
.
├── api/              # API routes
├── config/           # Configuration
├── lib/              # Shared libraries
├── middleware/       # Express middleware
├── models/           # Mongoose models
├── test/             # Test files
├── .env.example      # Example environment variables
├── .gitignore        # Git ignore rules
├── package.json      # Project configuration
└── server.js         # Application entry point
```

## Code Style

This project follows standard.js style guide:
- No semicolons
- 2 spaces for indentation
- Single quotes for strings
- No var
- Arrow functions
- Object shorthand
- No classes 