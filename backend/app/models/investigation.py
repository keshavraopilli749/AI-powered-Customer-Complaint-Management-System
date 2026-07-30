from sqlalchemy import Column, String, Text, Date, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from .base import Base, UUIDMixin, TimestampMixin

class Investigation(Base, UUIDMixin, TimestampMixin):
    __tablename__ = "investigations"

    complaint_id = Column(UUID(as_uuid=True), ForeignKey("complaints.id", ondelete="CASCADE"), nullable=False, unique=True)
    
    # Placeholder for Investigator (User table)
    investigator_id = Column(UUID(as_uuid=True), nullable=True)
    department = Column(String(100))
    status = Column(String(50), default="Pending")
    
    findings = Column(Text)
    corrective_action = Column(Text)
    preventive_action = Column(Text)
    completion_date = Column(Date)

    # Relationships
    complaint = relationship("Complaint", back_populates="investigation")
