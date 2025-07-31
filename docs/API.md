# REST API Reference

> **Base URL**: `http://localhost:3000` (development)

## Authentication

All API endpoints (except `/health`) require authentication. The authentication method varies by environment:

- **Production**: JWT tokens via Authentic service
- **Test**: Mock authentication with stubbed user data

Include the authentication header in all requests:
```
Authorization: Bearer <token>
```

## Response Format

All responses return JSON with consistent error formatting:

**Success Response**:
```json
{
  "data": { ... },
  "status": "success"
}
```

**Error Response**:
```json
{
  "error": "Error message",
  "status": 400
}
```

---

## Health Check

### GET /health

Check application and database connectivity.

**Response 200** (Healthy):
```json
{
  "status": "ok",
  "timestamp": "2023-08-01T12:00:00.000Z",
  "uptime": 123.45,
  "database": "connected"
}
```

**Response 503** (Unhealthy):
```json
{
  "status": "error", 
  "error": "Database connection failed"
}
```

---

## Widget API

Complete CRUD operations for widget resources.

### Widget Schema

```json
{
  "_id": "string (cuid)",
  "name": "string (required)",
  "quantity": "number (required, min: 0)",
  "metadata": "object (key-value pairs)",
  "variations": [
    {
      "name": "string",
      "price": "number", 
      "color": "string"
    }
  ],
  "dateCreated": "ISO 8601 datetime",
  "dateUpdated": "ISO 8601 datetime"
}
```

### GET /widgets

List all widgets.

**Request**:
```http
GET /widgets
Authorization: Bearer <token>
```

**Response 200**:
```json
[
  {
    "_id": "ck7q8j2p40000qzrmn3k8jq2g",
    "name": "Standard Widget",
    "quantity": 10,
    "metadata": {
      "category": "tools"
    },
    "variations": [],
    "dateCreated": "2023-08-01T12:00:00.000Z",
    "dateUpdated": "2023-08-01T12:00:00.000Z"
  }
]
```

### POST /widgets

Create a new widget.

**Request**:
```http
POST /widgets
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Premium Widget",
  "quantity": 5,
  "metadata": {
    "category": "premium",
    "warranty": "2 years"
  },
  "variations": [
    {
      "name": "Red Premium",
      "price": 29.99,
      "color": "red"
    }
  ]
}
```

**Response 201**:
```json
{
  "_id": "ck7q8j2p40001qzrmn3k8jq2h",
  "name": "Premium Widget",
  "quantity": 5,
  "metadata": {
    "category": "premium",
    "warranty": "2 years"
  },
  "variations": [
    {
      "name": "Red Premium", 
      "price": 29.99,
      "color": "red"
    }
  ],
  "dateCreated": "2023-08-01T12:05:00.000Z",
  "dateUpdated": "2023-08-01T12:05:00.000Z"
}
```

**Response 400** (Validation Error):
```json
{
  "error": "Widget validation failed: name: Path `name` is required."
}
```

### GET /widgets/:id

Get a specific widget by ID.

**Request**:
```http
GET /widgets/ck7q8j2p40000qzrmn3k8jq2g
Authorization: Bearer <token>
```

**Response 200**:
```json
{
  "_id": "ck7q8j2p40000qzrmn3k8jq2g",
  "name": "Standard Widget",
  "quantity": 10,
  "metadata": {
    "category": "tools"
  },
  "variations": [],
  "dateCreated": "2023-08-01T12:00:00.000Z",
  "dateUpdated": "2023-08-01T12:00:00.000Z"
}
```

**Response 404** (Not Found):
```json
{
  "error": "Widget not found"
}
```

### PUT /widgets/:id

Update an existing widget (full replacement).

**Request**:
```http
PUT /widgets/ck7q8j2p40000qzrmn3k8jq2g
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Widget",
  "quantity": 15,
  "metadata": {
    "category": "updated"
  },
  "variations": []
}
```

**Response 200**:
```json
{
  "_id": "ck7q8j2p40000qzrmn3k8jq2g",
  "name": "Updated Widget",
  "quantity": 15,
  "metadata": {
    "category": "updated"
  },
  "variations": [],
  "dateCreated": "2023-08-01T12:00:00.000Z",
  "dateUpdated": "2023-08-01T12:10:00.000Z"
}
```

### DELETE /widgets/:id

Delete a widget.

**Request**:
```http
DELETE /widgets/ck7q8j2p40000qzrmn3k8jq2g
Authorization: Bearer <token>
```

**Response 204** (No Content)

**Response 404** (Not Found):
```json
{
  "error": "Widget not found"
}
```

---

## Authentication Testing API

Routes for testing authentication functionality.

### GET /auth/authTest

Test authentication middleware.

**Request**:
```http
GET /auth/authTest
Authorization: Bearer <token>
```

**Response 200**:
```json
{
  "message": "Auth successful",
  "user": {
    "id": "user123",
    "email": "test@example.com"
  }
}
```

### GET /auth/errorTest

Test error handling (throws intentional error).

**Request**:
```http
GET /auth/errorTest  
Authorization: Bearer <token>
```

**Response 500**:
```json
{
  "error": "Test error"
}
```

---

## OpenAPI Documentation

The API includes embedded OpenAPI (Swagger) documentation in the route files. Key annotations:

- **@openapi** comments document each endpoint
- **Request/response schemas** defined inline
- **Security requirements** specified per route
- **Tags** group related endpoints

Example annotation:
```javascript
/**
 * @openapi
 * /widgets:
 *   get:
 *     summary: List all widgets
 *     tags: [Widgets]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of widgets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Widget'
 */
```