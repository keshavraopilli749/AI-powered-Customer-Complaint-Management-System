from fastapi import APIRouter
from app.api.v1.routes import health, complaints, upload, ai, auth

api_router = APIRouter()

# Include all versioned routes
api_router.include_router(health.router, tags=["Health"])
api_router.include_router(complaints.router, prefix="/complaints", tags=["Complaints"])
api_router.include_router(upload.router, prefix="/upload", tags=["Upload"])
api_router.include_router(ai.router, prefix="/ai", tags=["AI Copilot"])
api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
