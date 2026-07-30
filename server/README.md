# Backend Architecture: AI-powered QMS

This backend is built using FastAPI and follows a modular Clean Architecture approach. It is designed to scale for enterprise pharmaceutical workloads, integrating standard APIs alongside advanced AI document processing pipelines (LangGraph/Groq).

## Directory Structure

```text
backend/
├── app/
│   ├── api/          # API routing (v1). Contains health checks, complaints, AI routes.
│   ├── core/         # Application configuration, exceptions, and centralized logging.
│   ├── db/           # Database connection, sessions, and SQLAlchemy declarative base.
│   ├── middleware/   # Cross-cutting concerns: CORS, global error handling, request logging.
│   ├── models/       # SQLAlchemy ORM models (database tables).
│   ├── schemas/      # Pydantic models for request validation and response serialization.
│   ├── repositories/ # Data access layer (CRUD operations on DB models).
│   ├── services/     # Business logic layer (orchestrates repositories and AI tools).
│   ├── ai/           # AI specific logic (LangGraph workflows, Prompts, Groq integrations).
│   └── utils/        # Helper functions, constants, date formatters.
├── tests/            # Pytest suite (unit, integration, e2e).
├── main.py           # Application factory and entry point.
├── requirements.txt  # Python dependencies.
└── .env.example      # Environment variable template.
```

## Architectural Patterns

1.  **Clean Architecture / Domain-Driven Design (DDD)**: 
    *   **Routes (`api/`)** handle HTTP requests and responses. They do *not* contain business logic.
    *   **Services (`services/`)** contain the core business rules and orchestrate multiple repositories or external APIs (like Groq).
    *   **Repositories (`repositories/`)** are the only layer that interacts with the database via SQLAlchemy, abstracting SQL away from the services.
2.  **Dependency Injection**: FastAPI's `Depends` is used to inject database sessions and configuration settings into routes and services, ensuring high testability.
3.  **Centralized Error Handling**: Custom exceptions (`AppError`, `NotFoundError`) are defined in `core/exceptions.py` and caught globally by `middleware/error_handler.py` to ensure consistent JSON error responses across all endpoints.

## Setup & Running

1. Create a virtual environment: `python -m venv venv`
2. Activate the environment: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac/Linux)
3. Install dependencies: `pip install -r requirements.txt`
4. Copy `.env.example` to `.env` and fill in the values.
5. Run the server: `uvicorn main:app --reload`

The API will be available at `http://localhost:8000`.
Swagger Documentation is available at `http://localhost:8000/api/v1/docs`.
