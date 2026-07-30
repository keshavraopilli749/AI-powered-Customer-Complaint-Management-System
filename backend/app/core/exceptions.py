class AppError(Exception):
    """Base exception class for application errors."""
    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code
        super().__init__(self.message)

class NotFoundError(AppError):
    def __init__(self, message: str = "Resource not found"):
        super().__init__(message, status_code=404)

class ValidationError(AppError):
    def __init__(self, message: str = "Validation failed"):
        super().__init__(message, status_code=422)

class UnauthorizedError(AppError):
    def __init__(self, message: str = "Unauthorized"):
        super().__init__(message, status_code=401)
