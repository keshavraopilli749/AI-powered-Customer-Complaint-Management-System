from sqlalchemy import Column, String, Text, Date, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from .base import Base, UUIDMixin, TimestampMixin, SoftDeleteMixin

class Complaint(Base, UUIDMixin, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "complaints"

    complaint_number = Column(String(50), unique=True, index=True, nullable=False)
    customer_id = Column(UUID(as_uuid=True), ForeignKey("customers.id", ondelete="SET NULL"), nullable=True, index=True)
    
    # Product Information
    product_name = Column(String(255), nullable=False)
    generic_name = Column(String(255))
    strength = Column(String(100))
    batch_number = Column(String(100), index=True)
    manufacturing_date = Column(Date)
    expiry_date = Column(Date)
    
    # Complaint Details
    complaint_category = Column(String(100))
    complaint_type = Column(String(100))
    complaint_description = Column(Text, nullable=False)
    observed_issue = Column(Text)
    
    # Status and Triage
    severity = Column(String(50), default="Minor")
    priority = Column(String(50), default="Medium")
    status = Column(String(50), default="New", index=True)
    
    # Placeholders for RBAC future integration
    assigned_to_id = Column(UUID(as_uuid=True), nullable=True)
    created_by_id = Column(UUID(as_uuid=True), nullable=True)
    updated_by_id = Column(UUID(as_uuid=True), nullable=True)

    # Relationships
    customer = relationship("Customer", back_populates="complaints")
    attachments = relationship("ComplaintAttachment", back_populates="complaint", cascade="all, delete-orphan")
    ai_response = relationship("AIResponse", back_populates="complaint", uselist=False, cascade="all, delete-orphan")
    investigation = relationship("Investigation", back_populates="complaint", uselist=False, cascade="all, delete-orphan")
    risk_assessment = relationship("RiskAssessment", back_populates="complaint", uselist=False, cascade="all, delete-orphan")
