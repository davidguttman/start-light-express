# Start Light Express 🌟

A lightweight, illuminating Express.js starter template that guides you toward production-ready Node.js applications.

## Features ✨

### Backend
- **Express Server**: Fast and minimalist web framework
- **MongoDB Integration**: With Mongoose ORM and in-memory testing
- **Authentication**: Built-in auth middleware with test environment support
- **Testing**: Comprehensive test setup with tape and supertest
- **Error Handling**: Automatic error catching and formatting
- **Health Checks**: Built-in monitoring endpoint
- **Environment Config**: Easy configuration with dotenv
- **API Example**: Complete CRUD endpoints (Widgets API)

### Frontend
- **Single-Page Application**: Client-side routing with hash-based URLs
- **Authentication**: Google OAuth via authentic-ui
- **Mobile Support**: Responsive design
- **Protected Routes**: Login required for certain pages
- **API Client**: Handles authentication tokens

## Quick Start 🚀

1. Clone and install:
```bash
git clone https://github.com/davidguttman/start-light-express.git
cd start-light-express
npm install
```

2. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

3. Configure your environment variables:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/
MONGO_DB_NAME=example
GOOGLE_PROJECT_ID=your-project-id
GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials.json
AUTHENTIC_SERVER=your-authentic-server
WHITELIST=email1@example.com,email2@example.com
```

4. Start developing:
```bash
npm run dev
```

## Development 💻

The development server starts both backend and frontend:
```bash
npm run dev
```

- Server files restart automatically via nodemon
- Client files are bundled and served by budo
- API routes (`/api/*`) served by Express
- Everything else proxied to budo development server

## Testing 🧪

Run the test suite:
```bash
npm test
```

Features:
- Tape for lightweight testing
- Supertest for HTTP assertions
- In-memory MongoDB for database tests
- Predictable test authentication

## Production 🌎

1. Set your production environment variables
2. Start the server:
```bash
npm start
```

## Frontend

The project includes a single-page application with:

- **Routing**: Hash-based client-side routing with `http-hash`
- **Authentication**: Google OAuth integration using `authentic-ui`
- **Bundling**: Development server with `budo`
- **API Client**: Handles Bearer tokens and error responses

### Client Structure
```
client/
├── index.js          # Main app and routing
├── auth.js           # Authentication and Google OAuth
├── api.js            # API client with token handling
├── widgets.js        # Main app interface
├── settings.js       # Settings page
├── welcome.js        # Landing page
├── route-guard.js    # Route protection
├── state.js          # State management
└── style/
    └── index.js      # CSS styling
```

## Project Structure 📁

```
.
├── api/              # API routes
├── client/           # Frontend SPA source code
│   ├── index.js      # Main app entry and routing
│   ├── auth.js       # Authentication & Google OAuth
│   ├── api.js        # API client with token handling
│   ├── widgets.js    # Main app interface
│   ├── settings.js   # Settings page
│   └── style/        # CSS styling
├── config/           # Configuration
├── dist/             # Built client assets
├── lib/             # Shared libraries
├── middleware/      # Express middleware
├── models/          # Mongoose models
├── test/            # Test files
├── .env.example     # Example environment variables
├── package.json     # Project configuration
└── server.js        # Application entry point
```

## API Endpoints 🛣️

### Backend API
- `GET /health` - Health check
- `GET /api/widgets` - List widgets (requires auth)
- `POST /api/widgets` - Create widget (requires auth)
- `GET /api/widgets/:id` - Get widget (requires auth)
- `PUT /api/widgets/:id` - Update widget (requires auth)
- `DELETE /api/widgets/:id` - Delete widget (requires auth)

### Frontend Routes
- `/#/` - Welcome page
- `/#/login` - Sign in with Google OAuth
- `/#/signup` - Account creation
- `/#/widgets` - Main app (requires auth)
- `/#/settings` - Settings page (requires auth)

## Code Style 📝

This project follows standard.js style:
- No semicolons
- 2 spaces
- Single quotes
- No var
- Arrow functions
- Object shorthand
- No classes

## Contributing 🤝

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License 📄

MIT © [David Guttman](http://davidguttman.com/) 