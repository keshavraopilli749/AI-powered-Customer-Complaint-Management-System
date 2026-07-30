from pydantic import BaseModel
from typing import Generic, TypeVar, Optional, Any, List

T = TypeVar('T')

class SuccessResponse(BaseModel, Generic[T]):
    """Standard success response wrapper."""
    status: str = "success"
    data: T
    message: Optional[str] = None
    meta: Optional[Dict[str, Any]] = None

class ErrorResponse(BaseModel):
    """Standard error response wrapper."""
    status: str = "error"
    error: str
    details: Optional[Any] = None

class PaginatedResponse(BaseModel, Generic[T]):
    """Standard paginated list response."""
    items: List[T]
    total: int
    page: int
    size: int
    pages: int
