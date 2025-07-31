# Configuration & Environment Setup

This application uses environment variables for all configuration, following 12-factor app principles. Configuration is centralized in `config/index.js` with environment-specific defaults.

## Environment Variables

### Core Application Settings

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | `development` | Environment mode: `development`, `test`, or `production` |
| `PORT` | `3000` | HTTP server port |

### Database Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `MONGO_URI` | `mongodb://localhost:27017/` | MongoDB connection string |
| `MONGO_DB_NAME` | `example` | MongoDB database name |

### Authentication & Security

| Variable | Default | Description |
|----------|---------|-------------|
| `AUTHENTIC_SERVER` | _(empty)_ | Authentic service server URL for JWT validation |
| `WHITELIST` | `david@davidguttman.com` | Comma-separated list of authorized email addresses |

### Google Cloud Integration

| Variable | Default | Description |
|----------|---------|-------------|
| `GOOGLE_PROJECT_ID` | _(empty)_ | Google Cloud project ID for productionize logging |
| `GOOGLE_APPLICATION_CREDENTIALS` | _(empty)_ | Path to Google Cloud service account key file |

## Environment Files

### Development Setup

1. **Copy the example file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your values**:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/
   MONGO_DB_NAME=start_light_express_dev
   GOOGLE_PROJECT_ID=your-project-id
   GOOGLE_APPLICATION_CREDENTIALS=./keys/service-account.json
   AUTHENTIC_SERVER=https://your-auth-server.com
   WHITELIST=you@example.com,teammate@example.com
   ```

### Environment-Specific Configs

#### Development (`.env`)
```env
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb://localhost:27017/
MONGO_DB_NAME=start_light_express_dev
# Optional: Leave Google Cloud settings empty for local dev
GOOGLE_PROJECT_ID=
GOOGLE_APPLICATION_CREDENTIALS=
```

#### Test (automatic)
```env
NODE_ENV=test
# Test uses in-memory MongoDB automatically
# No external dependencies required
```

#### Production (server environment)
```env
NODE_ENV=production
PORT=3000
MONGO_URI=mongodb://prod-cluster.mongodb.net:27017/production
MONGO_DB_NAME=start_light_express
GOOGLE_PROJECT_ID=your-production-project
GOOGLE_APPLICATION_CREDENTIALS=/app/keys/prod-service-account.json
AUTHENTIC_SERVER=https://auth.yourcompany.com
WHITELIST=user1@company.com,user2@company.com
```

## Configuration Loading

### Config Structure (`config/index.js`)

```javascript
// Load environment variables
require('dotenv').config()

// Default configuration values
const defaults = {
  port: 3000,
  mongoUri: 'mongodb://localhost:27017/',
  mongoDbName: 'example',
  googleProjectId: '',
  googleApplicationCredentials: '',
  authenticServer: '',
  whitelist: ['david@davidguttman.com']
}

// Merge defaults with environment variables
const config = {
  ...defaults,
  port: process.env.PORT || defaults.port,
  mongoUri: process.env.MONGO_URI || defaults.mongoUri,
  mongoDbName: process.env.MONGO_DB_NAME || defaults.mongoDbName,
  googleProjectId: process.env.GOOGLE_PROJECT_ID || defaults.googleProjectId,
  googleApplicationCredentials: process.env.GOOGLE_APPLICATION_CREDENTIALS || defaults.googleApplicationCredentials,
  authenticServer: process.env.AUTHENTIC_SERVER || defaults.authenticServer,
  whitelist: (process.env.WHITELIST || defaults.whitelist.join(',')).split(',')
}
```

### Logging Configuration

The app uses **productionize** for structured logging with Google Cloud integration:

```javascript
const logger = productionize({
  projectId: config.googleProjectId,
  keyFilename: config.googleApplicationCredentials,
  defaultMetadata: {
    service: 'dg-node-express'
  }
})
```

### Authentication Configuration

Authentic service setup:

```javascript
const auth = require('authentic-service')({
  server: config.authenticServer
})
```

## Environment-Specific Behavior

### Development Mode (`NODE_ENV=development`)
- **Database**: Connects to local MongoDB
- **Authentication**: Uses real Authentic service
- **Logging**: Local console output
- **Error handling**: Full error details in responses

### Test Mode (`NODE_ENV=test`)
- **Database**: In-memory MongoDB (mongodb-memory-server)
- **Authentication**: Mock middleware with stubbed users
- **Logging**: Suppressed to reduce test output noise
- **Error handling**: Full error details but no console logging

### Production Mode (`NODE_ENV=production`)
- **Database**: Production MongoDB cluster
- **Authentication**: Full Authentic service integration
- **Logging**: Structured logs to Google Cloud
- **Error handling**: Sanitized error responses

## Local Development Setup

### Prerequisites
- Node.js 18+ 
- MongoDB (local installation or Docker)
- Google Cloud service account (optional, for logging)

### Step-by-Step Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start MongoDB locally**:
   ```bash
   # Option 1: Docker
   docker run -d -p 27017:27017 --name mongo mongo:6

   # Option 2: Local installation
   mongod --dbpath /usr/local/var/mongodb
   ```

3. **Configure environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Verify setup**:
   ```bash
   curl http://localhost:3000/health
   ```

## Production Deployment

### Environment Variable Sources

**Docker**:
```dockerfile
ENV NODE_ENV=production
ENV PORT=3000
ENV MONGO_URI=mongodb://cluster.mongodb.net:27017/prod
```

**Kubernetes**:
```yaml
env:
- name: NODE_ENV
  value: "production"
- name: MONGO_URI
  valueFrom:
    secretKeyRef:
      name: app-secrets
      key: mongo-uri
```

**Heroku**:
```bash
heroku config:set NODE_ENV=production
heroku config:set MONGO_URI=mongodb://...
```

### Security Considerations

- **Never commit secrets**: Use `.gitignore` to exclude `.env` files
- **Use secret management**: Kubernetes secrets, HashiCorp Vault, etc.
- **Rotate credentials**: Regularly update database passwords and API keys
- **Principle of least privilege**: Grant minimal required permissions

## Configuration Validation

The app validates critical configuration on startup:

```javascript
// Example validation (could be added to config/index.js)
if (process.env.NODE_ENV === 'production') {
  if (!config.mongoUri) {
    throw new Error('MONGO_URI is required in production')
  }
  if (!config.authenticServer) {
    throw new Error('AUTHENTIC_SERVER is required in production')
  }
}
```

## Troubleshooting

### Common Issues

**MongoDB Connection Failed**:
- Verify `MONGO_URI` is correct
- Check MongoDB is running and accessible
- Validate database credentials

**Authentication Errors**:
- Confirm `AUTHENTIC_SERVER` is reachable
- Check if email is in `WHITELIST`
- Verify Authentic service configuration

**Port Already in Use**:
- Change `PORT` environment variable
- Kill processes using the port: `lsof -ti:3000 | xargs kill`

**Google Cloud Logging Issues**:
- Verify `GOOGLE_PROJECT_ID` is correct
- Check service account key file exists at `GOOGLE_APPLICATION_CREDENTIALS` path
- Ensure service account has logging permissions

### Debug Mode

Enable detailed logging for troubleshooting:

```bash
DEBUG=* npm run dev
```

Or set specific debug namespaces:

```bash
DEBUG=app:* npm run dev
```