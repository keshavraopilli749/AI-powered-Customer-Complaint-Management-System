# System Architecture

The AI-powered Customer Complaint Management System follows a modern decoupled architecture.

## 1. client Layer (React + Redux)
- Built with React 19 and Vite for lightning-fast HMR.
- Uses Redux Toolkit for global state (Auth, AI Processing).
- Communicates exclusively via REST API using Axios.

## 2. API Layer (FastAPI)
- Handles all business logic, routing, and database transactions.
- Uses Dependency Injection for database sessions and current user verification.
- Protected by JWT Authentication using `passlib` (bcrypt).

## 3. Database Layer (PostgreSQL)
- Enterprise-grade relational database.
- Interacted with via SQLAlchemy 2.0 ORM.
- Schema migrations managed by Alembic.

## 4. AI Copilot Layer (LangGraph + Groq)
- Uses LangGraph to orchestrate a multi-step document processing pipeline.
- Uses Groq for near-instant inference.
- Validates LLM outputs against strict Pydantic schemas using `with_structured_output`.

## 5. Deployment Layer (Docker)
- Fully containerized using Docker Compose.
- server runs on `uvicorn`.
- client is compiled to static files and served by `nginx`.
