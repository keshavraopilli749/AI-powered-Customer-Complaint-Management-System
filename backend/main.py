import uvicorn
from fastapi import FastAPI
from app.core.config import settings
from app.api.v1.api import api_router
from app.middleware.cors import setup_cors
from app.middleware.error_handler import setup_error_handlers
from app.core.logging import logger

def create_app() -> FastAPI:
    """
    Application factory to create and configure the FastAPI application.
    Follows enterprise pattern for testability and clean architecture.
    """
    app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        openapi_url=f"{settings.API_V1_STR}/openapi.json",
        docs_url=f"{settings.API_V1_STR}/docs",
        redoc_url=f"{settings.API_V1_STR}/redoc",
    )

    # Apply Middlewares
    setup_cors(app)
    setup_error_handlers(app)

    # Include Routers
    app.include_router(api_router, prefix=settings.API_V1_STR)

    @app.on_event("startup")
    async def startup_event():
        logger.info(f"Starting {settings.PROJECT_NAME} (v{settings.VERSION})")

    @app.on_event("shutdown")
    async def shutdown_event():
        logger.info(f"Shutting down {settings.PROJECT_NAME}")

    return app

app = create_app()

if __name__ == "__main__":
    # Standard entry point for development
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
