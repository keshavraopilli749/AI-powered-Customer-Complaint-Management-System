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

## 🏃 Quick Start (Local Development)

The application runs natively on your local machine without containerization. Docker support is planned as a future enhancement.

### Prerequisites
*   Node.js (v20+)
*   Python (3.12+)
*   PostgreSQL running locally

### 1. Start the Backend
```bash
cd backend
python -m venv venv
# Activate the virtual environment (Windows):
.\venv\Scripts\activate
# (Mac/Linux): source venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
# Important: Open .env and add your GROQ_API_KEY and DATABASE_URL

uvicorn app.main:app --reload
```
API Documentation (Swagger UI) will be available at `http://localhost:8000/docs`.

### 2. Start the Frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The application UI will be available at `http://localhost:3000`.

## 📚 Documentation
Detailed documentation is available in the `backend/docs/` directory:
*   [System Architecture](backend/docs/architecture.md)
*   [AI Workflow (LangGraph)](backend/docs/ai-workflow.md)
*   [API Documentation](backend/docs/api.md)
*   [Deployment Guide](backend/docs/deployment.md)
*   [AIVOA Interview Preparation Guide](backend/docs/interview-guide.md)
