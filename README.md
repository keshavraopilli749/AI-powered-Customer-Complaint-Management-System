# AI-Powered Pharmaceutical Customer Complaint Management System (QMS)

An enterprise-grade, full-stack application designed to automate the intake, extraction, and risk assessment of pharmaceutical customer complaints using Artificial Intelligence.

## 🚀 Features
*   **AI Document Processing**: Upload PDFs, Images, or Emails. LangGraph and Groq instantly extract structured data (Product, Batch, Description).
*   **Automated Risk Assessment**: The AI analyzes the complaint text to determine Patient and Regulatory Risk levels (High, Medium, Low) and suggests CAPA (Corrective and Preventive Actions).
*   **Enterprise Dashboard**: A beautiful, responsive dashboard built in React to track complaint volumes, statuses, and trends.
*   **Robust Security**: JWT Authentication and Role-Based Access Control (RBAC).
*   **Fully Dockerized**: Spin up the Frontend, Backend, and PostgreSQL database with a single command.

## 🛠️ Technology Stack
*   **Frontend**: React 19, Vite, Redux Toolkit, React Router, CSS Modules.
*   **Backend**: FastAPI, SQLAlchemy, Pydantic, Pytest.
*   **AI Engine**: LangGraph, LangChain, Groq API.
*   **Database**: PostgreSQL 15.
*   **DevOps**: Docker, Docker Compose, GitHub Actions.

## 🏃 Quick Start (Docker)

1.  **Clone the repository**
2.  **Configure Environment Variables**:
    ```bash
    cp .env.example .env
    # Edit .env and insert your GROQ_API_KEY
    ```
3.  **Run the application**:
    ```bash
    cd backend
    ./scripts/start.sh
    # OR manually: docker compose up -d --build
    ```

The application will be available at `http://localhost:3000`.
API Documentation (Swagger UI) is available at `http://localhost:8000/docs`.

## 📚 Documentation
Detailed documentation is available in the `backend/docs/` directory:
*   [System Architecture](backend/docs/architecture.md)
*   [AI Workflow (LangGraph)](backend/docs/ai-workflow.md)
*   [API Documentation](backend/docs/api.md)
*   [Deployment Guide](backend/docs/deployment.md)
*   [AIVOA Interview Preparation Guide](backend/docs/interview-guide.md)
