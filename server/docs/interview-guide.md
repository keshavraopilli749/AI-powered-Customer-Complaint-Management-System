# AIVOA Interview Preparation Guide

This document contains expected questions and scripted answers to help you ace your technical interview.

## 1. Project Architecture & Decisions

**Q: Why did you choose FastAPI for the server?**
*Answer:* I chose FastAPI because it is incredibly fast (built on Starlette and Pydantic) and natively supports asynchronous programming (`async/await`), which is crucial when making blocking network calls to external LLMs like Groq. Furthermore, it automatically generates OpenAPI (Swagger) documentation, saving development time and making client integration seamless.

**Q: Why React with Redux Toolkit for the client?**
*Answer:* React provides a component-driven architecture that is perfect for a complex dashboard. I paired it with Redux Toolkit because managing the state of an asynchronous AI pipeline (Uploading -> Extracting -> Validating -> Risk Assessment) across multiple components can get messy with just Context API. Redux Toolkit provides clean, predictable state management.

**Q: Explain your database design.**
*Answer:* I designed a normalized PostgreSQL database using SQLAlchemy. The core entity is the `Complaint`. We isolated the AI metadata into its own model (`AIResponse`) linked by a foreign key. This ensures the core complaint data remains clean for regulatory reporting, while the AI metadata can evolve independently.

## 2. AI & LangGraph Integration

**Q: Why did you use LangGraph instead of a simple LangChain pipeline?**
*Answer:* A standard LLM chain is strictly linear. In an enterprise system, if an AI extraction fails (e.g., missing a required Batch Number), a linear chain breaks. LangGraph models the AI workflow as a State Machine (a directed graph). This allowed me to create a "Validate Node" that can loop back to the "Extract Node" if data is missing, making the system highly resilient to hallucinations.

**Q: How do you guarantee the LLM returns the correct data format?**
*Answer:* I utilized Pydantic schemas in conjunction with the `with_structured_output` method in LangChain. This forces the Groq LLM to bind to a specific JSON schema using function calling, eliminating the need to parse raw text and virtually eliminating formatting errors.

**Q: Why Groq?**
*Answer:* Groq's LPU (Language Processing Unit) architecture provides near-instant inference speeds. In a UI where a user is waiting for a document to process, speed is UX. Groq allowed me to run a multi-step LangGraph pipeline in the time it takes a normal API to run a single prompt.

## 3. DevOps & Security

**Q: How is the application secured?**
*Answer:* It uses JWT (JSON Web Tokens) for stateless authentication. Passwords are mathematically hashed using `bcrypt` via `passlib`. The FastAPI server uses dependency injection (`Depends(get_current_user)`) to reject any request lacking a valid token. On the client, React Router is wrapped in a `ProtectedRoute` component that forces unauthenticated users to the login screen.

**Q: How would you deploy this to production?**
*Answer:* The entire stack is containerized using Docker and orchestrated via Docker Compose. The client is built into static assets and served by Nginx, while the server runs on Uvicorn. The `docker-compose.yml` links them to a PostgreSQL container. In a real enterprise, I would deploy these containers to a managed service like AWS ECS or Kubernetes, using GitHub Actions for the CI/CD pipeline.
