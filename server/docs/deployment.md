# Deployment Guide

This guide explains how to run the AI-powered Customer Complaint Management System natively on your local machine.

## Prerequisites
- Node.js (v20+)
- Python (3.12+)
- PostgreSQL (Installed and running locally)
- Groq API Key

## Setup & Execution

### 1. Database Setup
Ensure PostgreSQL is running on your machine.
Create a database for the project (e.g., `qms_db`).

### 2. server API
1. Open a terminal in the `server/` folder.
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
5. Edit `.env` to include your `DATABASE_URL` (pointing to your local Postgres) and `GROQ_API_KEY`.
6. Start the server:
   ```bash
   uvicorn app.main:app --reload
   ```
   The server will be live at `http://localhost:8000`.

### 3. client React App
1. Open a new terminal in the `client/` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The client will be live at `http://localhost:3000`.

## Future Enhancements
*   **Docker Containerization**: Wrapping the application in a `docker-compose.yml` for unified, OS-agnostic deployment.
*   **Cloud Deployment**: Hosting the client on Vercel/Netlify and the server on Render/Railway.
