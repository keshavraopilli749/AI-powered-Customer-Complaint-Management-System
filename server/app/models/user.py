import uuid
from sqlalchemy import Column, String, Boolean
from sqlalchemy.dialects.postgresql import UUID
from app.models.base import Base

class User(Base):
    """
    SQLAlchemy model for application users.
    Contains RBAC role string for simplicity.
    """
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=True)
    
    # Simple RBAC: Store the role directly (e.g., 'ADMIN', 'QA_MANAGER', 'INVESTIGATOR')
    role = Column(String(50), nullable=False, default="VIEWER")
    
    is_active = Column(Boolean, default=True)
