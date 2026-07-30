from sqlalchemy import Column, String, Integer, Numeric, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from .base import Base, UUIDMixin, TimestampMixin

class RiskAssessment(Base, UUIDMixin, TimestampMixin):
    __tablename__ = "risk_assessments"

    complaint_id = Column(UUID(as_uuid=True), ForeignKey("complaints.id", ondelete="CASCADE"), nullable=False, unique=True)
    
    patient_risk = Column(String(50))
    business_risk = Column(String(50))
    regulatory_risk = Column(String(50))
    overall_risk = Column(String(50))
    
    risk_score = Column(Integer)
    ai_confidence = Column(Numeric(5, 2))

    # Relationships
    complaint = relationship("Complaint", back_populates="risk_assessment")
