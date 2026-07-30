# Optimization Notes

If this project were scaled to handle 10,000+ daily complaints, the following optimizations should be implemented:

## Frontend Optimizations
1. **Pagination & Virtualization**: The Complaints table currently fetches all records. Implement offset/limit pagination on the backend and use `react-window` on the frontend.
2. **React Query**: Replace the custom `axios` `useEffect` fetching logic with `@tanstack/react-query` to handle caching, stale-time, and background refetching.

## Backend Optimizations
1. **Redis Caching**: Cache common endpoints (like Dashboard Analytics) using Redis to prevent repetitive SQL aggregations on the `complaints` table.
2. **Celery / Background Tasks**: The LangGraph AI pipeline currently runs synchronously within the FastAPI request cycle. For large PDF documents, this should be offloaded to a Celery worker, with the frontend polling for status updates via WebSockets.

## AI Pipeline Optimizations
1. **Vector Database / RAG**: Implement a Vector DB (like Pinecone) to perform Retrieval-Augmented Generation. The AI could query past resolved complaints to suggest more accurate CAPA responses.
2. **Multi-Model Orchestration**: Route simple extractions to a fast model (e.g., Llama 3 8B on Groq) and complex risk-assessments to a heavyweight model (e.g., GPT-4o or Claude 3.5 Sonnet).
