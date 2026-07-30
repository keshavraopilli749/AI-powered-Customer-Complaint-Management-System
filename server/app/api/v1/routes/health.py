from fastapi import APIRouter
from pydantic import BaseModel
import datetime

router = APIRouter()

class HealthResponse(BaseModel):
    status: str
    version: str
    environment: str
    timestamp: str

@router.get("/health", response_model=HealthResponse)
async def health_check():
    """
    Health check endpoint to verify API is running.
    """
    return HealthResponse(
        status="ok",
        version="1.0.0",
        environment="development",
        timestamp=datetime.datetime.now(datetime.UTC).isoformat()
    )
