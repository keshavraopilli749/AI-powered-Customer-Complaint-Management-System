from typing import Generator
import logging
from sqlalchemy.orm import Session
from .database import SessionLocal

logger = logging.getLogger("qms_api")

def get_db() -> Generator[Session, None, None]:
    """
    FastAPI dependency to inject the database session.
    Yields a SQLAlchemy session and closes it after the request.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
