from pydantic import BaseModel, EmailStr
from uuid import UUID

class Token(BaseModel):
    """Schema for returning the JWT to the client."""
    access_token: str
    token_type: str = "bearer"

class UserBase(BaseModel):
    email: EmailStr
    full_name: str | None = None

class UserCreate(UserBase):
    """Schema for creating a new user (requires plain password)."""
    password: str

class UserResponse(UserBase):
    """Schema for returning user data securely (omits password)."""
    id: UUID
    role: str
    is_active: bool

    class Config:
        from_attributes = True
