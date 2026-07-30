# Deployment Guide

This guide explains how to deploy the application using Docker Compose.

## Prerequisites
- Docker Engine
- Docker Compose
- Groq API Key

## Setup
1. Clone the repository.
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Update `.env` with your secure `SECRET_KEY` and `GROQ_API_KEY`.

## Running the Application
To start the entire stack in the background:
```bash
./scripts/start.sh
# or manually: docker compose up -d --build
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000

## Stopping the Application
To shut down the containers:
```bash
./scripts/stop.sh
# or manually: docker compose down
```

## Database Backup
To create a snapshot of the PostgreSQL database:
```bash
./scripts/backup.sh
```
