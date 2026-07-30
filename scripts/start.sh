#!/bin/bash
# start.sh - Utility to start the Docker environment

echo "Starting AI Customer Complaint Management System..."

# Ensure .env exists
if [ ! -f .env ]; then
    echo "Warning: .env file not found! Copying .env.example to .env..."
    cp .env.example .env
fi

# Bring up the containers
docker compose up -d --build

echo "System is starting."
echo "Frontend available at: http://localhost:3000"
echo "Backend API available at: http://localhost:8000"
echo "API Docs available at: http://localhost:8000/docs"
