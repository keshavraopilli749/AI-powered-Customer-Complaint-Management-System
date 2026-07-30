import logging
import sys

def setup_logging():
    """
    Configure standard Python logging for the application.
    In a production system, this might be replaced with Loguru or JSON structured logging.
    """
    logging.basicConfig(
        stream=sys.stdout,
        level=logging.INFO,
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    )
    
    # Reduce noise from standard libraries
    logging.getLogger("uvicorn.access").setLevel(logging.WARNING)
    
    logger = logging.getLogger("qms_api")
    return logger

logger = setup_logging()
