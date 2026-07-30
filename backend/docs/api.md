# API Documentation

The backend exposes a fully typed REST API with automatic Swagger UI documentation.

## Accessing Swagger UI
When running locally, visit: `http://localhost:8000/docs`

## Key Endpoints

### 1. Authentication
*   `POST /api/v1/auth/login`
    *   Accepts `username` and `password` as form data.
    *   Returns a JWT access token.
*   `POST /api/v1/auth/setup-admin`
    *   Creates the initial admin user.

### 2. Complaints
*   `GET /api/v1/complaints/`
    *   Returns paginated complaints.
*   `POST /api/v1/complaints/`
    *   Creates a new complaint (requires Auth).
*   `GET /api/v1/complaints/{id}`
    *   Retrieves a specific complaint.

### 3. AI Copilot
*   `POST /api/v1/ai/process`
    *   Accepts a document (PDF, image, text).
    *   Triggers the LangGraph pipeline.
    *   Returns structured extraction data and risk assessment.
