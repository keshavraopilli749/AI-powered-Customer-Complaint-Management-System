from sqlalchemy import Column, String, Text
from sqlalchemy.orm import relationship
from .base import Base, UUIDMixin, TimestampMixin

class Customer(Base, UUIDMixin, TimestampMixin):
    __tablename__ = "customers"

    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(255), index=True)
    phone = Column(String(50))
    company = Column(String(255))
    address = Column(Text)

    # Relationships
    complaints = relationship("Complaint", back_populates="customer", cascade="all, delete-orphan")
