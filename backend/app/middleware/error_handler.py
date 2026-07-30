from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from app.core.exceptions import AppError
from app.core.logging import logger

def setup_error_handlers(app: FastAPI) -> None:
    """Register custom exception handlers for the FastAPI application."""
    
    @app.exception_handler(AppError)
    async def app_error_handler(request: Request, exc: AppError):
        logger.warning(f"AppError: {exc.message} - Path: {request.url.path}")
        return JSONResponse(
            status_code=exc.status_code,
            content={"error": exc.message, "status": exc.status_code},
        )

    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception):
        logger.error(f"Unhandled Exception: {str(exc)} - Path: {request.url.path}", exc_info=True)
        return JSONResponse(
            status_code=500,
            content={"error": "An unexpected error occurred. Please try again later.", "status": 500},
        )
